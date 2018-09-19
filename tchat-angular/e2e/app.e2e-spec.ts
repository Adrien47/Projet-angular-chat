import { TchatAngularPage } from './app.po';

describe('tchat-angular App', function() {
  let page: TchatAngularPage;

  beforeEach(() => {
    page = new TchatAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
