import test from 'ava'
import isPresent from 'is-present'
import instagrab from './'

test.cb('instagrab does something awesome', t => {
  t.plan(1)

  instagrab('socks', imgs => {
    t.true(isPresent(imgs))
    t.end()
  })
})
