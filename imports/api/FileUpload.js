import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'


if(Meteor.isServer){
  Meteor.methods({
    'server.fileStorage.uploadFile':function(base64Data,name,mime) {
        // this.unblock();
        let http_obj={
          'data':{
            'data':base64Data,
            'name':name,
            'mime':mime
          },
        }

        return HTTP.call("POST","http://localhost/base64Upload/",http_obj);
    }
  });
}

if(Meteor.isClient){
  Meteor.methods({
    'fileStorage.uploadFile':function(base64Data,name,mime) {
      Meteor.call('server.fileStorage.uploadFile',base64Data,name,mime,function(error,result){
        console.log(result);
      });
    }
  });
}
