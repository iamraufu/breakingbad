import React from 'react';
import { Card } from 'react-bootstrap';

const Quote = (props) => {
      const { author, quote, series } = props.quote;
     
      return (
            <Card>
                  <Card.Header>From: {series}</Card.Header>
                  <Card.Body>
                        <blockquote className="blockquote mb-0">
                              <p>{quote}</p>
                              <footer className="blockquote-footer">
                                    <cite title="Source Title">{author}</cite>
                              </footer>
                        </blockquote>
                  </Card.Body>
            </Card>
      );
};

export default Quote;