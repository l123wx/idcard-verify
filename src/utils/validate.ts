export function checkIdCard(id: string) {
    if (id.length !== 18) return false

    return id.slice(-1) === calcIdCardVerifyCode(id.slice(0, 17))
}

/**
 * 18 位身份证号码的前 17位数字
 * @param {string} string 
 */
export function calcIdCardVerifyCode (string: string) {
    //∑(ai×Wi)(mod 11)
    //加权因子
    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    //校验位
    var parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']

    const c = [...new Array(17)].reduce((result, _item, index) => result + Number(string[index]) * factor[index], 0)

    return parity[c % 11]
}
