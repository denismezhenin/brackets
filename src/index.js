module.exports = function check(str, bracketsConfig) {
  while (bracketsConfig.some(item => str.includes(item.join('')))) {
    for (let key of bracketsConfig) {
      console.log()
      str = str.replace(key.join(''), '')
    }
  }
  return str == '' ?  true :  false
}
