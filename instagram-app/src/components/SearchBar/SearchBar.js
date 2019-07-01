import React from 'react';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div>
                <img className= "insta-logo" src= "https://c866088.ssl.cf3.rackcdn.com/assets/instagram40x40.png" alt= "instagram logo" />
            </div>
            <div>
                <input type= "text" placeholder= "Search" />
            </div>
            <div className="icons">
                <img className="compass" src="instagram-app\compass.png" alt="compass icon"/>
                <img className="heart" src="instagram-app\heart.png" alt="heart icon" />
                <img className="user" src="instagram-app\user.png" alt="user icon" />
            </div>
            
        </div>
    )
}

export default SearchBar;