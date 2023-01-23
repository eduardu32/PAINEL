function NavBar() {
    return (
        <nav className="navb">
            <h1>VEGETALLIS</h1>
            <input id="opcoes" type="checkbox" />
            <ul>
                <li><button className="botao_menu">HIDROGENÇÃo</button></li>
                <li><button className="botao_menu">ENVASE</button></li>
                <li><button className="botao_menu">ESTOQUE</button></li>
            </ul>
 
        </nav>
    )
}
export default NavBar