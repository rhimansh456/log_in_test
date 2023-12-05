import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createStudentAsync } from '../student/studentSlice'
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

function StudentView() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        rollno: '',
        name: '',
        course: '',
        address: '',
        contact: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        if (
            formData.rollno.trim() === '' ||
            formData.name.trim() === '' ||
            formData.course.trim() === '' ||
            formData.address.trim() === '' ||
            formData.contact.trim() === '' ||
            formData.email.trim() === ''
        ) {
            message.warning('Please fill in all the required fields');
            return;
        }
        dispatch(createStudentAsync(formData))
        navigate('/')
    }

    return (
        <>
            <div>
                <input type='number' name='rollno' placeholder='Roll No' onChange={handleInputChange} required />
                <input type='text' name='name' placeholder='Name' onChange={handleInputChange} required />
                <input type='text' name='course' placeholder='Course' onChange={handleInputChange} required />
                <input type='text' name='address' placeholder='Address' onChange={handleInputChange} required />
                <input type='number' name='contact' placeholder='Contact' onChange={handleInputChange} required />
                <input type='email' name='email' placeholder='Email' onChange={handleInputChange} required />
                <button onClick={handleSubmit}>Create Student</button>
            </div>
        </>
    )
}

export default StudentView