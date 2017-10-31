module.exports = {

  getItems: (req, res) => {
    req.app
    .get('db')
    .get_items()
    .then(items => res.json(items))
    .catch(err => res.json(err))
  },

  createUser: (req, res) => {
    console.log(req.body);
    req.app
    .get('db')
    .create_user(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
  }

}
