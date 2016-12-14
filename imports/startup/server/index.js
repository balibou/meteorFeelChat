import './api.js';
import TwilioOAuthInit from './oauth-twilio';

Meteor.startup(() => {
  TwilioOAuthInit();
});
