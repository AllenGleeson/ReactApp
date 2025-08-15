import '../../../assets/css/mobileViewer.css';

const MobileViewer = ({ site }) => {
    return (
        <section className='col-12'>
            <div id="wrapper" className="slideLeft">
                <div className="phone view" id="phone">
                    <iframe src={site} title='Live Website' id="frame"></iframe>
                </div>
            </div>
        </section>
    );
};

export default MobileViewer;