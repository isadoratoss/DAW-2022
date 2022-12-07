import './style.css'

import imgLogo from '../../assets/img/ervas.png';

export function SectionValues() {
    return (
        <section id="values">
                <h2>
                   Sobre nossos Produtos
                </h2>
                <div class="values-content">
                <img src={imgLogo} alt="Foto" id='img' />
                        <p>
                            O Herbalismo sempre foi, desde os primórdios, um poderoso meio de cura para o ser humano. Utilizando regularmente o que a natureza nos disponibiliza, podemos viver com consciência, equilíbrio e saúde.
                        </p>
                        <p>Os nossos chás são elaborados seguindo as convenções de equilíbrio das ervas e sua potência energética. As flores, frutos e ervas são selecionados manualmente para que seja utilizado somente o melhor de cada um deles. E, é claro, levando em consideração que o sabor e o aroma sejam deliciosos.</p>
                     
                </div>               
            </section>
    )
    }