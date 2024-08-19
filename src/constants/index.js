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
  threejs,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
  seventhImage,
  eighthImage,
  ninthImage,
  tenthImage,
  eleventhImage,
  twelfthImage,
  thirteenthImage,
  fourteenthImage,
  fifteenthImage,
  sixteenthImage,
  seventeenthImage,
  eighteenthImage,
  nineteenthImage,
  twentiethImage,
  twentyFirstImage,
  twentySecondImage,
  twentyThirdImage,
  twentyFourthImage,
  twentyFifthImage,
  twentySixthImage,
  twentySeventhImage,
  twentyEighthImage,
  twentyNinthImage,
  thirtiethImage,
  thirtyFirstImage,
  thirtySecondImage,
  thirtyThirdImage,
  thirtyFourthImage,
  thirtyFifthImage,
  thirtySixthImage,
  thirtySeventhImage,
  thirtyEighthImage,
  thirtyNinthImage,
  fortiethImage,
  fortyFirstImage,
  fortySecondImage,
  fortyThirdImage,
  fortyFourthImage,
  fortyFifthImage,
  fortySixthImage,
  fortySeventhImage,
  fortyEighthImage,
  fortyNinthImage,
  fiftiethImage,
  fiftyFirstImage,
  fiftySecondImage,
  fiftyThirdImage,
  fiftyFourthImage,
  fiftyFifthImage,
  fiftySixthImage,
  fiftySeventhImage,
  fiftyEighthImage,
  fiftyNinthImage,
  sixtiethImage,
  sixtyFirstImage,
  sixtySecondImage,
  sixtyThirdImage,
  sixtyFourthImage,
  sixtyFifthImage,
  sixtySixthImage,
  sixtySeventhImage,
  sixtyEighthImage,
  sixtyNinthImage,
  seventiethImage,
  seventyFirstImage,
  seventySecondImage,
  seventyThirdImage,
  seventyFourthImage,
  seventyFifthImage,
  seventySixthImage,
  seventySeventhImage,
  seventyEighthImage,
  seventyNinthImage,
  eightiethImage,
  eightyFirstImage,
  eightySecondImage,
  eightyThirdImage,
  eightyFourthImage,
  eightyFifthImage,
  eightySixthImage,
  eightySeventhImage,
  eightyEighthImage,
  eightyNinthImage,
  ninetiethImage

} from "../assets";

export const navLinks = [
  {
    id:'home',
    title:'Home',
    to: '/'
  },
  {
    id: 'about',
    title: 'About Us',
    to:'/about'
  },
  {
    id: "services",
    title: "Services",
    to:'#',
    dropdown: true,
    subLinks: [
      {id: 'WebDevelopment',title: 'Web-Development',to:'/services/Web-Development'},
      {id: 'SEO',title: 'SEO',to: '/services/SEO'},
      {id: 'AppDevelopment',title: 'App-Development',to: '/services/App-Development'}
    ]
  },
  {
    id: "client",
    title:"Client",
    to: '/clients'
  },
  {
    id: "contact",
    title: "Contact",
    to: "/contact"
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "App Development",
    icon: mobile,
  },
  {
    title: "Ecommerce",
    icon: backend,
  },
  {
    title: "SEO Optimization",
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

const clients = [
  {
    name: "Kalkiram",
    icon: firstImage,
  },
  {
      name: "Bachpan",
      icon: secondImage,
  },
  {
      name: "Satya Sanatan News",
      icon: thirdImage,
  },
  {
      name: "Senalcaterers",
      icon: fourthImage,
  },
  {
      name: "Stochos Chem Pvt Ltd",
      icon: fifthImage,
  },
  {
      name: "Pitambara",
      icon: sixthImage,
  },
  {
      name: "Soft360",
      icon: seventhImage,
  },
  {
      name: "Daiwik",
      icon: eighthImage,
  },
  {
      name: "Daremedia",
      icon: ninthImage,
  },
  {
      name: "Jayceramic",
      icon: tenthImage,
  },
  {
      name: "Meghraj Rathod",
      icon: eleventhImage,
  },
  {
      name: "Rutvish Organic",
      icon: twelfthImage,
  },
  {
      name: "Deltin Group",
      icon: thirteenthImage,
  },
  {
      name: "Jay Security",
      icon: fourteenthImage,
  },
  {
      name: "EMS Revolution",
      icon: fifteenthImage,
  },
  {
      name: "Bluman",
      icon: sixteenthImage,
  },
  {
      name: "Compuserve",
      icon: seventeenthImage,
  },
  {
      name: "Central Jail",
      icon: eighteenthImage,
  },
  {
      name: "Devalaye",
      icon: nineteenthImage,
  },
  {
      name: "Kavechemicals LLP",
      icon: twentiethImage,
  },
  {
      name: "Rotary Club Of Vapi Phoenix",
      icon: twentyFirstImage,
  },
  {
      name: "Platinaoil Field Pvt Ltd",
      icon: twentySecondImage,
  },
  {
      name: "Attaache Accessories",
      icon: twentyThirdImage,
  },
  {
      name: "Galaxy PetroChemicals",
      icon: twentyFourthImage,
  },
  {
      name: "Shree Umiya Holiday Club",
      icon: twentyFifthImage,
  },
  {
      name: "Akksar Alliance Exports LLP",
      icon: twentySixthImage,
  },
  {
      name: "G Poly Plast Industries",
      icon: twentySeventhImage,
  },
  {
      name: "Hitesh Electricals",
      icon: twentyEighthImage,
  },
  {
      name: "Navya Entertainment",
      icon: twentyNinthImage,
  },
  {
      name: "Samarpan Gnyan School",
      icon: thirtiethImage,
  },
  {
      name: "The Cosmetic World",
      icon: thirtyFirstImage,
  },
  {
      name: "Apartex Engineering",
      icon: thirtySecondImage,
  },
  {
      name: "Creative Enterprise",
      icon: thirtyThirdImage,
  },
  {
      name: "Navya Color Services",
      icon: thirtyFourthImage,
  },
  {
      name: "Hardik Computers",
      icon: thirtyFifthImage,
  },
  {
      name: "Interior Point",
      icon: thirtySixthImage,
  },
  {
      name: "N J Roadlines",
      icon: thirtySeventhImage,
  },
  {
      name: "Jalaram Enterprises",
      icon: thirtyEighthImage,
  },
  {
      name: "Jamuna Engineering",
      icon: thirtyNinthImage,
  },
  {
      name: "Positron Automation",
      icon: fortiethImage,
  },
  {
      name: "Saturn Extrusion Teknik",
      icon: fortyFirstImage,
  },
  {
      name: "Sunrise Engineering",
      icon: fortySecondImage,
  },
  {
      name: "Swad Celebrations",
      icon: fortyThirdImage,
  },
  {
      name: "Maa Resorts",
      icon: fortyFourthImage,
  },
  {
      name: "Warli",
      icon: fortyFifthImage,
  },
  {
      name: "Parle Biscuits",
      icon: fortySixthImage,
  },
  {
      name: "Sai Poly Plast",
      icon: fortySeventhImage,
  },
  {
      name: "M S Mobile",
      icon: fortyEighthImage,
  },
  {
      name: "Ananven LLP",
      icon: fortyNinthImage,
  },
  {
      name: "Mayanks IT Services",
      icon: fiftiethImage,
  },
  {
      name: "Edufluence Technology",
      icon: fiftyFirstImage,
  },
  {
      name: "Pramukh Finance",
      icon: fiftySecondImage,
  },
  {
      name: "Nagjua Lifespaces",
      icon: fiftyThirdImage,
  },
  {
      name: "New India Assurance",
      icon: fiftyFourthImage,
  },
  {
      name: "Nityo Services Pvt Ltd",
      icon: fiftyFifthImage,
  },
  {
      name: "Atul Ltd",
      icon: fiftySixthImage,
  },
  {
      name: "Flyjac Logistics",
      icon: fiftySeventhImage,
  },
  {
      name: "Thatsend Pvt Ltd",
      icon: fiftyEighthImage,
  },
  {
      name: "R R Fire",
      icon: fiftyNinthImage,
  },
  {
      name: "Airis",
      icon: sixtiethImage,
  },
  {
      name: "Circlips",
      icon: sixtyFirstImage,
  },
  {
      name: "Riya Sanitary",
      icon: sixtySecondImage,
  },
  {
      name: "Besto Kids",
      icon: sixtyThirdImage,
  },
  {
      name: "360Energy",
      icon: sixtyFourthImage,
  },
  {
      name: "Oilchem",
      icon: sixtyFifthImage,
  },
  {
      name: "Mech Boiler",
      icon: sixtySixthImage,
  },
  {
      name: "Priya Creation",
      icon: sixtySeventhImage,
  },
  {
      name: "k.D Marketing",
      icon: sixtyEighthImage,
  },
  {
      name: "NatureOps",
      icon: sixtyNinthImage,
  },
  {
      name: "Machhi Mahajan",
      icon: seventiethImage,
  },
  {
      name: "Marlex Poly Plast",
      icon: seventyFirstImage,
  },
  {
      name: "Omeka Express Elevators",
      icon: seventySecondImage,
  },
  {
      name: "Greenfab Manpower",
      icon: seventyThirdImage,
  },
  {
      name: "Niket Communication",
      icon: seventyFourthImage,
  },
  {
      name: "Shivam Transport",
      icon: seventyFifthImage,
  },
  {
      name: "Alok Industries",
      icon: seventySixthImage,
  },
  {
      name: "Rikeep",
      icon: seventySeventhImage,
  },
  {
      name: "SPN Marble",
      icon: seventyEighthImage,
  },
  {
      name: "Kangen Water",
      icon: seventyNinthImage,
  },
  {
      name: "Nicika",
      icon: eightiethImage,
  },
  {
      name: "Moksh Print Industries",
      icon: eightyFirstImage,
  },
  {
      name: "Technology Craft Limited",
      icon: eightySecondImage,
  },
  {
      name: "Kweng Alloys Pvt Ltd",
      icon: eightyThirdImage,
  },
  {
      name: "Trutle Consulting",
      icon: eightyFourthImage,
  },
  {
      name: "Pioneer Stationery Pvt Ltd",
      icon: eightyFifthImage,
  },
  {
      name: "Point Technovation Pvt Ltd",
      icon: eightySixthImage,
  },
  {
      name: "Ambertex Sekhsaria Exports",
      icon: eightySeventhImage,
  },
  {
      name: "Team Computers Pvt Ltd",
      icon: eightyEighthImage,
  },
  {
      name: "Health Army",
      icon: eightyNinthImage,
  },
  {
      name: "logiKAVE cargo LLP",
      icon: ninetiethImage,
  }
];

const experiences = [
  {
    title: "Strategy",
    iconBg: "#383E56",
    number: "01",
    points: [
      "We define your competition and target audience.",
      "Discover what is working in your online industry, then design your website accordingly.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Design",
    iconBg: "#383E56",
    number: "02",
    points: [
      "Color scheme, layout, sitemap, and style.",
      "We will bring your brand to life with a one of a kind masterpiece, built just for you.",
    ],
  },
  {
    title: "Develop",
    iconBg: "#383E56",
    number: "03",
    points: [
      "We turn your ideas into a reality & your website is placed on a development serverwhere you get to watch the whole process, live.",
    ],
  },
  {
    title: "Support",
    iconBg: "#383E56",
    number: "04",
    points: [
      "We provide extensive support for your website. ",
      "You issue a problem and we solve it within no time",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but OctaCore Technologies proved me wrong.",
    name: "Dharmesh Ahir",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "I've never met a web developer company who truly cares about their clients' success like OctaCore Technologies does.",
    name: "Prashant Lad",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After OctaCore Technologies optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Gaurav Naik",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

export { services, technologies, experiences, testimonials, clients};
