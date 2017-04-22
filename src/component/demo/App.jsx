import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import GlobalHeader from 'Components/globalheader/GlobalHeader.jsx';
import HomePage from 'Components/pages/homePage/HomePage.jsx';
import SearchResultPage from 'Components/pages/searchResult/SearchResultPage.jsx';
import ProductDetailsPage from 'Components/pages/productDetails/ProductDetailsPage.jsx';
// import PageNotFound from 'Components/pages/404/PageNotFound.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <GlobalHeader />
                    <Route exact  path="/" component={HomePage}/>
                    <Route path="/searchresultpage" component={SearchResultPage}/>
                    <Route path="/productdetailspage" component={ProductDetailsPage}/>
                </div>
            </Router>
        );
    }
}

export default App;