import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class File extends Component {

  constructor(){
    super()
    this.state={
      message:"Hello"
    }
  }

  uploadFile(e) {
     e.preventDefault()
     let files = document.getElementById('fileUpload');
     var file = files.files[0];

     var reader=new FileReader();

    reader.onloadend = function() {
      Meteor.call('fileStorage.uploadFile',file,file.name,file.type,(err,response)=>{
          console.log(response);
          if(err){
            return this.setState({'message':"Upload fail"});
          }
          this.setState({'message':"Upload success"});
      })
    }
    reader.readAsDataURL(file);
  }



  render() {

    return (
      <div>
        <form onSubmit={ this.uploadFile.bind(this) }>
          <label className="btn btn-primary" htmlFor="fileUpload">Click to select the file</label>
          <input id="fileUpload" className="hidden" type="file" name="file" />
          <Button type="submit">UploadFile</Button>
        </form>
        <span> {this.state.message} </span>
      </div>
    )
  }

}


export default File;
