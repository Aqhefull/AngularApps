import { NodtvChatPage } from './app.po';

describe('nodtv-chat App', () => {
  let page: NodtvChatPage;

  beforeEach(() => {
    page = new NodtvChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
