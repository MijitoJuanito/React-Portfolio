import React from 'react';
import Pic1 from "../assets/pic1.jpg";
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> About Me</h2>
        <img src={Pic1} alt='avatar pic' />
      </div>
      <div className='prompt'>
        <h3>Hello, my name is Juan De La Cruz. I am curentally 22 years old and also I am an aspiring software programmer with a strong foundation in both front-end and back-end development. My passion for technology and problem-solving has driven me to continuously expand my skills in the world of programming.

With a background in computer science and hands-on experience in web development, I am eager to embark on a career in software development where I can leverage my technical expertise to create efficient and user-friendly software solutions. I thrive on challenges and am committed to staying up-to-date with the latest industry trends and best practices.

As a dedicated learner and a team player, I look forward to contributing my skills and enthusiasm to projects that push the boundaries of what technology can achieve. I am excited about the opportunities that lie ahead in this dynamic field and am motivated to make a meaningful impact through code.

 </h3>
      </div>
    </div>
  );
  }
export default AboutMe;
