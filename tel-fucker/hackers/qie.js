const axios = require("axios");
const FormData = require("form-data");
const md5 = require("md5");

(function () {
    const host = "https://sms3api.jvtd.cn";
    const data = new FormData();
    data.append("uid", "230436");
    data.append("password", "58563F86F53242AF044112081DA7E368");
    data.append("mobile", "135221489400");
    data.append("encode", "utf8");
    const content = `【企鹅直播】${9527}（手机验证码），10分钟有效，请勿泄漏他人`;
    data.append("content", btoa(encodeURIComponent(content)));
    data.append("encodeType", "base64");
    axios(`${host}/jtdsms/smsSend`, { method: "POST", data: data })
        .then((res) => ({ code: res.status, data: res.data }))
        .then(console.log)
        .catch(() => {
            const info = {
                cust_code: "301201",
                destMobiles: "13522148400",
                content,
                sign: md5(`${content}E6G2G7Y63HEE`),
                sp_code: "",
            };
            console.log("切换");
            axios("https://api.it-china.cn:8860/sendSms", {
                method: "POST",
                headers: { ...require("./headers") },
                data: info,
            })
                .then((res) => res.data)
                .then(console.log)
                .catch(console.warn);
        });
})();
