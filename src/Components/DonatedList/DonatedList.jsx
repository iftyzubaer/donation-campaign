import PropTypes from 'prop-types';

const DonatedList = ({ list }) => {

    const { image, category, title, price, textColor, categoryColor, cardColor } = list;
    const styleCard = {
        "backgroundColor": `${cardColor}`
    }
    const styleText = {
        "color": `${textColor}`
    }
    const styleCategory = {
        "color": `${textColor}`,
        "backgroundColor": `${categoryColor}`,
    }
    const styleBtn = {
        "backgroundColor": `${textColor}`
    }

    return (
        <div>
            <div style={styleCard} className="relative flex max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">                    
                    <div style={styleCategory} className="badge rounded px-3 py-2 border-none text-sm font-medium">{category}</div>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p style={styleText} className="mb-8 block font-sans text-base font-semibold leading-relaxed text-gray-700 antialiased">
                        ${price.toFixed(2)}
                    </p>
                    <a className="inline-block" href="#">
                        <button
                            style={styleBtn}
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white"
                            type="button"
                        >
                            View Details
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

DonatedList.propTypes = {
    list: PropTypes.object.isRequired,
}

export default DonatedList;