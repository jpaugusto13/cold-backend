const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(
    '<h1>Bem-vindo ao Cold Casino API!</h1><p>O Cold Casino é um sistema de cassino online incrível, oferecendo uma experiência emocionante de jogos de azar e entretenimento. Nossa API fornece acesso a uma variedade de recursos para tornar a experiência de jogo ainda mais empolgante.</p><h2>Aqui estão alguns recursos disponíveis na nossa API</h2><ul><li>Autenticação de usuário para acesso seguro</li><li>Recuperação de informações sobre jogos disponíveis</li><li>Gerenciamento de apostas e transações</li><li>Pontuação de jogadores e rankings</li></ul><h3>Aproveite a emoção dos jogos de cassino com o Cold Casino API!</h3><p>Todos os direitos reservados!</p>'
  );
});

module.exports = router;
