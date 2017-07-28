import { DirectivesExPage } from './app.po';

describe('directives-ex App', () => {
  let page: DirectivesExPage;

  beforeEach(() => {
    page = new DirectivesExPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
