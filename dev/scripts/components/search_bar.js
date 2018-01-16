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
                <h1 className="logo"><a href="http://www.gilbertjose.ca">&#60;gj /&#62;</a></h1>
                <div className="search-input">
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    <input 
                        placeholder="Search Videos"
                        value={this.state.term}
                        onChange={e => this.handleInputChange(e.target.value)} />

                </div>
            </div>            
        );
    }

    handleInputChange(term) {
        this.setState({term});
        this.props.handleSearchTermChange(term);
    };
}

export default SearchBar;