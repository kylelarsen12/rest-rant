//Require/import modules
const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img src="/images/tacos.jpg" alt="tacos" />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/es/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Chad Montano
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
