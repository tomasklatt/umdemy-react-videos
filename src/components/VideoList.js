import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
    const data = videos.map((video) => {
        return <VideoItem video={video} key={video.id.videoId}/>
    });
    return <div>{data}</div>
}

export default VideoList