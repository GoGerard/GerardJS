# GerardJS
A modern bot for Discord - The Web Interface


----------

## GoGerard

Project details can be found on the [main repo.](https://github.com/GoGerard/GoGerard)

----------

### GerardJS ###

![Screenshot](Screenshot.png)


The webinterface is written HTML, CSS and JS, and is very dependent on:

 - [AngularJS](https://angularjs.org/) - 'Superheroic JavaScript MVW Framework'
 - [Semantic UI](http://semantic-ui.com/) - 'Semantic is a UI component framework based around useful principles from natural language.


#### How to use?

- Clone Repo
- Fill in the base URL (as seen by the client) of GerardAPI in /assets/js/app.js
- For example: `var api_prefix = 'http://localhost:8080';`
- As default, `'http://192.168.99.100:8080'` has been chosen as this is often the default docker machine IP address on devices that run Windows
- Open terminal in GerardJS folder
- `docker build -t gerardjs .`
- `docker run --name containername -d -p 80:80 gerardjs`
- The web interface is now being served using Nginx on the address of your docker-machine, which is localhost on UNIX-like hosts, and `docker-machine ip default` on Windows PCs
