import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {videos: []};
}

onInputSubmit = async (input) => {
  const response = await youtube.get('/search/',
  {
    params: {
      q:input
    }
  });
  this.setState({videos: response.data.items});
};

render () {
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onInputSubmit}/>
      <VideoList videos={this.state.videos}/>
      </div>
  );
}
}

export default App;