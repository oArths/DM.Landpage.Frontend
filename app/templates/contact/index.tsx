"use client";
import { useState } from "react";
import Dropdown from "../../components/dropdown";

const MOTIVO_OPTIONS = [
  "Marcar Reunião",
  "Contratar Serviços",
  "Comprar Cursos",
  "Outro",
];

export default function Contact({ id }: { id: string }) {
  const [formData, setFormData] = useState({
    email: "",
    motivoContato: "",
    telefone: "",
    nomeSocial: "",
    mensagem: "",
  });
  const [messageCount, setMessageCount] = useState(0);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "mensagem") {
      setMessageCount(value.length);
    }
  };

  const handleMotivoChange = (option: string) => {
    setFormData((prev) => ({ ...prev, motivoContato: option }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id={id} className="relative bg-ui-colors-background w-[90%]">
      <div className=" flex flex-row items-start justify-start gap-2.5">
        <p className="bg-secondary-purple-heart h-10 w-2.5 trace" />
        <h2 className="font-Inter font-bold text-3xl text-grey-scale-off-white ">
          Entre em Contato
        </h2>
      </div>
      <h2 className="font-Inter font-light text-lg text-grey-scale-text tracking-widest  mt-3.5 ml-6 mb-24">
        Alguma dúvida? Descubra como nossas soluções podem direcionar sua
        empresa ao sucesso. Entre e contato para conhecer o poder da Ciência de
        Dados e do Power BI.
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-12">
        <div className="flex flex-col gap-12">
          <div className="flex flex-row  justify-between items-center gap-24">
            <div className="w-1/2">
              <label
                htmlFor="nomeSocial"
                className="font-Inter font-normal text-lg text-grey-scale-off-white mb-2 block"
              >
                Nome Social
              </label>
              <input
                type="text"
                id="nomeSocial"
                name="nomeSocial"
                placeholder="ex. João Silva "
                value={formData.nomeSocial}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-grey-scale-onyx  py-2 px-5 rounded-sm text-grey-scale-off-white placeholder:text-grey-scale-dim-gray font-DMSans text-base focus:outline-none focus:border-purple-heart-500"
              />
            </div>

            <div className="w-1/2">
              <label
                htmlFor="telefone"
                className="font-Inter font-normal text-lg text-grey-scale-off-white mb-2 block"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder="(11) 99999-9999"
                className="w-full bg-transparent border border-grey-scale-onyx  py-2 px-5 rounded-sm text-grey-scale-off-white placeholder:text-grey-scale-dim-gray font-DMSans text-base focus:outline-none focus:border-purple-heart-500"
              />
            </div>
          </div>
          <div className="flex flex-row  justify-between items-center gap-24">
            <div className="w-1/2">
              <label
                htmlFor="email"
                className="font-Inter font-normal text-lg text-grey-scale-off-white mb-2 block"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ex. exemplo@email.com"
                className="w-full bg-transparent border border-grey-scale-onyx  py-2 px-5 rounded-sm text-grey-scale-off-white placeholder:text-grey-scale-dim-gray font-DMSans text-base focus:outline-none focus:border-purple-heart-500"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="motivoContato"
                className="font-Inter font-normal text-lg text-grey-scale-off-white mb-2 block"
              >
                Motivo do Contato
              </label>
              <Dropdown
                options={MOTIVO_OPTIONS}
                selectedOption={formData.motivoContato}
                onOptionSelect={handleMotivoChange}
                placeholder="Selecione"
                filterKey="motivoContato"
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="mensagem"
              className="font-Inter font-normal text-[18px] text-grey-scale-off-white mb-2 block"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              rows={6}
              className="w-full bg-transparent border border-grey-scale-onyx  py-2 px-5 pb-10 h-[280px] rounded-sm text-grey-scale-off-white placeholder:text-grey-scale-dim-gray font-DMSans text-base focus:outline-none focus:border-purple-heart-500 resize-none"
              placeholder="Sua mensagem..."
            />
            <p className="font-DMSans text-sm text-grey-scale-dim-gray text-right mt-2">
              {messageCount}/100
            </p>
          </div>
        </div>
        <div className=" flex justify-start">
          <button
            type="submit"
              className=" flex items-center justify-center gap-3  bg-secondary-purple-heart text-white font-semibold font-DMSans text-base py-3 w-1/3 rounded-sm hover:border-purple-heart-500 hover:bg-purple-heart-900/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-heart-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
