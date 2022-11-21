import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';




const Home = () => {

    const responseGoogle = (response) => {
        console.log(response);
        axios.post("http://localhost:8080/",{response})

    }
    

    return (
        <>
            <h1>Hello, World!</h1>
            <GoogleLogin
                clientId="394295198428-icelu33b5ulfasp4i0anf24gsltjmnje.apps.googleusercontent.com"
                buttonText="Accedi"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                responseType="code"
                accessType="offline"
                scope="openid email profile https://www.googleapis.com/auth/calendar"   
            />
        </>
    );
};

export default Home;