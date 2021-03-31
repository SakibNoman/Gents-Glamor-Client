import React from 'react';
import googleIcon from '../../images/icons/googleIcon.png';

const Login = () => {

    const handleLogin = () => {
        console.log("Clicked");
    }


    return (
        <div className="d-flex justify-content-center mt-5 pt-5" >
            <div onClick={() => handleLogin()} style={{ cursor: "pointer" }} className="rounded-pill bg-dark p-2 text-white">
                <div style={{ width: "300px" }} className="d-flex justify-content-between align-align-items-center p-2">
                    <img style={{ width: "25px " }} src={googleIcon} alt="" />
                    <h6>Login with Google</h6>
                </div>
            </div>
        </div>
    );
};

export default Login;