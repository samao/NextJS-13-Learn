/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 11:14:24
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-08-18 16:06:25
 */
const axios = require("axios");
const headers = require("./headers");
const name = "chuangcache";

module.exports = async (mobile) => {
    return await axios
        .get(`https://console.chuangcache.com/_finan/getSmsCode?Telephone=${mobile}&Type=2&_=${Date.now()}`, {
            headers: {
                ...headers,
                Accept: "application/json, text/plain, */*",
                Origin: "https://console.chuangcache.com",
                Pragma: "no-cache",
                Referer: "https://console.chuangcache.com",
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
