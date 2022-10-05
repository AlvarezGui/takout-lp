import React from "react";
import { FaFacebookF , FaTwitter , FaInstagram , FaArrowRight } from 'react-icons/fa'

export default function footer(){
    return(
        <>
        
      {/* Footerzão braaabo não roubado confia */}  
  <footer>
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="/Takout.png" alt="" width="100" class="mb-3"></img>

          <p class="font-italic text-light">Takout é um Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

          <ul class="list-inline mt-4">
            <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><FaTwitter /></a></li>

            <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><FaFacebookF /></a></li>

            <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><FaInstagram /></a></li>

          </ul>
        </div>

        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0 topicosFoo">
          <h6 class="font-weight-bold mb-4 text-light">Tópico 1</h6>

          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-light">Sub</a></li>
            
            <li class="mb-2"><a href="#" class="text-light">Sub</a></li>

            <li class="mb-2"><a href="#" class="text-light">Sub</a></li>

          </ul>
        </div>

        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0 topicosFoo">
          <h6 class="font-weight-bold mb-4 text-light">Tópico 1</h6>

          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-light">Sub</a></li>
            
            <li class="mb-2"><a href="#" class="text-light">Sub</a></li>

            <li class="mb-2"><a href="#" class="text-light">Sub</a></li>

          </ul>
        </div>

        {/* newsletter */}
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4 text-light">Newsletter</h6>

          <p class="mb-4 text-light">Coloque seu email abaixo para receber noticias sobre nosso aplicativo.</p>

          <div class="p-1 rounded border bg-white">
            <div class="input-group bg-white">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0"></input>

              <div class="input-group-append bg-white">
                <button id="button-addon1" type="submit" class="btn btn-link bg-white"><FaArrowRight className="bg-white"/></button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

        </>
    )
}
