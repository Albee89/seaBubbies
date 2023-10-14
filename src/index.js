import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';


const title = '';

function displayFact(e) {

  const animal = e.target.alt;
  const selectedAnimal = animals[animal];
  const randomIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const fact = selectedAnimal.facts[randomIndex];
  
  document.getElementById('fact').innerHTML = fact;
};

const images = [];
for (const animal in animals) {
  images.push(
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      arial-label={animal}
      role='button'
      onClick={displayFact}
    />
  );
};
const showBackground = true;
const background = <img 
  className="background"
  alt="ocean"
  src="./oceanPic.png"/>;

const animalFacts = (
  <div>
    {showBackground && background}
    <div className='animals'>
      {images}
    </div>
    <h1>{title === '' ? 'Click an animal, reveal a fun fact!' : title}</h1>
    <p id="fact"></p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));