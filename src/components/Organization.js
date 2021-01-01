import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { loginAPI, registerAPI } from '../API/apis'
const CreateOrg = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        passward: ""
    });
    const { name, username, email, passward, last_name, organisation_name } = user;
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState('')

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    };

    const onSubmit = async e => {
        e.preventDefault()
        console.log('submit')
        seterror('')
        try {
            setloading(true)
            let registerAPIData = {
                username: username,
                email: email,
                password: passward,
                first_name: name,
                last_name: 'last_name',
                user_type: 2,
                organisation_name: organisation_name,
            }
            console.log(registerAPIData)
            let resp = await registerAPI(registerAPIData)
            setloading(false)
            if (resp === 'error') {
                seterror('error')
            } else {
                seterror(resp.message)
                if (resp.token) {
                    localStorage.setItem('token', resp.token)
                }
            }
        } catch (error) {
            console.log(error)
            setloading(false)
            seterror('Error')
        }
    }
    return (
        <div className="container mt-5">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="mb-3">Add Organization Details</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter organizaton name"
                            name="name"
                            value={name}
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
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter last name"
                            name="last"
                            value={last_name}
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
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your organization name"
                            name="organisation_name"
                            value={organisation_name}
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
                    <p>{error}</p>
                </form>
                <Link exact to="login">Already have a account?</Link>

            </div>
        </div>
    )
}

export default CreateOrg;