import { Meteor } from 'meteor/meteor';

console.log(Meteor.settings)
console.log(Meteor.server)

export const FileUploadSettings= {
  // 'url': Meteor.settings.public.upload.url
  'url':"http://localhost/base64Upload"
}
