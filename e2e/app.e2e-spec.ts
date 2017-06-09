import { TaskManagerFrontendPage } from './app.po';

describe('task-manager-frontend App', () => {
  let page: TaskManagerFrontendPage;

  beforeEach(() => {
    page = new TaskManagerFrontendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
