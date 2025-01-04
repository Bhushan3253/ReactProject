import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Brand Name */}
          <a className="navbar-brand" href="/">
            <strong style={{ color: '#ff9800', fontSize: '1.5rem' }}>IB Games</strong>
          </a>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            {/* Centered Links */}
            <ul
              className="navbar-nav mb-2 mb-lg-0"
              style={{
                margin: '0 auto',
                textAlign: 'center',
                fontSize: '1.1rem',
              }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: '#ffffff', margin: '0 10px' }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{ color: '#ffffff', margin: '0 10px' }}
                >
                  Offer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/features"
                  style={{ color: '#ffffff', margin: '0 10px' }}
                >
                  About Us
                </a>
              </li>
            </ul>

            {/* Right-Side Icons and Search */}
            <div className="d-flex align-items-center">
              {/* Registration Icon */}
              <a
                className="nav-link me-3"
                href="/registration"
                title="Registration"
                style={{
                  color: '#ff9800',
                  fontSize: '1.2rem',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#e88f00')}
                onMouseLeave={(e) => (e.target.style.color = '#ff9800')}
              >
                <i className="bi bi-person-circle"></i>
              </a>

              {/* Cart Icon */}
              <a
                className="nav-link me-3"
                href="/cart"
                title="Cart"
                style={{
                  color: '#ff9800',
                  fontSize: '1.2rem',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#e88f00')}
                onMouseLeave={(e) => (e.target.style.color = '#ff9800')}
              >
                <i className="bi bi-cart"></i>
              </a>

              {/* Search Bar */}
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    borderRadius: '20px',
                    border: '1px solid #ff9800',
                  }}
                />
                <button
                  className="btn"
                  type="submit"
                  style={{
                    backgroundColor: '#ff9800',
                    color: '#ffffff',
                    borderRadius: '20px',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#e88f00')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff9800')}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
