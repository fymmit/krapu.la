import React, {Component} from 'react';

class MultiYoutubePlayer extends Component {
    render() {
        const videoIDs = Array.from(Array(20)).map(() => this.props.generateRandomVideoID());
        console.log(videoIDs)
        return (
            <div style={{width: '100%', height: '100%'}}>
                {videoIDs.map((id, index) => ( <div style={{width: '20%', height:'25%', display: 'inline-block'}}>
                    <iframe title={index} width="100%" height="100%"
                            src={`https://www.youtube.com/embed/${this.props.id}?autoplay=1`}>
                    </iframe>
                </div>))}
            </div>)
    }
}


export default MultiYoutubePlayer;
