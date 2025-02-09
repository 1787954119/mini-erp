import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/function2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/function2"!</div>
}
