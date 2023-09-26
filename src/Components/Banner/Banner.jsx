const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[63vh]" style={{ backgroundImage: 'url("/images/Rectangle 4281.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;