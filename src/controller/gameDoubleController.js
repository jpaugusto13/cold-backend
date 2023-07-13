class GameDoubleController {
  static async double(req, res) {
    const { email } = req.body
    res.json({email: email})
  }
}

module.exports = GameDoubleController;
