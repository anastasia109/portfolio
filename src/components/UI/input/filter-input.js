import React from 'react';
import './filter-input.scss';

const FilterInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className="filter-input"/>
    );
});

export default FilterInput;