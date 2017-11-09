const { address, sendgridAPI } = require('../../config');
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(sendgridAPI);


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
    .get_listings([req.body.category, req.body.tag, req.body.value, req.body.uid])
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
    req.app.get('db')
    .get_post(req.params.post_id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },

  deletePost: (req,res) => {
    req.app.get('db')
    .delete_post([req.body.post_id, req.body.uid])
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },

  postFav: (req,res) => {
    req.app.get('db')
    .post_fav([req.body.uid, req.body.post_id])
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },

  updateCounter: (req, res) => {
    req.app.get('db')
    .update_viewcounter(req.params.post_id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },

  mostViewed: (req,res) => {
    req.app.get('db')
    .get_mostviewed()
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },

  getFavorites: (req, res) => {
    req.app.get('db')
    .getFavorites(req.params.uid)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },

  getCategoryTags: (req, res) => {
    req.app.get('db')
    .get_catgory_tags(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },

  getCategories: (req, res) => {
    req.app.get('db')
    .get_categories()
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },

  searchListings: (req, res) => {
    console.log(req.body);
    req.app.get('db')
    .search_listings(req.body.category, req.body.tag, req.body.value)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },

  removeFav: (req,res) => {
    req.app.get('db')
    .remove_fav([req.body.uid, req.body.post_id])
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },

  sendMail: (req,res,next) => {
    console.log(req.body)
    const msg = {
    to: req.body.creatorEmail,
    from: req.body.yourEmail,
    subject: req.body.subject,
    text: req.body.message,
    html: `<strong>${req.body.message}</strong>`,
  };
  sgMail.send(msg);
  }
}
