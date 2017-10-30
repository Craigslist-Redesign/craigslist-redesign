module.exports = {

  getItems: (req, res) => {
    req.app
    .get('db')
    .get_items()
    .then(items => res.json(items))
    .catch(err => res.json(err))
  }

}
