import React, { useState, useEffect } from "react";
import ScreenHeading from "../../util/ScreenHeading/ScreenHeading";
import ScrollService from "../../util/ScrollService";
import Animations from "../../util/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills ", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 65 },
    { skill: "Golang", ratingPercentage: 45 },
    { skill: "Core Java", ratingPercentage: 50 },
    { skill: "JavaScript", ratingPercentage: 55 },
    { skill: "Express JS", ratingPercentage: 72 },
    { skill: "Node JS", ratingPercentage: 72 },
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "Rust", ratingPercentage: 40 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio WebPage",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio Website to showcase all my resume details and projects in one place",
      subHeading: "Technologies Used:React JS, Bootstrap",
    },
    {
      title: "Car Wash and Floral Website",
      duration: { fromDate: "2020", toDate: "2022" },
      description:
        "A website for a Car Washing and flower selling Business(Clean & Plant Services) to show products and services.",
      subHeading: "Technologies Used:Python, Django, SQLite",
    },
    {
      title: "Ticket-Booking Mobile App",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Mobile ticket booking application for that filters from a respective list of available flights in the airport terminal. ",
      subHeading: "Technologies Used:Android Studio, Java, firebase",
    },
    {
      title: "Online Sports Betting System",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "An online sports betting system for participants to create accounts and place bets with deployment of fully fledged sports API ",
      subHeading:
        "Technologies Used:PHP,Express Js,React Js, Node.js, Redux, MongoDB, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"United States International University-Africa, Kenya "}
        subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
        fromDate={"2019"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"SENECA College, Canada "}
        subHeading={"ADVANCED DIPLOMA IN CHEMICAL ENGINEERING"}
        fromDate={"2015"}
        toDate={"2018"}
      />

      <ResumeHeading
        heading={"Feza Boys' High School, Tanzania "}
        subHeading={"HIGH SCHOOL CERTIFICATE (O &A-LEVEL)"}
        fromDate={"2011"}
        toDate={"2014"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Microsoft App Factory"}
          subHeading={"FRONT END DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"2022"}
        />
        <ResumeHeading
          heading={"Freelance"}
          subHeading={"FULL STACK SOFTWARE ENGINEER FREELANCER"}
          fromDate={"2022"}
          toDate={"present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as a freelance web developer gradually
            accumulating experience.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -Worked on a Mobile Application for passenger ticket booking and
            reservation depending on the region selected.
          </span>
          <br />
          <span className="resume-description-text">
            - Developed a website for a Car Washing and flower selling Business
            with an admin log in and a dashboard for management.
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develop UI and make ends meet as
            per the given designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Reading Books"
        description="Taking the time to get entertainment through reading various books from different genres like non-fiction and even comic books "
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is a very good stress reliever one that i can never compromise with,skimming through a vast selection of playlists on Spotify and Apple music"
      />
      <ResumeHeading
        heading="Football"
        description="Outside being a tech enthusiast and a code writer , i enjoy playing sports like soccer and also love watching the beautiful game as a fan "
      />
      <ResumeHeading
        heading="Gaming"
        description="I sometimes like to partake in an array of games both casual and competitive from different categories like fps games from consoles, operation board games like chess and monopoly to challenge and sharpen reflexes"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
