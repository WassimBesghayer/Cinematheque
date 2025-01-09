import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import AddMovie from './AddMovie';


function MovieCard({movie}) {
  return (
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterurl}/>
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
           <div id='rating'>
            <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                edit={false} // set it {true} for manipulating
                value={movie.rating}
                isHalf={true} // component use half stars or not, if not the decimal part will be dropped otherwise normal algebra rools will apply to round to half stars
                activeColor="#ffd700"
            />
            </div>
        <Button variant="primary">Watch</Button>
        <Button variant="primary">Download</Button>
        <AddMovie/>
      </Card.Body>
    </Card>
  )
}

export default MovieCard