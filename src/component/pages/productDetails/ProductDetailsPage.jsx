import React from 'react';
import PropTypes from 'prop-types';

import './style/ProductDetailsPage.scss';

class ProductDetailsPage extends React.Component {

    render() {
        const productID = this.props.params.productID;
        return (
            <div className="detail-result-page container">
                <h2 className="detail-page-title">
                    Product Detail Page
                </h2>
                <p className="detail-page-content">Product Detail Page with {productID}</p>
                <img src={'/assets/images/' + productID.toLocaleLowerCase().replace(/ /g, '_') +'.jpg'} alt=""/>
            </div>
        );
    }
}

ProductDetailsPage.propTypes = {
    params: PropTypes.object,
};

export default ProductDetailsPage;
