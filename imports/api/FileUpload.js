import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'

export const UploadedFile=null;

if(Meteor.isServer){
  Meteor.methods({
    'fileStorage.uploadFile'(base64Data,name,mime) {
        // this.unblock();
        let http_obj={
          'data':{
            'data':base64Data,
            'name':name,
            'mime':mime
          },
          // 'timeout':2000,
          'headers':{
            'Content-Type': 'application/json'
          }
        }

        try {
          return HTTP.call("POST","http://localhost/base64Upload/?XDEBUG_SESSION_START",http_obj);
        } catch(err){
          throw err;
        }
    }
  });
}
