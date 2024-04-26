import Lottie from "lottie-react";
import loder from '../../public/loader.json';

const PrivateRoute = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-20 h-20">
                <Lottie animationData={loder} loop={true} />
            </div>
        </div>
    );
};

export default PrivateRoute;