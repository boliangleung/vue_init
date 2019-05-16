/**
 * @desc: Date format
 * @param {Date | Number} date
 * @param {string} fmt 目标字符串格式,默认：yyyy-MM-dd hh:mm:ss
 * @returns {string} 返回格式化后的日期字符串
 *
 * @example
 * dateFormat(0, "yyyy年MM月dd日 第q季度")    // "1970年01月01日 第1季度"
 *
 * @support:
 * yyyy：年
 * q: 季度
 * MM：月
 * dd：日
 * hh: 时
 * mm：分
 * ss：秒
 * S：毫秒
 */
const dateFormat = function (date, fmt) {
  if (!Date.prototype.Format) {
    Object.defineProperty(Date.prototype, 'Format', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function (fmt) {
        var f = fmt != null ? fmt : 'yyyy-MM-dd hh:mm:ss'
        var weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        var o = {
          'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
          'M+': this.getMonth() + 1, // 月份
          'd+': this.getDate(), // 日
          'h+': this.getHours(), // 时
          'm+': this.getMinutes(), // 分
          's+': this.getSeconds(), // 秒
          W: weekList[this.getDay()],
          S: this.getMilliseconds() // 毫秒
        }
        if (/(y+)/.test(f)) {
          f = f.replace(
            RegExp.$1,
            (this.getFullYear() + '').substr(4 - RegExp.$1.length)
          )
        }
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(f)) {
            f = f.replace(
              RegExp.$1,
              RegExp.$1.length === 1
                ? o[k]
                : ('00' + o[k]).substr(('' + o[k]).length)
            )
          }
        }
        return f
      }
    })
  }
  let d = Date.prototype.isPrototypeOf(date) ? date : new Date(Number(date))
  return d.Format(fmt)
}
/**
 * @desc 输出成上午 hh:mm:ss 下午 hh:mm:ss  昨天 hh:mm:ss  之后 MM-dd hh:mm
 * @param datefmt  yyyy-MM-dd hh:mm 类型 可以有-- 但是不能有其他符号
 * @example
 * {{item.recent_msg.msgts|dateFormat('yyyyMMdd hh:mm')|detailDate}}
 */

const detailDate = function (date) {
  // 获取今天的时间
  let today = new Date()
  today.setHours(0)
  today.setMinutes(0)
  today.setSeconds(0)
  let start = today.getTime()
  let startFormt = dateFormat(start).replace(/-/g, '')
  let datefmt = date.replace(/-/g, '')
  // 如果是今天信息
  if (Number(startFormt.substring(0, 8)) == Number(datefmt.substring(0, 8))) {
    return `今天 ${datefmt.substring(9)}`
    // return datefmt.substring(9, 11) < 12 ? `上午 ${datefmt.substring(9)}` : `下午 ${datefmt.substring(9)}`;
  } else if (
    Number(startFormt.substring(0, 8) - 1) == Number(datefmt.substring(0, 8))
  ) {
    return `昨天 ${datefmt.substring(9)}`
  } else {
    return date.substring(0, 16)
  }
}
export default {
  dateFormat,
  detailDate
}
