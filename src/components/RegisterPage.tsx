import { useState } from "react";
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "./redux/actions/userActions";
import { type User } from "./strayInterfaces/User";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.users);

  const [toast, setToast] = useState<string | null>(null);

  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);

  const [validated, setValidated] = useState(false);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const newUser: User = {
        info: {
          username: usernameInput,
          email: emailInput,
          password: passwordInput,
        },
        playlists: [],
        likedSongs: {
          tracks: [],
          creator: usernameInput,
          created_at: "",
          total_duration: "",
        },
      };
      const userExists = users.find(
        (user) => user.info.email === newUser.info.email,
      );

      if (userExists) {
        setRegisterSuccess(false);
        setToast(
          "This user already exists. Please check your credentials or go to recovery page.",
        );
        setTimeout(() => {
          setToast(null);
        }, 3000);
      } else {
        dispatch(createNewUser(newUser));
        setValidated(true);
        setRegisterSuccess(true);
        setToast("New user created! You'll be redirected to Log In page.");
        setTimeout(() => {
          setToast(null);
          navigate("/login");
        }, 3000);
      }
    }
  };

  return (
    <Container
      fluid
      className="bg-dark d-flex justify-content-center align-items-start pt-5"
    >
      <Card
        className="bg-black border-0 text-white shadow-lg w-100"
        style={{ maxWidth: "600px" }}
      >
        <Card.Body className="p-4 p-md-5">
          <h2 className="text-center fw-semibold mb-4">Register</h2>

          <Form
            noValidate
            validated={validated}
            className="d-flex flex-column gap-3"
            onSubmit={handleSubmit}
          >
            <div
              className="d-grid gap-3"
              style={{ gridTemplateColumns: "1fr 1fr" }}
            >
              {/* USERNAME */}
              <Form.Group controlId="formUsername">
                <Form.Label className="text-uppercase text-secondary small fw-semibold">
                  Username
                </Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text className="bg-dark text-secondary border-secondary">
                    @
                  </InputGroup.Text>
                  <Form.Control
                    required
                    type="text"
                    value={usernameInput}
                    placeholder="username"
                    className="bg-dark text-white border-secondary py-2"
                    onChange={(e) => setUsernameInput(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              {/* EMAIL */}
              <Form.Group controlId="formEmail">
                <Form.Label className="text-uppercase text-secondary small fw-semibold">
                  Email
                </Form.Label>
                <Form.Control
                  required
                  type="email"
                  value={emailInput}
                  placeholder="email@example.com"
                  className="bg-dark text-white border-secondary py-2"
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div
              className="d-grid gap-3"
              style={{ gridTemplateColumns: "1fr 1fr" }}
            >
              {/* PASSWORD */}
              <Form.Group controlId="formPassword">
                <Form.Label className="text-uppercase text-secondary small fw-semibold">
                  Password
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  value={passwordInput}
                  placeholder="••••••••"
                  className="bg-dark text-white border-secondary py-2"
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>

              {/* REPEAT PASSWORD */}
              <Form.Group controlId="formRepeatPassword">
                <Form.Label className="text-uppercase text-secondary small fw-semibold">
                  Repeat Password
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  value={repeatPassword}
                  placeholder="••••••••"
                  className="bg-dark text-white border-secondary py-2"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  isInvalid={validated && repeatPassword !== passwordInput}
                />
                <Form.Control.Feedback type="invalid">
                  Passwords do not match.
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            {/* TERMS */}
            <Form.Group>
              <Form.Check
                required
                label="I agree to the terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                className="text-secondary small"
              />
            </Form.Group>

            <Button
              type="submit"
              className="fw-semibold py-2 border-0"
              style={{ backgroundColor: "#fa2d48" }}
            >
              Sign Up
            </Button>

            <p className="text-secondary text-center small mb-0">
              Already have an account?{" "}
              <span
                className="fw-semibold"
                style={{ color: "#fa2d48", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Log In
              </span>
            </p>
          </Form>
          {toast && (
            <div
              style={{
                position: "fixed",
                bottom: "6rem",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: registerSuccess
                  ? "rgb(123, 255, 123)"
                  : "#ff0000",
                border: "1px solid #2a2a2a",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
                zIndex: 9999,
                whiteSpace: "nowrap",
              }}
            >
              {toast}
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterPage;
