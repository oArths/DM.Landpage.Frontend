"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const cardTitleClasses = "font-Inter text-grey-scale-off-white w-full text-2xl text-left font-bold";
const cardTextClasses = "font-DMSans text-grey-scale-off-white text-xl font-normal";
const outlineButtonClasses =
  "flex items-center justify-center w-fit py-2 px-11 font-DMSans text-grey-scale-off-white text-base font-semibold bg-ui-colors-background border border-purple-heart-700 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-heart-500";

export default function Service({ id }: { id: string }) {
  const consultoriaRef = useRef<HTMLDivElement>(null);
  const educacionalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const servicosRef = useRef<HTMLDivElement>(null);
  const cursosRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const [heights, setHeights] = useState({
    consultoria: 0,
    educacional: 0,
    container: 0,
    servicos: 0,
    cursos: 0,
    line: 0,
  });

  useEffect(() => {
    setHeights({
      consultoria: consultoriaRef.current?.offsetHeight ?? 0,
      educacional: educacionalRef.current?.offsetHeight ?? 0,
      container: containerRef.current?.offsetHeight ?? 0,
      servicos: servicosRef.current?.offsetHeight ?? 0,
      cursos: cursosRef.current?.offsetHeight ?? 0,
      line: lineRef.current?.offsetHeight ?? 0,
    });
  }, []);

  return (
    <section id={id} className="flex flex-col w-[90%] h-auto gap-10">
      <div className="flex flex-row w-full h-auto">
        <div className="relative flex flex-col items-center justify-start w-10 left-4">
          <p ref={lineRef} className="h-20 w-4 bg-purple-heart-700"></p>
          <div
            style={{
              height: `${heights.container - heights.cursos}px`,
            }}
            className={`flex items-start justify-center w-1 bg-purple-heart-700`}
          ></div>
        </div>
        <div
          style={{
            height: `${heights.container - heights.cursos + heights.line}px`,
          }}
          className="relative flex flex-col left-2"
        >
          <div
            style={{
              marginTop: `${heights.container - heights.cursos - heights.educacional - heights.consultoria}px`,
            }}
            className="flex flex-row items-center justify-center"
          >
            <div className="w-4 h-1 bg-purple-heart-700"></div>
            <div className="dot p-2"></div>
          </div>
          <div
            style={{
              marginTop: `${heights.container - heights.cursos - heights.educacional - heights.consultoria}px`,
            }}
            className="flex flex-row items-center justify-center"
          >
            <div className="w-4 h-1 bg-purple-heart-700"></div>
            <div className="dot p-2"></div>
          </div>
          <div className="relative flex flex-row items-center justify-center mt-auto top-[6px]">
            <div className="w-4 h-1 bg-purple-heart-700"></div>
            <div className="dot p-2"></div>
          </div>
        </div>
        <div
          ref={containerRef}
          className="flex flex-col items-center h-full gap-10 bg-ui-colors-background text-grey-scale-off-white"
        >
          <div ref={servicosRef} className="flex flex-col ml-10 mb-10 gap-12">
            <h2 className="font-Inter text-grey-scale-off-white w-full text-3xl text-left font-bold">
              Linhas de Serviços Ofertados
            </h2>
            <span className="font-DMSans text-grey-scale-off-white text-xl font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </span>
          </div>

          <div
            ref={consultoriaRef}
            className="flex flex-col items-end w-full px-12 py-7 gap-8 border border-purple-heart-700 rounded-lg"
          >
            <h2 className={cardTitleClasses}>Consultoria Empresarial</h2>
            <span className={cardTextClasses}>
              Treinamentos personalizados para capacitar equipes nas áreas de
              Business Intelligence, Data Engineering & Data Science, Automação
              Robótica (RPA), Python, Excel, Power BI e muito mais.
              <br />
              <br />
              Com foco em conteúdos práticos e adaptados às necessidades da sua
              empresa, nossos cursos proporcionam o desenvolvimento das
              habilidades técnicas necessárias para impulsionar a eficiência e a
              inovação, alinhando-se aos desafios específicos do seu negócio
            </span>

            <button type="button" className={outlineButtonClasses}>
              Ver mais
            </button>
          </div>

          <div
            ref={educacionalRef}
            className="flex flex-col items-end w-full px-12 py-7 gap-8 border border-purple-heart-700 rounded-lg"
          >
            <h2 className={cardTitleClasses}>Educacional</h2>
            <span className={cardTextClasses}>
              Treinamentos personalizados para capacitar equipes nas áreas de
              Business Intelligence, Data Engineering & Data Science, Automação
              Robótica (RPA), Python, Excel, Power BI e muito mais.
            </span>
            <div className="flex flex-col items-start gap-8">
              <span className="flex flex-row items-center gap-4">
                <p className="dot"></p>
                <h3 className="font-Inter text-grey-scale-off-white text-2xl font-semibold">
                  Pessoa Física
                </h3>
              </span>
              <p className="font-DMSans text-grey-scale-off-white pl-10 text-xl font-normal">
                Treinamentos personalizados para capacitar equipes nas áreas de
                Business Intelligence, Data Engineering & Data Science,
                Automação Robótica (RPA), Python, Excel, Power BI e muito mais.
              </p>
            </div>
            <div className="flex flex-col items-start gap-8">
              <span className="flex flex-row items-center gap-4">
                <p className="dot"></p>
                <h3 className="font-Inter text-grey-scale-off-white text-2xl font-semibold">
                  Pessoa Jurídica / Empresas
                </h3>
              </span>
              <p className="font-DMSans text-grey-scale-off-white pl-10 text-xl font-normal">
                Treinamentos personalizados para capacitar equipes nas áreas de
                Business Intelligence, Data Engineering & Data Science,
                Automação Robótica (RPA), Python, Excel, Power BI e muito mais.
              </p>
            </div>
            <Link href="/education" className={outlineButtonClasses}>
              Ver mais
            </Link>
          </div>
          <div
            ref={cursosRef}
            className="flex flex-col items-end w-full px-12 py-7 pb-20 gap-8 border border-purple-heart-700 rounded-lg"
          >
            <h2 className={cardTitleClasses}>Cursos completos / Áreas de Aprendizado</h2>
            <div className="grid grid-cols-2 w-full gap-12">
              <div>
                <span className="flex flex-row items-center gap-4">
                  <p className="dot"></p>
                  <h3 className="font-Inter text-grey-scale-off-white text-2xl font-semibold">
                    Engenharia de Dados & Machine Learning
                  </h3>
                </span>
                <ol className="ml-11 mt-7 list-disc list-inside">
                  <li>Power BI</li>
                  <li>SQL</li>
                  <li>Engenharia de Dados com Python</li>
                  <li>Desenvolvimento de Streaming de Dados</li>
                  <li>Bootcamp Data Engineer com DBT</li>
                  <li>Machine Learning utilizando Python</li>
                  <li>MLOps: Desenvolvendo Pipleines de IA</li>
                </ol>
              </div>
              <div>
                <span className="flex flex-row items-center gap-4">
                  <p className="dot"></p>

                  <h3 className="font-Inter text-grey-scale-off-white text-2xl font-semibold">
                    Automação de Processos & Programação
                  </h3>
                </span>
                <ol className="ml-11 mt-7 list-disc list-inside">
                  <li>Lógica de Programação</li>
                  <li>Automação com Python</li>
                  <li>UiPath</li>
                  <li>VBA</li>
                  <li>Bootcamp de Python</li>
                </ol>
              </div>
              <div>
                <span className="flex flex-row items-center gap-4">
                  <p className="dot"></p>

                  <h3 className="font-Inter text-grey-scale-off-white text-2xl font-semibold">
                    Ferramentas de Produtividade & Web Design
                  </h3>
                </span>
                <ol className="ml-11 mt-7 list-disc list-inside">
                  <li>Figma / FigJam</li>
                  <li>Excel e Pacotes Office</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                </ol>
              </div>
              <div>
                <span className="flex flex-row items-center gap-4">
                  <p className="dot"></p>

                  <h3 className="font-Inter text-grey-scale-off-white text-2xl font-semibold">
                    Ferramentas de DevOps & Gerenciameno de Código
                  </h3>
                </span>
                <ol className="ml-11 mt-7 list-disc list-inside">
                  <li>Docker</li>
                  <li>Git e Github</li>
                  <li>Kubernettes</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
