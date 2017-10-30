module.exports = {

  getItems: (req, res) => {
    req.app
    .get('db')
    .get_items(req.body)
    .then(items => res.json(items))
    .catch(err => res.json(err))
  }

}