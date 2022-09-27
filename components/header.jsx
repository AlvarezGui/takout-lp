import Image from 'next/image';

export default function Header(){
    return(
        <>
            {/* Navbar em si */}
            <div className="borderBaixo">
                <nav className="navbar navbar-expand-lg  cora nav"> {/* trocar cor bg */}

                    {/* Logo do header */}
                    <div className="container-fluid">
                        <a className="navbar-brand cor-letra imgTakout" href=""> <Image src="/Takout.png" width={90} height={20} alt='takout'></Image> </a>
                        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>    
                        </button>    

                        {/* Botões de navegação */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="nav navLoca">
                                <li className="nav-item nItem">
                                    <a className="cor-letra" href="#servicos">Serviços</a>
                                </li>
                                <li className="nav-item nItem">
                                    <a className="cor-letra" href="#solucao">Solução</a>
                                </li>
                                <li className="nav-item nItem">
                                    <a className="cor-letra" href="#comoFunciona">Como Funciona</a>
                                </li>
                            </ul>
                        </div>
                    </div>  

                    {/* Botão login */}
                    <div className="container-fluid justify-content-end btnDiv">
                        <button className=" btnL" type="button">Login</button>
                        <button className="btn btnI btn-primary me-2 cor-letra" type="button">  Iniciar  </button>
                    </div>
                
                </nav>    
            </div>    
        </>
    );
}