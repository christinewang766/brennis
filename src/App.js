import "./App.css";
import Background from "./images/polka.jpg";
import Brennis from "./images/brennis.png";
import HBD from "./images/hbd.gif";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${Background})`,
        backgroundRepeat: "repeat-x-y",
        backgroundSize: "600px",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap:'40px',
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* top row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Brennis}
            style={{
              height: "100px",
            }}
            alt="brennis"
          />
        </div>

        {/* middle row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <img
            src={Brennis}
            style={{
              height: "400px",
            }}
            alt="brennis"
          />
          <img
            src={HBD}
            style={{
              height: "400px",
            }}
            alt="hbd"
          />
        </div>
        {/* bottom row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Brennis}
            style={{
              height: "100px",
            }}
            alt="brennis"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
