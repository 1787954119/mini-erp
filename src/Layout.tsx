import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./Layout.css";
import { Home } from "./components/Home";

export default function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />

      {/* Main Content */}
      <div className="main-content">
        <Header onToggleSidebar={() => setShowSidebar(true)} />
        <div className="content">
          {/* <h1>Welcome to My Website</h1>
          <p>This is the main content area.</p> */}
          <Home />
        </div>
      </div>
    </div>
  );
}
