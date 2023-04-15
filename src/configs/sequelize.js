const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  }
);

async function openConnection() {
  await sequelize.sync({ alter: true });
  return sequelize.authenticate();
}
function closeConnection() {
  return sequelize.close();
}

async function startDB() {
  try {
    await openConnection();
    console.log(`PostgreSQL start on port:${process.env.POSTGRES_PORT}`);
  } catch (err) {
    await closeConnection();
    console.error("Unable to connect to the PostgreSQL:", err);
  }
}

module.exports = { startDB, sequelize };
