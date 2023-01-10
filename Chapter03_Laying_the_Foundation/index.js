import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement('div',{className:"title"},
               [ React.createElement('h1',{key:"h1"},"Namaste React"),
                 React.createElement('h2',{key:"h2"},"Course by Akshay Saini"), 
                 React.createElement('h3',{key:"h3"},"This is a Nested Header Example")
               ])

const TitleComponent = (
    <div className='title'>
        <h1>Namaste React</h1>
        <h2>Course by Akshay Saini</h2>
        <h3>This is same example using JSX Component</h3>
    </div>
)

const TitleFunctionalComponent = () => {
    return (<div className='title'>
        <h1 id="h1">Namaste React</h1>
        <h2 id="h2">Course by Akshay Saini</h2>
        <h3 id="h3">This is same example using JSX Functional Component</h3>
    </div>)
}

const CompositionalComponent = () =>{
    return (
        <div>
        {TitleFunctionalComponent()}
        <p>This is a Compositional Component</p>
        </div>
    )
}

const Logo = () =>{
    return(
        <div>
        <img src='https://www.rswebs.in/wp-content/uploads/2019/08/rs.png' />
        </div>
    )
}

const SearchBar = () =>{
    return (
        <div>
        <input type="search" />
        <button><i class="fa-solid fa-search"></i></button>
        </div>
    )
}

const UserIcon = () => {
    return(
        <div>
        <i class="fa-solid fa-user"></i>
        </div>
    )
}

const Header = () => {
    return (<div id="container">
        <Logo/>
        <SearchBar></SearchBar>
        {UserIcon()}
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(header);
//root.render(TitleComponent);
//root.render(<TitleFunctionalComponent/>);
//root.render(<CompositionalComponent></CompositionalComponent>)

root.render(<Header/>);