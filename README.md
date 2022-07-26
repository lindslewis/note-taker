# note-taker

## Description
This app was designed so that the user can create a to-do list, and manage that list as they go through their day. They have the option to add a new note, view an already existing note, and delete existing notes. 

Check it out at the deployed link: 
[https://lindslewis-note-taker.herokuapp.com/](https://lindslewis-note-taker.herokuapp.com/)

## Table of Contents
1. [Walkthrough Video](#walkthrough-video)
2. [App Images](#app-images)
3. [Usage](#usage)
4. [Composition](#composition)
6. [Licensing](#licensing)
7. [Credits](#credits)

## Walkthrough Video

[![Watch the video]Assets\images\video-img.jpg](Assets\note-taker-walkthrough.mp4)



## App Images
![Landing Page](Assets\images\landing-page.jpg)
![Note Page](Assets\images\notes-page.jpg)

## Usage
This app is fully developed to be used in the browser of the user's choice. They simply take the Heroku link and use the app explicitly on the deployed webpage. It's intended for users of all walks of life, but may be more beneficial to employees in a company who need to track their tasks.

## Composition
This app utilizes several different NPM packages:
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [UUID](https://www.npmjs.com/package/uuid)
- [Nodemon](https://www.npmjs.com/package/nodemon)

This app used UUID in order to apply a random ID to each of the objects in the `db.json` file, which removed a step of needing to assign ID's for each object, including the incoming objects from the save function. 

Nodemon allowed for automatic server restarts whenever new changes were made, which also assisted in checking and tracking the progress of the localhost server. 

The functioning link is deployed on [Heroku](https://www.heroku.com/what) at: 
[https://lindslewis-note-taker.herokuapp.com/](https://lindslewis-note-taker.herokuapp.com/)

## Licensing

Copyright (c) 2022 Lindsay Lewis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credits

[Stephanie Gomez](https://github.com/smariagomez)

University of Washington Coding Bootcamp: 
Instructor and Teaching Assistants


