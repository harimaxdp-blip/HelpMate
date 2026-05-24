// LoadingPage.jsx

import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loading-page">
      <div className="loader-wrapper">
        <div className="loader-ring"></div>

        <div className="logo">
          <span className="green">&lt;</span>
          <span className="slash">/</span>
          <span className="blue">&gt;</span>
        </div>

        <div className="particles"></div>
      </div>
    </div>
  );
}

export default LoadingPage;