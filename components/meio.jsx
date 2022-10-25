import Image from 'react-bootstrap/Image';

export default function Meio(){
    return(
        <>
    <div className="fundoMeio">
            {/* Titulo da págia */}
            <div className="grid text-center diviTitulo1">
                <h1 id="servico">Onde seu</h1>
                <h1 className="text-primary">pequeno negócio será visto!</h1>
            </div>

        {/* Subtitulo da págia */}
            <div className="text-center paragrafo1">
                <p>Administre e desenvolva seu comércio com o nosso aplicativo!</p>
            </div>

        {/* Ó buttão soh */}
            <div className="text-center">
                <button className="btn btnCont btn-primary me-2 cor-letra" type="button">Comece gratuitamente</button>    
            </div> 

          {/* placeHolder */}   
        <div className="text-center">
            <Image
                src=
                "/imgMeio.png"
                className='img-fluid placeHolder1'
                alt='Imagem takout'
            />
        </div>    
            
    </div>         
        </>
    );
}