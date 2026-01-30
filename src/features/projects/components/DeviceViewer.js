import '../../../assets/css/device-viewer.css';

const deviceClassMap = {
    mobile: 'phone',
    tablet: 'tablet',
    desktop: 'desktop',
};

const DeviceViewer = ({ device, site }) => {
    const className = deviceClassMap[device] || 'desktop';
    const title = `${className.charAt(0).toUpperCase() + className.slice(1)} Website Preview`;

    return (
        <section className="col-12">
            <div id="wrapper" className="slideLeft">
                <div className={`${className} view`}>
                    <iframe src={site} title={title} />
                </div>
            </div>
        </section>
    );
};

export default DeviceViewer;