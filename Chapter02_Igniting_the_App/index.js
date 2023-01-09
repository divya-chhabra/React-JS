import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h2',{key:"h2"},"Namaste React");
const heading2 = React.createElement('h3',{key:"h3"},"Course by Akshay Saini")
const div = React.createElement('div',{id:"title"},[heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);