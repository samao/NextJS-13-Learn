/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 14:53:19
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-09-08 15:34:41
 */
const axios = require("axios");
const headers = require("./headers");
const name = "ftlib";

module.exports = async (mobile) => {
    return await axios("https://www.ftlib.cn:8323/mb/reader/loginSmsCode", {
        method: "POST",
        headers: {
            ...headers,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            Origin: "https://www.ftlib.cn:8323",
            Referer: "https://www.ftlib.cn:8323/mb/reader/login3",
        },
        data: {
            phone: mobile
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