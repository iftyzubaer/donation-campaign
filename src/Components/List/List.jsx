import PropTypes from 'prop-types';

const List = ({list}) => {
    const {image, category, title, textColor, categoryColor, cardColor} = list;
    console.log(textColor, categoryColor);
    return (
        
        <div>
            <div className={`card bg-[${cardColor}]`}>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className={`badge rounded px-3 py-1 text-sm font-medium bg-[${categoryColor}] text-[${textColor}]`}>{category}</div>
                    <p className={`text-xl font-semibold text-[${textColor}]`}>{title}</p>
                </div>
            </div>
        </div>
    );
};

List.propTypes = {
    list: PropTypes.object.isRequired,
}

export default List;