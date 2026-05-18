import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { type Album } from "../strayInterfaces/Album";
import { type Track } from "../strayInterfaces/Track";

const URL: string =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const ARTISTS: string[] = [
  "amenra",
  "placebo",
  "korn",
  "slowdive",
  "deftones",
  "fu manchu",
  "oathbreaker",
  "muse",
  "marylin manson",
  "hessian",
  "team sleep",
  "black sabbath",
];

interface API_Response {
  data: Track[];
}

const MyMusicSection = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const handleData = (data: API_Response) => {
    const firstResult = data.data[Math.floor(Math.random() * 5)];
    if (!firstResult) return;

    const album: Album = {
      title: firstResult.album.title,
      artist: firstResult.artist.name,
      img: firstResult.album.cover_medium,
    };

    setAlbums((prev) => {
      const exists = prev.some(
        (a) => a.title === album.title && a.artist === album.artist,
      );
      return exists ? prev : [...prev, album];
    });
  };

  const fetchArtist = (artist: string) => {
    fetch(URL + artist)
      .then((response) => response.json())
      .then((data) => handleData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    ARTISTS.forEach((artist) => fetchArtist(artist));
  }, []);

  return (
    <Container fluid className="bg-dark text-white px-3">
      <h3
        style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
          padding:
            "clamp(0.75rem, 2vw, 1.5rem) clamp(0.75rem, 2vw, 1.5rem) 0 clamp(0.75rem, 2vw, 1.5rem)",
          margin: 0,
        }}
      >
        Your Albums
      </h3>

      <Row
        className="g-3 p-3"
        style={
          {
            "--bs-gutter-x": "clamp(0.75rem, 2vw, 1.5rem)",
          } as React.CSSProperties
        }
      >
        {albums.map((album, index) => (
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
              src={album.img}
              alt={album.title + " cover"}
              className="img-fluid rounded"
              style={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "clamp(4px, 1vw, 10px)",
                cursor: "pointer",
              }}
            />
            <p
              className="text-truncate mb-0"
              style={{
                fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
                fontWeight: 600,
                lineHeight: 1.3,
                cursor: "pointer",
              }}
            >
              {album.title}
            </p>
            <small
              className="text-truncate"
              style={{
                fontSize: "clamp(0.6rem, 1.2vw, 0.75rem)",
                color: "#aaa",
                cursor: "pointer",
              }}
            >
              {album.artist}
            </small>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyMusicSection;
