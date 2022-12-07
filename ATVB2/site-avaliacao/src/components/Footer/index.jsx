import './style.css';

import imgLogo from '../../assets/img/logo_cura_herbal.png'
export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div classNameName="footer-company">
                        <p className="footer-logo">Cura Herbal</p>
                        <p>Desde 2017 a Cura Herbal resgata esta sabedoria antiga e aplica seus benefícios nos tempos atuais. Um conforto para a alma!</p>
                        <p>Estamos de portas abertas para você fazer suas compras com todos os chás e outros produtos holísticos.</p>
                        <p>Deguste também nossos chás take away em nossos jardins sensoriais</p>
                    </div>
                    


                        <div classNam="footer-menu">
                            <p className="footer-menu-title">Nossa Empresa</p>
                            <ul>
                                <li><a href="#">Sobre Nós</a></li>
                                <li><a href="#">Missão, Visão e Valores</a></li>
                            </ul>
                        </div>

                        <div className="footer-menu">
                            <p className="footer-menu-title"></p>
                            <ul>
                                <li>+55 (46) 9 9999- 3333</li>
                                <li>Rua Argentina, 303</li>
                                <li>Pato Branco - PR</li>
                            </ul>
                        </div>

                        <div className="footer-social">
                             <span className="facebook"></span>
                             <span className="twitter"></span>
                             <span className="instagram"></span>
                             <span className="linkedin"></span>
                         </div>
                        <p className="footer-copyright">
                        &#169; 2022 - Todos os direitos reservados
                    </p>
                    



                </div>
            </div>
        </footer>

    )
}