"use client";

import { useEffect } from "react";
import Image from "next/image";
import Container from "./Container";
import Destaque from "./Destaque";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#zoom-section",
        scrub: 1,
        pin: true,
        start: "bottom bottom",
        end: "+=150%",
        markers: true,
      },
    });

    // 1️⃣ — ZOOM DA IMAGEM (primeira parte da timeline)
    tl.to(".mask-zoom", {
      scale: 90,
      transformOrigin: "45% 50%",
      ease: "power4.inOut",
      duration: 0.7, // 80% da animação
    });

    // 2️⃣ — FADE-IN DO VÍDEO (final da timeline)
    tl.to(".video-container", {
      opacity: 1,
      ease: "power1.out",
      duration: 0.3,
    });
  }, []);

  return (
    <>
      {/* PRIMEIRA SEÇÃO */}
      <Container
        as="section"
        className="py-20 px-4 text-center flex justify-between h-screen"
        maxWidth="8xl"
        id="hero"
      >
        <div className="flex flex-col items-start justify-center text-left max-w-[50%] gap-6">
          <Destaque text="Lorem Ipsum is simply dummy text" />
          <h1 className="text-[3.2vw]">Saúde Integrativa e Naturopatia Avançada</h1>

          <span className="text-[1.6vw] font-medium">
            It has survived not only five centuries, but also
          </span>

          <p className="text-xl">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>

          <div className="flex items-center gap-10 mt-8">
            <button>
              <a href="">Junte-se a Nós</a>
            </button>
            <button className="flex">
              <a href="">Nossos cursos</a>
              <Image src="/arrow-right.svg" alt="" width={16} height={16} />
            </button>
          </div>
        </div>
      </Container>

      {/* SEÇÃO DO ZOOM + VÍDEO */}
      <section
        id="zoom-section"
        className="relative h-screen w-full overflow-hidden py-50"
      >
        {/* FUNDO */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/folhasbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* VÍDEO — começa invisível */}
        <div className="video-container absolute inset-0 opacity-0 flex items-center justify-center mt-20">
          <div className="w-full max-w-4/5 mx-auto">
            <iframe
              width="100%"
              height="800"
              src="https://www.youtube.com/embed/Zg9-g_a9BCU"
              title="Vídeo Institucional Natuphisio | Escola Natupleno"
              className="rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* IMAGEM QUE FAZ O ZOOM (por cima do vídeo) */}
        <Image
          src="/exclude.svg"
          alt=""
          fill
          objectFit="cover"
          className="mask-zoom pointer-events-none z-50"
        />
      </section>
    </>
  );
}
