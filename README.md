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



## Milestone 4:

In this milestone we have created the user model and schema for the user data.User Management and File Uploads

Features Implemented

Created a User Model: Defined a schema for storing user data using MongoDB. The schema includes fields like name, email, and password to map the structure of user information.
Developed a User Controller: Implemented logic for managing user-related actions such as adding new users and retrieving their information. This controller acts as a bridge between the user interface and the database.
Set Up File Uploads with Multer: Configured Multer to handle file uploads, allowing users to upload profile pictures or other files. Files are stored securely in the backend with paths linked to user profiles.

## Milestone 5:

In this project, a **SignUp Page** was developed and structured under the `components` folder for modularity and better code organization. The SignUp component was subsequently imported into the `pages` folder to streamline routing and page-level management. Finally, the component was integrated into the `App.js` file to connect it to the overall application flow. 

The SignUp page includes a user-friendly form that allows users to enter their details, such as Name, Email, Password, and Confirm Password, with client-side validation implemented using `react-hook-form`. Additionally, a feature was added to upload a profile picture, allowing users to preview their image before submission. This enhances the user experience and provides a seamless interface for uploading images. The form is fully functional, and the profile picture data is managed alongside other form inputs to ensure smooth submission. This integration effectively combines functionality and user-centric design for a cohesive application experience.




## Milestone 7: MongoDB connection
In this Milestone,

- Understand how to validate user credentials during login.
- Learn how to compare the encrypted password with the user’s input.
- The user provides their email/username and password on the login page.
- The backend retrieves the user record based on the provided email/username.
- If the user is not found, return an error: "User does not exist."
- Process the user's input password using the same hashing algorithm (e.g., bcrypt).
- Compare the resulting hash to the stored hashed password.
- If they match, the user is authenticated; if not, send an error.

## Milestone 8: Home Page creation
In this Milestone,

- Create a card component.
- Display those cards on the products page.
- A single card component that accepts product details as props.
- Array mapping to iterate over the product list and render a card for each product.
- Reusable card component with props for product details (e.g., name, image, price).
- A grid layout or flexbox for displaying multiple cards neatly.
- A home page with a route connecting to app.jsx.

## Milestone 9: Product Creation Page

In this Milestone,

Learned how to create a form that will take all the details of product
Learned how to take multiple images as input.
Creating the page using Tailwind CSS and React JS.
Form creation using useState.
And styling it accordingly using Tailwind CSS


## Milestone 10: Connecting to Mongo DB

In this Milestone,

Learned how to write product schema using mongoose
Learned how to create an end point to validate and store product details in mongodb.
Get about 10 images from the user and post it to backend.
Use Multer to store the images in the Product folder.
Build a POST endpoint to receive product data.
Validate and save the product details to MongoDB.


## Milestone 11: Dynamic Product Card

In this Milestone,

To write an endpoint that will send data from extract and send data from mongodb.
To receive data at frontend -How to display that data dynamically using product card created earlier.
Change a bit of data in Multer.js
Dynamically add the created products to the home page.
View the data from the main page.


## Milestone 12: Dynamic Filtering

In this Milestone,

To write an endpoint that will send data by filtering with my mail and send data from mongodb.
To receive data at frontend -How to display that data dynamically using product card created earlier.
The user can give their email, and the products from that email can be seen.
We create a new page myProducts to show the products of the user.
We update product.js in the backend to create,save and show the product.


## Milestone 13:

In this Milestone,

Write an endpoint that will update the existing data in MongoDB.
Auto fill the form with previous data and give option to edit.
We use router and post method.
The entire data and also part of data can be changed.
frontend we will add an edit button to the product card. When click on edit we will send the data to form and make it auto fill and have option to edit those data and save.


## Milestone 14:

In this Milestone,

Write an endpoint that delete the product with specific ID from MongoDB.
We use routers to delete the product
In frontend we will add an delete button to the product card.
When click on delete button we will send the product id to server endpoint.
After deleting the product will be removed from user's page.

