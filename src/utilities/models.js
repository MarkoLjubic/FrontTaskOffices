export const officesModel = PropTypes =>
  PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    name: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
    photo: PropTypes.string,
  }))
