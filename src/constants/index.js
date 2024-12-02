import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like ReactJs, as well as back-end technologies like Node.js, Express.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "React.js Developer",
    company: "Asahi Bilingual Services",
    description: `Contributed in designing and developing the company website using React.js,
    TailwindCSS, and GSAP for a responsive and user-friendly
    interface. Developing a robust database using SQL and MySQL to efficiently
    manage data related to schools, teachers, and employees handled
    by the company. Collaborating with Japanese clients, leveraging proficiency in the
    Japanese language to ensure effective communication and seamless project execution.`,
    technologies: ["Javascript", "React.js", "TailwindCSS", "GSAP", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Doctor Appointment Management System ( Full Stack )",
    image: project1,
    description: `A user-friendly platform that reduces the effort required to
access healthcare services. Make it easier for patients to find the
right doctors based on specialisation, location, or availability along with Razorpay payment gateway integration.`,
    technologies: [
      "React.js",
      "TailwindCSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Postman",
      "Razorpay",
    ],
    githubRepo: "https://github.com/Developer2925/AppointmentMS",
  },
  {
    title: "CRUD Application ( Full Stack )",
    image: project2,
    description: `A web application enabling users to manage & manipulate personal data. This application enables the user to perform CREATE, RETRIEVE,
UPDATE & DELETE (CRUD) operations on their personal data.`,
    technologies: [
      "React.js",
      "TailwindCSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Postman",
    ],
    githubRepo: "https://github.com/Developer2925/users_crud",
  },
  {
    title: "Book Inventory ( Full Stack )",
    image: project6,
    description: `Enables users to add, edit, update, and delete book details, including the Title, Author, and Publishing Date.
    Integrated React-Notistack to provide real-time notifications for data creation, updates, and deletions, enhancing user
engagement. Added a search filter feature to allow users to quickly locate specific records within the inventory.
Implemented dual view modes, Table View for detailed data representation and Card View for a visually appealing
layout, ensuring user convenience.`,
    technologies: [
      "React.js",
      "TailwindCSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Postman",
    ],
    githubRepo: "https://github.com/Developer2925/book_inventory",
  },
  {
    title: "Gaming Website ( UI )",
    image: project3,
    description: `Developed a dynamic and responsive UI of a gaming website ensuring a modern and
visually appealing user interface. Integrated GSAP (GreenSock Animation Platform) to create
engaging and smooth animations for an interactive user experience. Focused on responsiveness to deliver a seamless experience
across various devices and screen sizes.`,
    technologies: [
      "React.js",
      "TailwindCSS",
      "GSAP ( GreenSock Animation Platform )",
    ],
    githubRepo: "https://github.com/Developer2925/awwards_zentry",
    projectLink: "https://awwards-zentry-eight.vercel.app/",
  },
  {
    title: "Modern Bank Application ( UI )",
    image: project4,
    description: `Designed a modern and visually appealing user interface for a
banking application to enhance the user experience. Implemented responsive design for seamless functionality across
devices. Focused on accessibility and usability to meet modern UI/UX standards.`,
    technologies: ["React.js", "TailwindCSS"],
    githubRepo: "https://github.com/Developer2925/ReactProject",
    projectLink: "https://react-project-three-silk.vercel.app/#product",
  },
  {
    title: "Portfolio Website",
    image: project5,
    description: `A personal portfolio website designed to effectively showcase my technical skills, 
    professional experience, and projects, while providing an intuitive way for visitors to connect with me 
    through social media and a contact details. Built with a focus on responsiveness and modern design, this portfolio 
    reflects my expertise and passion for web development.`,
    technologies: ["React.js", "TailwindCSS", "Framer Motion"],
    githubRepo: "https://github.com/Developer2925/portfolio",
    projectLink: "https://om-dhakulkar-portfolio.vercel.app",
  },
];

export const EDUCATION = [
  {
    mop: "June",
    yop: "2024",
    institute: "Anjuman College of Engineering and Technology",
    level: "BTech - Electronics and Telecommunication Engineering",
    grade: "77.40",
  },
  {
    mop: "February",
    yop: "2020",
    institute: "Hadas Junior College",
    level: "XII",
    grade: "65.85",
  },
  {
    mop: "March",
    yop: "2018",
    institute: "Hadas High School",
    level: "X",
    grade: "89.00",
  },
];

export const CERTIFICATIONS = [
  {
    mop: "August",
    yop: "2024",
    name: "Japanese Language NAT-TEST ",
    level: "Q4 ( Equivalent to JLPT N4 )",
    score: 102,
  },
  {
    mop: "August",
    yop: "2022",
    name: "Japanese Language NAT-TEST ",
    level: "Q5 ( Equivalent to JLPT N5 )",
    score: 111,
  },
];

export const ACHIEVEMENTS = [
  {
    month: "March",
    year: "2023",
    title: "INDO-JAPAN Relationship Event",
    decription: `Led the management team with team members of INDO-JAPAN Relationship Club
(IJRC), IIM at IIM Nagpur`,
  },
  {
    month: "January",
    year: "2023",
    title: "OHAYOU JAPAN Event",
    decription:
      "Led the management team of the Event 'OHAYOU JAPAN' held at Somalwar Nikalas, Nagpur",
  },
  {
    year: "2014 | 2015 | 2017",
    title: "Kho-Kho Nationals",
    decription:
      "Part of Maharashtra Kho-Kho team ( Paschim Kshetra ) and secured 2nd place in 2015 & 2017",
  },
];

export const CONTACT = {
  address:
    "PNo. 15, Shivshakti Nagar, Dattawadi, Nagpur, Maharashtra, India, 440023",
  phoneNo: "+91 9175293342 ",
  email: "omdhakulkar2925@gmail.com",
};
