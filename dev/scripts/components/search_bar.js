import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '' 
        };
    }

    render() {
        return(
            <div className="search-bar">
                <input placeholder="Search Videos"
                    value={this.state.term}
                    onChange={e => this.handleInputChange(e.target.value)} />
            </div>            
        );
    }

    handleInputChange(term) {
        this.setState({term});
        this.props.handleSearchTermChange(term);
    };
}

export default SearchBar;