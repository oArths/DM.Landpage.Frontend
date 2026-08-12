import Contact from "../templates/contact";
import ButtonPrimary from "../components/ButtonPrimary";
import SectionTitle from "../components/SectionTitle";
import BenefitCard from "../components/BenefitCard";

export default function EducationPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen mb-32 bg-ui-colors-background">
      <section className="flex flex-col w-full mb-20">
        <div className="flex justify-center w-full h-fit p-24 bg-[url('/images/educationBackground.svg')] bg-cover">
          <span className="flex flex-col items-start justify-center w-[90%] gap-7">
            <h1 className="font-Lexend text-grey-scale-off-white text-5xl">
              <strong>Educacional:</strong> Sob Encomenda para Crescimento
              <strong>Empresarial </strong>e<strong> Pessoal</strong>
            </h1>

            <ButtonPrimary
              href="/education#EducationContact"
              className="font-medium text-grey-scale-off-white h-10 px-11 py-1.5"
            >
              Agende uma reunião
            </ButtonPrimary>
          </span>
        </div>
      </section>

      <section className="flex flex-col w-[90%]">
        <div className="flex flex-col w-full gap-12">
          <SectionTitle title="Treinamentos Personalizados para Empresas e Profissionais" />
          <span className="font-DMSans text-grey-scale-off-white text-2xl font-normal">
            Oferecemos treinamentos especializados para capacitar equipes e
            indivíduos nas áreas de Business Intelligence, Data Engineering &
            Data Science, Automação Robótica (RPA), Python, Excel, Power BI e
            muito mais. Nossos programas são adaptados às necessidades
            específicas de cada cliente, garantindo uma aprendizagem eficaz e
            aplicada à realidade do mercado.
          </span>
        </div>
      </section>
      <div className="bg-grey-scale-onyx w-[60%] h-px my-40" />
      <section className="flex flex-col w-[90%] gap-24">
        <SectionTitle title="Benefícios dos nossos treinamentos" />
        <div className="grid grid-cols-2 gap-16">
          <BenefitCard
            icon="/images/iconUp.svg"
            alt="Icone de Upgrade"
            title="Desempenho Aprimorado"
          >
            Ao capacitar seus colaboradores em ferramentas como Power BI e IA,
            sua equipe estará pronta para otimizar processos, aumentar a
            eficiência e gerar insights valiosos.
          </BenefitCard>
          <BenefitCard
            icon="/images/Union.svg"
            alt="Icone de Upgrade"
            title="Retenção de talentos"
          >
            Investir em educação corporativa é uma estratégia eficaz para reter
            e engajar colaboradores, criando um ambiente de constante evolução e
            aprendizado.
          </BenefitCard>
          <BenefitCard
            icon="/images/bi_person-plus-fill.svg"
            alt="Icone de Upgrade"
            title="Integração e Motivação"
          >
            O treinamento fortalece a integração das equipes e promove um
            ambiente colaborativo, gerando um impacto positivo no clima
            organizacional.
          </BenefitCard>
          <BenefitCard
            icon="/images/bx_bxs-time-five.svg"
            alt="Icone de Upgrade"
            title="Aplicação Imediata"
          >
            Focamos na transferência de conhecimento que pode ser imediatamente
            aplicada ao seu contexto de trabalho, garantindo resultados práticos
            e mensuráveis.
          </BenefitCard>
        </div>
      </section>
      <div className="bg-grey-scale-onyx w-[60%] h-px my-40" />
      <section className="flex flex-col w-[90%] gap-24">
        <SectionTitle title="O que oferecemos?" />
        <div className="flex flex-col gap-10">
          <span className="flex flex-col items-start justify-center gap-3.5">
            <h2 className="font-Inter text-grey-scale-off-white text-2xl font-bold">
              Pessoa Física:
            </h2>
            <p className="font-DMSans text-grey-scale-off-white text-2xl font-normal">
              Para profissionais que desejam aprimorar suas habilidades e
              expandir seu conhecimento em tecnologias de ponta, nossos cursos
              são a oportunidade ideal. Desenvolva competências essenciais para
              se destacar no mercado de trabalho e impulsionar sua carreira com
              nossos treinamentos em ferramentas como Power BI, Python, RPA,
              entre outros.
            </p>
          </span>
          <span className="flex flex-col items-start justify-center gap-3.5">
            <h2 className="font-Inter text-grey-scale-off-white text-2xl font-bold">
              Pessoa Jurídica:
            </h2>
            <p className="font-DMSans text-grey-scale-off-white text-2xl font-normal">
              Oferecemos treinamentos corporativos sob medida para empresas que
              buscam capacitar suas equipes em áreas-chave de tecnologia e
              inovação. Nossos programas de treinamento são projetados para
              melhorar a eficiência, otimizar processos e gerar resultados
              tangíveis, alinhados aos objetivos estratégicos de sua organização.
              Com uma abordagem prática e focada, garantimos que os colaboradores
              adquiram as habilidades necessárias para transformar dados em
              insights e automação em produtividade.
            </p>
          </span>
        </div>
      </section>
      <div className="bg-grey-scale-onyx w-[60%] h-px my-40" />
      <Contact id="EducationContact" />
    </main>
  );
}
