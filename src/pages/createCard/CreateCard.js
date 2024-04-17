import React, { useState } from 'react';
import axios from 'axios';
import './create.css'
const CreateCard = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://dummyjson.com/posts/add', formData)
            .then(response => {
                console.log(response.data);
                setFormData({
                    title: '',
                    description: '',
                    imageUrl: ''
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='create'>
            <h2>Create Card</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateCard;
