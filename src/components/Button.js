import React from 'react';
import PropTypes from 'prop-types';
export default function Button({ onClick }) {
  return (
    <div className="Button-div">
      <button className="Button" type="button" onClick={onClick}>
        LoadMore
      </button>
    </div>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
