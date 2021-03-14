import React from 'react';
import { Card } from 'react-bootstrap';

const Death = (props) => {
      const { death, cause, responsible, last_words, episode, number_of_deaths, season } = props.death;
      console.log(props.death)
      return (
            <div>
                  <Card border="dark" style={{ width: '25rem' }}>
                        <Card.Header>Killed By: {responsible}</Card.Header>
                        <Card.Body>
                              <Card.Title>{death}</Card.Title>
                              <Card.Text>
                                    <u>Cause of Death:</u>  {cause} <br />Last Words: {last_words}
                                    <br />Season: {season}, Episode: {episode}
                                    <br />{number_of_deaths} People Died
                              </Card.Text>
                        </Card.Body>
                  </Card>
            </div>
      );
};

export default Death;