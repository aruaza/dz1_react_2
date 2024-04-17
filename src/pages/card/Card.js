import React, {useEffect, useState} from 'react';
import axios, {get} from "axios";

const Card = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getAsync = async () => {
            const response = await axios.get('https://dummyjson.com/posts')
            setData(response.data.posts)
        }
        getAsync()
    }, []);
    console.log(data)
    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
            {
                data?.map((item) => (
                    <div style={{border:'3px solid black', width:'200px'}} key={item.id}>
                        <p>{item.body}</p>
                        <h4>{item.title}</h4>
                        <strong>{item.tags[2]}</strong>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;