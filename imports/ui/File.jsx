import React, { Component } from 'react';
import { UploadedFile } from '../api/FileUpload.js';

class File extends Component {

  changeFile(e) {
    e.preventDefault()
    var targetElem=e.target
    files = document.getElementById('fileUpload');
    file = files.files[0]
    AzureFile.upload(file,'fileStorage.uploadFile',function(err,value){
        if(err){
          console.log(err)
          throw err;
          return;
        }
        console.log(value);
    });
  }

  render() {
    return (
      <form onSubmit={ this.changeFile.bind(this) }>
        <label>
          <input id="fileUpload" type="file" name="file" />
        </label>

        <button type="submit">UploadFile</button>
      </form>
    )
  }

}

export default File;
