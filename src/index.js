module.exports = function check(str, bracketsConfig) {
  return bracketsConfig.every(item => str.includes(item.join('')))
}
