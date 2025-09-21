import '../../../assets/css/device-viewer.css';

const DesktopViewer = ({ site }) => {
  return (
    <section className="col-12">
      <div id="wrapper" className="slideLeft">
        <div className="desktop view">
          <iframe src={site} title="Desktop Website Preview"></iframe>
        </div>
      </div>
    </section>
  );
};

export default DesktopViewer;