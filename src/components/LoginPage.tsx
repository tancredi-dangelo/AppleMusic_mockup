import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="bg-dark d-flex align-items-start justify-content-center mt-5"
      style={{ minHeight: "80vh" }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          backgroundColor: "#1a1a1a",
          borderRadius: "clamp(8px, 2vw, 14px)",
          border: "1px solid #2a2a2a",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}
      >
        {/* TITLE */}
        <h2
          style={{
            color: "#fff",
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            fontWeight: 600,
            margin: 0,
            textAlign: "center",
          }}
        >
          Log In
        </h2>

        {/* FORM */}
        <Form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Form.Group controlId="formEmail">
            <Form.Label
              style={{
                color: "#aaa",
                fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.4rem",
              }}
            >
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="email@example.com"
              style={{
                backgroundColor: "#111",
                border: "1px solid #2a2a2a",
                color: "#fff",
                fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
                borderRadius: "6px",
                padding: "0.6rem 0.9rem",
              }}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label
              style={{
                color: "#aaa",
                fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.4rem",
              }}
            >
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="••••••••"
              style={{
                backgroundColor: "#111",
                border: "1px solid #2a2a2a",
                color: "#fff",
                fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
                borderRadius: "6px",
                padding: "0.6rem 0.9rem",
              }}
            />
          </Form.Group>

          {/* BUTTON */}
          <Button
            type="submit"
            style={{
              backgroundColor: "#fa2d48",
              border: "none",
              borderRadius: "6px",
              fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
              fontWeight: 600,
              padding: "0.6rem",
              marginTop: "0.5rem",
            }}
          >
            Sign In
          </Button>

          <p
            style={{
              color: "#aaa",
              fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Don't have an account?{" "}
            <span
              style={{ color: "#fa2d48", cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Sign Up
            </span>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
