export default function Meio(){
    return(
        <>
    <div className="fundoMeio">
            {/* Titulo da págia */}
            <div className="grid text-center diviTitulo1">
                <h1 id="servico">Feito simples para</h1>
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
    </div>         
        </>
    );
}