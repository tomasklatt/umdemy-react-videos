import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form">
                    <div className="field">
                        <label>Video search</label>
                        <input
                            onChange={this.onInputChange}
                            type="text"
                            value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;