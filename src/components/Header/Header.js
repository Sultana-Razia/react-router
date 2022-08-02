import React from 'react';
import { Link } from 'react-router-dom';
// import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/countries">Countries</Link>
                <Link to="/about">About</Link>
                {/* <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/about">About</CustomLink> */}
            </nav>
            <h1>Welcome To My Fancy Routing Website!!!</h1>
        </div>
    );
};

export default Header;