import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term)
    };

    return (
        <div className="ui segment search-bar">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video search</label>
                    <input
                        onChange={(event) => setTerm(event.target.value)}
                        type="text"
                        value={term}/>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;