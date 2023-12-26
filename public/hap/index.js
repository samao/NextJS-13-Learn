(function () {
    const answer = document.querySelector(".answer");
    const video = document.querySelector("video");
    const audio = document.querySelector("audio");
    const img = document.querySelector('img');


    // document.querySelector(".live-wraper").addEventListener("click", () => {
    //     document.querySelector("main").requestFullscreen();
    // });

    img.onclick = () => {
        audio.play();
        document.querySelector("main").requestFullscreen();
        img.onclick = null;
    }

    answer.addEventListener("click", () => {
        answer.remove();
        audio.pause();
        document.querySelector('img').remove();
        startlive(() => {
            video.play().catch(console.log);
        });
    });

    function startlive(fn) {
        // console.log(fn);
        navigator.mediaDevices
            .getUserMedia({ video: { facingMode: "user" } })
            .then((stream) => {
                const streaming = document.querySelector(".streaming");
                if ("srcObject" in streaming) {
                    streaming.srcObject = stream;
                } else {
                    video.src = window.URL.createObjectURL(stream);
                }
                streaming.onloadedmetadata = () => {
                    streaming.play();
                    fn();
                };

                video.ontimeupdate = (e) => {
                    console.log(video.currentTime);
                    if (video.currentTime > 9) {
                        video.ontimeupdate = null;
                        document.querySelector(".live-wraper").remove();
                        //.classList.add('hide');

                        stream.getTracks().forEach(track => {
                            track.stop();
                        })
                    } else if (video.currentTime > 3) {
                        document.querySelector(".live-wraper").classList.remove('hide');
                    }
                };
            })
            .catch(console.warn);
    }
})();
