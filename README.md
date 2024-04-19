# AWS-Task-List

  ![badge](https://img.shields.io/github/languages/top/ratalla816/AWS-Task-List)
  <br> 
  ![badge](https://img.shields.io/github/languages/count/ratalla816/AWS-Task-List)
  <br>
  ![badge](https://img.shields.io/github/issues/ratalla816/AWS-Task-List)
  <br>
  ![badge](https://img.shields.io/github/issues-closed/ratalla816/AWS-Task-List)
  <br>
  ![badge](https://img.shields.io/github/last-commit/ratalla816/AWS-Task-List)
  <br>
  ![badge](https://img.shields.io/badge/license-MIT-important)

  <p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=aws,react,nodejs,express,materialui,dynamodb" />
  </a>
</p>
  
## Description

A simple to use web application that allows users to create a to-do list by adding tasks that can be edited and deleted - Updates to the task list persist as objects in a nonrelational database. 
<br>
<br>
**Well Architected Framework - Loose Coupling**
<br>
Front and backend interdependencies are limited by allowing the components to interact only through specific interfaces.
<br>
This is accomplished by Leveraging AWS Services - Lambda for serverless functions to host the API, Amplify hosts the frontend, and database management via DynamoDB.


### ⚙️ Technologies

**React.js | Material UI | Node.js | Express.js | AWS Amplify | AWS Lambda | AWS DynamoDB**

* The frontend is built with React and Material UI and was deployed in seconds using AWS Amplify.  
* Requests from the React frontend are handled via a backend API constructed and deployed using Node.js, Express.js and AWS Lambda.
* Serverless Object storage is handled using DynamoDB. 

 
  ## Table of Contents
  - [Description](#description)
  - [Documentation](#documentation)
  - [Deployment](#deployment)
  - [Screenshot](#screenshot)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)
  - [Contact](#contact)

  ## Documentation
  
* React<br>
Documentation: https://react.dev/reference/react

* Material UI<br>
Installation: https://mui.com/material-ui/getting-started/installation/
<br>
Icons: https://mui.com/material-ui/material-icons/

* Node<br>
Documentation: https://nodejs.org/docs/latest/api/

* Express<br>
Getting Started: https://expressjs.com/en/starter/installing.html

* AWS Amplify<br>
User guide: https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

* AWS Lambda<br>
Developer Guide: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html<br>
API Reference: https://docs.aws.amazon.com/lambda/latest/api/welcome.html<br>
Operator Guide: https://docs.aws.amazon.com/lambda/latest/operatorguide/intro.html

* DynamoDB CRUD functions<br>
Create: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_PutItem_section.html<br>
Read: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_Scan_section.html<br>
Update https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_UpdateItem_section.html<br>
Delete https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_DeleteItem_section.html

## Deployment

   * The frontend is deployed with AWS Amplify: https://main.d2b20auuux8ehi.amplifyapp.com/
   <br>   
   * Backend: https://64ithvdxrzwofic4apqy7obq7m0yhppc.lambda-url.us-east-1.on.aws/task 
 
 
  
  ## Screenshot
  ![Screenshot](./assets/images/CRUD.gif)
  
  
  ## Acknowledgements
  
  * Build and Deploy FullStack React App on AWS: https://www.youtube.com/watch?v=FHn8c4Rk_yo
    
  ## License
  ![badge](https://img.shields.io/badge/license-MIT-important)
  <br>
  Permission to use this application is granted under the MIT license. <https://opensource.org/licenses/MIT>


   ## Contact:
   Holler at me! <a href="mailto:rob.atalla@robatalla816.com">rob.atalla@robatalla816.com</a>