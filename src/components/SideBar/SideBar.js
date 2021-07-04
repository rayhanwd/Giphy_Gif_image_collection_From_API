import React, { useContext } from 'react';
import { SearchContext } from '../../App';
import './SideBar.css';

const SideBar = () => {
    const [search, setSearch] = useContext(SearchContext);
    return (
        <div className="left_side">
           <h2>Keywords History</h2>
           <h4 className="tagline">#trading</h4>
           {search&&<h4 className="tagline">{search}</h4>}
        </div>
    );
};

export default SideBar;