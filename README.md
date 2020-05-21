This is a personal project started with the intention to refine recently picked up skills and to learn more.
This file shows initial steps on how I got the project up and running, as well as a changelog that
displays changes that were made before VCS/git compatibility was added.

Author: David Rupell

Getting started with this project:
PALETTON BASE RGB: 383838 (used to grab rgb colors and fit it to a theme - accessed at paletton.com)
Background image is free use stock image, edited in GIMP.
Logos, pulled from school sites and edited to match scheme.

INITIAL STEPS 05/15/2020:-
1) In the terminal:
    npm init - gets the package.json file ready with required information.
    npm install next react react-dom - adds required dependencies.

2) Created "pages" directory and index.js file.

3) In package.json:
    Removed script "test": "echo \"Error: no test specified\" && exit 1"
    Added script "dev", "build", and "start" for usage.

4) Back to terminal:
    npm run dev - runs the website on local host.
    npm install --save @zeit/next-css - adds dependencies for styling.

5) Adding components and more:
    - Added static folder for things like pictures, backgrounds, etc. that will be used by next
    - Added next.config file to require us to have '@zeit/next-css' dependency so we can use css in the code.
    - Added data folder to hold data that we need to work with and display. (data.json)

Change log:
05/16/2020:
    Changed card height from 480px.
    Created components folder - houses the header, footer, and layout elements that are used throughout each page.
05/17/2020:
    Added resume button in InfoCard (with appropriate css) as well as general functionality on resume page.
05/20/2020:
    Added more documentation, .gitignore file, and git repository for version control.
    Fixed small errors/warnings.



