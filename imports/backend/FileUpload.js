import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import FileUpload from '../lib/FileUpload.js'

const File = new Mongo.Collection('file');

Meteor.methods({

  'file.uploadFile'(file): {
      console.log("File To be uploaded",file)
      var FileUpload=new FileUpload();
      var response=FileUpload.addFile(file)
      File.insert({
        uploadedAt: new Date(),
        url: response
      })

      return response
  }
});
