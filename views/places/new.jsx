//require modules
const React = require("react");
const Def = require("../default");

//new form
function newForm() {
  return (
    <Def>
      <main>
        <h1>Add a new place</h1>
        <form method="POST" action="/places">
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input
              className="form-control"
              id="name"
              name="name"
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input className="form-control" id="pic" name="pic"></input>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city"></input>
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state"></input>
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="founded">Founded Year</label>
            <input
              type="number"
              className="form-control"
              id="founded"
              name="founded"
              value={new Date().getFullYear}
            ></input>
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Add Place"
          ></input>
        </form>
      </main>
    </Def>
  );
}

module.exports = newForm;
