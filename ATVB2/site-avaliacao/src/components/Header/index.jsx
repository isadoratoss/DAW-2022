import './style.css'

import imgLogo from '../../assets/img/logo_cura_herbal.png';
export function Header() {
    return (
        <header>
            <div className="container">
                <div className="brand">
                <img src={imgLogo} alt="Logomarca" />
                        <h6>Cura Herbal</h6>
                </div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Pontos de Venda</a></li>
                        <li><a href="#">Revenda</a></li>
                        <li><a href="/Sobre">Sobre</a></li>
                        <li><a href="#">Lojas Fisicas</a></li>
                        <li><button>Entrar</button></li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}