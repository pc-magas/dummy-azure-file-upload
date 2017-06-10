import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
        <label htmlFor="fileUpload"><Button bsStyle="link" >Click to select the file</Button></label>
        <input id="fileUpload" className="hidden" type="file" name="file" />
        <Button type="submit">UploadFile</Button>
      </form>
    )
  }

}

export default File;
