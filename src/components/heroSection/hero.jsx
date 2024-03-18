import "./hero.css";

function HeroBG() {
  return (
    <div className="BG">
      <h1>
        SCAN THE <span className="rot">WEBSITES</span> THAT YOU ARE WORRIED
        ABOUT
      </h1>

      <div className="space">
        <div className="SCANCOLO">
          <input type="text" placeholder="Enter or paste link here" />
          <button>SCAN IT</button>
        </div>

        <p>Try our demo to see the magic</p>
      </div>
    </div>
  );
}
export default HeroBG;
