const { app, port, dataBase } = require('./src/app/app');

app.listen(port, () => {
  try {
    dataBase;
    console.log(`Servidor rodando http://127.0.0.1:${port}/ `);
  } catch (error) {
    console.error(error.message);
  }
});
