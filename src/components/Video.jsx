const Video = () => {
    return (
        <div className="video wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <button
                    type="button"
                    className="btn-play"
                    data-toggle="modal"
                    data-src="https://youtu.be/QCwag5A4KS0?si=rc_gM_lNAGcEYXAb"
                    data-target="#videoModal"
                >
                    <span></span>
                </button>
            </div>
        </div>
    );
};

export default Video;
