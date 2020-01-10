export function deepCopy(data) {
  const { copyDeep } = this
  if (!(data instanceof Object)) {
    return data
  } else {
    if (Array.isArray(data)) {
      return data.map(item => copyDeep.call(this, item))
    } else {
      const result = {}
      for (const itemIndex in data) {
        result[itemIndex] = copyDeep.call(this, data[itemIndex])
      }
      return result
    }
  }
}

