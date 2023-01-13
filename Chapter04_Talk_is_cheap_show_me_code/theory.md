Is JSX mandatory for React?

No, JSX is not mandatory for react. You can create react elements by using React.createElement method as well.

Is ES6 mandatory for React?

No, ES6 is not mandatory for react. You can write the code in ES5 as well and it will work with browser.

{TitleComponent} vs <TitleComponent /> vs <TitleComponent></TitleComponent> in JSX

{TitleComponent} - It represents a react element stored in a variable named TitleComponent

<TitleComponent/> or <TitleComponent></TitleComponent> represents a functional component.

How can I write comments in JSX ?

{
    // This is a single line comment

    /* This is a multiline comment.
       You can write in multiple lines
       and then close it. 
    */
}

What is <React.Fragment></React.Fragment> and <></>?

<React.Fragment></React.Fragment> is an empty component provided by React to use as parent of other components and <></> represents the shorthand of <React.Fragment>.

What is Virtual DOM?

A Representation DOM that we keep with us is called as Virtual DOM. React uses Virtual DOM to do Reconciliation process that makes the web app faster.

What is Reconciliation?

Reconciliation is a process in which React uses diffing algorithm to compare two trees, determining which component has to be updated and re-rendered.
In this way, the whole page won't be re-rendered instead the updated component will be re-rendered, making the application faster.

What is React Fiber?

React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Why we need keys in react? When do we need the keys in react?

When we have mutiple same children elements inside a parent element, React needs keys to identify a particular element. Giving keys is helpful in this case, as if a new element is added, react will re-render only the new element. Hence, the application will render fast.

Can we use index as keys?

We can't use index as keys as it may break your application and display wrong data.
A key is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.


What is Props in react?

Props are properties/attributes through which the data is passed from a component to another.

What is Config Driven UI?

When the UI changes as per the data passed to a site, is called as Config Driven UI.


