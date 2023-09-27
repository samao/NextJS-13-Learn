/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 11:14:24
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-08-18 16:07:25
 */
const axios = require("axios");
const headers = require("./headers");
const name = "yanxingjia";

module.exports = async (mobile) => {
    return await axios(`https://m.yanxingjia.com/user/send_sms_m`, {
        method: "POST",
        data: {
            mobile,
        },
        headers: {
            ...headers,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Origin: "https://m.yanxingjia.com",
            Referer: "https://m.yanxingjia.com/user/login_m.html?fm=http://m.yanxingjia.com/activity/cons",
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
