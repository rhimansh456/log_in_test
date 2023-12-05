import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {

    const navigate = useNavigate();

    const [value, setValue] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        setValue(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:7071/signup`, value)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <section>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>
                            Username:
                        </label>
                        <input type='text' name='name' onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor='email'>
                            Email:
                        </label>
                        <input type='email' name='email' onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor='password'>
                            Password:
                        </label>
                        <input type='Password' name='password' onChange={handleInput} />
                    </div>
                    <button type='submit'>
                        signup
                    </button>
                    &nbsp;
                    <Link to={'/'}>
                        <button>
                            login
                        </button>
                    </Link>
                </form>
            </section>
        </>
    )
}

export default SignUp;