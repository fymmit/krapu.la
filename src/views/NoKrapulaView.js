import React, {useState} from 'react';
import {Button} from 'react-bootstrap'

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)]
};

const greetings = ['moro', 'haloo', 'Tervehdys', 'wadap'];
const aijat = ['äijät', 'hemmot'];
const cookingVerbs = ['duunaan', 'säädän', 'väsään', 'kokkaan'];


const NoKrapulaView = () => {
  const getRandomStoryWords = () => {
    return {
      greeting: greetings.random(),
      aijat: aijat.random(),
      cookingVerb: cookingVerbs.random()
    }
  };

  const sw = getRandomStoryWords();

  const cookingSentences = [`tänään mä ${sw.cookingVerbs} teil kissaa liekitettynä`, `pistän koht tos snadit väännöt teil`];
  const iLoveYouSentences = [`rakastan sua ${sw.aijat}`, `loveen sua ${sw.aijat}`];


  const getRandomStorySentences = () => {
    return {
      cookingSentence: cookingSentences.random(),
      iLoveYouSentence: iLoveYouSentences.random(),
    }
  };

  const ss = getRandomStorySentences();

  const getRandomStory = () => {
    return `${sw.greeting} ${sw.aijat} :D mitä ${sw.aijat}. kuulii nähä teit :D
    ${ss.cookingSentence}. tän reseptin opin kun olin indois maalaan :D
    pistetää sekaa vähän jättiläispunapuun ydintä antaan vähä siihe semmost twistii :D ja sit viel keitetään etikassa :D
    lopuks annetaan jäähtyy pari päivää. nonii toivottavasti maistuu. ${ss.iLoveYouSentence} :D`;
  };

  const [story, setStory] = useState(getRandomStory());

  return (
      <div style={{padding: "2em", whiteSpace: 'pre-line'}}>
        <p>{story}</p>
        <Button onClick={() => {setStory(getRandomStory())}}>Uus</Button>
      </div>
  )
};

export default NoKrapulaView;
