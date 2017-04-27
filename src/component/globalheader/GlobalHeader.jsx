import React from 'react';
import { Link } from 'react-router';

import './style/GlobalHeader.scss';

class GlobalHeader extends React.Component {

    render() {
        return (
                <header className="global-header">
                    <div className="global-header-container">
                        <h1><Link to='/'>Global Header</Link></h1>
                        <nav>
                            <ul className="global-header-NavLnk">
                                <li className="global-header-NavLnk-listItem">
                                    <Link to='/searchresultpage'>Search</Link>
                                </li>
                                <li className="global-header-NavLnk-listItem">
                                    <Link to='/registrationpage' >Sign Up</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
        );
    }
}

export default GlobalHeader;
