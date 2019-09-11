import React from 'react'

const VideoDetail = ({ video }) => {
	return (
		<div>
			<div className='ui embed'>
				<iframe
					allowFullScreen={true}
					src={`https://www.youtube.com/embed/${video.id.videoId}`}
					frameBorder='0'
					title={video.snippet.title}
				/>
			</div>{' '}
			<div className='content'>
				<h1 className='header'> {video.snippet.title} </h1>{' '}
				<p className='description'> {video.snippet.description} </p>{' '}
			</div>{' '}
		</div>
	)
}

export default VideoDetail
