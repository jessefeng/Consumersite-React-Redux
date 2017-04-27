import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './style/ProductList.scss';

const ProductList = (props)=> {
    return (
        <div className="col-lg-4 product-list-item">
            <Link to={'productdetailspage/' + props.productName}>
                <h1>State: {props.productName}</h1>
                <p>abbreviation: {props.listingData.abbreviation}</p>
                <img className="search-list-thumbnail" src={'assets/images/' + props.productName.toLocaleLowerCase().replace(/ /g, '_') +'.jpg'} alt=""/>
            </Link>
        </div>
    );
};
ProductList.propTypes = {
    productName: PropTypes.string,
    listingData: PropTypes.object,
    param: PropTypes.object,
};

export default ProductList;
