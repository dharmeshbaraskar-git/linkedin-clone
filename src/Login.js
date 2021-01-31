import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL
                }))
            }).catch(error => alert(error))
    }
    const register = () => {
        if (!name) {
            return alert('Please enter  a full name')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: photoUrl
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        dispatch: name,
                        photoURL: photoUrl
                    }))
                })
            }).catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <img src="https://www.freepnglogos.com/uploads/linkedin-black-logo-19.png" alt="" />
            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name (required if registering)" type="text" />
                <input value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} placeholder="Profile pic URL (Optional)" type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
                <button onClick={loginToApp} type="submit">Sign In</button>
            </form>
            <p>Not a member?{" "}
                <span className="login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    );
}

export default Login;