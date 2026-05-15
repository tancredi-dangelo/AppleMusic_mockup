// RadioEpisodes.tsx
import { Container, Row, Col } from "react-bootstrap";

import image1 from "../../../public/images/2a.png";
import image2 from "../../../public/images/2b.png";
import image3 from "../../../public/images/2c.png";
import image4 from "../../../public/images/2d.png";
import image5 from "../../../public/images/2e.png";
import image6 from "../../../public/images/2f.png";

interface Episode {
  img: string;
  title: string;
}

const episodes: Episode[] = [
  { img: image1, title: "Prologo con Abuelo" },
  { img: image2, title: "The Wanderer" },
  { img: image3, title: "Michael Bublè & Carly Pearce" },
  { img: image4, title: "Stephan Moccio: The Zane Lowe Interview" },
  { img: image5, title: "Chart Spotlight: Julia Michaels" },
  { img: image6, title: "Chart Spotlight: Julia Michaels" },
];

const RadioEpisodes = () => {
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
        New Radio Episodes
      </h3>

      <Row
        className="g-3 p-3"
        style={
          {
            "--bs-gutter-x": "clamp(0.75rem, 2vw, 1.5rem)",
          } as React.CSSProperties
        }
      >
        {episodes.map((episode, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className="d-flex flex-column"
            style={{ gap: "0.4em" }}
          >
            <img
              src={episode.img}
              alt={episode.title}
              className="img-fluid rounded"
              style={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "clamp(4px, 1vw, 10px)",
                cursor: "pointer",
              }}
            />
            <small
              className="text-truncate"
              style={{
                fontSize: "clamp(0.6rem, 1.2vw, 0.8rem)",
                color: "#ccc",
                cursor: "pointer",
              }}
            >
              {episode.title}
            </small>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RadioEpisodes;
