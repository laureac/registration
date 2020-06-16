import React from 'react';
import fire from './firebase';

function Home() {

  const logout = () =>{
    fire.auth().signOut();
  };

    return (
      <div className='Home'>
        <h1>You are logged in</h1>
        <button onClick = {logout} className='btn lo'>Logout</button>
      </div>
    )
}

export default Home;