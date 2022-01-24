module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '58e8fee82d4d2d612a3397228e7fedb8'),
  },
});
