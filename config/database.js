module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        // host: env('DATABASE_HOST', '127.0.0.1'),
        srv: env.bool('DATABASE_SRV', true),
        // uri: env('DATABASE_URI', 'mongodb://localhost:27017/strapi-test-mongodb'),
        uri: env('DATABASE_URI', 'mongodb+srv://admin:admin@cluster0.t2xcx.mongodb.net/strapi-test-mongodb?retryWrites=true&w=majority'),
        // port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'strapi-test-mongodb'),
        // username: env('DATABASE_USERNAME', null),
        // password: env('DATABASE_PASSWORD', null),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        // ssl: env.bool('DATABASE_SSL', false),  // uncomment  for local
        ssl: env.bool('DATABASE_SSL', true), // uncomment  for cloud

      },
    },
  },
});
