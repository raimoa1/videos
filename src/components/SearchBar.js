import React from 'react';

class SearchBar extends React.Component {
constructor(props) {
  super(props);
  this.state = {input: ''};
}

onInputChange = (event) => {
this.setState({input: event.target.value});
};

onFormSubmit = (event) => {
  event.preventDefault();
  this.props.onFormSubmit(this.state.input);
};

  render () {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
              <input type="text" 
              value={this.state.input}
              onChange={this.onInputChange}
              />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;