## Purpose
We created FeedForward for the UniHack 2024 Hackathon\
FeedForward is a platform that connects these food providers (restaurants/grocery stores/etc), to those in need (foodbanks/etc).\
It does this by providing a platform to advertise excess food that providers have no need for, such as unused ingredients, left-over food, etc.\
On the other side, it provides a platform for receivers to view these locations, what foods they have available, locations, quantities, potential recipes, etc.

## Features
1. When a food reciever is presented with a list of ingredients from a food reciever, using the spoonacular API, we provided the functionality to automatically list various dishes the reciever can make from the ingredients, e.g. a list of: Peanut Butter, Jam, and Bread, could present the user with a PBJ Sandwich.
2. intuitive UI/UX to follow and use, with users being able to easily see various locations of food providers on a map.
3. We were planning to implement a photo to text tool so that providers only need to take photos of ingredients and everything is automatically organised.


## Stack used
1. a ReactJS frontend
2. NodeJS & ExpressJS backend - connecting to the google maps API, and spoonacular API.
3. MongoDB atlas database


## Screenshots
<img width="600" alt="Screenshot 2024-09-06 at 2 05 44 pm" src="https://github.com/user-attachments/assets/dd1d456c-997d-4472-af0b-10e5825c22d0">
<img width="600" alt="Screenshot 2024-09-06 at 2 06 00 pm" src="https://github.com/user-attachments/assets/378fbeba-00b3-4615-b804-22bbd528c215">


## Local Setup
```
git clone git@github.com:manav1411/feedForward.git
cd feedForward
cd mern
cd server
npm i
cd ..
cd client
npm i
cd ..
cd server
node --env-file=config.env server
cd ..
cd client
npm run dev
```

## Important Notes
This project is currently not hosted on the internet\
However, it is running correctly, locally.
