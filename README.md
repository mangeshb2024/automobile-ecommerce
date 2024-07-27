
# Automobile ECommerce

## Introduction

The purpose of this project is to demonstrate hands on knowledge about different frontend and backend technologies. Though the functionalities implemented in this project can also be implemented using fully managed services which do not need any coding and require very little configuration, the effort is made to use individual services and make them interact with each other in order to gain hands on experience.

Automobile ECommerce project is about allowing users to browse different kinds of cars, provide information, and filter based on various criteria. In the first phase, only a single page website is designed which will allow users to browse different cars and can filter the search results based on various attributes. In the coming phases additional functionality will be added to make new features available such as user authentication, save favorites and more. The final goal is to mimic a full fleged ecommerce website to make it a one stop shop for automobile buyers.

### Overview of the functionality

The project aims to store car related information and provide mechanism to access that information as and when needed.

Various aspectes of the functionality are described below.

#### Storage

The storage layer allows for storing car related information including different attributes such as manufacturer, model, engine, transmission, etc. and static data such as images from diferent angles.

#### Compute

The compute layer allows for handling the reuqests made by clients for accessing car data. The compute layer connects with storage layer for retrieving the required information, enrich the information if needed and pass the response back to clients.

#### API Management

APIs act as a front door for the clients providing a single place entry to backend services that provide access to business logic implemented in compute layer and data stored in storage layer.

#### User Interface

UI layer provides an interactive interface to users for interacting with the application.
## Tech Stack

AWS is used as a cloud service provider for implementing backend services as well as hosting frontend application. Below are the AWS services and technologies used for various layers in the tech stack.

Technology stack can be divided into two categories, frontend (client side) and backend (server side).

### Backend 

#### Storage layer

**Amazon Dynamodb** - Dynamodb is used a sererless NoSQL key-value data store for storing attributes related to cars as well as the filter criteria. NoSQL database gives flexibility to add or remove attributes dynamically because of the relaxed schema restrictions.

**Amazon S3** - Amazon Simple Storage service is used as an object store for storing the static assets needed for the project such as car images.

#### Compute layer

AWS Lambda - AWS Lambda is used as a serverless compute service for serving the requests from clients. Its serverless nature means the service can scale up and down as the traffic from clients increases or decreases. The service receives the requests from clients, fetches the data from Dynamodb table and returns the response to the clients.

#### API layer

Amazon API Gateway - Amazon API Gateway is used as a REST API management service for exposing the business logic implemented by the Lambda compute layer. API Gatway allows a single point entry for all the backend services. API endpoints exposed by API Gateway are used by client application to invoke the requests to the backend.

### Frontend

#### User Interface

#### Dev Tools

**Node & NPM** - Node is a tool of choice as a development environment for JavaScript based projects. NPM is a package manager which helps in installing thrid party libraries.

**Vite** - Local development and build server for speeding up the development process.

**TypeScript** - TypeScript is used as a coding language along with React because of its features such as static typing, interfaces and advaced tooling support.

**Libraries**

**React** - React is used for developing a dynamic and responsive UI design.

**Chakra UI** - Instead of creating and styling components from scratch, Chakra UI library is used as it provides stylized components which helps in faster development process.

**Axios** - For making HTTP requests to the backend, Axios library is used which provides http client.

**React Icons** - This libray of popular icons is used for incorporating icons at various places in the layout.


### Provisioning and Hosting services

**AWS CloudFormation** - AWS CloudFormation is used as an Infrastructure as Code provisioning tool for deploying backend services. Use of this service avoids the manual efforts and mistakes when the services needed in a stack need to be deployed or updated.

**AWS Amplify** - AWS Amplify is used for hosting the frontend react application. Though AWS Amplify is much more capable and provides many more services such as authentication and datastore, only hosting services are used in this project for now.

### Version Control

**git and GitHub** - git is used for maintaing versions for the code base on the local system while a repository is created to push the code base to GitHub.