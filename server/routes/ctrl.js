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
  },

  createForSale: (req, res) => {
    console.log(req.body);
    req.app
    .get('db')
    .create_forsale([req.body.title, req.body.tag, req.body.price, req.body.description, req.body.location, req.body.make, req.body.model, req.body.size, req.body.condition, req.body.zipcode, req.body.email, req.body.uid])
    .then(forSale => res.json(forSale))
    .catch(err => res.json(err))
  },

  getByTag: (req,res) =>{
    console.log(req.body)
    req.app
    .get('db')
    .get_by_tag(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  }

}
