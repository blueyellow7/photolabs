# Photolabs
PhotoLabs is a React-based single-page application that allows users to view photos in different contexts. It will use a pre-existing API from the backend to build a frontend user experience for users to interact with photos.

This is a project for the Web Development React course programming.

## App Preview 
![All Photos of 'Animals'](https://raw.githubusercontent.com/blueyellow7/photolabs/main/docs/topics.png)

![Modal View](https://raw.githubusercontent.com/blueyellow7/photolabs/30d23815339de5510182c5e83d7d2e4745d32104/docs/modal.png)

!['Similar Photos' section in Modal View](https://raw.githubusercontent.com/blueyellow7/photolabs/30d23815339de5510182c5e83d7d2e4745d32104/docs/similar_photos.png)

## App features
* A user can view photos from the homepage loaded from the API.
* The user can navigate to different photo categories, also called topics.
* The user can click on a photo to view a larger version of the photo and relevant / similar photos.
* The user can like a photo from anywhere within the application where the photo is displayed.
* The user can view a heart icon with a notification in the navigation if there are liked photos.
* The navigation will consist of different topics and heart icon.
* The client-side application will make API requests to load and persist data.

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
