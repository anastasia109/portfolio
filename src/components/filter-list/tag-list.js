import React from 'react';

const TagList = ({list}) => {
    const tags = list.tags.split(",").slice(0, -1);

    return (
        <>
            {tags.map((tag) => <li key={tag} className="technology__list-tag">{tag}</li>)}
        </>
    );
};

export default TagList;