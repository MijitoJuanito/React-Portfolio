import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Githubicon from "@material-ui/icons/GitHub";
import Twittericon from "@material-ui/icons/Twitter";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/juan-de-la-cruz-958518294/'><LinkedInIcon /></a>
        <a href='https://github.com/MijitoJuanito'><Githubicon  /></a>
        <a href='https://twitter.com/JdelMijo'><Twittericon /></a>
      </div>
      <p> &copy; 2023 Juanitosoftware.com</p>
    </div>
  )
}

export default Footer
