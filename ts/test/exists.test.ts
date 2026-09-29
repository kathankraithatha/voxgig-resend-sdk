
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ResendSdkSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ResendSdkSDK.test()
    equal(testsdk instanceof ResendSdkSDK, true,
      'ResendSdkSDK.test() must return a client synchronously')
  })

})
