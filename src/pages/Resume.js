import React from 'react';
import "../styles/Resume.css";


const PDF_FILE_URL = 'build\\Resumefile.pdf'

function Resume() {
  const downloadFileAtURL=(url) => {
    const fileName = url.split('\\').pop();
    const aTag = document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();

  }
  return (
    <div className='Resume'>
      <div className='downloadResume'>
      <button onClick={() => downloadFileAtURL(PDF_FILE_URL)}>Download Resume</button>
      </div>
      <div className='skills'>
        <h1>
          Skills
        </h1>
        <ol className='list'>
          <li className='item'>
            <h2>
              Front-End
            </h2>
            <span>
              HTML, CSS, Javascript, JQuery, Responsive Design, React, Bootstrap
            </span>
          </li>
          <li className='item'>
            <h2>
              Back-End
            </h2>
            <span>
              APIs, Node, Express, MySQL: Sequelize, MongoDB: Mongoose, REST, Graphql
            </span>
          </li>
        </ol>

      </div>
    </div>
  )
}

export default Resume
