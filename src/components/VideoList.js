import React from 'react'
import VideoCard from './VideoCard'

const VideoList = (props) => {
	const VideoList = props.videos.map((video) => <VideoCard key={video.id.videoId} video={video} />)
	return <div className='ui unstackable items'>{VideoList}</div>
}

export default VideoList
