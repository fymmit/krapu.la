import React, {Component} from 'react';
import SingleYoutubePlayer from '../components/YoutubePlayer/SingleYoutubePlayer'
import MultiYoutubePlayer from "../components/YoutubePlayer/MultiYoutubePlayer";
import {Button} from 'react-bootstrap'

class YoutubePlayerView extends Component {
    constructor(props){
        super(props);

        this.state = { numberOfClicks: 0 }
    }

    generateRandomChars(length) {
        const allowedChars = "_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const chars = [];
        for (var i = 0; i < length; i++) {
            chars.push(allowedChars[Math.floor(Math.random() * allowedChars.length)]);
        }
        return chars.join("");
    }

    render() {
        const random11CharacterString = this.generateRandomChars(11);
        const { numberOfClicks } = this.state;
        return (
            <div style={{textAlign: 'center'}}>
                { numberOfClicks <= 3
                    ? <SingleYoutubePlayer
                        YTUrlID={random11CharacterString}/>
                    : <MultiYoutubePlayer
                        generateRandomVideoID={() => this.generateRandomChars(11)}/>
                }
                <Button onClick={() => this.setState({numberOfClicks: numberOfClicks + 1})}>
                    {numberOfClicks < 3 ? 'Try again?' : 'Try again!?'}</Button>
            </div>
        )
    }
}

export default YoutubePlayerView;
