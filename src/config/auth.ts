export default {
  jwt: {
    secret: process.env.APP_SECRET || 'e11ca1d52b735f8a29bd279dab7e5d5b',
    expiresIn: '1d',
  },
}
