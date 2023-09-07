# Jammming App - React Project

This is a basic music app that uses Spotify API to help users create and save playlist in their accounts.

It allows users to log in with their Spotify credentials, search songs by title or artist, add/remove tracks to a list, name the list, and save it to their Spotify account.

This project is part of a off-line challenge from a Codecademy's Full Stack path.

## Main Folders

The ./src folder is organized as follows:

+ ...src/components: Holds all the components' files (.js, .css, and images/icons)
+ ...src/mock: Keeps a .js file with a few arrays used to build the app before connecting it to the API.
+ ...src/util: Stores a file with the methods and variables used to connect and use Spotify's API.

## Components

The app is broken down into these pieces:

+ App.js : This is the main component. It holds the maing logic, variables, states, and JSX components.
+ SearchResults.js : Holds three sections. The first one has the user's name and a short prompt. The second is the SearchBar component. The third ones is a Tracklist component that renders the results from the search.
+ SearchBar.js : This is the input field where users write their keywords and start the search by clicking on the button.
+ Playlist.js : This component renders the new playlist information as the user adds/removes tracks from the list. It also has an input to set a name for the playlist.
+ Tracklist.js : This component holds the list of tracks and it's used both in the SearchResults to show the songs returned from request to the API and in the Playlist component to show the tracks currently added to the list.
+ Tracks.js : This is the card tha renders each track information (sont title, artist, album, and cover). It also has a button to add or remove the track from/to the Playlist.

## Features

Here's a quick summary of the functionalities in the app:

+ One-click login screen.
+ Basic dasboard: One section to manage the search and another one to manage the playlist.
+ The app welcomes the user by his/her name.
+ Search bar accepts song titles and artists names.
+ Search results are stack in the designated section (scrollable).
+ Each track is render in its individual box containing relevant info about it and a button to add/remove the track from the playlist.
+ Users can asign a name for their playlist.
+ Added tracks are stack in the playlist's scrollable section.
+ Saves the playlist to user's account in one click (resets the playlist section right after)

## Techs

+ Code in VSC
+ Online Repository in GitHub
+ HTML, CSS and JavaScript
+ React.js

## Thanks for the help

Special thanks to:
+ Franklin (@fjosue4) for his super helpfull assistance and that quick call that got me out of many doubts.
Also thanks to @lukabrx and @Contreras, who sent me valuable notes and documentation.

## Contributions and Feedback

Feel free to add, remove, change, and comment this App. I'll appreciate any thoughs or ideas that about how to make this a better code or me a better coder.
Here are some features I left out due to the fact that this project had me stuck for more that 3 weeks and I needed to move forward:
+ Tracks change color on hover. I tried to do it using CSS but it did not work. I thought on using a state to change the color.
+ Initialize the search by presing 'Enter' on the keyboard.
+ Make the app take 150vh on mobile to give more space to the trackslists on Search Results and Playlist sections.
+ Reset the search bar and the search tracklist after saving the playlist.

Thanks for taking a look at this code. Feedback is very welcome!
Find me in any of the channels listed in [this site](https://napetico.github.io/portfolio-website-v1/) I just built.