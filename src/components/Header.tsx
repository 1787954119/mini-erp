import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

interface HeaderProps {
  onToggleSidebar: () => void; // 控制移动端 Sidebar 显示
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="top-navbar">
      <Container>
        {/* 移动端显示 Sidebar 按钮 */}
        <Button
          variant="outline-light"
          className="d-lg-none"
          onClick={onToggleSidebar}
        >
          ☰
        </Button>
        {/* me-auto 是自动左对齐 */}
        {/* <Navbar.Brand href="#home" className="ms-auto me-5">
          mini-erp
        </Navbar.Brand> */}

        {/* 当屏幕宽度缩小时，它会显示为一个汉堡菜单（即三条横线）。这个按钮的作用是让用户点击后展开或收起导航 */}
        {/* 也就是在屏幕宽度不够的时候先显示前面几个标签，表示基础标签 */}
        {/* aria-controls 对应的是需要控制的 Navbar 的 id */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* 用户登录相关选项右边对齐 */}
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown
              className="ms-auto"
              title="More"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
