import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../assets/logo.png";

const flexBetween = "flex items-center justify-between";
const navLinks = "text-lg hover:text-indigo-300"



const Index = () => {
  return (
    <nav className="">
      <div className={`${flexBetween}fixed top-0 z-30 w-full py-5 shadow-md `}>
        <div className={`${flexBetween} mx-auto w-11/12  rounded-lg`}>
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-16  `}>
              <img src={Logo} alt="Logo" className={`w-12`} />
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks} text-2xl`}>
                  Home
                </a>
              </RouterLink>

              <a href="#" className={`${navLinks} text-2xl`}>
                Leilões Ao vivo
              </a>
              <a href="#" className={`${navLinks} text-2xl`}>
                Próximos Leilões
              </a>
              <RouterLink to="/registerItem" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks} text-2xl`}>
                  Anunciar
                </a>
              </RouterLink>
              <RouterLink to="/profile" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks} text-2xl`}>
                  Perfil
                </a>
              </RouterLink>
              
            </div>
            <div className={`${flexBetween} gap-9 flex grid-cols-2 `}>
              <RouterLink to="register" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks} text-2xl`}>
                  Cadastro
                </a>
              </RouterLink>
              <RouterLink to="login" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks} text-2xl`}>
                  Login
                </a>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;