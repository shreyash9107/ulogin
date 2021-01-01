import React from 'react';
import { Link } from 'react-router-dom';
import './background.css'
const Forget = () => {
    return (
        <div className="container mt-5">
            <h4 className="m-3">Lets find your account</h4>
            <form>
                <div class="mb-3">
                    <input type="email" class="form-control"
                        placeholder='Enter Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <Link exact to='/login' className="btn btn-warning">Continue</Link>
            </form>
        </div>
    );
}

export default Forget;