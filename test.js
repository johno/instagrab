import test from 'ava'
import instagrab from './'

test('instagrab does something awesome', t => {
  t.plan(1)

  instagrab(doc => {
    console.log(doc)
    t.true(true)
  })
})
