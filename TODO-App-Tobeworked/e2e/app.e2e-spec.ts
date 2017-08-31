import { TODOAppTobeworkedPage } from './app.po';

describe('todo-app-tobeworked App', () => {
  let page: TODOAppTobeworkedPage;

  beforeEach(() => {
    page = new TODOAppTobeworkedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
