import { Angular6ProjectPage } from './app.po';

describe('angular6-project App', function() {
  let page: Angular6ProjectPage;

  beforeEach(() => {
    page = new Angular6ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
