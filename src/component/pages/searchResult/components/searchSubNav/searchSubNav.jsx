import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ match })=> {
    return (
        <div>
            ID: {match.params.stateID}
        </div>
    );
};
ProductList.propTypes = {
    match: PropTypes.object.isRequired,
};

export default ProductList;
