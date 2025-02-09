import { createFileRoute } from "@tanstack/react-router";
import Layout from "../Layout";

export const Route = createFileRoute("/function2")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Layout Component={() => <div>Hello "/function2"!</div>}></Layout>
    </>
  );
}
