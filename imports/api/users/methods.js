import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import cloudinary from 'cloudinary';

export const insertPic = new ValidatedMethod({
  name: 'pic.insert',
  validate: new SimpleSchema({
    localPicSelected: { type: String },
  }).validator(),
  run(pic) {
    const { localPicSelected } = pic;
    cloudinary.uploader.upload(localPicSelected, Meteor.bindEnvironment((result) => {
      const { userId } = this;
      const { secure_url } = result;

      Meteor.users.update({ _id: userId }, {
        $set: { profilePic: secure_url},
      });
    }));
  },
});

export const insertNames = new ValidatedMethod({
  name: 'names.insert',
  validate: new SimpleSchema({
    firstName: { type: String },
    lastName: { type: String },
  }).validator(),
  run({ firstName, lastName }) {
    const { userId } = this;
    return Meteor.users.update({ _id: userId }, {
      $set: { name: { firstName: firstName, lastName:lastName }, signedIn: true },
    });
  },
});
