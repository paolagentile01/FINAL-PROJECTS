import { Row, Col, Container, Button, ListGroupItem, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function FavList(){
    const dispatch = useDispatch();

    const favorites = useSelector(state => state.list);

    const navigate = useNavigate();
    console.log(favorites);
    return(
        <Container>
        <Row>
            <h1>Lista Preferiti</h1>

            <Button onClick = {(() => navigate("/"))} > Go Back</Button>
            <ul>
               <ListGroup>
                { favorites.length > 0 ? (
                    favorites.map((fav, index)=> {
                      return <ListGroupItem key={index}>{fav}</ListGroupItem>
                    })
                ):(<ListGroupItem >Non ci sono Preferiti</ListGroupItem>)}
                
               </ListGroup>
            </ul>
       </Row>
       <Row>
        
       </Row>
        </Container>
    )
}

export default FavList;