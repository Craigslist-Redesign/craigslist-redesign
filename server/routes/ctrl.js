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
    .create_forsale(req.body)
    .then(response => {console.log(response); res.json(response)})
    .catch(err => console.log(err))
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

  getPost: (req,res) => {
    console.log(req.params)
    req.app.get('db')
    .get_post(req.params.post_id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  }


}
