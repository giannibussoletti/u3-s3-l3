import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"

const Favorites = function () {
  const favorites = useSelector((state) => state.main.favorites)

  return (
    <Container>
      <Row>
        {favorites.map((job) => {
          return (
            <Col>
              <h1>{job.title}</h1>
              <h2>{job.company_name}</h2>
              {job.description}
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
export default Favorites
