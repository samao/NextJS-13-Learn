/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 14:53:19
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-09-08 17:01:09
 */
const axios = require("axios");
const headers = require("./headers");
const name = "majorbio";

module.exports = async (mobile) => {
    return await axios("https://www.majorbio.com/api/web/login/passport/send-register-code", {
        method: "POST",
        headers: {
            ...headers,
            Origin: "https://www.majorbio.com",
            Referer: "https://www.majorbio.com/web/login/passport/register",
        },
        data: {
            mobile,
            type: 'register'
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
}

// module.exports(18610831322).then(console.log)

