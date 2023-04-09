import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const location = useLocation();
    const isStatisticsActive = location.pathname === '/statistics';
    const isAppliedJobsActive = location.pathname === '/appliedJobs';
    const isBlogActive = location.pathname === '/blog';

    return (
        <nav className={isStatisticsActive === true ? 'statistics' : isAppliedJobsActive === true ? 'appliedJobs' : isBlogActive === true ? 'blog' : 'nav'}>
            {
                isAppliedJobsActive || isBlogActive || isStatisticsActive === true ? <img className='header-img-1' src="./src/assets/Images/All Images/Vector.png" alt="" /> : ''
            }
            <div className='navbar'>
                <div className='navbar-link'>
                    <h1>Dream Catcher</h1>
                    <div>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/appliedJobs'>Applied Jobs</Link>
                        <Link to='/blog'>Blog</Link>
                    </div>
                    <button>Start Applying</button>
                </div>
                <div></div>
            
            </div>
            {
                isAppliedJobsActive || isBlogActive || isStatisticsActive === true ? <img className='header-img-2' src="./src/assets/Images/All Images/Vector-1.png" alt="" /> : ''
            }
        </nav>
    );
};

export default Header;