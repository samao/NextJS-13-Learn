/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 11:14:24
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-08-18 16:06:16
 */
const axios = require("axios");
const headers = require("./headers");

const name = "4399";

module.exports = async (mobile) => {
    return await axios("https://open.4399.cn/feapi/user/sms/getCode", {
        method: "POST",
        headers: {
            ...headers,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8;",
            Cookie: "PHPSESSID=sc9usr3q4ke96h9cou453clmun; 4399_DEV_USER=151882232%7Ca4919717fc0cf51da66594d8d5d69b56%7Csemaolo%7Csemaolo",
            Origin: "https://open.4399.cn",
            Referer: "https://open.4399.cn/console/user/authentication",
        },
        data: {
            smsType: "AUTH_SUBMIT",
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
