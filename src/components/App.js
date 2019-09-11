import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
	state = { videos: [], selectedVideo: null }
	submitForm = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		})
		console.log(response.data.items)
		this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
	}
	render() {
		if (this.state.selectedVideo) {
			return (
				<div className='ui container'>
					<SearchBar submitForm={this.submitForm} />
					<div>
						<VideoDetail video={this.state.selectedVideo} />
						<VideoList videos={this.state.videos} />
					</div>
				</div>
			)
		} else {
			return (
				<div className='ui container'>
					<SearchBar submitForm={this.submitForm} />
				</div>
			)
		}
	}
}

export default App
