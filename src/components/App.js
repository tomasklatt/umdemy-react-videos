import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/Youtube'
import VideoList from './VideoList'
import VideoDetail from "./VideoDetail";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit('Spartička')
    }, []);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q:term
            }
        })

        setVideos(response.data.items);
    };
    
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit}/>
            <VideoDetail video={selectedVideo} />
            <div><VideoList videos = {videos} onVideoSelected = {(video) => {setSelectedVideo(video)}}/></div>
        </div>
    );
}


export default App;