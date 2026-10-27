import Contact from "../templates/contact";
import InfoCard from "../components/infoCard";
import JsonLd from "../components/JsonLd";
import { siteConfig } from "../config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educacional - Treinamentos em Dados, BI e Automação",
  description:
    "Treinamentos personalizados em Business Intelligence, Power BI, Data Engineering, Data Science, Python, Excel e RPA. Cursos sob medida para empresas e profissionais.",
  alternates: {
    canonical: "/education",
  },
  openGraph: {
    title: "Educacional - Treinamentos em Dados, BI e Automação | Data Mastery",
    description:
      "Treinamentos personalizados em Business Intelligence, Power BI, Data Engineering, Data Science, Python, Excel e RPA.",
    url: `${siteConfig.url}/education`,
    type: "website",
  },
};

const coursesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
          name: "Educacional",
          item: `${siteConfig.url}/education`,
        },
      ],
    },
    ...[
      "Business Intelligence e Power BI",
      "Data Engineering e Python",
      "Data Science e Machine Learning",
      "Automação Robótica (RPA)",
    ].map((courseName) => ({
      "@type": "Course",
      name: courseName,
      description: `Treinamento personalizado em ${courseName} oferecido pela ${siteConfig.name}, adaptado às necessidades de empresas e profissionais.`,
      inLanguage: "pt-BR",
      provider: {
        "@id": `${siteConfig.url}/#organization`,
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "onsite",
        courseWorkload: "PT16H",
        inLanguage: "pt-BR",
      },
    })),
  ],
};

export default function ConsultancyPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen mb-32 bg-ui-colors-background">
      <JsonLd data={coursesSchema} />
      <section className="flex flex-col w-full mb-20">
        <div className="flex justify-center w-full h-fit p-24 bg-[url('/images/hero.svg')] bg-cover">
          <span className="flex flex-col items-start justify-center w-[90%] gap-7">
            <h1 className="font-Lexend text-grey-scale-off-white text-5xl">
              <strong>
                Desenvolvimento de projetos de </strong> Inteligência Artificial
              <strong> para transformar operações e decisões.</strong>

            </h1>
            <p className="text-xl text-grey-scale-off-white">
              Desenvolvemos soluções de IA para empresas que querem automatizar processos, melhorar a qualidade dos dados e acelerar decisões com inteligência artificial.
            </p>
            <span className="flex flex-row items-center justify-between gap-4">


              <button
                type="button"
                className="btn font-medium text-grey-scale-off-white h-10 px-11 py-1.5"
              >
                Agende uma reunião
              </button>
              <button
                type="button"
                className="btn btn-outline font-medium h-10 px-11 py-1.5"
              >
                Ver serviços
              </button>
            </span>
          </span>
        </div>
      </section>

      <section className="flex flex-col w-[90%]">
        <div className="flex flex-col w-full gap-12">
          <h2 className="section-title">Problemas operacionais que travam o crescimento</h2>
          <div className="grid grid-cols-2 gap-16">
            <InfoCard
              icon="/images/clock.svg"
              alt="Ícone de crescimento e desempenho"
              title="Processos manuais"
            >
              Repetição, erros, retrabalho e tempo perdido em tarefas que poderiam ser automatizadas.
            </InfoCard>
            <InfoCard
              icon="/images/database.svg"
              alt="Ícone de união e retenção de talentos"
              title="Dados dispersos"
            >
              Informações espalhadas em planilhas, sistemas e fontes, dificultando análise e decisão.
            </InfoCard>
            <InfoCard
              icon="/images/cpu.svg"
              alt="Ícone de integração de pessoas"
              title="Decisões baseadas em intuição"
            >
              Falta de previsão, alertas e recomendações claras para acelerar a tomada de decisão.
            </InfoCard>
          </div>
        </div>
      </section>
      <div className="bg-grey-scale-onyx w-[60%] h-px my-40" />
      <section className="flex flex-col w-[90%] gap-24">
        <h2 className="section-title">Desenvolvemos soluções para transformar operações</h2>
        <div className="grid grid-cols-2 gap-16">
          <InfoCard
            icon="/images/code.svg"
            alt="Ícone de crescimento e desempenho"
            title="Software customizado"
          >
            Desenvolvemos aplicações, APIs e integrações para resolver problemas específicos do seu negócio.
          </InfoCard>
          <InfoCard
            icon="/images/bot.svg"
            alt="Ícone de união e retenção de talentos"
            title="Automação de processos"
          >
            RPA, workflows e automação de tarefas para reduzir retrabalho e liberar tempo de equipe.
          </InfoCard>
          <InfoCard
            icon="/images/bar-chart-3.svg"
            alt="Ícone de integração de pessoas"
            title="Dados e analytics"
          >
            Integração de fontes, dashboards e indicadores para tornar decisões mais rápidas e precisas.
          </InfoCard>
          <InfoCard
            icon="/images/brain.svg"
            alt="Ícone de relógio e aplicação imediata"
            title="Inteligência artificial"
          >
            Modelos preditivos, classificação e recomendações para acelerar operações e melhorar resultados.
          </InfoCard>
        </div>
      </section>
      <div className="bg-grey-scale-onyx w-[60%] h-px my-40" />
      <section className="flex flex-col w-[90%] gap-24">
        <h2 className="section-title">Como trabalhamos</h2>
        <div className="grid grid-cols-2 gap-16">
          <InfoCard
            icon="/images/target.svg"
            alt="Ícone de crescimento e desempenho"
            title="Priorização por valor"
          >
            Identificamos os processos com maior impacto e começamos pelos projetos que mais vão acelerar o negócio.
          </InfoCard>
          <InfoCard
            icon="/images/settings.svg"
            alt="Ícone de união e retenção de talentos"
            title="Implementação com a equipe"
          >
            Trabalhamos ao lado da sua operação para garantir adoção, treinamento e suporte contínuo.
          </InfoCard>
          <InfoCard
            icon="/images/activity.svg"
            alt="Ícone de integração de pessoas"
            title="Monitoramento contínuo"
          >
            Acompanhamos uso, indicadores e melhoria contínua para manter a solução alinhada ao negócio.
          </InfoCard>

        </div>
      </section>

      <div className="bg-grey-scale-onyx w-[60%] h-px my-40" />
      <Contact id="EducationContact" />
    </main>
  );
}
