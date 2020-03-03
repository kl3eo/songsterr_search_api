import React from 'react';
import { connect } from 'react-redux';
import NewItem from '../components/NewItem';

let UsefulData = ({loading,chunks}) => {
	let usefulData = '';
	
	if (chunks && chunks.length) {usefulData = chunks.map((item,index) => (<div key={`${index}`}>
		<NewItem item={chunks[index]} />
	</div>)); } else {

		if (loading != null) usefulData = '404 NOTHING FOUND :(((';
	}
	
	if (loading) usefulData = '...loading...';

	return (<div style={{marginBottom:'30px'}}>{usefulData}</div>);
};

const mapStateToProps = (state, chunks) => ({loading: state.loading, chunks: state.usefulData});

UsefulData = connect(mapStateToProps) (UsefulData);

export default UsefulData;
