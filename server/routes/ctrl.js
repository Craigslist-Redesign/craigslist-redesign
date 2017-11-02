module.exports = {

  createUser: (req, res) => {

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
    .create_forsale([req.body.title, req.body.tag, req.body.price, req.body.description, req.body.location, req.body.make, req.body.model, req.body.size,
                     req.body.condition, req.body.zipcode, req.body.email, req.body.uid, req.body.catId, req.body.category, req.body.imageUrl ])
    .then(forSale => res.json(forSale))
    .catch(err => res.json(err))
  },

  getListings: (req,res) => {
    console.log(req.body);
    req.app
    .get('db')
    .get_listings([req.body.category, req.body.tag])
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },

  getUserPosts: (req,res) => {

    req.app.get('db')
    .get_user_posts(req.params.uid)
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
  },


}
