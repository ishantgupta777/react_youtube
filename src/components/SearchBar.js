import React from 'react'

class SearchBar extends React.Component {
	state = { term: '' }
	formSubmit = (e) => {
		e.preventDefault()
		this.props.submitForm(this.state.term)
	}
	render() {
		return (
			<div>
				<form action='' className='ui form' onSubmit={this.formSubmit}>
					<div className='field'>
						<input
							type='text'
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
							style={{ marginTop: '1rem' }}
						/>
						<label htmlFor=''>Search For Videos</label>
						<button type='submit' className='ui inverted primary button'>
							Search
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar
