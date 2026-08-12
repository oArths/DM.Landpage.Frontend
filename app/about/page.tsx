import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import GridBackground from "../components/GridBackground";
import JsonLd from "../components/JsonLd";
import { siteConfig } from "../config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a Data Mastery, empresa de serviços educacionais e consultorias especializada em Business Intelligence, Data Engineering, Data Science e Automação Robótica.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Sobre Nós | Data Mastery",
    description:
      "Consultoria educacional especializada em Business Intelligence, Data Engineering, Data Science e Automação Robótica.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sobre Nós",
      item: `${siteConfig.url}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen mb-32 bg-ui-colors-background">
      <JsonLd data={breadcrumbSchema} />
      <section className="relative flex items-center justify-center w-full min-h-[90dvh] h-fit">
        <span className="relative z-20 flex flex-col items-center justify-center w-full py-[10%] gap-10">
          <span className="flex flex-col items-center justify-center w-fit gap-[17px]">
            <h1 className="font-Lexend text-grey-scale-off-white text-7xl font-bold">
              Conheça a Data Mastery
            </h1>
            <h2 className="font-Inter text-grey-scale-off-white text-2xl text-center font-light">
              Serviços educacionais e consultorias em Business Intelligence,
              Data Engineering, Data Science e Automação Robótica. Capacitamos
              empresas e profissionais para a transformação digital.
            </h2>
          </span>
          <div className="flex flex-col w-[90%] mt-20 gap-12">
            <SectionTitle title="Sobre Nós" />
            <div className="flex justify-between gap-[5%]">
              <div className="flex flex-col flex-1 gap-12">
                <div className="flex flex-col gap-4">
                  <h2 className="font-Inter text-grey-scale-off-white w-full text-2xl text-left font-bold">
                    Nossa História
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
            Somos um time de consultores e educadores especializados em dados,
            unindo experiência prática em projetos reais e didática voltada a
            resultados. Atuamos nas frentes de Business Intelligence, Data
            Engineering e Data Science para impulsionar a transformação digital
            de empresas e a evolução de carreiras.
          </span>
        </div>
        <div className="grid grid-cols-3 place-items-center">
          <TeamCard
            name="Business Intelligence"
            role="Power BI, Dashboards e KPIs"
            image="/images/iconUp.svg"
            alt="Ícone de Business Intelligence"
          />
          <TeamCard
            name="Data Engineering"
            role="Pipelines, Python e Automação"
            image="/images/Union.svg"
            alt="Ícone de Data Engineering"
          />
          <TeamCard
            name="Data Science"
            role="Machine Learning e Inteligência Artificial"
            image="/images/bi_person-plus-fill.svg"
            alt="Ícone de Data Science"
          />
        </div>
      </section>
    </main>
  );
}
