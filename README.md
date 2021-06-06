 _______________________________________________________________________
 
 Tech Stack: Bootstrap4 , Nodejs , ExpressJs  , JS.
 _____________________________________________________________________________________________________________________________________________________
 
 Package used are: i) body-parser
                  ii) dotenv
                  iii) express
                  iv) node-fetch
                  v) nodemon
________________________________________________________________________________________________________________________________________________________                
Task to perform :- 
1. A frontend which accepts a comma separated list of roll numbers (front end in React or Nextjs is preferred)

2. On entering the value and pressing submit, a request should be sent to the backend (write a backend api in nodejs to accept this from frontend)

3. From the backend, you have to call an external API to get the pass/fail result, as follows:
`http://proedge.me/test.php?rollnumber=123 `
4. From the backend, when all the rollnumber results are known, return the results to the frontend

5. On frontend, display the roll numbers and their result in a tabular format.

______________________________________________________________________________________________________________________________________________________________

Little bit of explanation:-

i) body-parser hepls us to parse the Node js body. It is use to parse incoming request.
ii) dotenv- helps us to save our environment variable and allows us to access the project using port number
iii) express -It is a back end web application framework for Node.js, designed for building web applications and APIs.
iv) node-fetch - A light-weight module that brings the Fetch API to Node.js
v) nodemon- nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes.

Some Key Methods used:-
 i)POST : Post method facilitates you to send large amount of data because data is send in the body.
 ii) GET : et method facilitates you to send only limited amount of data because data is sent in the header.
 iii)Promis : The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
________________________________________________________________________________________________________________________________________________




