import { PremierangularPage } from './app.po';

describe('premierangular App', function() {
  let page: PremierangularPage;

  beforeEach(() => {
    page = new PremierangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
