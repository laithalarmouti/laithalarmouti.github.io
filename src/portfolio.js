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
  title: "Hallo, ich bin Laith",
  subTitle: emoji(
    "Ein leidenschaftlicher Embedded-Software-Entwickler 🚀 spezialisiert auf ARM Cortex-M Firmware-Entwicklung, Echtzeitsysteme mit FreeRTOS, Kommunikationsprotokolle (CAN, SPI, I2C, UART) und eingebettetes maschinelles Lernen mit TensorFlow Lite Micro."
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
  title: "Was ich mache",
  subTitle: "Embedded-Software-Entwickler spezialisiert auf ARM Cortex-M Firmware, Echtzeitsysteme, Kommunikationsprotokolle und eingebettetes maschinelles Lernen.",
  skills: [
    emoji(
      "⚡ Entwicklung von Low-Level-Firmware für ARM Cortex-M Mikrocontroller in C/C++ mit direkter Hardware-Register-Programmierung"
    ),
    emoji(
      "⚡ Entwurf von Echtzeit-Embedded-Systemen mit FreeRTOS, Multitasking, Interrupts und Peripherietreibern"
    ),
    emoji(
      "⚡ Implementierung von Kommunikationsprotokollen wie CAN, SPI, I2C und UART für die Gerätekommunikation"
    ),
    emoji(
      "⚡ Deployment von Machine-Learning-Modellen auf Mikrocontrollern mit TensorFlow Lite Micro für Embedded-AI-Anwendungen"
    ),
    emoji(
      "⚡ Entwicklung vollständiger Embedded-Systeme einschließlich Sensorintegration, Signalverarbeitung und Echtzeit-Datenanalyse"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "C/C++",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Firmware",
    fontAwesomeClassname: "fas fa-microchip"
  },
  {
    skillName: "ARM Cortex-M",
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
    skillName: "CAN / SPI / I2C / UART",
    fontAwesomeClassname: "fas fa-network-wired"
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
      subHeader: "Master of Science in Informatik",
      duration: "July 2024 - July 2025",
      desc: "Forschung zu KI-gestützter Sturzerkennung mit ARM Cortex-M Mikrocontrollern und eingebettetem maschinellem Lernen mit TensorFlow Lite Micro — beste Abschlussarbeit des Jahrgangs (95/100).",
      descBullets: [
        "Entwicklung eines Sturzerkennungssystems auf dem STM32F411RE: Training eines MLP-Modells auf dem SisFall-Datensatz, Int8-Quantisierung zur Ressourcenoptimierung und vollständige On-MCU-Inferenz mit TensorFlow Lite Micro",
        "Vergleich der Erkennungsgenauigkeit zwischen Einzel- und Dual-Gyroskop-Konfigurationen zur Bewertung des Einflusses der Sensoranzahl auf die Modellleistung"
      ]
    },
    {
      schoolName: "Girne American University",
      logo: require("./assets/images/GirneLogo.png"),
      subHeader: "Bachelor of Science in Technische Informatik",
      duration: "July 2017 - July 2021",
      desc: "Bachelorabschluss in Technische Informatik mit Schwerpunkten in Rechnerarchitektur, Betriebssystemen, Embedded Systems und Software Engineering.",
      descBullets: [
        "Kernfächer: Datenstrukturen, Betriebssysteme, Rechnerarchitektur und Software Engineering",
        "Solide Grundlage in C/C++ Programmierung und Low-Level-Systementwicklung"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Embedded Firmware Entwicklung (C/C++, ARM Cortex-M)",
      progressPercentage: "90%"
    },
    {
      Stack: "Kommunikationsprotokolle (CAN, SPI, I2C, UART)",
      progressPercentage: "85%"
    },
    {
      Stack: "Echtzeitsysteme (FreeRTOS)",
      progressPercentage: "80%"
    },
    {
      Stack: "Eingebettetes maschinelles Lernen (TensorFlow Lite Micro)",
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
      desc: "Unterstützung bei der Entwicklung und dem Launch der offiziellen Website und Backend-Systeme von Trinitae Duftkultur.",
      descBullets: [
       "Entwicklung von Backend-Funktionalitäten zur Unterstützung des E-Commerce-Betriebs",
        "Mitarbeit beim Launch der offiziellen Online-Plattform des Unternehmens"
      ]


    },

    {
      role: "Software Developer",
      company: "Kaizen Plus",
      companylogo: require("./assets/images/kaizenLogo.png"),
      date: "January 2024 – May 2024",
      desc: "Arbeit an Unternehmenssoftware und Webanwendungen zur Unterstützung von Betriebsüberwachung und Sicherheitssystemen.",
      descBullets: [
       "Entwicklung eines webbasierten Mitarbeiter-Tracking- und Risikovermeidungssystems für ADNOC (VAE)",
        "Einsatz von .NET Core, Angular und Redis zur Unterstützung von Echtzeit-Überwachungssystemen"
      ]
    },
    {
      role: "Web Developer",
      company: "Alameed",
      companylogo: require("./assets/images/ameedLogo.png"),
      date: "June 2023 – Jan 2024",
      desc: "Entwicklung von Full-Stack-Anwendungen zur Unterstützung interner Geschäftsprozesse."
    },
    {
      role: "Junior Embedded Software Developer",
      company: "Kalamintina",
      companylogo: require("./assets/images/kalamintinaLogo.png"),
      date: "Jun 2022 – Jun 2023",
      desc: "Entwicklung von Embedded-Firmware für ARM Cortex-M Mikrocontroller mit Schwerpunkt auf STM32-Plattformen.",
      descBullets: [
        "Implementierung von Embedded-Firmware in C/C++ für STM32 Mikrocontroller",
        "Entwicklung von Low-Level-Peripherietreibern (GPIO, I2C, SPI, UART, CAN)",
        "Anwendung von RTOS-Konzepten einschließlich Task-Scheduling und Synchronisation",
        "Debugging, Testing und Optimierung von Embedded-Systemen"
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
  title: "Ausgewählte Projekte",
  subtitle: "Firmware-Entwicklungsprojekte mit ARM Cortex-M, FreeRTOS und eingebettetem maschinellem Lernen",
  projects: [
    {
      image: require("./assets/images/STLogo.png"),
  projectName: "MLP Sturzerkennung auf ARM Cortex-M (Abschlussarbeit)",
  projectDesc: "Abschlussarbeit: Sturzerkennungssystem auf dem STM32F411RE mit einem trainierten MLP-Modell auf dem SisFall-Datensatz. Int8-Quantisierung für ressourcenbeschränkte Hardware und vollständige On-MCU-Inferenz mit TensorFlow Lite Micro. Vergleich der Erkennungsgenauigkeit zwischen Einzel- und Dual-Gyroskop-Konfigurationen.",
  footerLink: [
    {
      name: "Repository besuchen",
      url: "https://github.com/laithalarmouti/wearable-fall-detection"
    }
  ]
    },
    {
      image: require("./assets/images/STLogo.png"),
      projectName: "CNN Sturzerkennung auf ARM Cortex-M",
      projectDesc: "KI-basiertes Sturzerkennungssystem auf dem STM32F411RE mit MPU6050-Sensoren und TensorFlow Lite Micro. Implementiert Signalverarbeitung, Feature-Extraktion und Echtzeit-Inferenz mittels eines CNN-Modells auf ARM Cortex-M",
      footerLink: [
        {
          name: "Repository besuchen",
          url: "https://github.com/laithalarmouti/CNN_FALLDETECTION_STM32"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/STLogo.png"),
      projectName: "Industrial Edge Simulator (CAN + FreeRTOS)",
      projectDesc: "Embedded-Projekt auf ARM Cortex-M zur Demonstration von CAN-Kommunikation mit FreeRTOS-Architektur. Enthält CAN RX/TX Tasks, UART-CLI-Schnittstelle, Message Queues und Echtzeit-Logging für Embedded-Debugging.",
      footerLink: [
        {
          name: "Repository besuchen",
          url: "https://github.com/laithalarmouti/Industrial-Edge-Simulator"
        }
      ]
    },
    {
      image: require("./assets/images/STLogo.png"),
      projectName: "Bare-Metal Treiber-Entwicklung",
      projectDesc:
        "Low-Level-Treiberentwicklung für ARM Cortex-M mittels Bare-Metal-Programmierung (STM32F411RE). Implementiert GPIO-, UART-, I2C- und SPI-Treiber über speichermappierte Register und interrupt-basierte Kommunikation.",
      footerLink: [
        {
          name: "Repository besuchen",
          url: "https://github.com/laithalarmouti/STM32F411RE"
        }
        
      ]
    },
    {
      image: require("./assets/images/STLogo.png"),
      projectName: "MPU6050 Sensordaten-Visualisierung",
      projectDesc:
        "Embedded-System zur Erfassung von MPU6050-IMU-Daten und Visualisierung von Bewegungssignalen über Serial-Plotter-Ausgabe. Demonstriert Sensor-Interfacing, Datenerfassung und Echtzeit-Datenüberwachung.",
      footerLink: [
        {
          name: "Repository besuchen",
          url: "https://github.com/laithalarmouti/MPU6050READ-PLOT"
        }
      ]
    },
     {
      image: require("./assets/images/STLogo.png"),
      projectName: "Temperaturüberwachung mit OLED-Display",
      projectDesc:
        "Eingebettetes Temperaturüberwachungssystem mit DS18B20-Digitalsensor und Echtzeit-Datenanzeige auf einem SSD1306-OLED-Display. Demonstriert OneWire-Kommunikation, I2C-Display-Interfacing und Sensor-Integration.",
      footerLink: [
        {
          name: "Repository besuchen",
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
  title: emoji("Zertifizierungen & Embedded Training 🏆"),
  subtitle:
    "Professionelle Zertifizierungen und vertieftes Training in Embedded Systems, Mikrocontroller-Programmierung und Echtzeit-Betriebssystemen",

  achievementsCards: [
    {
      title: "Mastering Microcontroller and Embedded Driver Development",
      subtitle:
        "Umfassendes Training zu ARM Cortex-M Mikrocontrollern, Bare-Metal-Programmierung, speichermappierten Registern und Low-Level-Peripherietreiber-Entwicklung.",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Embedded Driver Development Certificate",
      footerLink: [
        {
          name: "Zertifikat ansehen",
          url: "https://drive.google.com/file/d/1joUQ4RoIGFnMAuaKqcFDqd2KKRiaeMPZ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Mastering Microcontroller: Timers, PWM, CAN, Low Power",
      subtitle:
        "Fortgeschrittene Mikrocontroller-Programmierung mit Hardware-Timern, PWM-Erzeugung, CAN-Kommunikation und stromsparendem Embedded-System-Design.",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Microcontroller Timers PWM CAN Certificate",
      footerLink: [
        {
          name: "Zertifikat ansehen",
          url: "https://drive.google.com/file/d/1jO_rpfHJdOS1-FzeUMFpx3nd9mkjwBEh/view?usp=sharing"
        }
      ]
    },

    {
      title: "Mastering RTOS: Hands-on FreeRTOS and STM32Fx",
      subtitle: "Praktische Entwicklung von Echtzeit-Embedded-Systemen mit FreeRTOS — Task-Scheduling, Queues, Semaphoren, Mutexe und Debugging-Techniken.",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "FreeRTOS STM32 Certificate",
      footerLink: [
        {
          name: "Zertifikat ansehen", 
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
  title: "Lebenslauf",
  subtitle: "Lebenslauf gerne herunterladen",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Kontakt ☎️"),
  subtitle:
    "Projektanfragen oder einfach Hallo sagen? Mein Posteingang ist immer offen.",
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
