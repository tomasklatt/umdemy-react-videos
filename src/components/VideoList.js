import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected }) => {
    const data = videos.map((video) => {
        return <VideoItem video={video} onVideoSelected={onVideoSelected} key={video.id.videoId}/>
    });
    return <div className="ui relaxed divided list">{data}</div>
}

export default VideoList