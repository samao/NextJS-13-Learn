/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 11:14:24
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-08-18 16:07:09
 */
const axios = require("axios");
const headers = require("./headers");
const name = "whweidu";

module.exports = async (mobile) => {
    const params = await axios
        .get("https://reg-saas.whweidu.com/v2/public/smsLogin.html", { responseType: "text" })
        .then(({ data: text }) => {
            const [company, appKey, appType, appChannel] = text.match(/((companyId|appKey|appType|appChannel):.+),/gi);
            return {
                companyId: company.match(/"(.+)"/)[1],
                appKey: appKey.match(/"(.+)"/)[1],
                appType: appType.match(/\d+/)[0],
                appChannel: (appChannel.match(/"(.+?)"/) ?? ["", ""])[1],
            };
        });
    return await axios
        .get(
            `https://reg-saas.whweidu.com/v2/sms/sendcode.do?phoneCodeType=2&phone=${mobile}&vcode=&companyId=${params.companyId}&appKey=${params.appKey}&appType=${params.appType}&appChannel=${params.appChannel}&callback=acrossCallBack`,
            {
                headers: {
                    ...headers,
                    Accept: "application/json, text/plain, */*",
                    Origin: "https://reg-saas.whweidu.com",
                    Pragma: "no-cache",
                    Referer: "https://reg-saas.whweidu.com",
                },
            }
        )
        .then((res) => {
            if (res.status === 200) {
                return { mobile, code: res.status, name, data: res.data };
            } else {
                return { mobile, code: 500, name, msg: "发送失败" };
            }
        })
        .catch(() => ({ mobile, code: 500, name, msg: "服务器异常" }));
};
