import React from "react";

export default function Help() {
  return (
    <div>
        <hr />
        <br />
      <h1>NEED HELP, CONTACT US</h1>
      <form className="storyForm" action="">
        <div className="storyFormElement">
          <label>Mail Id</label>
          <input type="text" className="storyFormInput"></input>
        </div>
        <div className="storyFormElement">
          <label>Subject</label>
          <input type="text" name="subject" id="subject" className="storyFormInput"></input>
        </div>
        <div className="storyFormElement">
          <label>Problem Statement</label>
          <textarea name="problemStatement" id="problemStatement" className="storyFormTextarea" cols="30" rows="10"></textarea>
        </div>
        <button className='btn'>SUBMIT</button>
      </form>
      <br />
      <br />
    </div>
  );
}
