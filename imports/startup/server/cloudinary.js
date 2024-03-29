import cloudinary from 'cloudinary';

const init = () => {
  cloudinary.config({
    cloud_name: Meteor.settings.cloudinary.cloudName,
    api_key: Meteor.settings.cloudinary.apiKey,
    api_secret: Meteor.settings.cloudinary.apiSecret
  });
}

export default init;
