import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../util/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.linkedin.com/in/patzpaul/" target="blank_">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/PatzPaul/" target="blank_">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.instagram.com/patz_paul/" target="blank_">
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/patrick.paul.90226"
                target="blank_"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.twitter.com/patzpaull" target="blank_">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Patrick</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev🍁",
                    2000,
                    "Full Stack Developer🖥",
                    2000,
                    "React/React Native Dev👨🏾‍💻",
                    2000,
                    "Digital Marketing Consultant📉",
                    2000,
                    "Pythonista🐍",
                    2000,
                    "Gopher🐹",
                    2000,
                    "GCP Cloud Dev",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                A knack for building applications with front and backend
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
          <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="patz.pdf" download="Patz patz.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

//
