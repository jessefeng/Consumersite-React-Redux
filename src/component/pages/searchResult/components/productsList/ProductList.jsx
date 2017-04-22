import React from 'react';
import PropTypes from 'prop-types';

const ProductList = (props)=> {
    console.log(props.listingData);
    return (
        <div>
            <h1>State: {props.productName}</h1>
            <p>abbreviation: {props.listingData.abbreviation}</p>
        </div>
    );
};
ProductList.propTypes = {
    productName: PropTypes.string,
    listingData: PropTypes.object
};

export default ProductList;
