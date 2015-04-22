var join = require('join-by-keys')

module.exports = joinByKeys

function joinByKeys(data, join_keys) {
  data = [].concat.apply([], data)

  var result
    , keys
    , sum

  result = join(data, join_keys)

  for(var i = 0; i < result.length; ++i) {
    keys = Object.keys(result[i])

    for(var j = 0; j < keys.length; ++j) {
      if(join_keys.indexOf(keys[j]) > -1) {
        continue
      }

      sum = +result[i][keys[j]][0]

      for(var k = 1, ken = result[i][keys[j]].length; k < ken; ++k) {
        sum += +result[i][keys[j]][k]
      }

      result[i][keys[j]] = sum
    }
  }

  return result
}
