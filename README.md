## Want to use Datr prototype? Follow the instructions bellow to run the application.

1. Create a new directory in your terminal by doing `mkdir d8r_prototype`. Then make 2 more directories one called `d8r_api` and one called `d8r_react`. Clone down this repository into the `d8r_react` folder by running the following command in the root of that directory `git clone git@github.com:kurtkrafft1/dater-prototype.git`.

1. get into the root of the repo by running `cd dater-prototype`.

1. Run `npm install` and wait for all dependencies to be installed.

1. Note: Within `src/modules` is a file called `baseurl.js` this file will hold the url location for the API. If your api runs on a different server than `http://localhost:8000/` you will need to change the url in this file to that one.

1. NOTE 2: There is a trailing slash for that url!!!!

1. here is how you set up the API:

1. Go to https://github.com/kurtkrafft1/dater_prototype_api and follow the instructions to set up the API in a separate directory from the Datr Client directory. Then complete the next two steps.

1. lastly we need to make a keys file so `cd src && touch keys.js`

1. enter `code .` to open your IDE and add some stuff to the keys.js

1. add the following:

   const keys = {
   "google": "YOUR KEY HERE"
   }
   export default keys

1. You will need to acquire a google maps api key and enter it where it says "YOUR KEY HERE" it must be a string

1. https://developers.google.com/maps/documentation/javascript/get-api-key will help with that proccess

1. Run `npm start` in the root directory and NOT the src to verify that installation was successful and start the application.

1. I set up the css specifically for a mobile app (didn't know flutter when I originally made this) so open up your google chrome dev tools and hit the phone view mode to use the app so it will make sense

1. this version is incomplete the roll the dice feature doesn't work yet, but the view full date feature kind of works. The algorithm is a little off. Sometimes hotels will end up in there lol and sometimes parking garages will show up, so trying to eliminate from what google maps places returns will be a little tricky.

1. The facebook login doesn't work, For some reason I couldn't get authenticated on the facebook developers page :/ so I couldn't register the app, but I just followed a youtube video for setting that up I can send a link to whomever

1. this app is super barebones and needs some more work to get all te v1 features up and running but most everything after the dates is just basic get/post requests from the api to fetch dates and post favorite dates and lastly to update user information

1. Go to http://localhost:3000/ to view the app.

## Tech Stack

1. React
1. HTML
1. CSS
1. Javascript
1. react burger menu

## LOGIN INFO

1. if you would like to login with pre-made information here are some fake users

1. you can also login in yourself by clicking "Use Email" then clicking "Sign Up" an email verification link will be sent to your email and after you follow the link you can use your own account

- Email: kurt@krafft.com
- Password: testword1

##

Made by Kurt Krafft
