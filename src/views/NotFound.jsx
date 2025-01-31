import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Are you lost?</p>
      <p className="mt-2">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 text-lg underline">
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFound
