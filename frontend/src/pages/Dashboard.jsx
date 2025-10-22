import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <p className="text-gray-600 mt-2">Welcome to your dashboard.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link
          to="/production-lines"
          className="rounded-lg border border-gray-200 p-4 hover:shadow transition bg-white"
        >
          <h2 className="text-xl font-semibold text-gray-900">Production Lines</h2>
          <p className="text-gray-600 mt-1">View and manage production lines.</p>
        </Link>
        <Link
          to="/login"
          className="rounded-lg border border-gray-200 p-4 hover:shadow transition bg-white"
        >
          <h2 className="text-xl font-semibold text-gray-900">Logout</h2>
          <p className="text-gray-600 mt-1">Return to login (demo).</p>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
