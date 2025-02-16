// import React, { Fragment, useEffect } from "react";
// import { Provider } from "react-redux";
// import store from "./store";
// import Alert from "./components/Layout/Alert";
// import Header from "./components/Layout/Header";

// import "./App.css";
// import About from "./components/Pages/About";
// import Landing from "./components/Pages/Landing";
// import Login from "./components/auth/login";
// import Adminlogin from "./components/auth/Adminlogin";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { loaduser } from "./actions/auth";
// import setauthtoken from "./utils/setauthtoken";
// import Footer from "./components/Layout/Footer";
// import Dashboard from "./components/auth/Dashboard";
// import UserReport from "./components/User/UserReport";
// import UserLogin from "./components/User/UserLogin";
// import UserAdd from "./components/User/UserAdd";
// import UserDetails from "./components/User/UserDetails";
// import LeaveReport from "./components/Leave/LeaveReport";
// import LeaveAdd from "./components/Leave/LeaveAdd";
// import LeaveDetails from "./components/Leave/LeaveDetails";
// import FeedbackReport from "./components/Feedback/FeedbackReport";
// import FeedbackAdd from "./components/Feedback/FeedbackAdd";
// import FeedbackDetails from "./components/Feedback/FeedbackDetails";
// import SalaryReport from "./components/Salary/SalaryReport";
// import SalaryAdd from "./components/Salary/SalaryAdd";
// import SalaryDetails from "./components/Salary/SalaryDetails";
// import Team from "./components/Pages/Team";
// import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// if (localStorage.token) {
//   setauthtoken(localStorage.token);
// }

// const options = {
//   // you can also just use 'bottom center'
//   position: positions.MIDDLE_RIGHT,
//   timeout: 5000,
//   // offset: "30px",
//   // you can also just use 'scale'
//   transition: transitions.SCALE,
// };

// const App = () => {
//   useEffect(() => {
//     store.dispatch(loaduser());
//   }, []);
//   return (
//     <Provider store={store}>
//       <AlertProvider template={AlertTemplate} {...options}>
//         <Router>
//           <Fragment>
//             <Header />
//             <Alert />
//             <Routes>
//               <Route path="/" element={<Landing />} />
//               <Route path="/Adminlogin" element={<Adminlogin />} />
//               <Route path="/About" element={<About />} />
//               <Route path="/Team" element={<Team />} />

//               <Route path="/leave-add" element={<LeaveAdd />} />
//               <Route path="/leave-report" element={<LeaveReport />} />
//               <Route path="/leave-add/:id" element={<LeaveAdd />} />
//               <Route path="/leave-details/:id" element={<LeaveDetails />} />

//               <Route path="/salary-add" element={<SalaryAdd />} />
//               <Route path="/salary-report" element={<SalaryReport />} />
//               <Route path="/salary-add/:id" element={<SalaryAdd />} />
//               <Route path="/salary-details/:id" element={<SalaryDetails />} />

//               <Route path="/register" element={<UserAdd />} />
//               <Route path="/user-report" element={<UserReport />} />
//               <Route path="/user-add/:id" element={<UserAdd />} />
//               <Route path="/UserLogin" element={<UserLogin />} />
//               <Route path="/user-details/:id" element={<UserDetails />} />

//               <Route path="/feedback-report" element={<FeedbackReport />} />
//               <Route path="/feedback" element={<FeedbackAdd />} />
//               <Route
//                 path="/feedback-details/:id"
//                 element={<FeedbackDetails />}
//               />

//               <Route path="/Login" element={<Login />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//             </Routes>
//             <Footer />
//           </Fragment>
//         </Router>
//       </AlertProvider>
//     </Provider>
//   );
// };
// export default App;


import React, { Fragment, useEffect, useState, useRef } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/Layout/Alert";
import Header from "./components/Layout/Header";
import ChatbotIcon from "./components/ChatbotIcon";
import "./index.css";
import About from "./components/Pages/About";
import Landing from "./components/Pages/Landing";
import Login from "./components/auth/login";
import Adminlogin from "./components/auth/Adminlogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loaduser } from "./actions/auth";
import setauthtoken from "./utils/setauthtoken";
import Footer from "./components/Layout/Footer";
import Dashboard from "./components/auth/Dashboard";
import UserReport from "./components/User/UserReport";
import UserLogin from "./components/User/UserLogin";
import UserAdd from "./components/User/UserAdd";
import UserDetails from "./components/User/UserDetails";
import LeaveReport from "./components/Leave/LeaveReport";
import LeaveAdd from "./components/Leave/LeaveAdd";
import LeaveDetails from "./components/Leave/LeaveDetails";
import FeedbackReport from "./components/Feedback/FeedbackReport";
import FeedbackAdd from "./components/Feedback/FeedbackAdd";
import FeedbackDetails from "./components/Feedback/FeedbackDetails";
import SalaryReport from "./components/Salary/SalaryReport";
import SalaryAdd from "./components/Salary/SalaryAdd";
import SalaryDetails from "./components/Salary/SalaryDetails";
import Team from "./components/Pages/Team";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

if (localStorage.token) {
  setauthtoken(localStorage.token);
}

const options = {
  position: positions.MIDDLE_RIGHT,
  timeout: 5000,
  transition: transitions.SCALE,
};

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    store.dispatch(loaduser());
  }, []);

  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    // Helper function to update chat history
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };
    // Format chat history for API request
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      // Hardcoded API URL for debugging
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=AIzaSyAR3pFwZNrc2QnprgW-auhGvRmXzbgSjHY",
        requestOptions
      );

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");

      // Clear and update chat history with bot's response
      const apiResponseTest = data.candidates[0].content.parts[0].text
        .replace(/\\(.?)\\*/g, "$1")
        .trim();
      updateHistory(apiResponseTest);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    // Auto-scroll whenever chat history updates
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <Fragment>
            <Header />
            <Alert />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/Adminlogin" element={<Adminlogin />} />
              <Route path="/About" element={<About />} />
              <Route path="/Team" element={<Team />} />

              <Route path="/leave-add" element={<LeaveAdd />} />
              <Route path="/leave-report" element={<LeaveReport />} />
              <Route path="/leave-add/:id" element={<LeaveAdd />} />
              <Route path="/leave-details/:id" element={<LeaveDetails />} />

              <Route path="/salary-add" element={<SalaryAdd />} />
              <Route path="/salary-report" element={<SalaryReport />} />
              <Route path="/salary-add/:id" element={<SalaryAdd />} />
              <Route path="/salary-details/:id" element={<SalaryDetails />} />

              <Route path="/register" element={<UserAdd />} />
              <Route path="/user-report" element={<UserReport />} />
              <Route path="/user-add/:id" element={<UserAdd />} />
              <Route path="/UserLogin" element={<UserLogin />} />
              <Route path="/user-details/:id" element={<UserDetails />} />

              <Route path="/feedback-report" element={<FeedbackReport />} />
              <Route path="/feedback" element={<FeedbackAdd />} />
              <Route
                path="/feedback-details/:id"
                element={<FeedbackDetails />}
              />

              <Route path="/Login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

            <div
              className={`chatbot-container ${
                showChatbot ? "show-chatbot" : ""
              }`}
            >
              <button
                onClick={() => setShowChatbot((prev) => !prev)}
                id="chatbot-toggle"
              >
                {showChatbot ? (
                  // Close Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    fill="currentColor"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                ) : (
                  // Open Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    fill="currentColor"
                  >
                    <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                  </svg>
                )}
              </button>
              {/* Chatbot Popup */}
              <div ref={chatBodyRef} className="chatbot-popup">
                <div className="chat-header">
                  <div className="header-info">
                    <ChatbotIcon />
                    <h2 className="logo-text">Chatbot</h2>
                  </div>
                  <button
                    onClick={() => setShowChatbot((prev) => !prev)}
                    className="material-symbols-rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="currentColor"
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </button>
                </div>

                {/* Chatbot body */}
                <div className="chat-body">
                  <div className="message bot-message">
                    <ChatbotIcon />
                    <p className="message-text">
                      Hey there! How can I assist you today?
                    </p>
                  </div>
                  {/* Render the chat history dynamically */}
                  {chatHistory.map(({ role, text }, index) => (
                    <ChatMessage key={index} role={role} text={text} />
                  ))}
                </div>

                <div className="chat-footer">
                  <ChatForm
                    chatHistory={chatHistory}
                    setChatHistory={setChatHistory}
                    generateBotResponse={generateBotResponse}
                  />
                </div>
              </div>
            </div>
            <Footer />
          </Fragment>
        </Router>
      </AlertProvider>
    </Provider>
  );
};

export default App;