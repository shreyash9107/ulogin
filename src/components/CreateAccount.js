import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { loginAPI, registerAPI } from '../API/apis'
import './background.css'
const CreateIndAcc = () => {
    let history = useHistory();
    const [loading, setloading] = useState(false)
    const [text, setText] = useState('')
    const [user, setUser] = useState({
        name: "",
        last_name: "",
        username: "",
        email: "",
        passward: ""
    });
    const { name, last_name, username, email, passward } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    };

    const onSubmit = async e => {
        e.preventDefault()
        console.log('submit')
        setText('')
        try {
            setloading(true)
            let registerAPIData = {
                username: username,
                email: email,
                password: passward,
                first_name: name,
                last_name: last_name,
                user_type: 1,
                organisation_name: '',
            }
            console.log(registerAPIData)
            let resp = await registerAPI(registerAPIData)
            setloading(false)
            if (resp === 'error') {
                setText('error')
            } else {
                setText(resp.message)
                if (resp.token) {
                    localStorage.setItem('token', resp.token)
                }
            }
        } catch (error) {
            console.log(error)
            setloading(false)
            setText('Error')
        }
        // history.push('/login')
    }
    return (
        <div className="container mt-5">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="mb-3">Add User Details</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your first name"
                            name="name"
                            value={name}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your last name"
                            name="last_name"
                            value={last_name}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Username name"
                            name="username"
                            value={username}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="passward"
                            className="form-control form-control-lg"
                            placeholder="Enter Passward"
                            name="passward"
                            value={passward}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning w-75 mb-3">{loading ? '...' : 'Create account'}</button>
                    <p>{text}</p>
                </form>
                <Link exact to="login">Already have a account?</Link>
            </div>
        </div>
    );
}

export default CreateIndAcc;