import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import GiphyBox from './GiphyBox';
import './Main.css'
import InputBox from './InputBox';
const Main = () => {

    document.title = 'Giphy | world famous Gif collection'
    const [Giphy, setGiphy] = useState([]);

    useEffect(() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=il5MDqwSzoS16i6I0aYfVLw0jp7FxUUc';
        fetch(url)
            .then(response => response.json())
            .then(data => setGiphy(data.data))

    }, [])

    return (
        <div className="container">
            <InputBox />
            <div className="main">
                <SideBar />
                <div className="row">
                    {Giphy.length < 0 ? <h4>loading.....</h4> :
                        Giphy.map(Giphy => <GiphyBox key={Giphy.id} value={Giphy}></GiphyBox>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;