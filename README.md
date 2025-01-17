# Ecommerce-Follow-Along

#Ecommerce-follow-along

this is ecomerce follow along project which uses mern stack, it supports user authentication and allow the
user to perform various fuctions in the website it uses mongo db for storing the data in a unstructured way
and express js for handling the request and response from the client side and react js for the frontend, and
also we use rest api to allow communication between a client and a server using standard HTTP methods and it 
allows the product managment to Add, update, and retrieve product data.
Order Handling: Manage customer orders. Each API endpoint will interact with the database and serve data in a
 structured format (typically JSON). User Authentication: Register and log in users. Product Management: Add, 
 update, and retrieve product data. Order Handling: Manage customer orders. Each API endpoint will interact 
 with the database and serve data in a structured format (typically JSON).


# Milestone 1: Project Overview
the MERN stack is a popular set of technologies used for building full-stack web applications.The MERN stack is favored for its JavaScript-only approach, enabling developers to use a single language across the entire application

Mongo DB is used instead of SQL so that a large amount of data can be stored without storing them in the structured format.

We use REST API to handle the client and the server connection.



## Milestone 2 : 
We structured the project, set up the frontend and backend, and built the login page for the application.
This milestone focuses on creating the project structure, configuring tools, and starting with our first user-facing feature - the Login Page.

---

## Milestone 3:
In this Milestone we have setup the backend folder and initialize Node.js server to handle API requests. Connected the application to the MongoDB to store and manage the data. We created several folders and files to organize the backend code and set up the Express.js server to handle HTTP requests. And config file for environmental variables. Middleware , model , utils. Error.js for handling the specific error .db folder for connecting to the MongoDB database.

## Milestone 5:

In this project, a **SignUp Page** was developed and structured under the `components` folder for modularity and better code organization. The SignUp component was subsequently imported into the `pages` folder to streamline routing and page-level management. Finally, the component was integrated into the `App.js` file to connect it to the overall application flow. 

The SignUp page includes a user-friendly form that allows users to enter their details, such as Name, Email, Password, and Confirm Password, with client-side validation implemented using `react-hook-form`. Additionally, a feature was added to upload a profile picture, allowing users to preview their image before submission. This enhances the user experience and provides a seamless interface for uploading images. The form is fully functional, and the profile picture data is managed alongside other form inputs to ensure smooth submission. This integration effectively combines functionality and user-centric design for a cohesive application experience.