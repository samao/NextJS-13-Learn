/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 14:53:19
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-08-18 16:06:39
 */
const axios = require("axios");
const headers = require("./headers");
const name = "dh001";

module.exports = async (mobile) =>
    axios("https://www.dh001.net/api/sms", {
        method: "POST",
        headers: {
            ...headers,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Origin: "https://www.dh001.net/regist",
            Referer: "https://www.dh001.net/regist",
        },
        data: {
            template: "SMS_180352825",
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
