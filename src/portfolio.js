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
  username: "Laith Armouti",
  title: "Hi all, I'm Laith",
  subTitle: emoji(
    "A passionate Embedded Software Developer 🚀 specializing in STM32 firmware development, real-time systems with FreeRTOS, communication protocols (CAN, SPI, I2C, UART), and embedded machine learning using TensorFlow Lite Micro."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XgwKDvfSTEgITTozdTBzQcLS4AOupyve/view?usp=sharing", 
    // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/laithalarmouti",
  linkedin: "https://www.linkedin.com/in/laith-alarmouti-400b4b247",
  gmail: "laithalarmouti@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Embedded Software Engineer specializing in STM32 firmware, real-time systems, communication protocols, and embedded machine learning.",
  skills: [
    emoji(
      "⚡ Develop low-level firmware for STM32 microcontrollers using C/C++ and direct hardware register programming"
    ),
    emoji(
      "⚡ Design real-time embedded systems using FreeRTOS, multitasking, interrupts, and peripheral drivers"
    ),
    emoji(
      "⚡ Implement communication protocols such as CAN, SPI, I2C, and UART for embedded device communication"
    ),
    emoji(
      "⚡ Deploy machine learning models on microcontrollers using TensorFlow Lite Micro for embedded AI applications"
    ),
    emoji(
      "⚡ Build complete embedded systems including sensor integration, signal processing, and real-time data analysis"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "C",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "C++",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Low-Level Firmware Development",
    fontAwesomeClassname: "fas fa-microchip"
  },
  {
    skillName: "STM32",
    fontAwesomeClassname: "fas fa-microchip"
  },
  {
    skillName: "FreeRTOS",
    fontAwesomeClassname: "fas fa-tasks"
  },
  {
    skillName: "TensorFlow Lite Micro",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "CAN Bus",
    fontAwesomeClassname: "fas fa-network-wired"
  },
  {
    skillName: "SPI / I2C / UART",
    fontAwesomeClassname: "fas fa-exchange-alt"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  }
],
display: true
  
};



// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GISMA University of Applied Science",
      logo: require("./assets/images/gismaLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "July 2024 - July 2025",
      desc: "Conducted research on AI-powered fall detection using STM32 microcontrollers and embedded machine learning with TensorFlow Lite Micro, achieving the highest thesis grade in the class (95/100).",
      descBullets: [
        "Developed an embedded fall detection system using STM32F411RE and MPU6050 sensors",
        "Implemented and deployed a machine learning model on microcontrollers using TensorFlow Lite Micro"
      ]
    },
    {
      schoolName: "Girne American University",
      logo: require("./assets/images/GirneLogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "July 2017 - July 2021",
      desc: "Completed a Bachelor's degree in Computer Engineering with coursework focused on computer architecture, operating systems, embedded systems, and software engineering.",
      descBullets: [
        "Studied core engineering subjects including data structures, operating systems, computer architecture, and software engineering",
        "Built a strong foundation in C/C++ programming and low-level system development"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Embedded Firmware Development (C/C++, STM32)",
      progressPercentage: "90%"
    },
    {
      Stack: "Real-Time Systems (FreeRTOS, Interrupts, DMA)",
      progressPercentage: "85%"
    },
    {
      Stack: "Embedded Machine Learning (TensorFlow Lite Micro)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};
// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Trinitae Duftkultur Gmbh",
      companylogo: require ("./assets/images/trinitaeLogo.png"),
      date:"May 2024 – Jul 2024",
      desc: "Supported the development and launch of Trinitae Duftkultur’s official website and backend systems to support business operations.",
      descBullets: [
       "Developed backend functionality and business logic to support e-commerce operations",
        "Collaborated with the team to launch the company's official online platform"
      ]


    },

    {
      role: "Software Developer",
      company: "Kaizen Plus",
      companylogo: require("./assets/images/kaizenLogo.png"),
      date: "January 2024 – May 2024",
      desc: "Worked on enterprise software systems and web applications supporting operational monitoring and safety systems.",
      descBullets: [
       "Developed a web-based employee tracking and risk-avoidance system for ADNOC (UAE)",
        "Worked with .NET Core, Angular, and Redis to support real-time monitoring systems"
      ]
    },
    {
      role: "Web Developer",
      company: "Alameed",
      companylogo: require("./assets/images/ameedLogo.png"),
      date: "June 2023 – Jan 2024",
      desc: "Developed full-stack applications to support internal business operations."
    },
    {
      role: "Junior Embedded Software Developer",
      company: "Kalamintina",
      companylogo: require("./assets/images/kalamintinaLogo.png"),
      date: "Jun 2022 – Jun 2023",
      desc: "Developed embedded firmware for ARM Cortex-M microcontrollers with a focus on STM32 platforms.",
      descBullets: [
        "Implemented embedded firmware in C/C++ for STM32 microcontrollers",
        "Developed low-level peripheral drivers (GPIO, I2C, SPI, UART, CAN)",
        "Applied RTOS concepts including task scheduling and synchronization",
        "Worked on debugging, testing, and optimization of embedded systems"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Firmware development projects using STM32, FreeRTOS, and embedded machine learning",
  projects: [
    {
      image: require("./assets/images/STLogo.png"),
      projectName: "CNN Fall Detection on STM32",
      projectDesc: "AI-powered fall detection system deployed on STM32F411RE using MPU6050 sensors and TensorFlow Lite Micro. Implements signal processing, feature extraction, and real-time inference on ARM Cortex-M microcontrollers.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/laithalarmouti/CNN_FALLDETECTION_STM32"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/STLogo.png"),
      projectName: "Industrial Edge Simulator (CAN + FreeRTOS)",
      projectDesc: "STM32F446RE project demonstrating CAN communication with a FreeRTOS-based architecture. Includes CAN RX/TX tasks, UART CLI interface, message queues, and real-time logging for embedded debugging.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/laithalarmouti/Industrial-Edge-Simulator"
        }
      ]
    },
    {
      image: require("./assets/images/STLogo.png"),
      projectName: "STM32 Bare-Metal Driver Development",
      projectDesc:
        "Low-level driver development for STM32F411RE using bare-metal programming. Implements GPIO, UART, I2C, and SPI drivers using memory-mapped registers and interrupt-based communication.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/laithalarmouti/STM32F411RE"
        }
        
      ]
    },
    {
      image: require("./assets/images/STLogo.png"),
      projectName: "MPU6050 Sensor Data Visualization",
      projectDesc:
        "Embedded system for reading MPU6050 IMU data and visualizing motion signals using serial plotter output. Demonstrates sensor interfacing, data acquisition, and real-time data monitoring.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/laithalarmouti/MPU6050READ-PLOT"
        }
      ]
    },
     {
      image: require("./assets/images/STLogo.png"),
      projectName: "STM32 Temperature Monitoring with OLED",
      projectDesc:
        "Embedded temperature monitoring system using the DS18B20 digital temperature sensor with real-time data displayed on an SSD1306 OLED screen. Demonstrates OneWire communication, I2C display interfacing, and embedded sensor integration.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/laithalarmouti/STM32_DS18B20_Temperature_OLED"
        }
      ]
    }



  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications & Embedded Training 🏆"),
  subtitle:
    "Professional certifications and advanced training in embedded systems, microcontroller programming, and real-time operating systems",

  achievementsCards: [
    {
      title: "Mastering Microcontroller and Embedded Driver Development",
      subtitle:
        "Comprehensive training on ARM Cortex-M microcontrollers, bare-metal programming, memory-mapped registers, and low-level peripheral driver development.",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Embedded Driver Development Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1joUQ4RoIGFnMAuaKqcFDqd2KKRiaeMPZ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Mastering Microcontroller: Timers, PWM, CAN, Low Power",
      subtitle:
        "Advanced microcontroller programming including hardware timers, PWM generation, CAN communication, and low-power embedded system design.",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Microcontroller Timers PWM CAN Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1jO_rpfHJdOS1-FzeUMFpx3nd9mkjwBEh/view?usp=sharing"
        }
      ]
    },

    {
      title: "Mastering RTOS: Hands-on FreeRTOS and STM32Fx",
      subtitle: "Hands-on development of real-time embedded systems using FreeRTOS including task scheduling, queues, semaphores, mutexes, and debugging techniques.",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "FreeRTOS STM32 Certificate",
      footerLink: [
        {
          name: "View Certificate", 
          url: "https://drive.google.com/file/d/18F_KL_dggCYYgJJSjTWgrDjQJoBxq_Px/view?usp=sharing"
        }

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49 176 76164535",
  email_address: "laithalarmouti@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
