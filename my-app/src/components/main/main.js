import React, { Component } from 'react';
import './main.css'
import Celular from '../images/Celular.svg';
import ilustra from '../images/ilustra.svg';

class Main extends Component {
    render() {
        return (
                <main>
                    <div className="principal">
                        <img src={Celular} className="celular"></img>

                        <div>
                            <h1>AINDA NÃO TEM NOSSO CHIP?</h1>

                            <p>
                                Com a EasyC você pode ter um número de celular de uma <br/>forma muito mais prática e segura, impossibilitando o  <br/>de pessoas mal intencionadas.
                                <br/>
                                <br/>
                                O E-Chip é totalmente digital, não desgasta e nem<br/> quebra, também não é removível. Dessa maneira,  basta<br/> adquirir seu número e ativá-lo em um celular compatível.
                            </p>

                            <button className="main">Amei! Quero meu EasyC</button>
                        </div>
                    </div>
                
                    <div className="segundo">
                        <div className="Texto">
                            <h2>QUEM SOMOS?</h2>

                            <p>
                                Este é um projeto de fim de curso sugerido pela<br/> Resilia + M4U, criado por cinco colegas de turma do<br/> Bootcamp de desenvolvimento web Full-Stack. O<br/> intuito do projeto é trazer facilidade, praticidade e<br/> agilidade na compra de chip digital e recarga<br/> online.
                                <br/>
                                <br/>
                                EasyC é uma operadora de telefonia móvel<br/> totalmente digital.
                                <br/>
                                <br/>
                                Nosso produto pode ser adquirido facilmente pela<br/> nossa plataforma. Basta comprar um chip digital e<br/> após receber seu número, é só ativá-lo em seu<br/> celular e fazer a recarga.
                                <br/>
                                <br/>
                                Se você já possui um número EasyC, é só comprar a<br/> sua recarga e continuar usando com tranquilidade.
                                <br/>
                                <br/>
                                No momento disponibilizamos apenas chips<br/> Pré-pagos, mas em breve teremos planos Pós-pago<br/> e Controle, além de outros benefícios e parcerias<br/> que você só vai encontrar com a gente.
                                <br/>
                                <br/>
                                Então não perca mais tempo e faça parte da nova<br/> geração de telefonia móvel.
                            </p>
                        </div>


                        <img src={ilustra} className="ilustra"></img>


                    </div>



                

                </main>
        )
    }
}

export default Main;