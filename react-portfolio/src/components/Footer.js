import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Githubicon from "@material-ui/icons/GitHub";
import Twittericon from "@material-ui/icons/Twitter";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedInIcon />
        <Githubicon />
        <Twittericon />
      </div>
      <p> &copy; 2023 Juanitosoftware.com</p>
    </div>
  )
}

export default Footer
