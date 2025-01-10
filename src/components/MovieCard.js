import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import WishList from './WishList';
import { Link, useNavigate } from 'react-router-dom';



function MovieCard({movie}) {
  const navigate=useNavigate();
  return (
  
  <Link to="/synopsis">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterurl}/>
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        {/* <Card.Text>{movie.description}</Card.Text>
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
            </div> */}
        <Button variant="primary" onClick={()=>navigate("/trailer")}>Trailer</Button>
        <Button variant="primary">Download</Button>
        <WishList/>
      </Card.Body>
    </Card>
    </Link>

  )
}

export default MovieCard