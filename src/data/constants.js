import ufImg from '../images/uf.png'
import ethconImg from '../images/ethicon.png'
import f5Img from '../images/f5.png'
import twentyoneImg from '../images/twentyone.png'
import hw_resume from '../resume/hw.pdf'
import sw_resume from '../resume/sw.pdf'

export const Bio = {
  name: "Quadri Abiru",
  roles: [
    "Software Developer",
    "Embedded Programmer",
    "Network Engineer",
    "Circuit and PCB Designer",
  ],
  description: "I am a versatile engineer with a solid foundation in both hardware and software, driven by curiosity and a mission to understand how technology we use everyday works.\n\nMy academic journey reflects this dual expertise: I began with a hardware-centric focus during my bachelor's in Electrical Engineering, mastering areas like electronics, circuits, embedded programming, and digital logic. Transitioning into my master's, I shifted to the software side, honing skills in networking, distributed/cloud computing, programming, and IoT.\n\nThis blend of disciplines has made me proficient in languages such as Python and C/C++, with hands-on experience in Docker, Kubernetes, and data pipeline development. On the hardware side, I have skills in embedded systems programming, PCB design, and circuit design, enabling me to develop comprehensive, integrated solutions.",
  github: "https://github.com/quadriabiru",
  hw_resume: hw_resume,
  sw_resume: sw_resume,
  linkedin: "https://www.linkedin.com/in/quadriabiru/",
  // twitter: "https://twitter.com/RishavChanda",
  // insta: "https://www.instagram.com/rishav_chanda/",
  // facebook: "https://www.facebook.com/rishav.chanda.165/",
};

export const skills = [
  {
    title: "Programming",
    skills: [
      {
        name: "Python",
        image: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
      },
      {
        name: "C/C++",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        name: "Shell",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg",
      },
      {
        name: "YAML",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/yaml/yaml-original.svg",
      },
      {
        name: "React Js",
        image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    title: "Software/Tools",
    skills: [
      {
        name: "Docker",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Kubernetes",
        image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Terraform",
        image: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
      },
      {
        name: "Flask",
        image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original-wordmark.svg",
      },
      {
        name: "Django",
        image:"https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg",
      },
      {
        name: "GitLab",
        image: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg",
      },
      {
        name: "Jenkins",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
      },
      {
        name: "Apache Kafka",
        image: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-vertical.svg",
      },
      {
        name: "Apache Spark",
        image: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-ar21.svg",
      },
      {
        name: "Grafana",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg",
      },
      {
        name: "MySQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "IAR",
        image: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Code Composer Studio",
        image: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "STM32",
        image: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "MSP430",
        image: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Raspberry Pi",
        image: "https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg",
      },
      {
        name: "Arduino",
        image: "https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg",
      },
      {
        name: "Altium Designer",
        image: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "KiCad",
        image: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: twentyoneImg, // Replace with actual logo
    role: "Software Engineering and Network Support Intern",
    company: "21st Century Technologies Ltd.",
    date: "June 2024 - August 2024",
    desc: "I revamped the company's IP Management System by collaborating with the commercial department to clean and validate outdated Excel IP data, ensuring accuracy. I automated the migration of this data from Excel to MySQL by developing a Python script for efficient transfer. I also deployed a Docker-based solution on the company server, integrating MySQL, Metabase for analytics, Adminer for database management, and Nginx with SSL for secure traffic routing. Additionally, I supported the network team by configuring Cisco switches (IP, Subnetting, VLAN) and automating network device inventory using a Python SNMP script. Lastly, I developed a Python application for streamlined IP database updates with secure user authentication via bcrypt.",
    skills: [
      "Python",
      "MySQL",
      "Docker",
      "Nginx",
      "Metabase",
      "Cisco Switches",
      "IP Management",
      "SNMP",
    ],
  },
  {
    id: 1,
    img: ethconImg, // Replace with actual logo
    role: "Research and Development Co-op",
    company: "Ethicon Inc.",
    date: "September 2022 - December 2022",
    desc: "I collaborated with a cross-functional team to design and implement a test fixture for tracking medical device components. I engineered a C-based sensor driver using CubeMX and IAR to enable SPI communication with a magnetometer and developed STM32 firmware for UART data streaming. I also automated data handling and storage using a custom Python script. In partnership with an external team, I created a multi-threaded Python application that provided real-time visualization of medical device data, greatly enhancing device functionality and analytical insights. Additionally, I presented findings from extensive sensor testing and performed hardware debugging using standard electrical equipment to support product development and team decision-making.",
    skills: [
      "Python",
      "C",
      "STM32",
      "CubeMX",
      "IAR",
      "SPI Communication",
      "UART",
      "Embedded Systems",
    ],
  },
  {
    id: 2,
    img: f5Img, // Replace with actual logo
    role: "Software Engineering Intern",
    company: "F5 Networks",
    date: "June 2022 - September 2022",
    desc: "I engineered a data pipeline for a Digital Twin initiative within Docker, utilizing OpenTelemetry for data transmission and automating configurations with YAML for Prometheus, Kafka, and Grafana. I deployed the pipeline as a Cloud Native Application Bundle (CNAB) on Google Cloud Platform, improving deployment efficiency and securing the Docker ecosystem with NGINX. Additionally, I provided key insights on OpenTelemetry’s effectiveness to senior engineers, influencing strategic decisions and contributing to the project's direction.",
    skills: [
      "OpenTelemetry",
      "Docker",
      "Google Cloud",
      "YAML",
      "Prometheus",
      "Kafka",
      "Grafana",
      "CNAB",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: ufImg, // Replace with actual logo
    school: "University of Florida, Gainesville, FL",
    date: "January 2023 - December 2024",
    grade: "GPA: 3.8/4.0",
    desc: "Pursuing a Master of Science in Electrical Engineering, with a focus on IoT systems, real-time data streaming, and containerization technologies.",
    degree: "Master of Science (M.S.), Electrical Engineering",
  },
  {
    id: 1,
    img: ufImg, // Replace with actual logo
    school: "University of Florida, Gainesville, FL",
    date: "August 2018 - May 2022",
    grade: "GPA: 3.6/4.0",
    desc: "Completed a Bachelor of Science in Electrical Engineering with coursework in embedded systems, circuit design, and software development.",
    degree: "Bachelor of Science (B.S.), Electrical Engineering",
  },
];


export const projects = [
  {
    id: 0,
    title: "Real-time Server CPU Utilization Monitoring",
    date: "August 2024",
    description:
      "Built a C++ application to stream real-time CPU utilization data over WebSockets to Grafana for visualization. Used Boost Asio & Boost Beast for WebSocket connections and data transmission. Implemented multithreading to handle multiple WebSocket clients.",
    tags: ["C++", "WebSockets", "Grafana", "Docker"],
    category: "system monitoring",
    github: "https://github.com/user/realtime-cpu-monitor", // Replace with actual GitHub link
  },
  {
    id: 1,
    title: "Circuit Analysis Tool",
    date: "July 2024",
    description:
      "Engineered a circuit analysis tool in C++ for computing currents, voltage potentials, and voltage drops using Gaussian elimination. Achieved 96% accuracy and robustness for analyzing both simple and complex circuit netlists.",
    tags: ["C++", "Gaussian Elimination", "Vectors", "Stack", "Queue"],
    category: "circuit analysis",
    github: "https://github.com/user/circuit-analysis-tool", // Replace with actual GitHub link
  },
  {
    id: 2,
    title: "Distributed Data Processing Pipeline",
    date: "May 2024",
    description:
      "Deployed a 3-node distributed data pipeline on AWS using EC2, Apache Kafka, and Apache Spark. Developed Flask API for managing data streams and secured the system with token-based authentication.",
    tags: ["AWS", "Apache Kafka", "Apache Spark", "Flask", "Python"],
    category: "data processing",
    github: "https://github.com/user/distributed-data-pipeline", // Replace with actual GitHub link
  },
  {
    id: 3,
    title: "UF Wireless Lab IoT Research Project",
    date: "May 2023",
    description:
      "Engineered a multi-protocol IoT gateway leveraging Python on Raspberry Pi, slashing device overhead and cutting costs by 75%. Designed 5 custom ESP32-based PCBs for remote sensor deployment and orchestrated a real-time data pipeline utilizing AWS IoT Core, TimeStream, and Grafana.",
    tags: ["Python", "PCB Design", "Raspberry Pi", "AWS IoT Core", "Grafana"],
    category: "IoT",
  },
  {
    id: 4,
    title: "Automated Trading Bot",
    date: "May 2023",
    description:
      "Engineered a Python trading bot leveraging the Robin Stocks API to automate trading on the Robinhood platform. Utilized Pandas for technical analysis of 50-day and 20-day simple moving averages (SMA) to identify market signals.",
    tags: ["Python", "Pandas", "API", "Automation"],
    category: "trading",
    github: "https://github.com/user/automated-trading-bot", // Replace with actual GitHub link
  },
  {
    id: 5,
    title: "Cloud Cluster Management with Kubernetes",
    date: "August 2023",
    description:
      "Orchestrated a 3-node Kubernetes cluster using kubeadm, kubectl, and kubelet in a CloudLab Linux virtual environment. Monitored system resources and implemented first-order linear models to achieve 80% CPU utilization through pod allocations.",
    tags: ["Docker", "Kubernetes", "Python"],
    category: "cloud management",
    github: "https://github.com/user/kubernetes-management", // Replace with actual GitHub link
  },
  {
    id: 6,
    title: "Reverse Polarity Protection Circuit",
    date: "March 2022",
    description:
      "Designed and prototyped a reverse polarity protection circuit using a smart diode and NMOS transistor. Improved system reliability by 8%, and documented power consumption analysis through datasheet evaluations.",
    tags: ["PCB Design", "Circuit Design", "NMOS Transistor", "Smart Diode"],
    category: "circuit design",
  },
  {
    id: 7,
    title: "UF Hydro Patrol Project",
    date: "March 2022",
    description:
      "Developed custom PCBs for sensor nodes, incorporating MOSFET switches to reduce interference and improve signal integrity. Performed continuity testing and assembled the PCB using surface mount soldering techniques.",
    tags: ["PCB Design", "Circuit Design", "MOSFET", "Soldering"],
    category: "PCB design",
  },
];


export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
