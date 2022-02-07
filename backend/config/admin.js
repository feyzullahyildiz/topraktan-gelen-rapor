module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '481a0d3e68b918b1052bdcf01de651ee'),
  },
});
