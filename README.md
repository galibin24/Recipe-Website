# Recipe_Website

The gihub repo with backend version: https://github.com/galibin24/Recipe-Website.  
The website can be found here: https://nikitagalibinrecipes.tk/.

### General Description

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The recipe website project is an illustration of one of the generic websites you can see on the web. Recipes represent main content which can be added, updated or deleted by users. The authentication is implemented so the users first need to register to manipulate recipes. The basic pagination and sorting provide the illustration of basic user experience enhancements. The third-party API(Unsplash) is used to provide an image for each recipe. All those components can be easily extended(e.g. Adding additional sorting options, improving recipe description, comment section …).

### Front-end Specification( React, Redux, Bootstrap )

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The main part of the frontend was written in React + Redux. The React was used for each part(component) of the website. Hence, no static html files were written, all of html was written in JSX. All the react components are functional, no class components are present in this project. Redux was used more as an example for managing global states(also can be achieved by props passing or react context API), it is used to pull recipes from a backend, update them or delete them. The redux was also implemented to manage state of user authentication. The styling of the website was done entirely in Bootstrap with some SASS twiks. Axios library was used for sending requests.

### Back-end Specification( Django, MySQL )
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The backend is written as an independent RESTful API utilizing Django Rest Framework. The main functionality of backend is serializing recipes, storing them in database and authenticating users. The user authentication is done using JWT methodology where the jwt token is passed on every writable request to the backend. MySQL database is used in production where SQLite is used in development.

### DevOps( Docker, Nginx, AWS EC2 )
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The website was deployed on AWS EC2 instance using docker containers. The frontend is deployed in an independent container using nginx as a server. The backend is deployd in an independent container where gunicorn acts as a server. There is a separate Nginx-server on port 80 which provides SSL certification and proxies all the requests to respected backend and frontend servers, running in a container.

### Potential Imporovments
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The main area of potential improvements from my current understanding of a project include a refactoring of frontend components providing better isolation for each component(e.g pagination should be independent from the RecipeList component). A wrapper for each request to backend in order to include the authentification status(right now every request implictly declares authentification status)
