import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './card.css'

const Cards = (props) => {
  return (
    <div>
      <Card className="gratCard" body inverse style={{ backgroundColor: '#2d393c', borderColor: '#2d393c',
     width: '23rem'}}>
      <CardTitle>Stressful Day</CardTitle>
        <CardText>5/12/20</CardText>
        <CardText>anxious</CardText>
        <CardText>Today I'm thankful for the help I've recived my GA instructors.</CardText>
      </Card>
      <Card className="gratCard" body inverse style={{ backgroundColor: '#2d393c', borderColor: '#2d393c',
     width: '23rem'}}>
      <CardTitle>Rainy Day</CardTitle>
        <CardText>5/10/20</CardText>
        <CardText>sleepy</CardText>
        <CardText>Today I'm thankful for coffee and dog cuddles.</CardText>
      </Card>
      <Card className="gratCard" body inverse style={{ backgroundColor: '#2d393c', borderColor: '#2d393c',
     width: '23rem'}}>
      <CardTitle>Pool Day</CardTitle>
        <CardText>5/8/20</CardText>
        <CardText>Happy</CardText>
        <CardText>Although I can't go to brunch, I layed by the pool and I'm thankful that the sunwas out today. 
            I'm also thankful for margs. 
        </CardText>
      </Card>
    </div>
  );
};

export default Cards;