import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const Heading = ({ routeName }) => {
  return (
    <Helmet>
      <title> {routeName} - FurniFlex E-commerce Web App </title>
    </Helmet>
  );
};
Heading.propTypes = {
  routeName: PropTypes.string,
};
export default Heading;
