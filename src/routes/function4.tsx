import { createFileRoute } from "@tanstack/react-router";
import Layout from "../Layout";

export const Route = createFileRoute("/function4")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Layout Component={() => <div>Hello "/function4"!</div>}></Layout>
    </>
  );
}
