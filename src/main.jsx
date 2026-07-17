import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


//week5
// import App from "./day1/App"; "./day1/App.jsx"
// import  "./day1/App.css"

// import Team from "./week5/day2/team.jsx";
// import "./week5/day2/team.css";

//  import App from "./week5/day3/course.jsx";
//import App from "./week5/day4/App.jsx";
//import App from "./week5/day5/mordern.jsx";
//import App from "./week5/day6/portfolio.jsx";
//week6
//import Student from "./week6/day1/student.jsx";
//import JobPortal from "./week6/day2/jobportal.jsx";
//import News from "./week6/day3/news.jsx";
 //import Product from "./week6/day4/product";
 //import Shop from "./week6/day5/shop.jsx"
 //import Expense from "./week6/day6/expense";
 //week7
// import App from "./week7/day2/app";
 //import Company from "./week7/day1/company";
//  import App from "./week7/day3/app";
//import Movie from "./week7/day4/movie";
import Book from "./week7/day5/book";

ReactDOM.createRoot(
document.getElementById("root")
).render(
    //week5
 //<Team/>
 //<App/> 
//<App/> 
//<App/>
//<App/>
//week6
//<Student/>
//<JobPortal/>
//<News/>
//<Product/>
//<Shop/>
//<Expense/>
//week7
<BrowserRouter>
{/* <App/> */}
{/* <Company/> */}
{/* <App/> */}
{/* <Movie/> */}
<Book/>
</BrowserRouter>

);