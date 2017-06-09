import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
//import FileUpload from '../lib/FileUploadHandler.js'
import FileUploadSetings from '../settings/fileUploadSettings.js'

const UploadedFile = new Mongo.Collection('file');

Meteor.methods({
  'fileStorage.uploadFile'(file) {
      console.log("File To be uploaded",file)

      var response=file.azureUpload(file.name,FileUploadSetings.account,FileUploadSetings.key,FileUploadSetings.container)

      return response
  }
});
