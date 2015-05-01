describe('GeoChallenge', function () {
  beforeEach(function () {
    browser.get(browser.baseUrl);
  });
  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('GeoChallenge');
  });
});