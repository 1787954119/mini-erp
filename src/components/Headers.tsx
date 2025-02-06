import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css"; // 确保引入 Bootstrap CSS

export default function Headers() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="me-auto" href="#home">
            React-Bootstrap
          </Navbar.Brand>

          {/* 单次点击的选项左边对齐 */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link2">Link2</Nav.Link>
            <Nav.Link href="#link3">Link3</Nav.Link>
            <Nav.Link href="#link4">Link4</Nav.Link>
          </Nav>

          {/* 当屏幕宽度缩小时，它会显示为一个汉堡菜单（即三条横线）。这个按钮的作用是让用户点击后展开或收起导航 */}
          {/* 也就是在屏幕宽度不够的时候先显示前面几个标签，表示基础标签 */}
          {/* aria-controls 对应的是需要控制的 Navbar 的 id */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* 用户登录相关选项右边对齐 */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
