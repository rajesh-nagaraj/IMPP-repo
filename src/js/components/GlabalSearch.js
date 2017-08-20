import React from "react";


export default class GlabalSearch extends React.Component {
  render() {
    var style = {
      fontSize: '12px'
    };

    var fetchBtn = {
      marginTop : '10px'
    };
    return (
      <form className="row .small" style={style}>
        <div className="col-sm-10">
        <div className="form-group col-sm-2">
          <label htmlFor="email">Start Period</label>
          <input type="date" className="form-control input-sm"
            name="email" />
        </div>
        <div className="form-group col-sm-2">
          <label htmlFor="email">End Period</label>
          <input type="email" className="form-control input-sm"
            name="email" />
        </div>
        <div className="form-group col-sm-2">
          <label htmlFor="email">Store</label>
          <input type="email" className="form-control input-sm"
            name="email" />
        </div>
        <div className="form-group col-sm-2">
          <label htmlFor="email">Region</label>
          <input type="email" className="form-control input-sm"
            name="email" />
        </div>
        <div className="form-group col-sm-2">
          <label htmlFor="email">Country</label>
          <input type="email" className="form-control input-sm"
            name="email" />
        </div>
        <div className="form-group col-sm-2">
          <label htmlFor="email">Licensor</label>
          <input type="email" className="form-control input-sm"
            name="email" />
        </div>
        </div>
        <div className="col-sm-2">
        <button type=" submit" className=" btn btn-primary" style={fetchBtn}>
          Fetch
                </button>

        </div>
      </form >
    );
  }
}
