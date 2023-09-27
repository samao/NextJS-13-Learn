/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 14:53:19
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-09-08 15:40:00
 */
const axios = require("axios");
const headers = require("./headers");
const name = "cailiaoren";

module.exports = async (mobile) => {
    return await axios("https://www.cailiaoren.com/user_action.php", {
        method: "POST",
        headers: {
            ...headers,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            Origin: "https://www.cailiaoren.com",
            Referer: "https://www.cailiaoren.com/user_signup.php",
        },
        data: {
            mobile,
            act: 'getcode',
            ncode: '0086'
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