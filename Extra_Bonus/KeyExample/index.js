import ReactDOM from "react-dom/client";
const App =()=>{
    return (
        <div className="section">
            <div className="title">
                <h1>Checking for key updation</h1>
            </div> 

            <div className="content">
                <h1>let's see</h1>
            </div>

            <div>
                <h1> if it shows an error or not</h1>
            </div> 
                  
        </div>

    )
}

const List = ()=>{
    return (
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
    )
}

const array = ["One", "Two", "Three"];

const Maplist=()=>{

    return(
        <ul>
            {array.map((item)=> (<li>{item}</li> ))}

        </ul>
    )
    
    
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<List/>);