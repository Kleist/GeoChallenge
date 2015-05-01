console.log('loaded spec.js');
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get(browser.baseUrl);
    expect(browser.getTitle()).toEqual('GeoChallenge');
  });
});