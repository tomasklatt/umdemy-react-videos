import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/Youtube'
import VideoList from './VideoList'

class App extends React.Component {
    state = {videos: []};

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q:term
            }
        })

        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div><VideoList videos = {this.state.videos}/></div>
            </div>
        );
    }
}

export default App;