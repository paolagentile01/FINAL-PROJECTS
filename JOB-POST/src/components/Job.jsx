import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addFavorite } from '../actions/utenteActions';





const Job = ({ data }) => {

  const dispatch =  useDispatch();

  return(
    <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      <Button onClick={() => dispatch(addFavorite(data.company_name))}>Add to Favorites</Button>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
  )

}


export default Job
