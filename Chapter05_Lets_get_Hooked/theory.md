What is difference between Named Export, Default Export and * as export ?

Named Export is exporting a variable or function using "export" as keyword before the function or variable only and it can be imported using {} with same name in another file.
A number of variables, functions can be exported using Named Export. 

Default Export is exporting a variable or function using "export default" as keyword before the function or variable only and it can be imported using any name without {} in another file.

One file can have a single default export.


What is the importance of config.js?

Config.js is a separate file used to store the hardcoded data.

What are React Hooks?

React Hook is a function and can be imported from React. There are various types of Hooks that can be used in react.

Why do we need a useState Hook?

React keeps the track of State variables only. useState Hook helps us in creating a state variable and it's set method. State variables are used in React to do two way binding manually. useState Hook returns an array consists of the state variable at zero index and set method at one index.