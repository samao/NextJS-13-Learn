(function () {
    const answer = document.querySelector('.answer');
    const video = document.querySelector('video');
    const audio = document.querySelector('audio');
    const img = document.querySelector('img');

    // document.querySelector(".live-wraper").addEventListener("click", () => {
    //     document.querySelector("main").requestFullscreen();
    // });

    img.onclick = () => {
        audio.play();
        document.querySelector('main').requestFullscreen();
        img.onclick = null;
    };

    video.onloadedmetadata = () => {
        video.play().catch(console.warn);
        video.onloadedmetadata = null;
    }

    answer.addEventListener('click', () => {
        answer.remove();
        audio.pause();
        document.querySelector('img').remove();
        startlive(() => {
            // video.play().catch(console.log);

            var videoSrc = 'stream/play.m3u8';
            if (Hls.isSupported()) {
                var hls = new Hls();
                hls.loadSource(videoSrc);
                hls.attachMedia(video);
            }
            // HLS.js is not supported on platforms that do not have Media Source
            // Extensions (MSE) enabled.
            //
            // When the browser has built-in HLS support (check using `canPlayType`),
            // we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video
            // element through the `src` property. This is using the built-in support
            // of the plain video element, without using HLS.js.
            else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = videoSrc;
            }
        });
    });

    function startlive(fn) {
        if (!navigator.mediaDevices) {
            console.warn('启动摄像头失败')
            fn();
            return
        }
        navigator.mediaDevices
            .getUserMedia({ video: { facingMode: 'user' } })
            .then(stream => {
                const streaming = document.querySelector('.streaming');
                if ('srcObject' in streaming) {
                    streaming.srcObject = stream;
                } else {
                    video.src = window.URL.createObjectURL(stream);
                }
                streaming.onloadedmetadata = () => {
                    streaming.play();
                    fn();
                };

                video.ontimeupdate = e => {
                    console.log(video.currentTime);
                    if (video.currentTime > 9) {
                        video.ontimeupdate = null;
                        document.querySelector('.live-wraper').remove();
                        //.classList.add('hide');

                        stream.getTracks().forEach(track => {
                            track.stop();
                        });
                    } else if (video.currentTime > 3) {
                        document.querySelector('.live-wraper').classList.remove('hide');
                    }
                };
            })
            .catch(() => {
                console.warn('启动摄像头失败')
                fn();
            });
    }
})();
