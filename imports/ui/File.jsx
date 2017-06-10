import React, { Component } from 'react';
import { UploadedFile } from '../api/FileUpload.js';

class File extends Component {

  changeFile(e) {
    e.preventDefault()
    let files = document.getElementById('fileUpload');
    var file = files.files[0];

    var reader=new FileReader();

    reader.onloadend = function() {
      // console.log('Reader',reader);
      // console.log('File',file.name);
      // console.log('File',file.type);
      // console.log('RESULT', reader.result)
      Meteor.call('fileStorage.uploadFile',reader.result,file.name,file.type)
    }

    reader.readAsDataURL(file);
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
