import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./About.css"; // Custom CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faMoneyBillWave, faCalendarCheck, faComments } from "@fortawesome/free-solid-svg-icons";

const About = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/Dashboard" />;
  }

  return (
    <section className="about-container">

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-description">
            <h2>Why Choose Employee Management System?</h2>
            <p>
              The Employee Management System (EMS) is designed to streamline workforce management through automation,enhancing productivity, efficiency, and employee satisfaction. It integrates HR functions, tracks employee performance, and ensures smooth operations within an organization.
              EMS helps businesses adapt to dynamic workforce needs, ensuring seamless interaction between employees and
              administrators while maintaining compliance with policies.
            </p>
          </div>

          {/* Features Section */}
          <div className="features">
            <div className="feature-box">
              <FontAwesomeIcon icon={faUsers} className="feature-icon" />
              <h3>Employee Management System</h3>
              <p>
                Easily add, update, and view employee details with a structured system that enhances data management for better workforce organization.
              </p>
            </div>

            <div className="feature-box">
              <FontAwesomeIcon icon={faMoneyBillWave} className="feature-icon" />
              <h3>Salary Management System</h3>
              <p>
                Automates payroll processing, ensures accurate salary calculations, timely payments, and minimizes payroll errors.
              </p>
            </div>

            <div className="feature-box">
              <FontAwesomeIcon icon={faCalendarCheck} className="feature-icon" />
              <h3>Leave Management System</h3>
              <p>
                Streamlines leave requests, approvals, and tracking to maintain workflow efficiency and prevent disruptions.
              </p>
            </div>

            <div className="feature-box">
              <FontAwesomeIcon icon={faComments} className="feature-icon" />
              <h3>Feedback Management System</h3>
              <p>
                Allows employees to provide feedback, helping organizations improve workplace conditions and boost employee engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

About.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(About);

