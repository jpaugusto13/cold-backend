const db = require('../db/db');

class doubleDeleteBetController {
  static async deleteBet(req, res) {
    const collectionRef = db.firestore().collection('double');

    let batchCount = 0;
    const batchSize = 500; // Defina o tamanho do lote conforme necessário

    const deleteBatch = async (batch) => {
      const batchDelete = batch.map((doc) => doc.ref.delete());
      await Promise.all(batchDelete);
      batchCount += batch.length;
      console.log(`Excluídos ${batchCount} documentos...`);
    };

    const processQuerySnapshot = async (querySnapshot) => {
      const batch = [];

      querySnapshot.forEach((doc) => {
        batch.push(doc);
        if (batch.length === batchSize) {
          deleteBatch(batch);
          batch.length = 0; // Limpar o lote
        }
      });

      // Verificar se ainda há documentos pendentes no lote
      if (batch.length > 0) {
        deleteBatch(batch);
      }
    };

    try {
      let querySnapshot = await collectionRef.get();

      while (!querySnapshot.empty) {
        await processQuerySnapshot(querySnapshot);

        // Obter o próximo lote de documentos
        querySnapshot = await querySnapshot.ref.get();
      }

      console.log('Todos os documentos foram excluídos.');
    } catch (error) {
      console.error('Erro ao excluir documentos: ', error);
    }
  } 
}

module.exports = doubleDeleteBetController;
