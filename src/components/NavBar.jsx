import CarWidget from "./CarWidget"
function NavBar() {
    return(
        <nav style={{ display: "flex", background: "#aaa", padding: "2rem", justifyContent: "space-between" }}>
            <div>
                <h2>Store</h2>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
                <a href="">Inicio</a>
                <a href="">Catalogo</a>
                <a href="">Contacto</a>  
            </div>

            <CarWidget />
        </nav>   
    )
}
export default NavBar