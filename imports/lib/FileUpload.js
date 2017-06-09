
import FileUploadSetings from '../settings/fileUploadSettings.js'


export default class FileUpload {

  constructor(){
    this.container=FileUploadSetings.container
    this.key=FileUploadSetings.azureKey
    this.secret=FileUploadSetings.azureSecret
  }

  checkFile(file){
    if (file === void 0) {
      throw new Meteor.Error(500, "Missing File", "", "");
    }
  }

  uploadFile(file){
    console.log("File");
    try {
      this.checkFile(file);
    } catch( err ){
      throw err
    }

    return file.azureUpload(file.name,this.key,this.secret,this.container)
  }

}
