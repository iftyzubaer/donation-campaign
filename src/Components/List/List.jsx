import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const List = ({list}) => {
    const {image, category, title, textColor, categoryColor, cardColor, id} = list;

    const styleCard = {
        "backgroundColor": `${cardColor}`
    }
    const styleCategory = {
        "backgroundColor": `${categoryColor}`,
        "color": `${textColor}`
    }
    const styleTitle = {
        "color": `${textColor}`
    }
    return (
        
        <Link to={`/lists/${id}`}>
            <div style={styleCard} className="card">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div style={styleCategory} className="badge rounded px-3 py-2 border-none text-sm font-medium">{category}</div>
                    <p style={styleTitle} className="text-base font-semibold">{title}</p>
                </div>
            </div>
        </Link>
    );
};

List.propTypes = {
    list: PropTypes.object.isRequired,
}

export default List;