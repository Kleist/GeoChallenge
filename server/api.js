var express = require('express');
var auth = require('./auth');
var User = require('./models/User');
var Post = require('./models/Post')
var router = express.Router();

router.get('/me', auth.ensure, function (req, res) {
  User.findById(req.user, function (err, user) {
    res.send(user);
  });
});

router.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

function postFromReqBody(body, post) {
  if (!post) post = new Post();
  post.name = body.name;
  post.question = body.question;
  post.answer = body.answer;
  return post;
}

router.route('/posts').post(function (req, res) {
  var post = postFromReqBody(req.body);
  post.save(function (err) {
    if (err) {
      res.send(err);
    }
    else {
      res.json({
        message: 'Post created'
      });
    }
  });

}).get(function (req, res) {
  Post.find(function (err, posts) {
    if (err) {
      res.send(err);
    } else {
      res.json(posts);
    }
  });
});

router.route('/posts/:post_id').get(function (req, res) {
  Post.findById(req.params.post_id, function (err, post) {
    if (err) {
      res.send(err);
    } else {
      res.json(post);
    }
  });

}).put(function (req, res) {
  Post.findById(req.params.post_id, function (err, post) {
    if (err) {
      res.send(err);
    }
    post = postFromReqBody(req.body, post);
    post.save(function (err) {
      if (err) {
        res.send(err);
      }
      else {
        res.json({ message: 'Post updated' });
      }
    });
  });

}).delete(function (req, res) {
  Post.remove({ _id: req.params.post_id }, function (err, post) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Successfully deleted' });
    }
  });
});

module.exports = router;
