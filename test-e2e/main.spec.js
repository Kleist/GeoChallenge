describe('GeoChallenge', function () {
  beforeEach(function () {
    browser.get(browser.baseUrl);
  });
  
  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('GeoChallenge');
  });
  
  it('should start up with login screen', function() {
    var facebookBtn = $('#facebook-login');
    expect(facebookBtn.getText()).toBe("Sign in with Facebook");
  })
});