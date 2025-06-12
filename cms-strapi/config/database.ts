// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "localhost"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "bank"),
//       username: env("DATABASE_USERNAME", "postgres"),
//       password: env("DATABASE_PASSWORD", "0000"),
//       schema: env("DATABASE_SCHEMA", "public"),
//     },
//   }
// });

const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', path.join(__dirname, '..', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});

// module.exports = ({ env }) => {
//   const client = env("DATABASE_CLIENT");

//   const connections = {
//     postgres: {
//       connection: {
//         connectionString: env("DATABASE_URL"),
//         ssl: env.bool("DATABASE_SSL", false) && {
//           rejectUnauthorized: env.bool(
//             "DATABASE_SSL_REJECT_UNAUTHORIZED",
//             true
//           ),
//         },
//         schema: env("DATABASE_SCHEMA", "public"),
//       },

//       pool: {
//         min: env.int("DATABASE_POOL_MIN"),
//         max: env.int("DATABASE_POOL_MAX"),
//       },
//     },
//   };

//   return {
//     connection: {
//       client,

//       ...connections[client],

//       acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
//     },
//   };
// };
