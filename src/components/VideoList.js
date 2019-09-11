import React from 'react'
import VideoCard from './VideoCard'

const VideoList = ({ videos, presentVideo }) => {
	const VideoList = videos.map((video) => (
		<VideoCard key={video.id.videoId} video={video} presentVideo={presentVideo} />
	))
	return <div className='ui items'>{VideoList}</div>
}

export default VideoList
