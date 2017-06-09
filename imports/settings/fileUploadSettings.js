import { Meteor } from 'meteor/meteor';

console.log(Meteor.settings)
console.log(Meteor.server)

export const FileUploadSettings= {
  'container': Meteor.settings.public.azure.container,
  'account': Meteor.settings.public.azure.account,
  'key': Meteor.settings.public.azure.key
}
