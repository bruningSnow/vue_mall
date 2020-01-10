export const filterTime = (timestamp, format) => {
  if (parseInt(timestamp, 10) === 0 || parseInt(timestamp, 10) === 253402271999 || timestamp === undefined || timestamp === '') return '--'
  const date = new Date(timestamp ? (parseInt(timestamp, 10) * 1000) : new Date().getTime())
  const FORMAT = {
    Y: 'date.getFullYear()',
    M: "date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1",
    D: "date.getDate() < 10 ? '0' + date.getDate() : date.getDate()",
    h: "date.getHours() < 10 ? '0' + date.getHours() : date.getHours()",
    m: "date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()",
    s: "date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()"
  }
  for (const i in FORMAT) {
    if (format.indexOf(i) !== -1) {
      format = format.replace(i, eval(FORMAT[i]))
    }
  }
  return format
}

/**
 * "Y-M-D h:m:s"
 */
export const fulltime = (timestamp) => {
  timestamp = String(timestamp).length < 13 ? timestamp : timestamp / 1000
  return filterTime(timestamp, 'Y-M-D h:m:s')
}

export default {
  filterTime,
  fulltime
}
