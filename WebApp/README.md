## Deploying the static Web app in Tomcat
  - Install Tomcat latest version.
  - Add the Lexbot folder inside Tomcat/webapps
  - start the tomcat server from bin
  - Hit localhost:8080/lexbot/lexbot.html

## Running Node js http-server
  - npm install http-server
  - go into node_modules/http-server/bin
  - create an html file there
  - Start server:
      - node http-server <path to the directory for the html>/.
       - . means start the server with current directory contents


## Adding ssl to http-server
  - create certificate with below command:
  		- openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
  - copy the key.pem and cert.pem in 		
  - run the server as below:
  		- node http-server -S -C ~/work/LexSnowAd/WebApp/lexbot/cert.pem ~/work/LexSnowAd/WebApp/lexbot/.

## Running the node server:
  - go to the directory where server.js is present
  - run command:
    - node server.js
  - If you want to run the server in hot reload mode do below:
    - install nodemon:
        > sudo npm install nodemon -g
    - start server with below command:
      > nodemon server.js