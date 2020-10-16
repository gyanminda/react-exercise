import React from 'react';
import './App.css';


function App() {
    // TODO: Add other states for the application.
    const [username, setUsername] = React.useState('');

    // TODO: Console.log(event) and get the object which has value of the input field.
    const handleUsername = event => setUsername();

    const handleApiCall = (username, password) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // TODO: add username and password.
            body: JSON.stringify({})
        };
        fetch("api call", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    // success response will be in result.
                },
                (error) => {
                    // failure response will be in error.
                }
            )
    }

    return (
        <div className="App">
            <div className="task_input">
                <h1>Login Form</h1>
                {/* TODO: Add a conditional rendering based on the api call. Handle the state and then do a conditional rendering. 
                    Ref: https://reactjs.org/docs/conditional-rendering.html
                */}
                <input type="text" id="username" name="username" onChange={handleUsername} value={username} placeholder="Username" />
                <br />
                <input type="password" id="password" name="password" placeholder="Password" />
                <div className="center">
                    <button type="button" className="btn btn-success" id="add-task-btn" onClick={handleApiCall}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default App;
