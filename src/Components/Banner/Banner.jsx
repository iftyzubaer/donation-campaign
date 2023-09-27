const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[63vh]" style={{ backgroundImage: 'url("rectangle.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
                        <input className="py-4 pl-4 pr-60 border-gray-300 rounded-r-none rounded-l-lg" type="text" placeholder="Search here...."/>
                        <button className="btn rounded-r-lg rounded-l-none bg-[#FF444A] text-white font-semibold py-4 px-7">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;