import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import {collection,addDoc} from 'firebase/firestore';

import { db } from "../../firebase";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

// database refrence 

const dbref = collection(db,"userData")


useEffect(() => {
  const storedUser = localStorage.getItem('user');
  // if (storedUser) {
  //   navigate('/dashboard'); // Automatically redirect if user is already logged in
  // }
}, [navigate]);

  // Basic validation checks
  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      /\S+@\S+\.\S+/.test(email) // Basic email validation regex
    );
  };

  const handleLinkClick = () => {
    if (!isFormValid()) {
      e.preventDefault();
       // Prevent navigation if form is not valid
    }

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await addDoc(dbref, { Name: name, Email: email, Password: password });

        const userData = { uid: user.uid, name: name, email: email };
        localStorage.setItem('user', JSON.stringify(userData));

        console.log("User created and stored:", userData);

        console.log(user);

        addDoc(dbref,{Name:name, Email:email, Password:password});

        setTimeout(() => {
          setLoading(false);
          navigate("/login");
          setEmail('');
          setPassword('');
          setName('');
        }, 3000);
        
      })
      .catch((error) => {
        window.alert("Email already in use");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="formContainer">
          <div className="formWapper">
            <span className="logo">Funded Grow</span>
            <span className="title">Register</span>
            <form onSubmit={handleLinkClick}>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="submit"
                className='SignIn cursor-pointer'
                disabled={!isFormValid()}
              >
                SignUp
              </button>
            </form>
            <p>
              You do have an account?{" "}
              <Link className="no-underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
