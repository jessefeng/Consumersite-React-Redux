import React from 'react';
import PropTypes from 'prop-types';

import ProductList from 'Components/pages/searchResult/components/productsList/ProductList.jsx';

class ProductListingsPanel extends React.Component {

    renderAllList(){
        return Object.keys(this.props.listingData).map((ele,key)=> {
           return (<ProductList key={key} listingData={this.props.listingData[ele]} productName={ele}/>);
        });
    }

    render() {
        return (
         <div>
                 <div>
                     <ul>
                         <li>sort by name</li>
                         <li>sort by category</li>
                         <li>sort by year</li>
                     </ul>
                 </div>
             <hr/>
             <div>
                 {this.renderAllList()}
             </div>
         </div>
        );
    }
}

ProductListingsPanel.propTypes = {
    children: PropTypes.element,
    listingData: PropTypes.object.isRequired,
};

export default ProductListingsPanel;
