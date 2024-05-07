import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function Defaultlayput({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="Content">{children}</div>
            </div>
        </div>
    );
}

export default Defaultlayput;
