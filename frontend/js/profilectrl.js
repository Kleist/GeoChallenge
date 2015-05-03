define(function () {
  function ProfileCtrl($http) {
    this.name = "";
    this.picture = "";
    this.loaded = false;
    $http.get('/api/me')
      .success(function (data) {
      console.log('loading profile', data);
      this.name = data.displayName;
      this.picture = data.picture;
      this.loaded = true;
    }.bind(this))
      .error(function (data) {
      console.log('error loading profile', data);
    });
  }
  return ProfileCtrl;
});
