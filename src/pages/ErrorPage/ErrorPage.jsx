import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center gap-5">
                <h2 className="font-bold text-4xl">404 | Page Not Found</h2>
                <Link to="/" className="px-2 py-1 rounded bg-blue-500 text-white">Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;