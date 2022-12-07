import './style.css';

const depoiments = [
    {
        nome: 'Humberto',
        cidade: 'Curitiba',
        descricao: 'local inspirador e com muita energia positiva. O atendimento é pontual, agradável e a gente se sente super á vontade. É como atravessar um portal de boas possibilidades para presentear alguém e se autopresentear!'
    },
    {
        nome: 'Ricardo',
        cidade: 'São Paulo',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quidem voluptas. Reprehenderit alias dignissimos facere hic quo. Mollitia quam placeat consequuntur blanditiis aliquam, incidunt maxime vel saepe reprehenderit repudiandae? Quasi.'
    },
    {
        nome: 'Maria',
        cidade: 'Salvador',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quidem voluptas. Reprehenderit alias dignissimos facere hic quo. Mollitia quam placeat consequuntur blanditiis aliquam, incidunt maxime vel saepe reprehenderit repudiandae? Quasi.'
    },

];
export function SectionDepoiments() {
    return(
        <section id="Depoimentos">
                <h2>
                    Depoimentos
                </h2>
            <div classNme="depoiments-content">
                
             { depoiments.map((item,index) => (
                    <div key={index} className="depoiment">
                        <h5>{ item.nome }</h5>
                        <p>{ item.cidade }</p>
                        <p className="depoiment-detail">{ item.descricao }</p>
                    </div>
             ))}
            </div>   
             
        </section>

    )
}