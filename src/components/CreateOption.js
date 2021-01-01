import React from 'react';
import { Link } from 'react-router-dom';
import './background.css';
import { GrGroup } from 'react-icons/gr';
import { IoIosMan } from 'react-icons/io';

const CreateOption = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Create an account as</h2>
            <div class="row ">
                <div class="col-sm-6">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title">Individual   <IoIosMan /></h5>
                            <p class="card-text">Click Create button for Sign Up</p>
                            <Link to="individual" class="btn btn-primary">Create</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-3">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title">Organization  <GrGroup /></h5>
                            <p class="card-text">Click Create button for Sign Up </p>
                            <Link exact to="organization" class="btn btn-primary">Create</Link>
                        </div>
                    </div>
                </div>
            </div>
            <h4>Already have an account?</h4>
            <Link exact to="/login">Login here</Link>
        </div>

    );
}

export default CreateOption;