This is a chat app that uses socket.io & deploys through heroku directly from the CLI

*** Reminder for myself ***

Add scripts & engines after main like the example below

 "main": "server/server.js",
    "scripts": {
        "start": "node server/server.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "engines": {
        "node": "6.9.1"
    },

After creating github repo and pushing code up run heroku create 
After heroku create --> git push heroku master 