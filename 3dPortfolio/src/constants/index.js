import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    kennaLogo,
    amazona,
    javarestaurant,
    uask,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-stack Web Developer",
      icon: web,
    },
    {
      title: "Web-development team member",
      icon: mobile,
    },
    {
      title: "Full-stack MERN E-commerce website",
      icon: backend,
    },
    {
      title: "Sign language detection program using ML & Python",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full-stack Application Developer",
      company_name: "Kenna",
      icon: kennaLogo,
      iconBg: "#383E56",
      date: "January 2024 - April 2024",
      points: [
        "Developing and maintaining web applications using React.js and Node.js to replace old legacy applications currently being used by the company",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create web-based solutions for clients",
        "Making changes to website content upon the clients' requests, ensuring their satisfaction within 24 hours",
        "Optimizing and debugging existing code to reduce poor practices and potential future issues, improving the build speed of the application by 23%",
      ],
    },
    {
      title: "Full-stack e-commerce website",
      company_name: "Personal Project",
      icon: amazona,
      iconBg: "#E6DEDD",
      date: "June 2023 - October 2023",
      points: [
        "Designed responsive front-end UIs using React.js, ensuring seamless user experiences across all devices",
        "Engineered and optimized MongoDB databases, improving data storage and retrieval performance",
        "Developed and maintained REST APIs using Node.js and Express.js, enabling efficient data retrieval and manipulation",
        "Leveraged additional libraries such as react bootstrap to improve aesthetic design of the front end, as well as Mongoose schemas to help maintain data integrity and prevent the insertion of invalid or inconsistent data into the database",
      ],
    },
    {
      title: "Java Restaurant App",
      company_name: "Personal Project",
      icon: javarestaurant,
      iconBg: "#383E56",
      date: "November 2022 - December 2022",
      points: [
        "Designed an app that simulates the UI of a real-world restaurant program, including a menu page, an employee information page, a kitchen management page, and a storage room count page",
        "Used objected-oriented programming concepts to organize code i na manner that is clean and easy to maintain and scale",
        "Reduced program length by 0% through improving conciseness, and simplifying logic",
        "Organized and planned the project using UML diagrams and flowcharts",
      ],
    },
    {
      title: "General Tutor",
      company_name: "UASK Education",
      icon: uask,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Devised and taught lessons on topics such as K-12 high school curriculum, Waterloo Math Contests, and AMC Math Contests",
        "Formulated reports on students' progress for both the employer and the students' parents and communicated future lesson plans customized for each student",
        "Adjusted long-term lesson plans based on the clients' desired timeline and goals (time spent and/or extent of mastery)",
      ],
    },
  ];
   
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };