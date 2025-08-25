function CarWidget() {
    return (
       <div style={{ position: "relative", display: "inline-block" }}>
      
      <span style={{ fontSize: "2rem" }}>🛒</span>

      <span
        style={{
          position: "absolute",
          top: "0px",      // la sube hacia arriba
          left: "12px",    // la empuja hacia el centro del carrito
          background: "red",
          color: "white",
          borderRadius: "50%",
          padding: "2px 6px",
          fontSize: "0.6rem",
          fontWeight: "bold"
        }}
      >
        10
      </span>
    </div>
    )
}
export default CarWidget