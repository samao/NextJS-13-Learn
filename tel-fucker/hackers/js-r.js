/*
 * Copyright (c) QieTv, Inc. 2018 
 * @Author: idzeir 
 * @Date: 2023-08-21 15:10:29 
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-08-21 15:13:12
 */

// https://www.js-r.com/jsrapi/jsrapi/web/index.php?r=jsr/send-phone&type=login&phone=18610831322

const axios = require("axios");
const headers = require("./headers");
const name = "js-r";

module.exports = async (mobile) => {
    return await axios
        .get(`https://www.js-r.com/jsrapi/jsrapi/web/index.php?r=jsr/send-phone&type=login&phone=${mobile}`, {
            headers: {
                ...headers,
                Accept: "application/json, text/plain, */*",
                Origin: "https://www.js-r.com",
                Pragma: "no-cache",
                Referer: "https://www.js-r.com",
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