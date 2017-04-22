import React from 'react';
import { Link } from 'react-router-dom';

import './style/GlobalHeader.scss';

class GlobalHeader extends React.Component {

    render() {
        return (
                <header className="global-header">
                    <div className="global-header-container">
                        <Link className="global-header-title  col-lg-6" to='/'><h1>Global Header</h1></Link>
                        <nav>
                            <ul className="global-header-NavLnk">
                                <li><Link className="global-header-NavLnk-listItem" to="/searchresultpage">Search</Link></li>
                                <li><Link className="global-header-NavLnk-listItem" to="/productdetailspage">Detail</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
        );
    }
}

export default GlobalHeader;
