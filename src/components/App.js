import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			videos: [],
			selectedVideo: null
		}
		this.submitForm('hello')
	}
	submitForm = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		})
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		})
	}
	presentVideo = (video) => {
		this.setState({
			selectedVideo: video
		})
	}
	render() {
		if (this.state.selectedVideo) {
			return (
				<div className='ui container'>
					<div
						style={{
							marginBottom: '1rem'
						}}
					>
						<SearchBar submitForm={this.submitForm} /> {' '}
					</div>{' '}
					 {' '}
					<div className='ui grid'>
						<div className='row'>
							<div className='eleven wide column'>
								<VideoDetail video={this.state.selectedVideo} /> {' '}
							</div>{' '}
							 {' '}
							<div className='five wide column'>
								<VideoList videos={this.state.videos} presentVideo={this.presentVideo} /> {' '}
							</div>{' '}
							 {' '}
						</div>{' '}
						{' '}
					</div>{' '}
					 {' '}
				</div>
			)
		} else {
			return (
				<div className='ui container'>
					<SearchBar submitForm={this.submitForm} /> {' '}
				</div>
			)
		}
	}
}

export default App
