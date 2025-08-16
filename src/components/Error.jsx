import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Something went wrong while loading the page.
      </p>

      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {err.status} {err.statusText}
        </h3>
        <p className="text-gray-600">{err.data || "Please try again later."}</p>
      </div>

      <a
        href="/"
        className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default Error;
