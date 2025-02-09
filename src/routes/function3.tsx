import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/function3')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/function3"!</div>
}
