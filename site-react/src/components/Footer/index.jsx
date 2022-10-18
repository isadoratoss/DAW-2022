import './style.css';

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-company">
                        <p className="footer-logo">Imobiliaria Unimater</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, distinctio accusamus! Itaque
                            cupiditate amet dolorum fuga exercitationem inventore optio, alias est dignissimos accusantium harum
                            modi tempora fugiat corporis nihil sit.</p>
                    </div>

                    <div className="footer-menu">
                        <p className="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Especialistas</a></li>
                            <li><a href="#">Missão e Visão</a></li>
                            <li><a href="#">Nossos Valores</a></li>
                        </ul>
                    </div>

                    <div className="footer-menu">
                        <p className="footer-menu-title"></p>
                        <ul>
                            <li>+55 (46) 9 9999- 3333</li>
                            <li>Rua Mato Grosso, 200</li>
                            <li>Pato Branco - PR</li>
                        </ul>
                    </div>

                    <div className="footer-menu">
                        <p className="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#">Empresa XPTO</a></li>
                            <li><a href="#">Empresa do Zeca</a></li>
                            <li><a href="#">Empresa do Chico</a></li>
                            <li><a href="#">Empresa do Tonho</a></li>
                        </ul>
                    </div>
                </div>


                <div className="footer-social">
                    <span className="Facebook"></span>
                    <span className="Twitter"></span>
                    <span className="Instagram"></span>
                    <span className="Linkedin"></span>
                </div>

                <p className="footer-copyright">
                    &#169; 2022 - Todos os direitos reservados
                </p>
            </div>
        </footer>
    )
}