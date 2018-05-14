import PropTypes from 'prop-types';

const List = ({ list }) => (
  list.map((p) => p.component)
);

List.propTypes = {
  list: PropTypes.arrayOf(Object).isRequired,
};

export default List;
