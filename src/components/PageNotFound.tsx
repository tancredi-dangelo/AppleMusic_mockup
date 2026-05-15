import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Row className="d-flex flex-column align-items-center justify-content-center text-white mt-5">
        <Col xs={12} sm={10} md={8} lg={6} className="text-center">
          <h1 className="p-4">Page not found.</h1>

          <Button
            className="btn-danger text-white"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
