import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <div className="kegDetail coralColor">
        <h3>
          <b>Keg Details: </b>
          <span className="coralColor">{keg.kegName} </span>
        </h3>
        <p>
          <span className="black">Brand: </span>
          {keg.kegBrand}
        </p>
        <p>
          <span className="black">Price: </span>${keg.kegPrice}
        </p>
        <p>
          <span className="black">Flavor: </span>
          {keg.kegFlavor}
        </p>
        <p>
          <span className="black">Quantity: </span>
          {keg.pintQty}
        </p>
        <p>
          <span className="black">ID: </span>
          {keg.id}
        </p>

        <div className="kegDetailButton coralColor">
          <button className="btn btn-warning" onClick={props.onClickingEdit}>
            Update Keg
          </button>

          <br></br>
          <button
            className="btn btn-danger"
            onClick={() => onClickingDelete(keg.id)}
          >
            Delete Keg
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default KegDetail;
