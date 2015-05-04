var request = require('supertest');
var app = require('../server/app');

// Tests of REST API, must run in order since one test is 
// dependent on the DB-contents after the previous.
describe("REST API", function () {
  var baseUrl = app;
  var postsApi = "/api/posts/";

  function getAll(callback) {
    request(baseUrl)
      .get(postsApi)
      .expect(200)
      .end(function (err, res) {
      callback(res.body);
    });
  }

  function addPost(post, next) {
    request(baseUrl)
      .post(postsApi)
      .send(post)
      .expect(200, next);
  }

  it("DELETE /posts/*", function (done) {
    // Delete all posts
    getAll(function (posts) {
      var left = posts.length;
      if (!left) {
        done();
        return;
      }
      function doneCnt() {
        if (--left == 0) {
          getAll(function (postsAfterDelete) {
            expect(postsAfterDelete).toEqual([]);
            done();
          });
        }
      }
      posts.forEach(function (post) {
        request(baseUrl)
          .del(postsApi + post._id)
          .expect(200, doneCnt);
      });
    });
  });

  var post;

  it("POST /posts", function (done) {
    post = {
      name: 'testname',
      question: 'testquestion',
      answer: 'testanswer'
    };
    addPost(post, function () {
      getAll(function (posts) {
        expect(posts.length).toEqual(1);
        post = posts[0];
        done();
      });
    });
  });

  it("PUT /posts/:id", function (done) {
    post.name = 'new name';
    request(baseUrl)
      .put(postsApi + post._id)
      .send(post)
      .expect(200)
      .end(function (err, res) {
      if (err) done(err);
      done();
    });
  });

  it("GET /posts/:id", function (done) {
    request(baseUrl).get(postsApi + post._id)
      .expect(200)
      .end(function (err, res) {
        expect(res.body.name).toEqual("new name");
      done();
    });
  });
});
