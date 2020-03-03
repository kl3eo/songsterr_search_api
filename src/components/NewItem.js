import React from 'react';

const NewItem = ( { item } ) => {
return (<div>
<div style={{float:'left', margin: '0px 10px'}}>
	<span className='prop'>Song Title:</span> {item.title}
</div>
<div style={{float:'left', margin: '0px 10px'}}>
	<span className='prop'>Performed By</span> : {item.artist.name}
</div>
<div style={{clear:'left'}}></div>
</div>);
};

export default NewItem;
