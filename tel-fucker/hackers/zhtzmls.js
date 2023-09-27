/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 11:14:24
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-09-14 16:38:05
 */
const axios = require("axios");
const headers = require("./headers");
const name = "zhtzmls";

module.exports = async (mobile) => {
    return await axios(`http://www.zgtzmls.com/index.php`, {
        method: "POST",
        params: {
            m: 'Home',
            c: 'Api',
            a: 'send_validate_code',
            t: Math.random()
        },
        data: {
            mobile,
            scene: 1,
        },
        headers: {
            ...headers,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Origin: "http://www.zgtzmls.com",
            Referer: "http://www.zgtzmls.com/Home/User/reg.html",
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
