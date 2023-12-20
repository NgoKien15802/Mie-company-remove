const Video = () => {
    return (
        <div className="video wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <button
                    type="button"
                    className="btn-play"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/live/DYYeIuoaDe8?si=d4wZmD-OXjDlbzdL"
                    data-target="#videoModal"
                >
                    <span></span>
                </button>
            </div>
        </div>
    );
};

export default Video;
