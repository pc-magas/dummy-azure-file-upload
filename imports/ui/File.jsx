import React, { Component } from 'react';

class File extends Component {

  changeFile(e) {
    e.preventDefault()
    let files = document.getElementById('fileUpload');
    var file = files.files[0];

    var reader=new FileReader();

    reader.onloadend = function() {
      Meteor.call('fileStorage.uploadFile',reader.result,file.name,file.type,function(err,response){
        console.log(response);
      })
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
