/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Paul Pathak",
  title: "Hi all, I'm Paul",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Springboot / Angular / JavaScript / Reactjs / Nodejs / React Native / Kotlin and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github_personal: "https://github.com/poulpathak1",
  github_business: "https://github.com/tankdynamixlabs",
  linkedin: "https://www.linkedin.com/in/poulpathak1/",
  email_personal: "hi@poulpathak.com",
  email_business: "dev@tankdynamixlabs.com",
  facebook: "https://www.facebook.com/pthkpdevil203",
  instagram: "https://www.instagram.com/paul.pathak/",
  twitter: "https://www.x.com/paulpathak/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Houston",
      logo: require("./assets/images/uh_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017 - August 2020",
      descBullets: [
        "Minor in Mathematics",
        "Air Force ROTC ",
        "Magna Cum Laude",
        "Dean’s List"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Springboot", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Angular",
      progressPercentage: "70%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "99%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "General Motors",
      companylogo: require("./assets/images/gm_logo.png"),
      date: "Jan 2022 – Present",
      descBullets: [
        "4h → sub–minute: Designed Java 17/Spring Boot services for end–to–end validation and load, usingparallel execution, optimized data structures, targeted caching, and set–based SQL (MERGE/UPSERT)on Oracle 19c; improved data integrity and on–time executive reporting.",
        "Reduced manual effort by ˜70% (3–4 FTE) via WebSockets/SSE progress, centralized ProcessAuditLog, and idempotent replays; eliminated chronic failure modes in daily/month–end processing.",
        "$475K–$525K annual savings: Insourced platform components and retired legacy licensing/upgradecontracts; simplified lifecycle management and reduced vendor exposure.",
        "Platform consolidation : Consolidated three legacy PowerBuilder apps and a separate global reporting stack into a single platform by restructuring relational schemas (period partitioning, surrogate keys, normalized lookups) and simplifying ETL; reduced redundant transformations by ˜80% and lowered TCO.",
        "Processed 1B+ records/year across 80+ markets with secure ingest, archival, robust error handling, and audit trails; enabled near–real–time previews via Kafka–ready outbox/event schemas (Avro/Protobuf).",
        "Reliability & ops: Migrated services to Kubernetes/OpenShift (Helm), implemented RBAC, OpenAPI/Swagger, readiness/health probes, and golden signals; improved release quality with CI/CD (GitHub Actions, Jenkins, SonarQube, Testcontainers); MTTR reduced through runbooks and post–mortems.",
        "Predictive capabilities (PoC): Solutioned forecasting and –suggested transformation rules to reduce rule–authoring toil and accelerate onboarding of new data sources. Software Engineer",
        "Enterprise dealer–financials platform on Azure: Azure AD SSO for a large dealer network, Azure Databricks gold datasets for downstream analytics, Azure PostgreSQL, and Azure Storage; instrumented pipelines with GitHub Actions/Azure DevOps. Delivered multi–million annual savings via insourcing and modernization.",
        "Improved composite generation and daily financial processing by tuning SQL/batch jobs, publishing curated datasets, and integrating embedded analytics with role–based access.",
        "VSNA legacy modernization (PowerBuilder): Contributed to daily processing flows and the staged consolidation of multiple PowerBuilder apps into a modern service boundary; refactored PL/SQL and job orchestration, introduced partitioning and lookup normalization, and added regression testing to stabilize month–end/quarter close."
      ]
    },
    {
      role: "Software Engineer",
      company: "Infosys",
      companylogo: require("./assets/images/infosys_logo.png"),
      date: "Oct 2020 – Jan 2022",
      desc: "Client - Charles Schwab",
      descBullets: [
        "Full–stack delivery: Built Spring Boot microservices (REST/SOAP) and integrated server–side templating for document pipelines; partnered with UI engineers to integrate service contracts, auth flows, and validation, owning features end–to–end (DB → API → UI).",
        "AWS integrations (production–adjacent): Prototyped and delivered cloud–ready features using AWS S3 (object storage for artifacts), API Gateway + Lambda (event–driven processing/PDF render & notifications), and EC2 (testbed for microservice deployment); implemented IAM least–privilege policies and CloudWatch logging/metrics for operability.",
        "Optimized batch/ETL and database access patterns; introduced caching for high–traffic endpoints; improved reliability with idempotent operations and compensating actions."
      ]
    },
//    {
//      role: "Software Engineer Intern",
//      company: "JP Morgan Chase",
//      companylogo: require("./assets/images/chase_logo.png"),
//      date: "Jun 2019 – Aug 2019",
//      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/pridelogpl_logo.jpg"),
      projectName: "Pride Logistics",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.pridelogpl.com/en"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (713) 430 - 6966",
  email_address: "hi@poulpathak.com"
};

// Twitter Section

const twitterDetails = {
  userName: "paulpathak", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
