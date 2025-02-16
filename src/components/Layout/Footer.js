import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {  FaUser } from "react-icons/fa";

const Footer = ({ isAuthenticated }) => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h3 style={styles.heading}>Get in touch</h3>
        <div style={styles.icons}>
          <a href="http://www.linkedin.com/in/khushi9555" target="_blank" rel="noopener noreferrer" style={styles.iconContainer}>
            <FaUser style={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/prateek-btech-cse/" target="_blank" rel="noopener noreferrer" style={styles.iconContainer}>
            <FaUser style={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/ruma-lion-b7285320b/" target="_blank" rel="noopener noreferrer" style={styles.iconContainer}>
            <FaUser style={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/subodh-shrivastava-7947b1201/" target="_blank" rel="noopener noreferrer" style={styles.iconContainer}>
            <FaUser style={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/yash-kushwah-mar1103/" target="_blank" rel="noopener noreferrer" style={styles.iconContainer}>
            <FaUser style={styles.icon} />
          </a>
        </div>
        <p style={styles.text}>&copy; {new Date().getFullYear()} Employee Management System</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: { 
    backgroundColor: "#033b6a",
    color: "#ecf0f1",
    textAlign: "center",
    padding: "20px 0",
    position: "relative",
    bottom: 0,
    width: "100%",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  heading: {
    fontSize: "22px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
  iconContainer: {
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease",
  },
  icon: {
    fontSize: "24px",
    color: "#033b6a",
  },
};

Footer.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Footer);
