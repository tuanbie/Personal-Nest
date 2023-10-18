export const config = {
  db: {
    // entities: [`${__dirname}/../../entity/**/*.{js,ts}`],
    // subscribers: [`${__dirname}/../../subscriber/**/*.{js,ts}`],
    // migrations: [`${__dirname}/../../migration/**/*.{js,ts}`],
  },
  hello: 'world',
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  saltRounds: 7,
  vnProvinceDomain: process.env.VN_PROVINCE_DOMAIN,
  jwt: {
    publicKey: Buffer.from(process.env.JWT_PUBLIC, 'base64').toString('utf-8'),
    privateKey: Buffer.from(process.env.JWT_SECRET, 'base64').toString('utf-8'),
    expiresIn: '30d',
    refreshExpiresIn: '7d',
  },
  grpcServerUrl: process.env.PORT_GRPC_URL,
};
