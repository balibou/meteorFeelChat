import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages';

Meteor.publish('messages', ({contactDigitNumber, userNumber}) => {
  return Messages.find({
    $and: [
        { $or: [{ to: userNumber }, { to: contactDigitNumber }] },
        { $or: [{ 'user._id': userNumber }, { 'user._id': contactDigitNumber }] },
      ],
  });
});
