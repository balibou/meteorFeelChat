import './api.js';
import TwilioOAuthInit from './oauth-twilio';
import CloudinaryInit from './cloudinary';

Meteor.startup(() => {
  TwilioOAuthInit();
  CloudinaryInit();
});
