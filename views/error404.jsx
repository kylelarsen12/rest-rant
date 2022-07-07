//Require modules
const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <div>
          <img src="/images/squat.jpg" alt="funny dog"></img>
        </div>
        <p>Whoops, seems like we can't find this page</p>
      </main>
    </Def>
  );
}

module.exports = error404;
