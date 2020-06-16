import React, {useState} from 'react';
import fire from './firebase';

function Login(props) {

    const [error, setError] = useState('');

    const signUp = () => {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('Successfully Signed Up');
        })
        .catch((err) => {
            console.log(err.toString());
            setError(err.toString());
        })
    };

    const login = () => { 
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('Successfully Logged In');
        })
        .catch((err) => {
            console.log(err.toString());
            setError(err.toString());
        })
    };

    return (
        <div>
            <div className='Login'>
                <h1>Welcome</h1>
                <div className='from'>
                    <div>
                        <div>Email</div>
                        <input id="email" placeholder="Enter Email.." type="text"/>
                    </div>
                    <div>
                        <div>Password</div>
                        <input id="password" placeholder="Enter Password.." type="text"/>
                    </div>
                </div>
                <div className='submit'>
                    <div>
                        <button style={{margin: '10px'}} onClick={login} className='btn li'>Login</button>
                        <button style={{margin: '10px'}} onClick={signUp} className='btn su'>Sign Up</button>
                    </div>
                    <div className='error'>
                        {error && (<div>{error}</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;