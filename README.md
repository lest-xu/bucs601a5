# X Grocery Store

This is a simple Inventory application for a local grocery store built with React for my class CS 601 O1 Assignment 5 at Boston University. The application dynamically rendered list of products, each including its SKU, Name, and Quantity.

Side notes: most of the styles were adapted from the previous assignment 3.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [File Structure](#file-structure)

## Features

- Responsive design that works on various devices
- A clean and modern user interface
- Sections for inventory, about me, and contact information
- Hover effects for interactive user experience
- Fetch inventory data from a remote JSON file.
- Dynamically rendered a list of products on the webpage.
- Delete product when click Delete button on each item.
- Rest the products to the original inventory.

## Technologies Used

- HTML5
- CSS3
- React
- Javascript
- Fetch API

## Getting Started

### Prerequisites

- Node.js installed on your machine. You can download and install Node.js from [here](https://nodejs.org/en/download).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/lest-xu/bucs601a5.git

2. Navigate to the project directory:

   ```sh
   cd yourrepo/x-grocery-store

3. Install the React App compiler and other dependencies:

   ```sh
   npm install

### Running the Application

   `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Structure

`app.ts`: Main TypeScript file containing the application logic.
`index.html`: HTML file containing the structure of the webpage.
`style.css`: CSS file for basic styling.
`countries.json`: JSON file containing the list of countries.

## File Structure

The project directory contains the following files:

```
    country-app/
        node_modules/
        public/
            ├── app.js
            ├── app.js.map
            ├── countries.json
            ├── index.html
            ├── styles.css
        src/
            ├── app.ts
        ── package-lock.json
        ── package.json
        ── README.md
        ── tsconfig.json
