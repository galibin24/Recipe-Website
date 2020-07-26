import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDom.render(<App />, document.getElementById("root"));

// TODO add ip adresses into envirometal variables

// TODO docker(AWS - docker, kubernetis)
// TODO Nginx / Ansible (for digital ocean,  Digital Ocean - old fashioned installation on linux)
// TODO Serverless( Netlify serverless API)
// TODO the role of serilizers

// TODO CSS, Material, Bookstrap, responsive-layout

// TODO implemetn pagination
// TODO implement user log in(session, token, access/refresh tokens, oauth )

// TODO questions...
// 1) Enviromental variables: the diffrence between storing in config files or directly storing in system memory.. What are the best practice.
// 2) why I can;t import in dotenv in wsgi but need to import it in manage.py
// 3) SOLID design patterns and ther relation to dependency injection
// 4) To what extent SOLID is utilized in python ?
// 5) Do I need to know the diffrence between simple and preflight requests
// 6) ASGI ???
// 7) Why can't I import database settigns through options??
// 8) When we implementing react inside of django template. Does html render on client side or server side?(i read it can be both)
// 9) I have read that search engines don't work well with client side rendering? help?
