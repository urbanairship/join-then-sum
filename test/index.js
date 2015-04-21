var combine = require('../')
  , tape = require('tape')

tape('combines two arrays case', function(t) {
  t.plan(1)

  var events = []
    , expected
    , result

  events.push([{
      'name': 'ay?'
    , 'count': 100
    , 'value': 1000
  }])

  events.push([{
      'name': 'ay?'
    , 'count': 123
    , 'value': 1234
  }])

  result = combine(events, ['name'])

  expected = [{
      'name': 'ay?'
    , 'count': 223
    , 'value': 2234
  }]

  t.deepEqual(result, expected)
  t.end()
})

tape('works in the singular and empty case', function(t) {
  t.plan(8)

  var events = []
    , expected
    , result

  events.push([{
      'name': 'where?'
    , 'location': 'over there!'
    , 'conversion': 'say what?'
    , 'count': 1
    , 'value': -1
  }])

  result = combine(events, ['name'])

  t.equal(result.length, 1)
  t.equal(result[0].name, 'where?')
  t.ok(isNaN(result[0].location), 'location got NaNed')
  t.ok(isNaN(result[0].conversion), 'conversion got Naned')
  t.equal(result[0].count, 1)
  t.equal(result[0].value, -1)

  t.deepEqual(
      Object.keys(result[0])
    , ['name', 'location', 'conversion', 'count', 'value']
  )

  events.pop()
  result = combine(events, ['name'])
  expected = []

  t.deepEqual(result, expected)

  t.end()
})

tape('not all arrays need have all items', function(t) {
  t.plan(1)

  var events = []
    , expected
    , result

  events.push({i: 0, v: 2})
  events.push({i: 0, v: 6, l: 2})
  events.push({i: 1, v: 0, l: 1})

  expected = []
  expected.push({i: 0, v: 8, l: 2})
  expected.push({i: 1, v: 0, l: 1})

  result = combine(events, ['i'])

  t.deepEqual(result, expected)
  t.end()
})
