import React from 'react';

const VideoDetail =  ({video}) => {
    if(!video){
        return null;
    }
    return (
        <div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    );
}

export default VideoDetail;