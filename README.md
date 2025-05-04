<span align="center">

# Articles Management System

</span>

<div align="center">

[![Node.js](https://img.shields.io/badge/-Node.js-333333?style=for-the-badge&logo=node.js)](https://nodejs.org/) [![Express](https://img.shields.io/badge/-Express-333333?style=for-the-badge&logo=express)](https://expressjs.com/) [![MongoDB](https://img.shields.io/badge/-MongoDB-333333?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/) [![EJS](https://img.shields.io/badge/-EJS-333333?style=for-the-badge)](https://ejs.co/) [![Bootstrap](https://img.shields.io/badge/-Bootstrap-333333?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)

A full-stack web application for managing articles with CRUD operations.

</div>

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)

## ✨ Features

- **Article Management**
  - View all articles
  - Create new articles
  - Read full article details
  - Update existing articles
  - Delete articles

- **User Interface**
  - Responsive design
  - Clean and modern layout
  - Easy navigation
  - Form validation

## 🛠 Tech Stack

- **Backend**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - EJS Template Engine

- **Frontend**
  - CSS3
  - Bootstrap
  - EJS Templates

## 📁 Project Structure

```plaintext
articles-nodejs/
├── models/
│   └── Article.js         # Article schema and model
├── public/
│   └── css/              # Static CSS files
├── views/
│   ├── layouts/          # Layout templates
│   ├── article.ejs       # Single article view
│   ├── edit-article.ejs  # Edit article form
│   ├── home.ejs         # Homepage view
│   └── new-article.ejs  # New article form
├── index.js             # Main application file
└── package.json        # Project dependencies
```

## 🚀 Installation
1. Clone the repository
```bash
git clone https://github.com/MoAjabali/articles-nodejs
cd articles-nodejs
 ```

2. Install dependencies
```bash
npm install
 ```

3. Set up MongoDB
- Ensure MongoDB is installed and running
- Default connection string: mongodb://127.0.0.1:27017/nodejsdb
4. Start the application
```bash
npm run dev
 ```

The application will be available at ```https://articles-nodejs-8akj.onrender.com```

## 📡 API Endpoints
### Page Routes
- ```GET / - Home page``` (displays all articles)
- ```GET /articles/new``` - New article form
- ```GET /articles/:id``` - View specific article
- ```GET /articles/:id/edit``` - Edit article form
### Action Routes
- ```POST /articles/new``` - Create new article
- ```POST /articles/:id``` - Update article
- ```POST /articles/del/:id``` - Delete article

## 💾 Database Schema
### Article Model
```javascript
{
  title: String,   // Article title
  body: String,    // Article content
  author: String   // Article author
}
 ```


## 🔄 Features in Development
- User authentication
- Article categories
- Comments system
- Rich text editor
- Image upload support

## 📝 License
This project is licensed under the ISC License.
<hr/>
Made with ❤️ using Node.js and Express