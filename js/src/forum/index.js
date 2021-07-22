import DiscussionComposer from 'flarum/components/DiscussionComposer';
import ReplyComposer from 'flarum/components/ReplyComposer';
import extendSignUp from './extendSignUp';
import extendComposer from './extendComposer';

app.initializers.add('ralkage/flarum-ext-hcaptcha', () => {
  app.hcaptchaLoaded = false;

  extendSignUp();
  extendComposer(DiscussionComposer);
  extendComposer(ReplyComposer);
});
