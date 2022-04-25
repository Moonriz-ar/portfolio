export const projects = [
  {
    id: 1,
    title: "Movie app",
    secondaryTitle: "Alkemy Skill Up React I",
    date: "April 2022",
    tech: ["React", "React Router", "Tailwind"],
    description: `This project was completed while following along the "Skill Up React I" module in Alkemy. It was a really good way to further absorb basic React concepts, also learnt new concepts such as: 1- What is React Router and how to use it. 2- How to restrict access to certain pages according if user is logged in or not. 3- Dynamic path with React Router.
        
    Please login with following credentials:
    Username: challenge@alkemy.org  
    Password: react`,
    demoLink: `https://movie-webapp-pied.vercel.app/`,
    repoLink: `https://github.com/Moonriz-ar/movie-webapp`,
  },
  {
    id: 2,
    title: "Recipe app",
    secondaryTitle: "Alkemy React screening challenge",
    date: "February 2022",
    tech: ["React", "React Bootstrap"],
    description: `This is a front end React challenge from Alkemy, the assignment is to develop a web application hotel menu using Spoonacular API.

    I learnt how to use JWT local storage for authentication, React useContext and useReducer for state management, Sweet Alert for pop up alerts, Formik for form validation.
        
    Please login with following credentials:
    Username: challenge@alkemy.org  
    Password: react`,
    demoLink: `alkemy-challenge-react-7jtis9vzz-moonriz-ar.vercel.app`,
    repoLink: `https://github.com/Moonriz-ar/alkemy-challenge-react`,
  },
  {
    id: 3,
    title: "Travel blog",
    secondaryTitle: "Remake concept of my uncle's blog",
    date: "January 2022",
    tech: ["Next.js", "Ghost CMS", "Tailwind"],
    description: `The blog backend uses Ghost headless CMS hosted on Heroku to have an intuitive dashboard. The front uses Next.js hosted on Vercel to consume the APIs provided by Ghost and generate the static files with ISE (Incremental server side rendering). It is a responsive website using Tailwind for styling.

    This was not put in production, since after consideration, the risk of migrating from Weebly is too high and too much work.`,
    demoLink: `https://leandro-cheng.vercel.app/`,
    repoLink: `https://github.com/Moonriz-ar/leandro-cheng`,
  },
];
