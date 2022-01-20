import React from "react";
import classes from "./PersonalDetails.module.css";

function PersonalDetails() {
  return (
    <div>
      <div className="App">
        <h2>Personal Details</h2>
      </div>
      <div>
        <section className={classes.auth}>
          <form>
            <div className={classes.control}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="dateOfBirth">Phone Number</label>
              <input type="date" id="dateOfBirth" required />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default PersonalDetails;
