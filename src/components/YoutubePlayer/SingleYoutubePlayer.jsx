import React from 'react';

const SingleYoutubePlayer = (props) => (
    <div style={{textAlign: 'center'}}>
        <div style={{width: '100%', height: '100%', display: 'inline-block'}}>
            <p> Trying to view YouTube video with id: {props.YTUrlID}</p>
            <iframe title={"1"} width="480px" height="360"
                    src={`https://www.youtube.com/embed/${props.YTUrlID}?autoplay=1`}>
            </iframe>
            <br/>
        </div>
    </div>
);


export default SingleYoutubePlayer;
