import React from 'react'

const VideoCard = ({ video }) => {
	return (
		<div className='item'>
			<div className='image'>
				<img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
			</div>
			<div className='content'>
				<a className='header'>{video.snippet.title}</a>
				<div className='description'>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		</div>
	)
}

export default VideoCard
