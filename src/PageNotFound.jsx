import {Link} from "react-router";

function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center  p-6">
            <img
                src="https://static.vecteezy.com/system/resources/thumbnails/028/135/800/small_2x/bullet-train-night-skyscrapers-error-404-flash-message-twilight-railway-website-landing-page-ui-design-not-found-cartoon-image-dreamy-vibes-flat-illustration-with-90s-retro-background-vector.jpg"
                alt="Page not found illustration"
                className="mb-6 rounded-xl shadow-lg"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
}

export default PageNotFound;
