var join = require('join-by-keys')

module.exports = combine_by_summation

function combine_by_summation(data, join_keys) {
  data = [].concat.apply([], data)

  var result
    , keys
    , sum

  result = join(data, join_keys)

  for(var i = 0, len = result.length; i < len; ++i) {
    keys = Object.keys(result[i])

    for(var j = 0, jen = keys.length; j < keys.length; ++j) {
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

