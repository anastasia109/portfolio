import React from 'react';

import './filter-select.scss';

const FilterSelect = ({options, defaultValue, value, onChange}) => {

    return (
        <select
            className="filter-select"
            value={value}
            onChange={event => onChange(event.target.value)}>
            <option value="" disabled>{defaultValue}</option>
            {options.map(option =>
                <option value={option.value} key={option.id}>{option.name}</option>
            )}
        </select>
    );
};

export default FilterSelect;