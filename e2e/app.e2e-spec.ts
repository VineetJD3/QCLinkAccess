import { QCLinkAccessPage } from './app.po';

describe('qclink-access App', function() {
  let page: QCLinkAccessPage;

  beforeEach(() => {
    page = new QCLinkAccessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
