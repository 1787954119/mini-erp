import { createFileRoute } from "@tanstack/react-router";
import Layout from "../Layout";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* <h1>Welcome to My Website</h1>
      <p>This is the main content area.</p> */}
      <Layout />
    </>
  );
}
