import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Photos.scss'

const getRandomPhotos = async (page)=> {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        return response.data;
    } catch (error) {
        // handle error
        console.log(error);
    }
}



const Photos = () => {
    const [randomPhotos, setRandomPhotos] = useState([]);
    const [nextPage, setNextPage] = useState(1)

    const handleLoadMorePhotos = async ()=> {
        const images = await getRandomPhotos(nextPage);
        console.log(images);

        const newPhotos = [
            ...randomPhotos,
            ...images
        ]
        
        setRandomPhotos(newPhotos)
        setNextPage(nextPage + 1);
    }

    useEffect(()=> {
        handleLoadMorePhotos();
    }, [])
    return (    

        <div>
            <div className='grid-container'>
                {randomPhotos.length > 0 &&
                    randomPhotos.map(photo => (
                    <div className='grid-item' key={photo.id}>
                        <img src={photo.download_url} width='300px' alt='author'/>
                    </div>
                ))}
            </div>
            <button onClick={handleLoadMorePhotos} className='btn'>Load More</button>
        </div>
    );
};

export default Photos;