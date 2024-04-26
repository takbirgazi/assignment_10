import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Best Tour</title>
            </Helmet>
            <Fade>
             This is Home Page 
            </Fade>
        </div>
    );
};

export default Home;