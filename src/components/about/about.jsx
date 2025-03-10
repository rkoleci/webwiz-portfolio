import React from 'react';
import styled from 'styled-components';
import './about.css';

const Heading = styled.h1`
  text-align: center;
  font-size: 60px;
  letter-spacing: 0;
  color: #000000;
  letter-spacing: -0.03rem;
  margin-bottom: -5px;
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;

const LiteCard = props => {
  return (
    <div
      className="liteCard"
      style={{
        backgroundImage: `url("${props.imageUrl}")`,
        backgroundColor: '#F6F6F6',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: props.color,
      }}
    >
      {/*Icon*/}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

function about() {
  return (
    <div id="about">
      <h1>#About Us</h1>
      <div className="underline"></div>
      <Heading>Not just any other technical club</Heading>
      <div id="cards">
        <LiteCard
          title="Made for students"
          description="Students from all undergraduate programs with interest in growing as a web developer are warmly welcome.  We believe that web development is a -domain that can make a newbie crazy about software development. It doesn’t matter if you are a frontend, full-stack, or backend developer or never even touched a code editor in your life"
         
          color="#000"
        />
        <LiteCard
          title="Design Focus"
          description="Committed to providing resources and content to the web development community. Our entire focus is on web development and design."
         
          color="#000"
        />
        <LiteCard
          title="Practical Guide"
          description="Of course, our content will focus on and use examples from web-based languages such as Javascript and Python. We are big fans of the React and Node.js framework. Still, we believe you shouldn’t limit yourself in this continually evolving sector of technology. We hope you find something useful!"
        
          color="#000"
        />
      </div>
    </div>
  );
}

export default about;
