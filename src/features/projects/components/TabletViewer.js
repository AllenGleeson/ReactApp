import '../../../assets/css/device-viewer.css';

const TabletViewer = ({ site }) => {
    return (
        <section className="col-12">
            <div id="wrapper" className="slideLeft">
                <div className="tablet view">
                    <iframe src={site} title="Tablet Website Preview"></iframe>
                </div>
            </div>
        </section>
    );
};

export default TabletViewer;