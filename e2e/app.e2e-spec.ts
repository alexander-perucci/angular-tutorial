import { AngularTutorialEcon2017Page } from './app.po';

describe('angular-tutorial-econ2017 App', () => {
  let page: AngularTutorialEcon2017Page;

  beforeEach(() => {
    page = new AngularTutorialEcon2017Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
