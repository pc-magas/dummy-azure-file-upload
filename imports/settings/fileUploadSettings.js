import { Meteor } from 'meteor/meteor';

export const FileUploadSettings= {
  'container': Meteor.settings.azure.containers,
  'account': Meteor.settings.azure.account,
  'key': Meteor.settings.azure.key
}
