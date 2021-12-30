# Twitter Clone Project

Twitter is a simple, single-page Twitter clone that was inspired by the [Lighthouse Labs Tweeter Clone](https://github.com/mata0050/tweeter) that we as a class built in my week 4 of the program. With my background knowledge and skill of using REACT, l decided to upgrade the clone as l knew everyone in my cohort will have the same projects.

This repository is the code for the small Twitter clone l have built over the December Christmas break 2021. The technology that this clone was built on is Nodejs, Express, MongoDB, Socket.io, React, Redux, Axios, Styled-components. l did basic testing using cypress.

---

## 👉 [Watch a video of the Twitter clone](https://youtu.be/_fJvuyd4FqA)

---

## Getting Started

1. [Clone ](https://github.com/mata0050/twitter-clone.git) this repository onto your local device.
2. In the root folder ,install the backend dependencies using the `npm install` command.
3. cd into the client folder `cd client`, install the frontend dependencies using the `npm install` command.
4. cd back into the root folder `cd ..`, start the backend and frontend using `npm run dev`.
5. Backend will be served at <http://localhost:8000/>.
6. Frontend will be served at <http://localhost:3000/> in your browser.

## Dependencies Backend

- node js
- bcryptjs
- cors
- dotenv
- express
- express-validator
- gravatar
- jsonwebtoken
- mongoose
- socket.io

## Dependencies Frontend

- axios
- moment
- react-redux
- socket.io-client
- styled-Components

## ScreenShoots

### Before Login

![Screen Shot 2021-12-30 at 10 51 05 AM](https://user-images.githubusercontent.com/58061791/147773620-13fb9100-c758-48e2-bde8-cecf3f802fa1.png)
![Screen Shot 2021-12-30 at 10 51 13 AM](https://user-images.githubusercontent.com/58061791/147773621-3d4bb3d0-7d47-4727-aa80-812f727f8755.png)
![Screen Shot 2021-12-30 at 10 55 27 AM](https://user-images.githubusercontent.com/58061791/147773622-15c088f3-9bbf-42e1-a639-50026b664e65.png)
![Screen Shot 2021-12-30 at 10 55 38 AM](https://user-images.githubusercontent.com/58061791/147773623-49365007-8c8e-4d51-a235-7ca35d897225.png)

### After Login

![Screen Shot 2021-12-30 at 11 00 08 AM](https://user-images.githubusercontent.com/58061791/147773804-2fc40e81-5e3b-4dfa-81af-81bd33e5e9bc.png)

![Screen Shot 2021-12-30 at 11 02 59 AM](https://user-images.githubusercontent.com/58061791/147773807-889751f7-df62-4292-a012-a9d0d24cd520.png)

![Screen Shot 2021-12-30 at 10 58 26 AM](https://user-images.githubusercontent.com/58061791/147773624-f7a50f27-fbf9-4fa1-9fe3-ab91235fb700.png)

![Screen Shot 2021-12-30 at 10 58 38 AM](https://user-images.githubusercontent.com/58061791/147773626-e7cb4350-9a0a-415b-a143-0812c389f732.png)

### Mobile Design

![Screen Shot 2021-12-30 at 11 03 49 AM](https://user-images.githubusercontent.com/58061791/147773801-876c1eda-9b29-4354-ad32-4f0f12f0bcc5.png)
![Screen Shot 2021-12-30 at 11 03 58 AM](https://user-images.githubusercontent.com/58061791/147773803-00408b32-31ff-4dbc-9b1b-ca0e0a37dbb4.png)

![Screen Shot 2021-12-30 at 11 03 17 AM](https://user-images.githubusercontent.com/58061791/147773808-6842c81b-91c1-4b96-afb7-d4a704d584ed.png)
![Screen Shot 2021-12-30 at 11 03 21 AM](https://user-images.githubusercontent.com/58061791/147773809-72de1857-0593-45b8-83e4-4889b41212f6.png)
![Screen Shot 2021-12-30 at 11 03 28 AM](https://user-images.githubusercontent.com/58061791/147773810-55dd9eff-37db-4ae8-8b9a-f6c0d0e78e28.png)
![Screen Shot 2021-12-30 at 11 03 36 AM](https://user-images.githubusercontent.com/58061791/147773811-8394b575-5eee-4edc-b93f-8cfe2c5d72f3.png)
![Screen Shot 2021-12-30 at 11 03 39 AM](https://user-images.githubusercontent.com/58061791/147773812-e844e54c-7ca3-453f-a552-e86219d147fd.png)

## Known Bugs

- News api allows for 200 api requests a day.
- A user can like and dislike a post multiple times. User should only be able to like or dislike a post once.
- CSS fix for the News Card, doesn't look good.
