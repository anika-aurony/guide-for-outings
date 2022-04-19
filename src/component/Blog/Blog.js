import React from 'react';

const Blog = () => {
    return (
        <div className=' p-5'>
            <h1>Question/Answer </h1>
            <br/>
            <h4>Difference between authorization and authentication</h4>
            <p>Authentication is the process to verify someone's identity whereas authorization is to grants certain permission to someone for some work. Authentication work through password, credentials, biometrics or one-time pin. Authorization is maintain by security team. </p>
            <br/>
            <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>I am using firebase for providing authentication in my website. </p>
            <p>Alternatives of firebase authentication are Auth0, mongoDB, okta, passport, Amazon cognito.</p>
            <br/>
            <h4>What other services does firebase provide other than authentication</h4>
            <p>Firebase is a google backend application development software. Other than authentication it is also used for hosting, database storage and also machine learning. It provide tools for tracking analytics and fixing app crashes. It is not only use for web, it can also use to develop iOS and android app.  </p>
        </div>
    );
};

export default Blog;