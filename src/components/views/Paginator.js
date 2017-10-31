import React from 'react';
import ReactPaginate from 'react-paginate';

import './css/ReactPaginate.css';


/**
 * Wrapper class for ReactPaginate that sets some defaults
 */
export default props => (
    <ReactPaginate
        containerClassName='react-paginate'
        activeClassName='active'

        marginPagesDisplayed={1}
        pageRangeDisplayed={4}

        previousLabel='previous'
        nextLabel='next'

        // This line must be last if we want the provided props to override the
        // defaults set above
        {...props}
    />
)
