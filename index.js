const server = require('./src/app/app');

server.app.listen(server.port, () => {
  try {
    server.dataBase;
    console.log(`Servidor rodando http://127.0.0.1:${server.port}/ `);
  } catch (error) {
    console.error(error.message);
  }
});
