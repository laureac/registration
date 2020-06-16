import React, {useState, useEffect} from 'react';
import './App.scss';
import Home from './component/Home';
import Login from './component/Login';
import fire from './component/firebase';

function App() {

    const [user, setUser] = useState(null)

    useEffect(()=>{
        authListener(); 
    }, [])

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
        })
    };

    return (
        <div className='App'>
            {user ? ( <Home /> ): ( <Login /> )}
        </div>
    );
}

export default App;