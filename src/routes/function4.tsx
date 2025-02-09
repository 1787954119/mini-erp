import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/function4')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/function4"!</div>
}
