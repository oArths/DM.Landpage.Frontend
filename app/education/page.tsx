import Image from "next/image";
import Contact from "../templates/contact";

export default function EducationPage() {
  return (
    <main className="flex flex-col w-full items-center justify-center bg-ui-colors-background min-h-screen mb-32">
      <section className="flex flex-col w-[full] mb-20 ">
        <div className="flex justify-center w-full p-24 h-fit bg-[url('/images/educationBackground.svg')] bg-cover">
          <span className="flex flex-col items-start justify-center gap-7 w-[90%]">
            <h1 className="font-Lexend  text-grey-scale-off-white text-5xl ">
              <strong>Educacional:</strong> Sob Encomenda para Crescimento
              <strong>Empresarial </strong>e<strong> Pessoal</strong>
            </h1>

            <button className="font-DMSans text-grey-scale-off-white font-medium text-base h-10 cursor-pointer px-11 py-1.5 bg-secondary-purple-heart rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-heart-500">
              Agende uma reunião
            </button>
          </span>
        </div>
      </section>

      <section className="flex flex-col w-[90%]">
        <div className="w-full flex flex-col gap-12">
          <div className=" flex flex-row items-start justify-start gap-2.5">
            <p className="bg-secondary-purple-heart h-10 w-2.5 trace" />
            <h2 className="font-Inter font-bold text-3xl text-grey-scale-off-white">
              Treinamentos Personalizados para Empresas e Profissionais
            </h2>
          </div>
          <span className="font-normal   font-DMSans text-grey-scale-off-white text-2xl">
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
        <div className=" flex flex-row items-start justify-start gap-2.5">
          <p className="bg-secondary-purple-heart h-10 w-2.5 trace" />
          <h2 className="font-Inter font-bold text-3xl text-grey-scale-off-white">
            Benefícios dos nossos treinamentos
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-row p-7 gap-7 items-center justify-center w-fit h-full border border-grey-scale-onyx/49 rounded-3xl">
            <div className="relative w-[90px] h-[90px] min-w-[20%]">
              <Image
                src="/images/iconUp.svg"
                fill
                sizes="(max-width: 51px) 5vw"
                alt="Icone de Upgrade"
              />
            </div>
            <span className="flex flex-col gap-4">
              <h2 className="font-Inter text-2xl text-grey-scale-off-white font-bold">
                Desempenho Aprimorado
              </h2>
              <p className="font-DMSans text-base text-grey-scale-off-white font-normal">
                Ao capacitar seus colaboradores em ferramentas como Power BI e
                IA, sua equipe estará pronta para otimizar processos, aumentar a
                eficiência e gerar insights valiosos.
              </p>
            </span>
          </div>
          <div className="flex flex-row p-7 gap-7 items-center justify-center w-fit h-full border border-grey-scale-onyx/49 rounded-3xl">
            <div className="relative w-[90px] h-[90px] min-w-[20%]">
              <Image
                src="/images/Union.svg"
                fill
                sizes="(max-width: 51px) 5vw"
                alt="Icone de Upgrade"
              />
            </div>
            <span className="flex flex-col gap-4">
              <h2 className="font-Inter text-2xl text-grey-scale-off-white font-bold">
                Retenção de talentos
              </h2>
              <p className="font-DMSans text-base text-grey-scale-off-white font-normal">
                Investir em educação corporativa é uma estratégia eficaz para
                reter e engajar colaboradores, criando um ambiente de constante
                evolução e aprendizado.
              </p>
            </span>
          </div>
          <div className="flex flex-row p-7 gap-7 items-center justify-center w-fit h-full border border-grey-scale-onyx/49 rounded-3xl">
            <div className="relative w-[90px] h-[90px] min-w-[20%]">
              <Image
                src="/images/bi_person-plus-fill.svg"
                fill
                sizes="(max-width: 51px) 5vw"
                alt="Icone de Upgrade"
              />
            </div>
            <span className="flex flex-col gap-4">
              <h2 className="font-Inter text-2xl text-grey-scale-off-white font-bold">
                Integração e Motivação
              </h2>
              <p className="font-DMSans text-base text-grey-scale-off-white font-normal">
                O treinamento fortalece a integração das equipes e promove um
                ambiente colaborativo, gerando um impacto positivo no clima
                organizacional.
              </p>
            </span>
          </div>
          <div className="flex flex-row p-7 gap-7 items-center justify-center w-fit h-full border border-grey-scale-onyx/49 rounded-3xl">
            <div className="relative w-[90px] h-[90px] min-w-[20%]">
              <Image
                src="/images/bx_bxs-time-five.svg"
                fill
                sizes="(max-width: 51px) 5vw"
                alt="Icone de Upgrade"
              />
            </div>
            <span className="flex flex-col gap-4">
              <h2 className="font-Inter text-2xl text-grey-scale-off-white font-bold">
                Aplicação Imediata
              </h2>
              <p className="font-DMSans text-base text-grey-scale-off-white font-normal">
                Focamos na transferência de conhecimento que pode ser
                imediatamente aplicada ao seu contexto de trabalho, garantindo
                resultados práticos e mensuráveis.
              </p>
            </span>
          </div>
        </div>
      </section>
      <div className="bg-grey-scale-onyx w-[60%] h-px my-40" />
      <section className="flex flex-col w-[90%] gap-24">
        <div className=" flex flex-row items-start justify-start gap-2.5">
          <p className="bg-secondary-purple-heart h-10 w-2.5 trace" />
          <h2 className="font-Inter font-bold text-3xl text-grey-scale-off-white">
            O que oferecemos?
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          <span className="flex flex-col items-start justify-center gap-3.5">
            <h2 className="font-Inter font-bold text-2xl text-grey-scale-off-white">
              Pessoa Física:
            </h2>
            <p className="font-DMSans font-normal text-2xl text-grey-scale-off-white">
              Para profissionais que desejam aprimorar suas habilidades e
              expandir seu conhecimento em tecnologias de ponta, nossos cursos
              são a oportunidade ideal. Desenvolva competências essenciais para
              se destacar no mercado de trabalho e impulsionar sua carreira com
              nossos treinamentos em ferramentas como Power BI, Python, RPA,
              entre outros.
            </p>
          </span>
          <span className="flex flex-col items-start justify-center gap-3.5">
            <h2 className="font-Inter font-bold text-2xl text-grey-scale-off-white">
              Pessoa Jurídica:
            </h2>
            <p className="font-DMSans font-normal text-2xl text-grey-scale-off-white">
              Oferecemos treinamentos corporativos sob medida para empresas que
              buscam capacitar suas equipes em áreas-chave de tecnologia e
              inovação. Nossos programas de treinamento são projetados para
              melhorar a eficiência, otimizar processos e gerar resultados
              tangíveis, alinhados aos objetivos estratégicos de sua
              organização. Com uma abordagem prática e focada, garantimos que os
              colaboradores adquiram as habilidades necessárias para transformar
              dados em insights e automação em produtividade.
            </p>
          </span>
        </div>
      </section>
      <div className="bg-grey-scale-onyx w-[60%] h-px my-40" />
      <Contact id="EducationContact" />
    </main>
  );
}
