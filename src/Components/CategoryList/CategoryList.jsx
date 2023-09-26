import PropTypes from 'prop-types';
import List from "../List/List";

const CategoryList = ({lists}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                lists?.map(list => <List key={list.id} list={list}></List>)
            }
        </div>
    );
};

CategoryList.propTypes = {
    lists: PropTypes.array.isRequired,
}

export default CategoryList;