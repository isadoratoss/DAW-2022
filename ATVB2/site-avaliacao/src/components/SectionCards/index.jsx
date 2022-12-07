import './style.css';


const dados = [
    {
        foto: './assets/img/gnomo-logo.png',
        titulo: 'Gnomos',
        descricao: 'Atrem força, entusiasmo, saúde, dinheiro e amor. Estão sempre afugentando  o mal de nossas vidas.',
        preco: 90.00,
        
    },
    {
        foto: './assets/img/chas.png',
        titulo: 'Chás',
        descricao: 'O chá é uma bebida que traz inúmeros benefícios para a saúde porque contém água e ervas com propriedades medicinais que podem ser úteis para prevenir e ajudar a tratar diversas doenças como gripe, por exemplo. Os chás podem ter propriedades calmantes, estimulantes, diuréticas ou expectorantes.',
        preco: 90.00,
        
    },
    {
        foto: './assets/img/incenso.png',
        titulo: 'Incensos',
        descricao: 'Purificação energética do ambiente, além da atração de boas energias. Ele também pode facilitar as práticas de meditação e Yoga,pois colabora com a conexão – relaxando a mente, promovendo o foco e diminuindo a ansiedade.',
        preco: 30.00,
        
    },
    {
        foto: './assets/img/cristais.png',
        titulo: 'Cristais',
        descricao: 'Símbolos da vitalidade da natureza, nas esferas física, psíquica, espiritual e emocional, as pedras e cristais alinham os centros de energia do corpo, melhoram o sono, favorecem o bom humor e servem ao combate a diferentes doenças.',
        preco: 50.00,
        
    },
]
export function SectionCards() {
    return(
        <section id="cards">
                <h2>Escolha por categoria</h2>
            <div className="cards-content">
            {dados.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.foto} alt="Foto" />
                        <div className="card-content">
                            <h4>{item.titulo}</h4>
                            <p>{item.descricao}</p>
                        </div>
                    </div>
            ))}
            </div>
        </section>

    )
}