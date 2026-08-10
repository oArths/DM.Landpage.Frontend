import Image from "next/image";
import *as I from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full items-center justify-center bg-ui-colors-background min-h-screen mb-32">
      <section className="relative flex items-center justify-center min-h-[90dvh] h-fit w-full">
        <span className="flex flex-col items-center justify-center w-full gap-10 z-20 py-[10%]">
          <span className="flex flex-col items-center justify-center gap-[17px] w-fit">
            <h1 className="font-Lexend  text-grey-scale-off-white font-bold text-7xl ">
              Conheça a Data Mastery
            </h1>
            <h2 className="font-Inter  text-grey-scale-off-white font-light text-2xl text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dof
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </h2>
          </span>
          <div className="flex flex-col mt-20 w-[90%] gap-12 ">
            <div className=" flex flex-row items-start justify-start gap-2.5">
              <p className="bg-secondary-purple-heart h-10 w-2.5 trace" />
              <h2 className="font-Inter font-bold text-3xl text-grey-scale-off-white">
                Sobre Nós
              </h2>
            </div>
            <div className="flex justify-between gap-[5%]">
              <div className="flex flex-col flex-1 gap-12">
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold font-Inter text-2xl text-grey-scale-off-white text-left w-full">
                    ㅤ ㅤ
                  </h2>

                  <span className="font-normal   font-DMSans text-grey-scale-off-white text-lg">
                    A Data Mastery Tech é uma empresa de serviços educacionais e
                    consultorias especializada em Business Intelligence, Data
                    Engineering, Data Science e Automação Robótica. Nosso
                    propósito é ajudar empresas e profissionais a se
                    desenvolverem na área de dados e gerar transformação
                    digital.
                    <br />
                    <br />
                    Na Data Mastery Tech, estamos comprometidos com a excelência
                    e a inovação, buscando transformar o cenário tecnológico e
                    educacional do Brasil. Junte-se a nós nessa jornada de
                    crescimento e transformação digital.
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold font-Inter text-2xl text-grey-scale-off-white text-left w-full">
                    Visão
                  </h2>
                  <span className="font-normal   font-DMSans text-grey-scale-off-white text-lg">
                    Ser referência na transformação digital, capacitando
                    empresas e indivíduos a atingirem seu potencial máximo
                    através do uso inteligente de dados e tecnologia.
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-12">
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold font-Inter text-2xl text-grey-scale-off-white text-left w-full">
                    Missão
                  </h2>
                  <span className="font-normal   font-DMSans text-grey-scale-off-white text-lg">
                    Capacitar empresas e profissionais a tomar decisões baseadas
                    em dados, promovendo a inovação e a eficiência através de
                    soluções tecnológicas avançadas e educação de qualidade.
                    Nosso compromisso é com o desenvolvimento contínuo, a
                    excelência em serviços e a geração de impacto social
                    positivo no Brasil.
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold font-Inter text-2xl text-grey-scale-off-white text-left w-full">
                    Valores
                  </h2>
                  <span className="font-normal   font-DMSans text-grey-scale-off-white text-lg">
                    <ul className="list-disc list-inside">
                      <li>
                        Inovação: Buscamos constantemente novas maneiras de
                        resolver problemas e melhorar processos. Excelência:
                        Comprometemo-nos a entregar serviços e cursos de alta
                        qualidade.
                      </li>
                      <li>
                        Impacto Social: Trabalhamos para criar oportunidades de
                        desenvolvimento e transformação na sociedade brasileira.
                      </li>
                      <li>
                        Transparência: Valorizamos a honestidade e a clareza em
                        todas as nossas interações.
                      </li>
                      <li>
                        Colaboração: Acreditamos no poder do trabalho em equipe
                        para alcançar resultados extraordinários.
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div className="w-full h-full absolute z-10 bg-vignette" />
        <div className="absolute inset-0 z-0 overflow-hidden rounded-full max-h-[90vh]">
          <div className="grid place-items-start grid-cols-4 sm:grid-cols-6 lg:grid-cols-[repeat(13,minmax(0,1fr))] lg:grid-rows-9">
            {Array.from({ length: 117 }).map((_, i) => (
              <div
                key={i}
                className="h-full w-full aspect-square border-[0.6px] border-t-0 border-l-0 border-indigo-700/45 bg-transparent"
              ></div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col  w-[90%] gap-20 ">
        <div className="w-full">
          <div className=" flex flex-row items-start justify-start gap-2.5">
            <p className="bg-secondary-purple-heart h-10 w-2.5 trace" />
            <h2 className="font-Inter font-bold text-3xl text-grey-scale-off-white">
              Nosso Time
            </h2>
          </div>
          <span className="font-normal   font-DMSans text-grey-scale-off-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div className="grid grid-cols-3 place-items-center">
          <div className="flex flex-col items-center justify-center w-fit gap-5">
            <div className="relative w-full aspect-square mr-auto pointer-events-none select-none">
              <Image
                src="/images/UserImage.svg"
                fill
                sizes="(max-width: 51px) 5vw"
                alt="Logo da Empresa Data Mastery"
                unoptimized
              />
            </div>
            <span className="flex flex-col justify-center items-center gap-2.5">
              <h3 className="font-Inter font-bold text-2xl text-grey-scale-off-white">
                Nome Sobrenome
              </h3>
              <p className="font-DMSans font-normal text-lg text-grey-scale-off-white">
                Cargo
              </p>
            </span>
            <div className="flex flex-rows justify-evenly w-full">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
              >
                <I.FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
              >
                <I.FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-fit gap-5">
            <div className="relative w-full aspect-square mr-auto pointer-events-none select-none">
              <Image
                src="/images/UserImage.svg"
                fill
                sizes="(max-width: 51px) 5vw"
                alt="Logo da Empresa Data Mastery"
                unoptimized
              />
            </div>
            <span className="flex flex-col justify-center items-center gap-2.5">
              <h3 className="font-Inter font-bold text-2xl text-grey-scale-off-white">
                Nome Sobrenome
              </h3>
              <p className="font-DMSans font-normal text-lg text-grey-scale-off-white">
                Cargo
              </p>
            </span>
            <div className="flex flex-rows justify-evenly w-full">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
              >
                <I.FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
              >
                <I.FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-fit gap-5">
            <div className="relative w-full aspect-square mr-auto pointer-events-none select-none">
              <Image
                src="/images/UserImage.svg"
                fill
                sizes="(max-width: 51px) 5vw"
                alt="Logo da Empresa Data Mastery"
                unoptimized
              />
            </div>
            <span className="flex flex-col justify-center items-center gap-2.5">
              <h3 className="font-Inter font-bold text-2xl text-grey-scale-off-white">
                Nome Sobrenome
              </h3>
              <p className="font-DMSans font-normal text-lg text-grey-scale-off-white">
                Cargo
              </p>
            </span>
            <div className="flex flex-rows justify-evenly w-full">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
              >
                <I.FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-scale-off-white hover:text-secondary-purple-heart transition-colors"
              >
                <I.FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
