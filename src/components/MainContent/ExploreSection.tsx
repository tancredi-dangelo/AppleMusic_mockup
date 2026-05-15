import { Container, Row, Col } from "react-bootstrap";

interface ExploreItem {
  title: string;
}

const exploreItems: ExploreItem[] = [
  {
    title: "Explore by genre",
  },
  {
    title: "Worldwide",
  },

  {
    title: "Music videos",
  },
  {
    title: "Decades",
  },
  {
    title: "Rankings",
  },
  {
    title: "New artists",
  },
  {
    title: "Activities and moods",
  },
  {
    title: "Spatial audio",
  },
  {
    title: "Hits from the past",
  },
];

const ExploreSection = () => {
  return (
    <Container fluid className="bg-dark text-white px-3 mb-4">
      <h3
        style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
          padding:
            "clamp(0.75rem, 2vw, 1.5rem) clamp(0.75rem, 2vw, 1.5rem) 0 clamp(0.75rem, 2vw, 1.5rem)",
          margin: 0,
        }}
      >
        Explore more
      </h3>

      <Row
        className="g-3 p-3"
        style={
          {
            "--bs-gutter-x": "clamp(0.75rem, 2vw, 1.5rem)",
          } as React.CSSProperties
        }
      >
        {exploreItems.map((item, index) => (
          <Col
            key={index}
            xs={6}
            md={4}
            style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
          >
            <div
              className="d-flex align-items-center justify-content-between rounded-2 px-3 py-2"
              style={{
                backgroundColor: "#2c2c2c",
                border: "1px solid #2a2a2a",
                cursor: "pointer",
              }}
            >
              <p
                className="mb-0 text-danger"
                style={{
                  fontSize: "clamp(0.7rem, 1.5vw, 1rem)",
                  letterSpacing: "0.04em",
                }}
              >
                {item.title}
              </p>
              <span
                className="text-danger"
                style={{ fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }}
              >
                ›
              </span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreSection;
