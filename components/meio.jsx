export default function Meio(){
    return(
        <>
        {/* Titulo da págia */}
            <div className="grid text-center diviTitulo1">
                <h1 id="servicos">Feito simples para</h1>
                <h1 className="text-primary">pequenos negócios.</h1>
            </div>

        {/* Subtitulo da págia */}
            <div className="grid text-center paragrafo1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Excepturi cupiditate iusto voluptatem distinctio animi hic ipsa culpa quos sit.</p>
            </div>

        {/* Ó buttão soh */}
            <div className="text-center">
                <button className="btn btnCont btn-primary me-2 cor-letra" type="button">Comece gratuitamente</button>    
            </div>    

        {/* sente só o PLACE HOLDER DO PAAAAAAAI */}
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="placeHolder1"></div>
            </div>     

        {/* solução */}
            <div className="soluBGC">

                {/* Titulo */}
                <div className="grid text-center">
                   <h2 id="solucao">Nossa solução para o seu negócio</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div> 

                 {/* soluções */}
                <div className="cardCole">

                    <div class="card">
                        <div className="placeHolderCard"></div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                            <a href="#">Go somewhere</a>
                        </div>
                    </div>
                </div>    
            </div>          
        </>
    );
}