import React from 'react';
import PropTypes from 'prop-types';

import GlobalHeader from 'Components/globalheader/GlobalHeader.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
                <GlobalHeader />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
};


export default App;