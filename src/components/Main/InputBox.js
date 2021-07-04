import React, { createContext, useContext, useState } from 'react';
import { SearchContext } from '../../App';
import './InputBox.css';

const InputBox = () => {

   
    const [search, setSearch] = useContext(SearchContext);

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    return (
        <div className="input-box">
            <form>
                <input
                    type='text' value={search}
                    onBlur={handleChange}
                />
            </form>
        </div>
    );
};

export default InputBox;