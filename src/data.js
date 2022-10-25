export const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Projects',
    path: 'projects',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const projects = [
  {
    name: 'Mobile Course Manager',
    tags: [
      {
        techName: 'Android',
        icon: 'FaAndroid',
      },
      {
        techName: 'Java',
        icon: 'FaJava',
      },
    ],
    description:
      'This Android application allows students to add terms, courses, and assessments to a local database. The app introduced me to the Android framework and encouraged me to learn more about mobile development using Flutter, a cross-platform mobile framework.',
    link: 'https://github.com/ssg406/course-scheduler',
  },
  {
    name: 'Desktop Appointment Manager',
    tags: [
      {
        techName: 'Java',
        icon: 'FaJava',
      },
      {
        techName: 'JavaFX',
        icon: 'FaDesktop',
      },
    ],
    description:
      'An appointment tracker for desktop that stores data in an SQL database locally or in the cloud. Localized into French or English and allows individual users to log in. This was the capstone project for my BS in Software Development and Im currently redeveloping it as a web application using MongoDB, Express, React, and Node.js',
    link: 'https://github.com/ssg406/appointment-app',
  },
  {
    name: 'Tourism Website',
    tags: [
      {
        techName: 'HTML5',
        icon: 'FaHtml5',
      },
      {
        techName: 'CSS3',
        icon: 'FaCss3',
      },
    ],
    description:
      'Tourism and promotional website for the fictional island of Taniti. This project heavily improved my knowledge of CSS and HTML and allowed me to move on to larger projects.',
    link: 'https://github.com/ssg406/taniti-tourism',
  },
  {
    name: 'Portfolio Website',
    tags: [
      {
        techName: 'HTML5',
        icon: 'FaHtml5',
      },
      {
        techName: 'CSS3',
        icon: 'FaCss3',
      },
      {
        techName: 'React.js',
        icon: 'FaReact',
      },
    ],
    description:
      'This portfolio site. I used this project to not only have a portfolio available online but to build a React project from the ground up using what I had learned in other smaller projects.',
    link: 'https://github.com/ssg406/developer-portfolio',
  },
];

export const education = [
  {
    degree: 'Bachelor of Science in Software Development',
    school: 'Western Governors University',
    year: 2022,
  },
  {
    degree: 'Bachelor of Science in Economics',
    school: 'North Central College',
    year: 2011,
  },
];

export const skills = [
  {
    name: 'Java',
    description:
      "Java was the primary language I learned while at WGU and to date the language I can use most fluently. I've completed one large project writing a JavaFX appointment tracker that you can see linked under 'Projects'. The application uses a MySQL database to store appointment data, but I'm currently working on a web version of this app that will use MongoDB and React.js.",
  },
  {
    name: 'C++',
    description:
      'I am comfortable creating command line applications using C++ and am familiar with using the standard library. The WGU BS in Software Development includes one class covering C++ and the development of an object-oriented student grade tracker. A Udemy C++ course was my first in-depth exposure to programming before enrolling at WGU and I thoroughly enjoy using it.',
  },
  {
    name: 'Android',
    description:
      "My Java knowledge helped me to quickly acclimate to programming for Android devices. In the WGU Mobile Application Development course I created a class manager that tracks a student's school terms, classes, and assessments in a database that is persisted locally on the device.",
  },
  {
    name: 'React.js',
    description:
      "My knowledge of React and Javascript has been self-taught as I've had time outside of my classes at WGU. I am currently working on recreating the JavaFX appoiments application mentioned above as a MERN (MongoDB/Express/React/Node) stack web application. I also enjoy the challenge of creating my own designs using CSS for my React apps.",
  },
  {
    name: 'Python',
    description:
      "I was introduced to Python in a Data Structures and Algorithms class and often choose to use Python when working on LeetCode problems and other programming challenges. I'm familiar with basic features of the language as well as some Python-specific features such as generators, list comprehensions, and tuple unpacking.",
  },
];

export const contactMethods = [
  {
    icon: 'FaEnvelope',
    text: 'Email me',
    link: 'mailto:sam@samueljones.codes',
  },
  {
    icon: 'FaLinkedin',
    text: 'Reach out on LinkedIn',
    link: 'https://www.linkedin.com/in/samuel-s-jones',
  },
  {
    icon: 'FaGithub',
    text: 'Find me on Github',
    link: 'https://github.com/ssg406',
  },
];
