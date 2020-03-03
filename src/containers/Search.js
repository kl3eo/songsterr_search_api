import React from 'react';
import { connect } from 'react-redux';

import SearchField from 'react-search-field';
import { setSearch, fetchData } from '../actions';


let Search = ({searchString, onChange, onEnter, onSearchClick}) => {

return (  
	<div style={{marginTop:'5px'}}>
	<SearchField 
          placeholder="Search"
          onChange={onChange}
	  onEnter={onEnter} 
	  onSearchClick={onSearchClick} 
          value={searchString}
        />
	</div>
);
};

const mapStateToProps = (state) => ({
	searchString : state.searchString
});

const mapDispatchToProps = (dispatch) => { return {
	onChange : (value) => {dispatch(setSearch(value));},
	onEnter : (value) => {dispatch(fetchData(value));}, 
	onSearchClick : (value) => {dispatch(fetchData(value));}
}};

Search = connect(mapStateToProps,mapDispatchToProps) (Search);

export default Search;
