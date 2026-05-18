// IMPORT BOOTSTRAP COMPONENT
import Offcanvas from "react-bootstrap/Offcanvas";

// IMPORT REDUX
import { useSelector, useDispatch } from "react-redux";
import handleSidebar from "../redux/actions/sidebarActions";
import { type RootState } from "../redux/store";

// IMPORT LOGO
import logo from "../../../public/logos/music.svg";

// IMPORT ROUTING
import { Link, useLocation, useNavigate } from "react-router-dom";

// IMPORT LOG OUT FUNCTION
import { LOG_OUT } from "../redux/actions/currentUserActions";

interface NavLink {
  label: string;
  path: string;
}

const links: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "News", path: "/news" },
  { label: "Radio", path: "/radio" },
];

function Sidebar() {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.sidebar);

  const isCurrentUser = useSelector(
    (state: RootState) => state.currentUser.info.email !== "",
  );

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Offcanvas
      show={show}
      onHide={() => dispatch(handleSidebar(show))}
      scroll={true}
      backdrop={true}
      style={{
        width: "200px",
        borderRight: "1px solid #2a2a2a",
      }}
    >
      <Offcanvas.Header
        closeButton
        closeVariant="white"
        className="bg-dark"
        style={{
          height: "55px",
          borderBottom: "1px solid #2a2a2a",
          padding: "0 1rem",
        }}
      >
        <Offcanvas.Title>
          <img
            src={logo}
            alt="Logo"
            style={{
              filter: "brightness(0) invert(1)",
              height: "clamp(16px, 4vw, 20px)",
            }}
          />
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body
        className="bg-dark d-flex flex-column p-0"
        style={{ paddingTop: "0.5rem" }}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-decoration-none"
            style={{
              color: location.pathname === link.path ? "#fa2d48" : "#aaa",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              padding: "0.6rem 1rem",
              borderLeft:
                location.pathname === link.path
                  ? "2px solid #fa2d48"
                  : "2px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            {link.label}
          </Link>
        ))}

        {isCurrentUser && (
          <span
            style={{
              color: "#fa2d48",
              fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              padding: "0.6rem 1rem",
              borderLeft: "2px solid transparent",
              cursor: "pointer",
              marginTop: "20px",
              transition: "color 0.2s",
            }}
            onClick={() => {
              dispatch({ type: LOG_OUT });
              navigate("/login");
            }}
          >
            Log Out
          </span>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Sidebar;
