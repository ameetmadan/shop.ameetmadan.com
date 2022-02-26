module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '28241a7c63121e1259cdfd71e1a1e8ab'),
  },
});
