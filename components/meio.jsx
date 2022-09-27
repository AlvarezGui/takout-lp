export default function Meio(){
    return(
        <>
        {/* Titulo da págia */}
            <div className="grid text-center diviTitulo1">
                <h1 className="">Feito simples para</h1>
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
                <div>
                    <h2>Nossa solução para o seu negócio</h2>
                </div> 
            </div>          
        </>
    );
}