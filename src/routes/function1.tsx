import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/function1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/function1"!</div>
}
