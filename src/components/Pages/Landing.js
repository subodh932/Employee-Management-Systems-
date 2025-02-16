// import React from "react";
// import { Link, Navigate } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// const Landing = ({ isAuthenticated }) => {
//   if (isAuthenticated) {
//     return <Navigate to="/Dashboard" />;
//   }
//   return (
//     <section>
//       <div className="home-page">
//         <section id="banner">
//           <div id="main-slider" className="flexslider">
//             <ul className="slides">
//               <li>
//                 <img
//                   src="img/slides/1.jpeg"
//                   alt="flexslider"
//                   style={{ height: 400 }}
//                 />
//                 <div className="flex-caption">
//                   {/* <h3>Employee Management System</h3>
//                            <p>One stop solution for managing all blood banks and invetories</p> */}
//                 </div>
//               </li>
//               <li>
//                 <img
//                   src="img/slides/2.jpeg"
//                   alt="flexslider"
//                   style={{ height: 400 }}
//                 />
//                 <div className="flex-caption"></div>
//               </li>
//             </ul>
//           </div>
//         </section>
//         <section className="jumbobox">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div>
//                   <h1>Employee Management System</h1>
//                   <p>
//                     Employee Management plays a crucial role in ensuring that organizations operate smoothly by managing workforce-related tasks efficiently. While direct communication and motivation are key to fostering employee engagement, handling diverse workforces, ensuring compliance, and maintaining productivity require a structured system. An Employee Management System (EMS) simplifies these challenges by automating critical HR functions, allowing businesses to focus on growth and efficiency.
//                   </p>
//                   <p>
//                     Our Employee Management System is designed to streamline workforce administration through an intuitive platform that manages employee records, salary processing, leave requests, and feedback submissions. It supports CRUD operations for employee details, ensuring seamless data management. Additionally, the system offers secure login management with distinct access for administrators and employees, enhancing transparency and security.
//                   </p>
//                   <p>
//                     Are you looking for an efficient way to manage your workforce? Our EMS provides a comprehensive solution to reduce administrative burden, improve workflow, and optimize organizational productivity.Here's what our app has to offer:
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="content">
//           <div className="container">
//             <div className="row">
//               <div className="skill-home">
//                 <div className="skill-home-solid clearfix">
//                   <div className="col-md-3 text-center">
//                     <div className="box">
//                       <span className="icons c1">
//                         {/* <i className="icon-settings icons"></i> */}
//                         <i className="icons">
//                           {" "}
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="68"
//                             height="68"
//                             viewBox="0 0 36 36"
//                           >
//                             <g
//                               id="clarityEmployeeGroupSolid0"
//                               fill="currentColor"
//                             >
//                               <ellipse cx="18" cy="11.28" rx="4.76" ry="4.7" />
//                               <path d="M10.78 11.75h.48v-.43a6.7 6.7 0 0 1 3.75-6a4.62 4.62 0 1 0-4.21 6.46Zm13.98-.47v.43h.48A4.58 4.58 0 1 0 21 5.29a6.7 6.7 0 0 1 3.76 5.99Zm-2.47 5.17a21.45 21.45 0 0 1 5.71 2a2.71 2.71 0 0 1 .68.53H34v-3.42a.72.72 0 0 0-.38-.64a18 18 0 0 0-8.4-2.05h-.66a6.66 6.66 0 0 1-2.27 3.58ZM6.53 20.92A2.76 2.76 0 0 1 8 18.47a21.45 21.45 0 0 1 5.71-2a6.66 6.66 0 0 1-2.27-3.55h-.66a18 18 0 0 0-8.4 2.05a.72.72 0 0 0-.38.64V22h4.53Zm14.93 5.77h5.96v1.4h-5.96z" />
//                               <path d="M32.81 21.26h-6.87v-1a1 1 0 0 0-2 0v1H22v-2.83a20.17 20.17 0 0 0-4-.43a19.27 19.27 0 0 0-9.06 2.22a.76.76 0 0 0-.41.68v5.61h7.11v6.09a1 1 0 0 0 1 1h16.17a1 1 0 0 0 1-1V22.26a1 1 0 0 0-1-1Zm-1 10.36H17.64v-8.36h6.3v.91a1 1 0 0 0 2 0v-.91h5.87Z" />
//                             </g>
//                           </svg>
//                         </i>
//                       </span>
//                       <div className="box-area">
//                         <h3>Employee Management</h3>
//                         <p>
//                           Efficiently manage all aspects of employee Management with our comprehensive app.Maintain detailed employee records, including personal information, job roles, and work history. Monitor performance, and attendance in a centralized database. Generate comprehensive reports and analytics to make data-driven decisions, enhance workforce efficiency, and foster a well-organized, productive workplace.
//                         </p>
//                         <p>
//                           <a href="#">Learn More</a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-3 text-center">
//                     <div className="box">
//                       <span className="icons c2">
//                         {/* <i className="icon-login icons"></i> */}
//                         <i className="icons">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="68"
//                             height="68"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               fill="currentColor"
//                               d="M6.25 2A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h7.5A2.25 2.25 0 0 0 16 19.771v-1.52a.75.75 0 0 0-.75-.75c-.453 0-.739-.123-.936-.282c-.208-.167-.38-.425-.511-.789c-.273-.755-.302-1.75-.302-2.68a.75.75 0 0 0-.202-.512l-.165-.177a2.449 2.449 0 0 0-.17-.173c-.074-.07-.3-.285-1.183-1.168c-.469-.469-.728-.865-.813-1.168a.616.616 0 0 1-.016-.325a.713.713 0 0 1 .205-.323a.71.71 0 0 1 .322-.204a.612.612 0 0 1 .324.016c.302.085.698.346 1.167.815c.54.54 1.053 1.046 1.512 1.5c.76.752 1.373 1.36 1.72 1.73a.75.75 0 0 0 1.097-1.023A55.424 55.424 0 0 0 16 11.424V8.06l2.841 2.842c.422.422.66.994.66 1.59v8.758a.75.75 0 0 0 1.5 0v-8.757a3.75 3.75 0 0 0-1.099-2.652L16 5.939v-1.69A2.25 2.25 0 0 0 13.75 2h-7.5Zm6.142 14.94c.097.268.222.534.384.782A2.25 2.25 0 0 0 11.5 19.75v.75h-3v-.75a2.25 2.25 0 0 0-2.25-2.25H5.5v-11h.75A2.25 2.25 0 0 0 8.5 4.25V3.5h3v.75a2.25 2.25 0 0 0 2.25 2.25h.75v3.438l-.469-.468c-.531-.531-1.148-1.008-1.821-1.198a2.106 2.106 0 0 0-1.104-.025a2.056 2.056 0 0 0-.632.285a3.5 3.5 0 1 0 1.55 6.324c.037.684.13 1.427.368 2.084ZM8 12a2 2 0 0 1 1.456-1.925a2.16 2.16 0 0 0 .068.883c.189.673.665 1.291 1.197 1.823l.665.662A2 2 0 0 1 8 12ZM5.5 4.25a.75.75 0 0 1 .75-.75H7v.75a.75.75 0 0 1-.75.75H5.5v-.75ZM13 3.5h.75a.75.75 0 0 1 .75.75V5h-.75a.75.75 0 0 1-.75-.75V3.5ZM14.5 19v.75a.75.75 0 0 1-.75.75H13v-.75a.75.75 0 0 1 .75-.75h.75ZM7 20.5h-.75a.75.75 0 0 1-.75-.75V19h.75a.75.75 0 0 1 .75.75v.75Z"
//                             />
//                           </svg>
//                         </i>
//                       </span>
//                       <div className="box-area">
//                         <h3>Salary Management</h3>
//                         <p>
//                           Our app simplifies salary Management by automating payroll processing, including salary calculations, deductions, and bonuses. Easily maintain accurate payment records and generate pay slips effortlessly. The system ensures compliance with tax regulations and statutory requirements, reducing errors. With this feature, managing employee compensation becomes more efficient, saving both time and effort.
//                         </p>
//                         <p>
//                           <a href="#">Learn More</a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-3 text-center">
//                     <div className="box">
//                       <span className="icons c3">
//                         {/* <i className="icon-user icons"></i> */}
//                         <i className="icon-login icons"></i>
//                       </span>
//                       <div className="box-area">
//                         <h3>Leave Management</h3>
//                         <p>
//                         Our app simplifies the leave request and approval process, ensuring transparency and efficiency. Employees can submit requests online, while administrators can track leave balances and maintain accurate records. A centralized calendar helps prevent scheduling conflicts, improving workforce planning. With this feature, you can streamline leave management and enhance overall productivity.
//                         </p>
//                         <p>
//                           <a href="#">Learn More</a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-3 text-center">
//                     <div className="box">
//                       <span className="icons c4">
//                         <i className="icon-home icons"></i>
//                       </span>
//                       <div className="box-area">
//                         <h3>Login Management</h3>
//                         <p>
//                           Ensure secure access to your app with our robust login
//                           Management feature.Manage user accounts, assign roles, and control access levels for administrators and employees. Implement strong authentication to protect sensitive data. You can easily manage user profiles and maintaining control over app functionalities.Simplify the process of managing employee leaves, including vacation, sick leave, and other types of time off.
//                         </p>
//                         <p>
//                           <a href="#">Learn More</a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="aboutUs">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6">
//                 <img src="img/home.jpeg" className="img-center" alt="" />
//               </div>
//               <div className="col-md-6">
//                 <div>
//                   <h2>About Employee Management System</h2>
//                   <p className="text-justify">
//                     Our Employee Management System App offers a user-friendly
//                     interface, intuitive navigation, and robust functionality to
//                     support your administrative tasks. Say goodbye to paperwork,
//                     manual calculations, and scattered information. With our
//                     app, you can streamline your operations, save time, and
//                     increase productivity. Experience the convenience and
//                     efficiency of modern employee Management. Try our Employee
//                     Management System App today and take control of your
//                     workforce management!
//                   </p>
//                   <p className="text-justify">
//                     Employee Management is the process by which employers ensure
//                     workers perform their jobs to the best of their abilities so
//                     as to achieve business goals. It typically entails building
//                     and maintaining healthy relationships with employees, as
//                     well as monitoring their daily labor and measuring progress.
//                     In this way, employers can identify opportunities for
//                     improvement and recognize achievements.
//                   </p>
//                 </div>
//                 <br />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <a href="#" className="scrollup">
//         <i className="fa fa-angle-up active"></i>
//       </a>
//     </section>
//   );
// };
// Landing.propTypes = {
//   isAuthenticated: PropTypes.bool,
// };
// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps)(Landing);


import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Landing.css' ;
import {
  faUsers,
  faMoneyCheckAlt,
  faCalendarCheck,
  faLock
} from "@fortawesome/free-solid-svg-icons";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/Dashboard" />;
  }

  return (
    <section className="home-page">
      {/* Hero Banner Section */}
      <section id="banner">
        <div id="main-slider" className="flexslider">
          <ul className="slides">
            <li>
              <img src="img/slides/1.jpeg" alt="Banner 1" className="banner-img" />
            </li>
            <li>
              <img src="img/slides/2.jpeg" alt="Banner 2" className="banner-img" />
            </li>
          </ul>
        </div>
      </section>

      {/* Intro Section */}
      <section className="jumbobox text-center">
        <div className="container">
          <h1>Employee Management System</h1>
          <p>
            Employee Management plays a crucial role in ensuring that organizations operate smoothly by managing workforce-related tasks efficiently. While direct communication and motivation are key to fostering employee engagement, handling diverse workforces, ensuring compliance, and maintaining productivity require a structured system. An Employee Management System (EMS) simplifies these challenges by automating critical HR functions, allowing businesses to focus on growth and efficiency.
          </p>
          <p>Our Employee Management System is designed to streamline workforce administration through an intuitive platform that manages employee records, salary processing, leave requests, and feedback submissions. It supports CRUD operations for employee details, ensuring seamless data management. Additionally, the system offers secure login management with distinct access for administrators and employees, enhancing transparency and security.
          </p>
          <p>
            Are you looking for an efficient way to manage your workforce? Our EMS provides a comprehensive solution to reduce administrative burden, improve workflow, and optimize organizational productivity.Here's what our app has to offer:
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="content">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <div className="feature-box">
                <FontAwesomeIcon icon={faUsers} size="3x" className="feature-icon c1" />
                <h3>Employee Management</h3>
                <p>
                  Efficiently manage all aspects of employee Management with our comprehensive app.Maintain detailed employee records, including personal information, job roles, and work history. Monitor performance, and attendance in a centralized database. Generate comprehensive reports and analytics to make data-driven decisions, enhance workforce efficiency, and foster a well-organized, productive workplace.

                </p>
                <Link to="#">Learn More</Link>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                <FontAwesomeIcon icon={faMoneyCheckAlt} size="3x" className="feature-icon c2" />
                <h3>Salary Management</h3>
                <p>
                  Our app simplifies salary Management by automating payroll processing, including salary calculations, deductions, and bonuses. Easily maintain accurate payment records and generate pay slips effortlessly. The system ensures compliance with tax regulations and statutory requirements, reducing errors. With this feature, managing employee compensation becomes more efficient, saving both time and effort.
                </p>
                <Link to="#">Learn More</Link>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                <FontAwesomeIcon icon={faCalendarCheck} size="3x" className="feature-icon c3" />
                <h3>Leave Management</h3>
                <p>
                  Our app simplifies the leave request and approval process, ensuring transparency and efficiency. Employees can submit requests online, while administrators can track leave balances and maintain accurate records. A centralized calendar helps prevent scheduling conflicts, improving workforce planning. With this feature, you can streamline leave management and enhance overall productivity.                </p>
                <Link to="#">Learn More</Link>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                <FontAwesomeIcon icon={faLock} size="3x" className="feature-icon c4" />
                <h3>Login Management</h3>
                <p>
                  Ensure secure access to our app with our robust login
                  Management feature.Manage user accounts, assign roles, and control access levels for administrators and employees. Implement strong authentication to protect sensitive data. You can easily manage user profiles and maintaining control over app functionalities.Simplify the process of managing employee leaves, including vacation and sick leave
                </p>
                <Link to="#">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="aboutUs">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="img/about-photo.jpeg" className="img-fluid" alt="About EMS" />
            </div>
            <div className="col-md-6">
              <h2 className="topic">About Our System</h2>
              <p className="text-justify">
              Our Employee Management System App offers a user-friendly
                interface, intuitive navigation, and robust functionality to
                Our Employee Management System App offers a user-friendly
                support your administrative tasks. Say goodbye to paperwork,
                manual calculations, and scattered information. With our
                app, you can streamline your operations, save time, and increase productivity. Experience the convenience and
                efficiency of modern employee Management.
              </p>
              <p className="text-justify">
                Employee Management is the process by which employers ensure
                workers perform their jobs to the best of their abilities so
                as to achieve business goals. It typically entails building
                and maintaining healthy relationships with employees, as
                well as monitoring their daily labor and measuring progress.
                In this way, employers can identify opportunities for
                improvement and recognize achievements.                   </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <a href="#" className="scrollup">
        <i className="fa fa-angle-up active"></i>
      </a>
    </section>
  );
};

// PropTypes
Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

// Redux Mapping
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
