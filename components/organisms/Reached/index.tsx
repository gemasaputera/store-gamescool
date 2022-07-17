import ReachItem from '../../molecules/ReachItem';

function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachItem countText="290M+" caption="Players Top Up" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <ReachItem countText="12.500" caption="Games Available" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <ReachItem countText="99,9%" caption="Happy Players" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <ReachItem countText="4.7" caption="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}

export default Reached;
