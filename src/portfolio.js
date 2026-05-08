/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shrikant Tulshigar | Portfolio",
  description:
    "Java Backend Developer with 2.6+ years of experience in Spring Boot, Microservices, Kafka, Docker, Kubernetes, and AWS.",
  og: {
    title: "Shrikant Tulshigar Portfolio",
    type: "website",
    url: "http://ShrikantTulshigar.com/",
  },
};

//Home Page
const greeting = {
  title: "Shrikant Tulshigar",
  logo_name: "ShrikantTulshigar",
  subTitle:
    "Java Backend Developer focused on building scalable enterprise applications with Spring Boot, Microservices, REST APIs, Kafka, and cloud-native DevOps workflows.",
  resumeLink: require("./assets/docs/Resume.pdf"),
  portfolio_repository: "https://github.com/shrikant2000/ShrikantPortfolio",
  githubProfile: "https://github.com/shrikant2000",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/shrikant2000",
  // linkedin: "https://www.linkedin.com/in/Shrikant-Tulshigar-88710b138/",
  // gmail: "ShrikantTulshigar98@gmail.com",
  // gitlab: "https://gitlab.com/ShrikantTulshigar98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Shrikant_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/shrikant2000",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shrikant-tulshigar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shrikanttulshigar01@gmail.com",
    fontAwesomeIcon: "fa-envelope",
    iconType: "fa-solid",
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /* {
    name: "X-Twitter",
    link: "https://twitter.com/Shrikant_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  }, */
];
const skills = {
  data: [
    {
      title: "Backend Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building scalable enterprise REST APIs with Java 11/17, Spring Boot, and Microservices architecture",
        "⚡ Designing clean API integrations, data contracts, and backend workflows across distributed systems",
        "⚡ Improving reliability and code quality with JUnit, Mockito, and production support practices",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "simple-icons:hibernate",
          style: {
            color: "#59666C",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Cloud and DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Automating build, test, and deployment workflows through Jenkins and CI/CD pipelines",
        "⚡ Deploying and operating containerized services using Docker and Kubernetes",
        "⚡ Working with AWS-hosted services and monitoring production systems with Splunk",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Walchand Institute of Technology, Solapur",
      subtitle: "Bachelor of Engineering in Computer Science",
      logo_path: "walchand-institute.png",
      alt_name: "WIT Solapur",
      duration: "Jul 2017 - May 2021",
      descriptions: [
        "⚡ Built strong fundamentals in software engineering, databases, and backend systems design.",
        "⚡ Completed academic projects in web development and backend engineering with SQL-driven applications.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "GraphQL API Development using Java Spring Boot",
      subtitle: "Udemy",
      logo_path: "",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#8E44AD99",
    },
    {
      title: "Generative AI Integration for Java Applications (Azure OpenAI)",
      subtitle: "Udemy",
      logo_path: "",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#2C3E5099",
    },
    {
      title: "API Crash Course : How to Create, Test, Document Your APIs",
      subtitle: "Udemy",
      logo_path: "",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#7A3E9D99",
    },
    {
      title: "MySql For Beginners : Real database experience Real Fast",
      subtitle: "Udemy",
      logo_path: "",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#49576699",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Java backend engineer with experience in enterprise APIs, microservices, CI/CD, cloud-native deployments, and production support.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Cognizant",
          company_url: "https://www.cognizant.com/",
          logo_path: "cognizant_logo.svg",
          duration: "Sep 2021 - Mar 2024",
          location: "Pune, Maharashtra",
          description: [
            "Developed REST APIs using Java 11/17 and Spring Boot for 50+ enterprise integrations.",
            "Built scalable microservices and improved API data mapping accuracy by 15%.",
            "Implemented Jenkins CI/CD pipelines, reducing deployment effort by 40%.",
            "Achieved 90%+ test coverage with JUnit/Mockito.",
            "Reduced production issue resolution time by 30% using Splunk monitoring.",
          ],
          color: "#0A66C2",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "Internshala",
          company_url: "https://internshala.com/",
          logo_path: "",
          duration: "May 2020 - Jun 2020",
          location: "India",
          description:
            "Developed a web application using PHP, SQL, HTML, and CSS. Built CRUD modules with backend validations and optimized SQL queries, improving data retrieval speed by 15%.",
          color: "#F59E0B",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Projects from my resume highlighting backend development, analytics pipelines, and machine learning implementation.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_Shrikant.png",
    description:
      "I am open to Java backend and microservices opportunities. You can message me and I will reply within 24 hours.",
  },
  addressSection: {
    title: "",
    subtitle: "",
    locality: "Pune",
    country: "India",
    region: "Maharashtra",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
  emailSection: {
    title: "Email",
    subtitle: "shrikanttulshigar01@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
