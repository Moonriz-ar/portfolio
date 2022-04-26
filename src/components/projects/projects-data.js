export const projects = [
  {
    id: 1,
    title: "Movie app.",
    secondaryTitle: "Alkemy Skill Up React I",
    date: "April 2022",
    tech: ["React", "React Router", "Tailwind"],
    description: `Apart from practicing the basics in React, also learnt new concepts such as React Router Dom and how to use it, how to restrict access to certain pages according to login status.`,
    reminder: true,
    demoLink: `https://movie-webapp-pied.vercel.app/`,
    repoLink: `https://github.com/Moonriz-ar/movie-webapp`,
    imgPath: "/img/project-alkemy-skillup-i.png",
  },
  {
    id: 2,
    title: "Recipe app.",
    secondaryTitle: "Alkemy React screening challenge",
    date: "February 2022",
    tech: ["React", "React Bootstrap"],
    description: `The assignment is to develop a web application hotel menu using Spoonacular API.

    I learnt how to use JWT local storage for authentication, React useContext and useReducer for state management, Sweet Alert for pop up alerts, Formik for form validation.`,
    reminder: true,
    demoLink: `https://alkemy-challenge-react-7jtis9vzz-moonriz-ar.vercel.app/`,
    repoLink: `https://github.com/Moonriz-ar/alkemy-challenge-react`,
    imgPath: "/img/project-alkemy-challenge.png",
  },
  {
    id: 3,
    title: "Travel blog.",
    secondaryTitle: "Remake concept of my uncle's blog",
    date: "January 2022",
    tech: ["Next.js", "Ghost CMS", "Tailwind"],
    description: `The blog backend uses Ghost headless CMS hosted on Heroku to have an intuitive dashboard. The front uses Next.js hosted on Vercel to consume the APIs provided by Ghost and generate the static files with ISR (Incremental Static Regeneration). It is a responsive website using Tailwind for styling.`,
    reminder: false,
    demoLink: `https://leandro-cheng.vercel.app/`,
    repoLink: `https://github.com/Moonriz-ar/leandro-cheng`,
    imgPath: "/img/project-travel-blog.png",
  },
];