import work1 from '../images/work-1.jpg';
import work2 from '../images/work-2.png';
import work3 from '../images/work-3.jpg';
import work4 from '../images/work-4.png';
import work5 from '../images/work5.png';

const recentWork = [
  {
    id: 1,
    picFile: work1,
    project_title: 'Conference Project',
    description: 'This is my Capstone project for the 1st module on Microverse. This project used HTML, CSS, and JavaScript and was based on the design made by Cindy Shin. Feel free to see the live version, if you like it please give it a star!',
    skill: ['css', 'html', 'javaScript'],
    links: ['https://aron-helu.github.io/Capstone/', 'https://github.com/aron-helu/Capstone'],
  },
  {
    id: 2,
    picFile: work3,
    project_title: 'Space Travelers Hub',
    description: "Traveler's website was built with actual live data from the SpaceX API. The application provides commercial and scientific space travel services that allow users to book rockets and join selected space missions.",
    skill: ['css', 'html', 'React'],
    links: ['https://raw.githubusercontent.com/aron-helu/Space-Traveler/master/Screenshot%20from%202022-09-06%2008-30-37.jpg', 'https://github.com/aron-helu/Space-Traveler'],
  },
  {
    id: 3,
    picFile: work4,
    project_title: 'Rest Countries Api',
    description: 'Rest Country api is a react redux application based data fetched from rest countries api. The application allows user to filter information by different continents.',
    skill: ['css', 'html', 'React'],
    links: ['https://631b59aa07415c168cf6fcc0--polite-griffin-2be7d6.netlify.app/', 'https://github.com/aron-helu/Rest-Countries'],
  },
  {
    id: 4,
    picFile: work2,
    project_title: 'Budget app',
    description: 'Budget-app is a tracking your spending is often the first step in getting your finances in order. By understanding what you spend money on and how much you spend, you can see exactly where your cash is going and areas where you can cut back.',
    skill: ['Ruby', 'Rails', 'PostgreSQL'],
    links: ['https://budget-app-a3.onrender.com/', 'https://github.com/aron-helu/Budget-app'],
  },
  {
    id: 5,
    picFile: work5,
    project_title: 'Rails Food recipe App',
    description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    skill: ['Ruby', 'Rails', 'PostgreSQL'],
    links: ['https://github.com/aron-helu/food_reciepe'],
  },
];

export default recentWork;
