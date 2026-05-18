// IMPORT BOOTSTRAP COMPONENTS
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// IMPORT REDUX
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../redux/store";

// IMPORT SIDEBAR REDUX FUNCTION
import handleSidebar from "../redux/actions/sidebarActions";
import Sidebar from "./Sidebar";

// IMPORT ROUTING
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// IMPORT LOGO
import logo from "../../../public/logos/apple.svg";
import VolumeController from "./VolumeController";
import TrackPlayer from "./Player";
import { useRef } from "react";
import type { Track } from "../strayInterfaces/Track";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const show = useSelector((state: RootState) => state.sidebar);

  const isCurrentUser = useSelector(
    (state: RootState) => state.currentUser.info.email !== "",
  );

  const currentUserUsername = useSelector(
    (state: RootState) => state.currentUser.info.username,
  );

  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-black px-3"
        style={{
          height: "55px",
          borderBottom: "1px solid #2a2a2a",
        }}
      >
        <Container
          fluid
          className="mx-3 h-100 d-flex align-items-center justify-content-between"
        >
          {/* BURGER BUTTON */}
          <Button
            className="bg-transparent border-0 p-0"
            style={{ color: "#fa2d48", fontSize: "clamp(1rem, 3vw, 1.3rem)" }}
            onClick={() => dispatch(handleSidebar(show))}
          >
            ☰
          </Button>

          {/* LOGO */}
          <div className="flex-grow-1 d-flex justify-content-center">
            <Navbar.Brand
              className="d-flex align-items-center m-0 p-0"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Apple Logo"
                style={{
                  filter: "brightness(0) invert(1)",
                  height: "clamp(14px, 2.5vw, 18px)",
                }}
              />
            </Navbar.Brand>
          </div>

          {location.pathname !== "/login" &&
            location.pathname !== "/register" &&
            (isCurrentUser ? (
              <span
                style={{
                  color: "#fa2d48",
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/profile/")}
              >
                {currentUserUsername}
              </span>
            ) : (
              <Link
                to="/login"
                className="text-decoration-none"
                style={{
                  color: "#fa2d48",
                  fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                }}
              >
                Sign In
              </Link>
            ))}
        </Container>
      </Navbar>
      <Sidebar />
    </>
  );
}

export default Header;
