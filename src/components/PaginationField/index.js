import React from 'react';

import Pagination from 'react-js-pagination';

import './style.css';

const PaginationField = props => <Pagination activeClass={'pagination__button_active'} itemClass={'pagination__button'} {...props} />;

export default PaginationField;
