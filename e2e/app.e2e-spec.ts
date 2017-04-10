import { HadesPage } from './app.po';

describe('hades App', function() {
  let page: HadesPage;

  beforeEach(() => {
    page = new HadesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
