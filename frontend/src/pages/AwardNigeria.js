import React from "react";
import awardImage from "../assets/award_nigeria.png";
import "../styles/style.css";

const AwardNigeria = () => {
  return (
    <div className="page">
      <img src={awardImage} alt="Award Ceremony Nigeria" className="page-image" />
      <h1>Award Ceremony</h1>
      <p>
        New Age celebrates excellence by recognizing students' achievements
        through annual award ceremonies, fostering a culture of success and
        inspiration across Nigeria.
      </p>
    </div>
  );
};

export default AwardNigeria;
