import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LogIn() {

    const navigate = useNavigate();

    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        setValue(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    }

    useEffect(() => {
        axios.get('http://localhost:7071/')
          .then(res => {
            if (res.data.valid) {
                navigate('/home')
            } else {
              navigate('/')
            }
          })
          .catch(err => console.log(err))
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:7071/login`, value)
        .then(res => {
            if (res.data.Login) {
            navigate('/home')
            } else {
                alert('No Record')
            }
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <section>
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>
                            Email:
                        </label>
                        <input type='email' name='email' required onChange={handleInput}/>
                    </div>

                    <div>
                        <label htmlFor='password'>
                            Password:
                        </label>
                        <input type='password' name='password' required onChange={handleInput} />
                    </div>

                    <button type='submit'>
                        login
                    </button>

                    <Link to={'/signup'}>
                        <button>
                            signup
                        </button>
                    </Link>
                </form>
            </section>
        </>
    )
}

export default LogIn