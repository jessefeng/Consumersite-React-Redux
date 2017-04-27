import React from 'react';
import PropTypes from 'prop-types';

import ProductListingsPanel from 'Components/pages/searchResult/components/productsListings/ProductListingsPanel.jsx';
import DummyData from 'Components/constant/sample.json';

import './style/SearchResultPage.scss';

class SearchResultPage extends React.Component {

    render() {
        return (
            <div className="search-result-page container">
                <h2 className="search-page-title">
                    Search Result Page
                </h2>
                <ProductListingsPanel listingData={DummyData}/>
            </div>
        );
    }
}


SearchResultPage.propTypes = {
    children: PropTypes.element,
};

export default SearchResultPage;
