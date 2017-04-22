import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';


import ProductList from 'Components/pages/searchResult/components/productsList/ProductList.jsx';
import searchSubNav from 'Components/pages/searchResult/components/searchSubNav/searchSubNav.jsx';

class ProductListingsPanel extends React.Component {

    renderAllList(){
        return Object.keys(this.props.listingData).map((ele,key)=> {
           return (<ProductList key={key} listingData={this.props.listingData[ele]} productName={ele}/>);
        });
    }

    render() {
        return (
         <div>
             <Router>
                 <div>
                     <ul>
                         <li><Link to="/state">State</Link></li>
                         <li><Link to="/CityName">City Name</Link></li>
                         <li><Link to="/StateImage">State Image</Link></li>
                     </ul>
                     <Route path="/:stateID" component={searchSubNav}/>
                 </div>
             </Router>
             <hr/>
             <div>
                 {this.renderAllList()}
             </div>
         </div>
        );
    }
}

ProductListingsPanel.propTypes = {
    listingData: PropTypes.object.isRequired,
};

export default ProductListingsPanel;
