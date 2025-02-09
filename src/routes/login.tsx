import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Container, Alert, Form, Button } from "react-bootstrap";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 表单提交处理函数
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 假设的登录验证逻辑
    if (username === "admin" && password === "password") {
      // 登录成功，跳转到主页
      navigate({ to: "/" });
    } else {
      // 登录失败，显示错误信息
      setError("Invalid username or password");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="login-container p-4 border rounded shadow-sm"
        style={{ width: "400px" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-4">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}
