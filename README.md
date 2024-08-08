
# Automobile ECommerce (Frontend)

## Table of Contents
1. Introduction
2. Overview of the functionality
3. Tech Stack
4. Setting up the development environment
5. Implementation Details
6. Build and Deployment

## Introduction <a name="introduction"></a>

The purpose of this project is to demonstrate hands on knowledge about different frontend and backend technologies. Though the functionalities implemented in this project can also be implemented using fully managed services which do not need any coding and require very little configuration, the effort is made to use individual services and make them interact with each other in order to gain hands on experience.

Automobile ECommerce project is about allowing users to browse different kinds of cars, provide information, and filter based on various criteria. In the first phase, only a single page website is designed which will allow users to browse different cars and can filter the search results based on various attributes. In the coming phases additional functionality will be added to make new features available such as user authentication, save favorites and more. The final goal is to mimic a full fleged ecommerce website to make it a one stop shop for automobile buyers.

### Overview of the functionality

The project aims to store car related information and provide mechanism to access that information as and when needed.

This repository is for the frontend functionality of an end to end ecommerce project.
For information on backend functionality, please follow the below URL.

[https://github.com/mangeshb2024/automobile-ecommerce-backend/edit/main/README.md](https://github.com/mangeshb2024/automobile-ecommerce-backend/blob/main/README.md)

Various aspectes of the functionality are described below.

#### User Interface

UI layer provides an interactive interface to users for interacting with the application.

## Tech Stack

AWS is used as a cloud service provider for implementing backend services as well as hosting frontend application. Below are the AWS services and technologies used for various layers in the tech stack.

Technology stack can be divided into two categories, frontend (client side) and backend (server side).

Following sections describe frontend functionality. For information on backend functionality, please follow below URL.

[https://github.com/mangeshb2024/automobile-ecommerce-backend/edit/main/README.md](https://github.com/mangeshb2024/automobile-ecommerce-backend/blob/main/README.md)

#### User Interface

#### Dev Tools

**Visual Studio Code** - Visual Studio Code is used as the code editor for its versatility and wide range of extensions which aid in development process.

**Node & NPM** - Node is a tool of choice as a development environment for JavaScript based projects. NPM is a package manager which helps in installing thrid party libraries.

**Vite** - Local development and build server for speeding up the development process.

**TypeScript** - TypeScript is used as a coding language along with React because of its features such as static typing, interfaces and advaced tooling support.

**Libraries**

**React** - React is used for developing a dynamic and responsive UI design.

**Chakra UI** - Instead of creating and styling components from scratch, Chakra UI library is used as it provides stylized components which helps in faster development process.

**Axios** - For making HTTP requests to the backend, Axios library is used which provides http client.

**React Icons** - This libray of popular icons is used for incorporating icons at various places in the layout.

**dotenv** - For storing environment variables in environment rather than saving along with code base.

### Provisioning and Hosting services

**AWS Amplify** - AWS Amplify is used for hosting the frontend react application. Though AWS Amplify is much more capable and provides many more services such as authentication and datastore, only hosting services are used in this project for now.

### Version Control

**git and GitHub** - git is used for maintaing versions for the code base on the local system while a repository is created to push the code base to GitHub.

## Setting up the development environment

### Set up the project on local machine

Download and install Node from below location.

https://nodejs.org/en/download/

Install Vite

Open terminal and execute below command.

`npm install -D vite`

Once Vite is installed, setup the project by executing below commands.

`npm create vite`

When prompted provide the required values

    Project Name - automobile-ecommerce
    Select Framework - React
    Select Variant - TypeScript

`cd automobile-ecommerce`

`npm install`

### Setup the git repository

Signup or Login to GitHub (https://github.com/) and create a new repository for the project.

Download and install git on your local machine. (https://git-scm.com/download)

Initialize local git repository by executing below commands.

    cd automobile-ecommerce-frontend
    echo "# automobile-ecommerce-frontend" >> README.md
    git init
    git add .

If you get a permission error for .config directory while executing git add command, then it can be resolved by granting below permission in sudo mode.

    sudo chown -R $(whoami) /Users/<user>/.config

Once the error is resolved, proceed with remaining commands.

    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/<github account name>/automobile-ecommerce-frontend.git
    git push -u origin main

### Install required libraries

**Chakra UI for Vite**

Install Chakra UI by executing below command.

    npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

After installation is complete, setup Chakra Provider at the root of the application by updating the main.tsx file.

Add below line at the top of the file.

    import * as React from 'react'

Wrap the App component with ChakraProvider.

    <ChakraProvider>
        <App />
    </ChakraProvider>

Note: Delete all the default styles form index.css so that they won't overlap with Chakra UI styles.

**Axios**

Install axios library by exeucting below command.

    npm i axios

**React Icons**

Install react icons library by executing below command.

    npm i react-icons

## Implementation Details

### User Interface

The user interface is implemented using React with TypeScript. When a project is initialised using Vit, it creates a directory with files containing boilerplate code. Additional directories and files are created as per the project requirements.

automobile-ecommerce-frontend
    - src
        - assets
            CarLogo.jpg
            CopyrightLogo.png
        - components
            CarCard.tsx
            CarGrid.tsx
            FilterCard.tsx
            FilterList.tsx
            Footer.tsx
            ImageGallery.tsx
            Like.tsx
            NavBar.tsx
        - config
            config.json
        - hooks
            useCars.ts
            useData.ts
            useFilters.ts
        - services
            api-client.ts
        App.css
        App.tsx
        index.css
        main.tsx
    index.html
        
## Build and Deployment

### Build

Once the coding and unit testing is completed locally, build the application using below commands.

    cd automobile-ecommerce
    npm run build

Fix any errors encountered during build phase.

Once the build command is successfully executed, the build artifacts will be created in /dist under project root directory. After that, final code base along with build should be pushed to GitHub.

### Deployment

To deploy this project AWS Amplify is used.

Login to AWS account and move to AWS Amplify console.
