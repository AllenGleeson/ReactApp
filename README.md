# Portfolio website
## https://www.allen-gleeson.com/

Created using React and Bootstrap and hosted on Heroku.

The website is made up with a series of components.

## Global Components

### Featured Projects

Featured projects is a carousel of projects with a small description. It is used on the Home and Projects pages.

### Back to Top

A Back to Top button is displayed on all pages when the user scrolls a certain amount.

## Nav

The navigation has a custom brand logo, links to pages and a toggle light/dark mode button.

## Home

The home page contains the About Me, Featured Projects, and Timeline components.

### About Me

About me has my profile picture and bio as well as social links.

### Timeline

The Timeline is the Vertical Timeline Component from React. Filled with my content and customised.

## Projects

The Projects page has the Featured Projects and Cards components.

### Cards

The Cards component shows off each project in a small card with a paginator to go browse through.

## Project

Clicking on any project will bring you to that projects page with more detail about the project as well how it looks on different devices.
It has a Highlight, Mobile Viewer and End Description components.

### Highlight

The highlight component takes the projects description data and displays it depending on what data is given. If only text then text appears. If a series of images and text then it will alternate the sides of the images. It also checks if the project has an Admin version and a Mobile version and display buttons for the user to click to change the images to their respective versions.

### Mobile Veiwer

The Mobile Viewer is displayed if the project has a mobile version. It shows a phone with an iframe of the projects website which can be interacted with.

### End Description

End Description is a carousel with final thoughts about the project itself.
