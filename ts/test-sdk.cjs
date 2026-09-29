
const { ResendSdkSDK } = require('./dist/ResendSdkSDK.js');

async function testSDK() {
const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('❌ RESEND_API_KEY is missing.');
    process.exit(1);
  }

  const sdk = new ResendSdkSDK({
    base: 'https://api.resend.com',
    allow: {
  op: 'direct'
}
  });

  try {
    const response = await sdk.direct({
      path: '/domains',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });

    console.log('HTTP Status:', response.status);
    console.log('Response:', JSON.stringify(response.data, null, 2));

    if (response.ok) {
      console.log('\n✅ SDK test passed! Resend API responded successfully.');
    } else {
      console.log('\n❌ API request failed. Check the response above.');
    }
  } catch (error) {
    console.error('❌ Test error:', error);
  }
}

testSDK();