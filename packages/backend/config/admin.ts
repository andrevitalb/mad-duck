export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '364b3f484ea8ad7f4af2f7fc1907c9a6'),
  },
});
