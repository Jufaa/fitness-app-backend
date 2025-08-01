const config = {
  getDataBaseConfig: () => ({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), 
    dialect: 'mysql',
  }),
};

export default config;
