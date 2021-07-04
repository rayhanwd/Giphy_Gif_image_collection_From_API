import React from 'react';
import './GiphyBox.css'
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';


const GiphyBox = (props) => {
    console.log(props);
    const { images, title,bitly_gif_url } = props.value;
    return (
        <div className="giphy-box">
            <img src={images.fixed_height.url} alt="Computer man" />
            <a href={bitly_gif_url} target="_blank" rel="noopener noreferrer"><h4>{title}</h4></a>
            <div className="icon-box">
                <FaCloudDownloadAlt />
                <AiFillLike />
                <BiLink />
            </div>
        </div>
    );
};

export default GiphyBox;