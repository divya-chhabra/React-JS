import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading1 = React.createElement('h1',{},"Namaste React");
// const heading2 = React.createElement('h2',{},"Course by Akshay Saini")
// const heading3 = React.createElement('h3',{},"This is a JSX Example");
// const div = React.createElement('div',{class:"title"},[heading1, heading2, heading3])

const TitleComponent = () => {
    return (<div className='title'>
        <h1>Namaste React</h1>
        <h2>Course by Akshay Saini</h2>
        <h3>This is a JSX Example</h3>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleComponent/>);