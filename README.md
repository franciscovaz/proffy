<h1 align="center">
  <img width="182" alt="Proffy" src="https://user-images.githubusercontent.com/11545976/83693566-b5c94780-a5cc-11ea-893f-dd34d8cb10c1.png">
</h1>

<h3 align="center">
   Proffy | Next Level Week - 2nd Edition
</h3>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;
</p>

</br>

![image](imgs/preview-nlw.png)

## 💇🏻‍♂️ About the project

Proffy is a Web and Mobile application designed to help connect students and teachers/other students. 
Therefore, this application offers 'teachers' the possibility to register classes, being able to add information such as the discipline, cost and timetable, and students the possibility to search for registered classes.

This project was developed on Next Level Week event by Rocketseat 🚀

---

## ⚙ Technologies

- **Back end**

  - NodeJS
  - Express
  - Typescript
  - Sqlite3
  - Knex

- **Front end**

  - ReactJS
  - Typescript
  - react-router-dom
  - axios

- **Mobile**
  - React Native/Expo
  - Typescript
  - react-navigation
  - axios

---
<br />

## 💻 Getting started

> Clone the repository

```bash
  # Clone repository
  git clone https://github.com/franciscovaz/proffy.git
```

> Run server

```bash
  # Access server
  cd server

  #Install dependencies
  yarn

  # Create tables
  yarn run knex:migrate

  # Run server
  yarn start
```

> Run web project

```bash
  # Access web project
  cd web

  # Run web project
  yarn start
```

> Run mobile project
> You will need to download the Expo app. When the application starts, scan the qrcode with your mobile camera and open expo.

```bash
  # Access mobile project
  cd mobile

  # Change the IP in services/api.ts to connect with the back end
  cd services

  # Run
  yarn start
```

---
