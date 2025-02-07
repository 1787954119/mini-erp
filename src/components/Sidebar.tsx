import { Nav, Offcanvas } from "react-bootstrap";
import "./Sidebar.css";

interface SidebarProps {
  show: boolean;
  onClose: () => void;
}

export default function Sidebar({ show, onClose }: SidebarProps) {
  return (
    <>
      {/* PC 端固定 Sidebar */}
      <div className="sidebar d-none d-lg-block">
        <h2 className="sidebar-title">mini-erp</h2>
        <Nav className="flex-column">
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#profile">Profile</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
      </div>

      {/* 移动端 Offcanvas Sidebar */}
      <Offcanvas show={show} onHide={onClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>菜单</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#dashboard" onClick={onClose}>
              Dashboard
            </Nav.Link>
            <Nav.Link href="#profile" onClick={onClose}>
              Profile
            </Nav.Link>
            <Nav.Link href="#settings" onClick={onClose}>
              Settings
            </Nav.Link>
            <Nav.Link href="#logout" onClick={onClose}>
              Logout
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
