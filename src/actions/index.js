export const SET_SEARCH = 'SET_SEARCH';
export const MAKE_REQUEST = 'MAKE_REQUEST';
export const RCPT_DATA = 'RCPT_DATA';

export const setSearch = str => {
   return {
   	type: SET_SEARCH,
	str
   }
};

export const sendRequest = () => {
	 return { type: MAKE_REQUEST }
};

export const gotData = json => {

//console.log(json);
   return {
	type: RCPT_DATA,
	json: json
   }
};


export const fetchData = (str) => {
   return function(dispatch) {
	dispatch(sendRequest());
	return fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${str}`)
		.then(response => response.json(),
			error => console.log('error occurred: '+error)
		)
		.then((json) => { dispatch(gotData(json)) })
		
  } 
}
