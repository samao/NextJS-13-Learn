/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 11:14:24
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-09-14 15:26:56
 */
const axios = require("axios");
const headers = require("./headers");
const name = "gmyyu";

module.exports = async (mobile) => {
    return await axios(`http://www.gmyyun.com/api/message/sms/sendCaptcha`, {
        method: "POST",
        data: {
            mobile,
            tplCode: 'MOBILE_LOGIN',
        },
        headers: {
            ...headers,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Origin: "http://www.gmyyun.com",
            Referer: "http://www.gmyyun.com/login-sms.html",
        },
    })
        .then((res) => {
            if (res.status === 200) {
                return { mobile, code: res.status, name, data: res.data };
            } else {
                return { mobile, code: 500, name, msg: "发送失败" };
            }
        })
        .catch(() => ({ mobile, code: 500, name, msg: "服务器异常" }));
};

// module.exports(13681249122).then(console.log).catch(console.warn)
