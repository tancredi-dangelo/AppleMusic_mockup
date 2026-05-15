// NewsSection.tsx
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../../public/images/1a.png";
import image2 from "../../../public/images/1b.png";
import image3 from "../../../public/images/1c.png";

interface NewsItem {
  img: string;
  tag: string;
  title: string;
}

const newsItems: NewsItem[] = [
  {
    img: image1,
    tag: "NEW RADIO STATION",
    title: "Relax, we'll think about the rest. Listen to Apple Music Chill",
  },
  {
    img: image2,
    tag: "NEW RADIO STATION",
    title: "The new home of latin music",
  },
  { img: image3, tag: "NEW RADIO STATION", title: "Club" },
];

const NewsSection = () => {
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
        News
      </h3>

      <Row
        className="g-3 p-3"
        style={
          {
            "--bs-gutter-x": "clamp(0.75rem, 2vw, 1.5rem)",
          } as React.CSSProperties
        }
      >
        {newsItems.map((item, index) => (
          <Col
            key={index}
            xs={12}
            md={4}
            className="d-flex flex-column justify-content-between"
            style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
          >
            <div className="d-flex flex-column" style={{ gap: "0.3em" }}>
              <small
                style={{
                  fontSize: "clamp(0.6rem, 1.2vw, 0.75rem)",
                  color: "#aaa",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {item.tag}
              </small>
              <p
                className="mb-0"
                style={{
                  fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </p>
            </div>
            <img
              src={item.img}
              alt={item.title}
              className="img-fluid rounded"
              style={{
                aspectRatio: "16 / 9",
                objectFit: "cover",
                borderRadius: "clamp(4px, 1vw, 10px)",
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsSection;
