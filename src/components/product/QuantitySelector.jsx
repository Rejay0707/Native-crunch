const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
  onQuantityChange,
}) => {
  return (
    <div
      style={{
        position: "relative",
        // zIndex: 999999,
        background: "yellow",
        padding: "20px",
        width: "fit-content",
      }}
    >
      <p>Quantity</p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          type="button"
          onClick={() => {
            console.log("MINUS CLICKED");
            onDecrease();
          }}
        >
          −
        </button>

        <input
          type="text"
          value={quantity}
          onChange={(e) => {
            console.log("INPUT CHANGED:", e.target.value);
            onQuantityChange(e.target.value);
          }}
          onClick={() => {
            console.log("INPUT CLICKED");
          }}
          style={{
            width: "60px",
            height: "40px",
            border: "3px solid red",
            textAlign: "center",
            color: "black",
            background: "white",
            cursor: "text",
          }}
        />

        <button
          type="button"
          onClick={() => {
            console.log("PLUS CLICKED");
            onIncrease();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;