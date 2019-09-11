import React from 'react'
import { directive } from '@babel/types'

const VideoDetail = ({ video }) => {
	console.log(video)
	return (
		<div>
			<iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder='0' />
			<div className='ui cards'>
				<div className='content'>
					<div className='header'>{video.snippet.title}</div>
					<div className='description'>{video.snippet.description}</div>
				</div>
			</div>
		</div>
	)
}

export default VideoDetail
