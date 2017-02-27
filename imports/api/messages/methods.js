import { Messages } from './messages';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insertMessage = new ValidatedMethod({
  name: 'messages.insert',
  validate: new SimpleSchema({
    to: { type: String },
    text: { type: String },
    createdAt: { type: Date },
    user: { type: Object },
    'user._id': { type: String },
    'user.avatar': { type: String },
  }).validator(),
  run(message) {
    Messages.insert(message);
  },
});
