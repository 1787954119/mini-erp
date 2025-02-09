import { createFileRoute } from "@tanstack/react-router";
import Layout from "../Layout";

export const Route = createFileRoute("/function3")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Layout Component={() => <div>Hello "/function3"!</div>}></Layout>
    </>
  );
}
