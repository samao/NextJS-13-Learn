/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 14:53:19
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-08-18 16:07:15
 */
const axios = require("axios");
const headers = require("./headers");
const name = "xwhdw";

module.exports = async (mobile) =>
    axios("http://jspx.xwhdw.com/prod-api/bllSendCode", {
        method: "POST",
        headers: {
            ...headers,
            Origin: "http://jspx.xwhdw.com",
            Referer: "http://jspx.xwhdw.com",
        },
        data: {
            bllName: "appLogin",
            phone: mobile,
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
