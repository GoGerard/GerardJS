# GerardJS
A modern bot for Discord - The Web Interface


----------

## GoGerard
GoGerard is an opensource project that focuses on easy to adapt, community-driven chatbots for [Discord](https://discordapp.com/).

The application is written in three separated parts, which are all replaceable to adapt to your project's needs.

 - [GerardDiscord](https://github.com/GoGerard/GerardDiscord) - A client, written in Golang, that communicates with the Discord API. 
 - [GerardAPI](https://github.com/GoGerard/GerardAPI) - An API Server, written in Golang, that is used to communicate with the client and database(s)
 - [GerardJS](https://github.com/GoGerard/GerardJS) - A web interface, powered by AngularJS, that serves the API to its end-users. 

Note that in the current state the project is nowhere finished, dependent on unstable external libraries,  and breakable changes to the project will happen till a future release. 

The project will provide docker support in future.


----------

### GerardJS ###

The webinterface is written in Front-End Webdevelopment languages like HTML, CSS and Javascript, and is very dependent on: 

 - [AngularJS](https://angularjs.org/) - 'Superheroic JavaScript MVW Framework'
 - [Semantic UI](http://semantic-ui.com/) - 'Semantic is a UI component framework based around useful principles from natural language. '

