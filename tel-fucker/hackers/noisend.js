/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 11:08:34
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-08-18 16:06:56
 */
const axios = require("axios");
const headers = require("./headers");
const name = "noisend";

module.exports = async (mobile) => {
    return await axios("https://www.noisend.com/api/Wxapi/send_mobile", {
        method: "POST",
        headers: {
            ...headers,
            authority: "www.noisend.com",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8;",
            Origin: "http://www.noisend.com",
            Referer: "http://www.noisend.com",
            ignoreCodeIntercept: "false",
            ignoreErrorIntercept: "false",
        },
        data: {
            timestamp: (Date.now() / 100) >> 0,
            mobile,
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
