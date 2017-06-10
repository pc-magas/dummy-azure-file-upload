import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
// import { HTTP } from 'meteor/http'


const UploadedFile = new Mongo.Collection('file');

Meteor.methods({
  'fileStorage.uploadFile'(base64Data,name,mime) {
      if (base64Data === void 0) {
          throw new Meteor.Error(500, "Missing File", "", "");
      }
      let http_obj={
        'data':{
          'data':base64Data,
          'name':name,
          'mime':mime
        },
      }
      // console.log(FileUploadSetings.url);
      Meteor.http.post("http://localhost/base64Upload/",http_obj,function(error,result){
          if(!error){
            console.log(result);
          }
          console.log(error);
      })
  }
});
