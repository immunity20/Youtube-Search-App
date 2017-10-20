import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyDboSs8wBOeUUtJ6GOCti3Ru0Z_DTacmJs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: 'len10 in capetown',
    };
    this.searchVideo(this.state.term);
  }

  searchVideo(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({ videos, selectedVideo: videos[0], term });
    });
  }
  render() {
    const searchVideo = _.debounce((term) => { this.searchVideo(term) }, 500);
      return (
        <div>
          <SearchBar
            searchTerm={searchVideo}
            withTerm={this.state.term}
          />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      );
  }
}

//  DOM render
ReactDOM.render(<App />, document.querySelector('.container'));
