import { useState } from "react";
import { type RootState } from "./redux/store";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import handleLogIn from "./redux/actions/currentUserActions";
import { useDispatch, useSelector } from "react-redux";

interface AttemptUser {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.users);
  console.log(users, typeof users);

  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const [toast, setToast] = useState<string | null>(null);

  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const attemptUser: AttemptUser = {
      email: emailInput,
      password: passwordInput,
    };

    const userExists = users?.find(
      (user) =>
        user.info.email === attemptUser.email &&
        user.info.password === attemptUser.password,
    );

    if (!userExists) {
      setLoginSuccess(false);
      setToast("User not found. Please check your credentials.");
      setTimeout(() => setToast(null), 3000);
      return;
    }

    dispatch(handleLogIn(attemptUser, userExists));

    setLoginSuccess(true);

    setToast(`You logged in as ${userExists.info.username}`);
    setTimeout(() => {
      setToast(null);
      navigate("/");
    }, 3000);
  };

  return (
    <Container
      fluid
      className="bg-dark d-flex justify-content-center align-items-start pt-5"
    >
      <Card
        className="bg-black border-0 text-white shadow-lg w-100"
        style={{ maxWidth: "400px" }}
      >
        <Card.Body className="p-4 p-md-5">
          <h2 className="text-center fw-semibold mb-4">Log In</h2>

          <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label className="text-uppercase text-secondary small fw-semibold">
                Email
              </Form.Label>

              <Form.Control
                type="email"
                value={emailInput}
                placeholder="email@example.com"
                className="bg-dark text-white border-secondary py-2"
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className="text-uppercase text-secondary small fw-semibold">
                Password
              </Form.Label>

              <Form.Control
                type="password"
                value={passwordInput}
                placeholder="••••••••"
                className="bg-dark text-white border-secondary py-2"
                onChange={(e) => setPasswordInput(e.target.value)}
              />
            </Form.Group>

            <Button
              type="submit"
              className="fw-semibold py-2 border-0"
              style={{ backgroundColor: "#fa2d48" }}
            >
              Log In
            </Button>

            <p className="text-secondary text-center small mb-0">
              Don't have an account?{" "}
              <span
                className="fw-semibold"
                style={{ color: "#fa2d48", cursor: "pointer" }}
                onClick={() => navigate("/register")}
              >
                Register
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
                backgroundColor: loginSuccess
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

export default LoginPage;
