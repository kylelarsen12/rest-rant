const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} />
        <div>
          <h2>Rating</h2>
          <p>Not rated</p>
        </div>

        <div>
          <h2>Description</h2>
          <p>no description yet</p>
        </div>

        <div>
          <h2>Comments</h2>
          <p>No comments yet</p>
        </div>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form action={`/places/${data.id}?_method=DELETE`} method="POST">
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
