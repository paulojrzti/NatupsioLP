import Image from "next/image";
import Container from "./Container";

export function Menu() {
  return (
    <Container
      as="header"
      className="
        py-4 px-4 flex fixed top-0 left-1/2 -translate-x-1/2 
        w-full z-49
      "
      maxWidth="8xl"
    >
      <nav className="flex justify-between w-full items-center">
        {/* container Logo + ul */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="relative h-12 w-28">
            <Image src="/logo.png" alt="logo" fill className="object-contain" />
          </div>

          <ul className="flex gap-5 items-center liquid-nav text-sm font-medium">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Cursos</a>
            </li>
            <li>
              <a href="">Depoimentos</a>
            </li>
            <li>
              <a href="">Professores</a>
            </li>
            <li>
              <a href="">Duvidas Frequentes</a>
            </li>
          </ul>
        </div>

        <button>
          <a href="">Já Sou Aluno</a>
        </button>
      </nav>
    </Container>
  );
}
