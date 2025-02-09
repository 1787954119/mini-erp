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
          <Nav.Link href="function1">Function1</Nav.Link>
          <Nav.Link href="function2">Function2</Nav.Link>
          <Nav.Link href="function3">Function3</Nav.Link>
          <Nav.Link href="function4">Function4</Nav.Link>
        </Nav>
      </div>

      {/* 移动端 Offcanvas Sidebar */}
      <Offcanvas show={show} onHide={onClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>菜单</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="function1" onClick={onClose}>
              Function1
            </Nav.Link>
            <Nav.Link href="function2" onClick={onClose}>
              Function2
            </Nav.Link>
            <Nav.Link href="function3" onClick={onClose}>
              Function3
            </Nav.Link>
            <Nav.Link href="function4" onClick={onClose}>
              Function4
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
