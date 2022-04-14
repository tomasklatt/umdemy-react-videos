import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/Youtube'
import VideoList from './VideoList'
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {videos: [], selectedVideo: null};

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q:term
            }
        })

        this.setState({ videos: response.data.items });
    };

    onVideoSelected = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <div><VideoList videos = {this.state.videos} onVideoSelected = {this.onVideoSelected}/></div>
            </div>
        );
    }
}

export default App;