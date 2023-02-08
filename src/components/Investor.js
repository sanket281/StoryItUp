import React from "react";
import StoryCard from "./StoryCard";
import investorImage from "../images/investor.jpg";

export default function Investor() {
  return (
    //photo
    <div className="publish">
      <div className="vectorBackground publishMain">
        <div className="publishInner">
          <div className="investorInner"></div>

          <h1>Here are some of our top investors</h1>
          <div className="storiesContainer">
            <StoryCard />
            <StoryCard />
            <StoryCard />
          </div>
          <hr />
          <h1>
            "Invest in the future, Be a part of the next big thing,
            <br />
            In our rapidly developing world,
            <br />
            where new businesses are founded every day, Stay ahead in the game
            <br />
            Invest now!!"
            <br />
          </h1>
          <hr />
          <h1>
            REGISTER YOURSELF aS aN{" "}
            <span className="text-secondary">INVESTOR</span>
          </h1>
          <form className="storyForm">
            <div className="storyFormElement">
              <label>Full name</label>
              <input
                type="text"
                className="storyFormInput"
                placeholder="Please provide us with your full name"
              ></input>
            </div>
            <div className="storyFormElement">
              <label>Email</label>
              <input
                type="text"
                className="storyFormInput"
                placeholder="Please provide us with a valid email address"
              ></input>
            </div>
            <div className="storyFormElement">
              <label>Investment Experience</label>
              <textarea
                type="text"
                className="storyFormTextarea"
                rows="5"
                placeholder="Please describe your prior investments and your experience with them"
              ></textarea>
            </div>
            <div className="storyFormElement">
              <label>area Of Interest For Investment</label>
              <textarea
                type="text"
                className="storyFormTextarea"
                rows="5"
                placeholder="what kinds of startups are you interested in funding"
              ></textarea>
            </div>
            <div className="storyFormElement">
              <label>Investment Budget</label>
              <textarea
                type="text"
                className="storyFormTextarea"
                rows="5"
                placeholder="what is your projected investment budget"
              ></textarea>
            </div>
            <div className="storyFormElement">
              <label>Discription</label>
              <textarea
                type="text"
                className="storyFormTextarea"
                rows="5"
                placeholder="whatever further information you would like to add as an investor"
              ></textarea>
            </div>
            <div className="storyFormElement">
              <label>Select Your Country</label>
              <select
                name="role"
                id="role"
                className="formInput"
                defaultValue="reader"
              >
                <option value="reader">India</option>
                <option value="startupOwner">USa</option>
                <option value="investor">Japan</option>
              </select>
            </div>
            <div className="storyFormElement">
              <label>Please Provide Your Profile Photo</label>
              <input type="text" className="storyFormInput"></input>
            </div>
            <div className="storyFormElement">
              <label>Please Provide Your LinkedIn Profile Link</label>
              <input
                type="text"
                className="storyFormInput"
                placeholder="https://www.linkedin.com/startupName/"
              ></input>
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
