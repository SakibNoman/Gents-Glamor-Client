import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router";
import { toast } from "react-toastify";
import { UserContext } from "../../App";
import googleIcon from '../../images/icons/googleIcon.png';
import firebaseConfig from './firebase.config';

const Login = () => {

    //useContext hook
    const [userInfo, setUserInfo] = useContext(UserContext);

    //for redirect option
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    //firebase option
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleLogin = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { photoURL, email, displayName } = result.user;
                const newUserInfo = { ...userInfo }
                newUserInfo.email = email;
                newUserInfo.image = photoURL;
                newUserInfo.name = displayName;
                newUserInfo.isSignedIn = true;
                setUserInfo(newUserInfo);
                toast(`Welcome ${displayName}`)
                history.replace(from)
            }).catch((error) => {
                console.log(error.message);
            });
    }


    return (
        <div className="d-flex justify-content-center mt-5 pt-5" >
            <div onClick={() => handleLogin()} style={{ cursor: "pointer" }} className="rounded-pill bg-dark p-2 text-white">
                <div style={{ width: "300px" }} className="d-flex justify-content-between align-align-items-center p-2">
                    <img style={{ width: "25px " }} src={googleIcon} alt="" />
                    <h6 className="mx-auto position-absolute" style={{ left: "0", right: "0", textAlign: "center" }} >Login with Google</h6>
                </div>
            </div>
        </div>
    );
};

export default Login;