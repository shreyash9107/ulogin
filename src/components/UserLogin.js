import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginAPI, } from '../API/apis'

const UserLogin = () => {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState('')
    const [user, setUser] = useState({
        email: "",
        passward: ""
    });
    const { email, passward } = user;

    const submit = async () => {
        console.log('submit')
        seterror('')
        try {
            setloading(true)
            let login_data = {
                username: email,
                password: passward,
            };
            console.log(login_data)
            let resp = await loginAPI(login_data)
            setloading(false)
            if (resp.token) {
                localStorage.setItem('token', resp.token)
            } else {
                seterror(resp.error)
            }

        } catch (error) {
            console.log(error)
            setloading(false)
            seterror('Wrong Email or Password')
        }
    }

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

    };

    return (
        <div className="container mt-5">
            <h3>User Login</h3>
            <form className="shadow-sm p-3 mb-5 bg-white rounded">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                    />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="passward"
                        value={passward}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                {console.log(loading)}
                <button onClick={e => { e.preventDefault(); submit() }} type="submit" class="btn btn-primary w-50">{loading ? '...' : 'Login'}</button>
                <p>{error}</p>
            </form>
            <Link className="me-5" exact to='/forget'>Forget your password?</Link>
            <Link exact to='/'>Don't have an account yet?</Link>
        </div>
    );
}

export default UserLogin;