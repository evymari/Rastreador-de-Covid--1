import {  createBrowserRouter } from "react-router-dom";
// import App from "../App.jsx";
import { Tracker1} from '../views/pageOne/Tracker1'
import Tracker2 from "../views/pageTwo/Tracker2.jsx";
import Tacker3 from "../views/pageThree/Tracker3.jsx";
import Tracker4 from "../views/pageFour/Tracker4.jsx";
import Tracker5 from "../views/pageFive/Tracker5.jsx";
import Tracker6 from "../views/pageSix/Tracker6.jsx";
import Tracker7 from "../views/pageSeven/Tracker7.jsx";
import Tracker8 from "../views/pageEight/Tracker8.jsx";
import Home from "../views/home/Home.jsx"

export const router = createBrowserRouter([
       {
      path: "/",
       element: <Home></Home>
        },
         {
            path: "/Tracker1",
            element: <Tracker1></Tracker1>
             
         },
         {
            path: "/Tracker2",
           element: <Tracker2></Tracker2>
             ,
         },
         {
            path: "/Tracker3",
           element: <Tacker3></Tacker3>
             ,
         },
         {
            path: "/Tracker4",
           element: <Tracker4></Tracker4>
             ,
         },
         {
            path: "/Tracker5",
           element: <Tracker5></Tracker5>
             ,
         },
         {
            path: "/Tracker6",
           element: <Tracker6></Tracker6>
             ,
         },
         {
            path: "/Tracker7",
           element: <Tracker7></Tracker7>
             ,
         },
         {
            path: "/Tracker8",
           element: <Tracker8></Tracker8>
             ,
         }
       
      
     
     
   
 ])


