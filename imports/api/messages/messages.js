import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Messages = new Mongo.Collection('messages');

Messages.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Messages.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Messages.schema = new SimpleSchema({
  'to': {
    type: String,
    label: 'The ID of the user this message was sent directly to.'
  },
  'createdAt': {
    type: Date,
    label: 'The date and time this message was created.'
  },
  'text': {
    type: String,
    label: 'The content of this message.'
  },
  user: {
    type: Object,
    label: 'The infos of the user that created this message..'
  },
  'user._id': {
    type: String,
    label: 'The ID of the user that created this message.'
  },
  'user.avatar': {
    type: String,
    label: 'The avatar url of the user that created this message.'
  },
});

Messages.attachSchema(Messages.schema);
