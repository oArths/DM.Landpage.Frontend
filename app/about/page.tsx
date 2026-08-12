import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import GridBackground from "../components/GridBackground";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen mb-32 bg-ui-colors-background">
      <section className="relative flex items-center justify-center w-full min-h-[90dvh] h-fit">
        <span className="relative z-20 flex flex-col items-center justify-center w-full py-[10%] gap-10">
          <span className="flex flex-col items-center justify-center w-fit gap-[17px]">
            <h1 className="font-Lexend text-grey-scale-off-white text-7xl font-bold">
              Conheça a Data Mastery
            </h1>
            <h2 className="font-Inter text-grey-scale-off-white text-2xl text-center font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dof
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </h2>
          </span>
          <div className="flex flex-col w-[90%] mt-20 gap-12">
            <SectionTitle title="Sobre Nós" />
            <div className="flex justify-between gap-[5%]">
              <div className="flex flex-col flex-1 gap-12">
                <div className="flex flex-col gap-4">
                  <h2 className="font-Inter text-grey-scale-off-white w-full text-2xl text-left font-bold">
                    ㅤㅤ
                  </h2>
                  <span className="font-DMSans text-grey-scale-off-white text-lg font-normal">
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
                  <h2 className="font-Inter text-grey-scale-off-white w-full text-2xl text-left font-bold">
                    Visão
                  </h2>
                  <span className="font-DMSans text-grey-scale-off-white text-lg font-normal">
                    Ser referência na transformação digital, capacitando
                    empresas e indivíduos a atingirem seu potencial máximo
                    através do uso inteligente de dados e tecnologia.
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-12">
                <div className="flex flex-col gap-4">
                  <h2 className="font-Inter text-grey-scale-off-white w-full text-2xl text-left font-bold">
                    Missão
                  </h2>
                  <span className="font-DMSans text-grey-scale-off-white text-lg font-normal">
                    Capacitar empresas e profissionais a tomar decisões baseadas
                    em dados, promovendo a inovação e a eficiência através de
                    soluções tecnológicas avançadas e educação de qualidade.
                    Nosso compromisso é com o desenvolvimento contínuo, a
                    excelência em serviços e a geração de impacto social
                    positivo no Brasil.
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-Inter text-grey-scale-off-white w-full text-2xl text-left font-bold">
                    Valores
                  </h2>
                  <span className="font-DMSans text-grey-scale-off-white text-lg font-normal">
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
        <div className="bg-vignette absolute z-10 w-full h-full" />
        <GridBackground className="absolute inset-0 z-0 max-h-[90vh]" />
      </section>
      <section className="flex flex-col w-[90%] gap-20">
        <div className="w-full">
          <SectionTitle title="Nosso Time" />
          <span className="font-DMSans text-grey-scale-off-white text-lg font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div className="grid grid-cols-3 place-items-center">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </section>
    </main>
  );
}
