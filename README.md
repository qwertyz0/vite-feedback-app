# Feedback App

This project was created in a way that can fully explain most of the fundamentals of React.js.

This is going to allow to touch on everything from:
- components
- props
- state
- events

This React application was built using Vite, a fast build tool and development server.

## API

I am going to be using the Context API, and basically I'll build the ClientSide app first, and then Iam going to use a tool called 
JSON Server, which will give us a mock rest API or kind of like a fake backend to work with so that we can make requests as if it were a full stack app.

## What inside app ?

Basically we have our feedback items here. We have a stats component that's going to show the number of reviews or feedback items. Also have component that going to take the average rating of all the items. 
And we can add review using score, and then we can write a review. 

And you'll notice that we'll get ***`This text must be at least 10 characters`***. The button is also `disabled`. So we have some real time validation going on. 
As soon as I hit 10 characters, then the send button is active and I can go ahead and send.

I am going to use `framer-motion` library to add that effect for fading animation. 

In this app we can do next things to reviews:
1. Add review
2. Delete
3. Update
4. Change score

The average and the number of reviews will also react to whatever changes in the state, which at first that was to be just kept in the main app component, 
but then moved to move it to context using the context API. We're also going to use a hook called `useContext`.

Also have question mark in app for demonstrate how routers work.

## Libraries used in the project

- framer-motion
- json-server
- prop-types
- react-icons
- react-router-dom
- uuid

## How to start app

After cloning the repository, in the root folder, run the following commands: 

    npm install
    npm run dev

But firstly, you need to start the JSON server:

    npm run server
    
Which accommodates the following command - `json-server --watch db.json --port 5000`
