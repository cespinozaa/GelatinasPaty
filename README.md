# Gelatinas Paty Website

## Intro ✨

This website was created for a local small business. The goal of the website was to display their services and their work in a concise, simple manner. It is available here: <https://gelatinaspaty.com/> or here: <https://gelatinasmaria-f245f.web.app/>

## Tech Stack ⚙️

- Vite
- React
- JSX
- CSS
- Node.js
- Express
- CORS
- Nodemailer
- Firebase
- PM2
- React Toastify
- React-i18next

## Features ⚗️

1. Home: This page provides images of main products as well as short descriptions and prices.

2. Gallery: This page provides easy way to view the business's work. The user can click
   on any image and a lightbox opens, showing the image in a larger size, and with the ability to
   scroll through the gallery. An 'order now' button is also available at the end of page.
   When clicked, it redirects the user to the Contact page.

3. About: This page provides a short narrative about the owner's journey of creating her business.
   A 'contact us' button is also available which redirects the user to the Contact page.

4. Contact: This page includes a form for users to fill out which gathers their contact information
   and allows for the user to write a message to the owner. This page is intended to allow customers to ask questions, inquire about prices, or begin the ordering process. The owner receives the customer's information and inquiry through an email.

5. The website was made with a responsive design in mind. On desktop window
   sizes, the navigation bar appears in the header of every page, while on
   mobile window sizes, the navigation bar appears when the user clicks the
   hamburger menu icon. The spacing of images and descriptions also change
   across different window sizes.

## Process 🫧

I approached the making of this website with an agile developement method in mind. That is to say, I gathered my requirements list, worked in sprints, and checked in with the business owner after each sprint to see what changes needed to be made. I started by sitting down with the business owner and taking note of everything she wanted me to include on her website. She also gave me a rough idea of what aesthetic she wanted. We also looked at other websites to see what she liked and disliked, and to get an overall idea for inspiration. The features and requirements of the website were talked about in depth. I proceeded by making a mock up of the UI using a drawing app on an ipad. I checked with the business owner to ensure everything was to her satisfaction.

Next, I built the main UI and some features. At this point the website was not fully functional nor was it mobile responsive. I started by making the home page, the navigation bar, and setting up the routing for the pages. I used dummy text and images as placeholders for the timebeing. I also decided on colors, fonts, and an overall aesthetic. For the home page, I decided to divide the page into a welcome section, followed by featured products, and ending with a description and the prices of the services. After that, I moved onto the contact page where I created a fillable form with attributes such as a name, phone number, email, and a message. At this step it was not fully functional. I then moved onto the gallery page where I used a react lightbox component to efficiently stylize the gallery of images and allow for better functionality. I used a react lightbox because I knew I wanted the images to be a big focus of the website, so I wanted them to be visible in an appealing and effective way. Lastly, I created the about page which at this point only contained dummy text and a random image. At this stage I wanted to showcase the overall look and features of the website without it being fully functional. At this point I met with the business owner to ensure she was satisfied with the website so far and to clarify whether anything needed to be added or changed.

At this point, I focused on implementing functionality and including the specific information and images the business owner wanted. I made sure the navigation bar was working properly, as well as implementing a hamburger menu for mobile window sizes. For the contact page, I used Express, CORS, and Nodemailer in order to set up the contact form so that it would send emails with the information entered on the form. Express handles the route used by the POST request, CORS allows for cross origin resource sharing between the frontend and the server, and Nodemailer simplifies sending emails with Node.js using SMTP. I created my index.js using these technologies. The information that a user enters in the contact form is sent through gmail to the respective email address. I also ended up using react-toastify, which adds pop up notifications, to notify users when their message was sent successfully. I decided to use PM2, a production process manager, to keep the server running permanently. I also made sure each page was mobile responsive, using media queries and adjusting the css accordingly. I made sure the buttons redirected to the appropriate page when clicked. At this point, I implemented the react-i18next framework to allow for the project to be translated into Spanish. It is represented on the website with flags. I decided to do this since majority of the business owner's customers are Spanish-speaking, so I wanted to make it as accessible as possible. Lastly, I tested everything and consulted again with the business owner to ensure everything was up to her expectations. I plan to keep this website updated.

## Learnings 📖

Throughout this project, I had the opportunity to work with a client and go through the software development lifecycle, learning more about it as I went. I discovered new libraries as well as strengthened my knowledge in some areas where I already had previous experience.

- **Agile Development Method**: I sought to use this iterative development method throughout this project. I learned a lot about the importance of planning, designing, communicating with your client, receiving feedback, and making changes according to the feedback.
- **React Hooks**: I got a better understanding of useState, useEffect, and useNavigate as I used them throughout several pages in the project.
- **Node.js Dependencies**: I learned how to create a server using Express CORS and Nodemailer. I had not heard of Nodemailer previously so discovering it was fun. I used these technologies to set up a contact form that sends an email of its contents when it is submitted.
- **PM2**: I used this production process manager to keep the server running indefinitely. I thought this was necessary for this website since I wanted the contact form/mesage form to remain up and running for as long as possible. I had not heard of PM2 previously to doing this project so this was another thing I discovered.
- **React-Toastify**: I found this library while searching for a visually appealing way to add notifications to my project. I used this for the contact form, so when a user fills out the form and clicks on submit, a toastify notification pops up confirming the message was sent. This library was easy to implement.
- **React-i18next**: I also found out about this framework while working on this project. I was looking for a way that I could seamlessly provide translations for every piece of text on the website and this was just what I was looking for. I used the useTranslate hook for each page to allow for the translations to be available.

## How can this project be improved? 🛠️

- **Ordering System**: Allow customers to place an order by giving options and allowing them to select exactly what kind of dessert they want, what size, what decoration they want on it, etc. This was not done for this website as the business owner prefers to communicate directly with the customers.
- **Testimonials/Reviews**: A page where customers can share their experiences with the business. This would build trust and credibility.
- **FAQ**: A page to address any common concerns and questions.
- **Events Page**: A page to highlight special services such as catering for events.

## Running The Project 🪄

The website is currently available at <https://gelatinaspaty.com/> or <https://gelatinasmaria-f245f.web.app/>

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
