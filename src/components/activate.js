import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { activateAPI, registerAPI } from '../API/apis'
const Activate = () => {
    const [token, settoken] = useState('')
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState('')
    const Submit = async (e) => {
        seterror('')
        try {
            setloading(true)
            let activateAPIData = {
                "activation_token": token,
            }
            let resp = await activateAPI(activateAPIData)
            setloading(false)
            if (resp.message) {
                seterror(resp.message)
            } else {
                seterror(resp.error)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container mt-5">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Put your token here</label>
                <input type="text"
                    class="form-control"
                    name="token"
                    onChange={e => settoken(e.target.value)}
                    value={token}
                />

            </div>
            <button onClick={e => { e.preventDefault(); Submit() }} className="btn btn-warning">Activate</button>
            <p>{error}</p>
            <Link exact to="login" className="btn btn-primary">Go back to login</Link>
        </div>
    );
}

export default Activate;