import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
              <Link className="nav-link" to="/DisplayGrade">
                  <p>Display Grade</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  <p>Input Grade</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;