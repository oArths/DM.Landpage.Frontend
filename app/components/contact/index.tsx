"use client";
import { useState } from "react";
import Dropdown from "../dropdown";

const MOTIVO_OPTIONS = [
  "Marcar Reunião",
  "Contratar Serviços",
  "Comprar Cursos",
  "Outro",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    motivoContato: "",
    telefone: "",
    nomeSocial: "",
    mensagem: "",
  });
  const [messageCount, setMessageCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section className="relative bg-ui-colors-background py-20 px-6">
      <div className="max-w-[1268px] mx-auto">
        <h2 className="font-Inter font-light text-[18px] text-grey-scale-text tracking-widest mb-6">
          Alguma dúvida? Descubra como nossas soluções podem direcionar sua empresa ao sucesso. Entre e contato para conhecer o poder da Ciência de Dados e do Power BI.
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="font-Inter font-normal text-[18px] text-grey-scale-off-white mb-2 block">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ex. exemplo@email.com"
                className="w-full bg-transparent border-b border-purple-heart-700 py-3 text-grey-scale-off-white placeholder:text-grey-scale-dim-gray font-DMSans text-base focus:outline-none focus:border-purple-heart-500"
              />
            </div>
            <div>
              <label htmlFor="motivoContato" className="font-Inter font-normal text-[18px] text-grey-scale-off-white mb-2 block">
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
            <div>
              <label htmlFor="telefone" className="font-Inter font-normal text-[18px] text-grey-scale-off-white mb-2 block">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder="(11) 99999-9999"
                className="w-full bg-transparent border-b border-purple-heart-700 py-3 text-grey-scale-off-white placeholder:text-grey-scale-dim-gray font-DMSans text-base focus:outline-none focus:border-purple-heart-500"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label htmlFor="nomeSocial" className="font-Inter font-normal text-[18px] text-grey-scale-off-white mb-2 block">
                Nome Social
              </label>
              <input
                type="text"
                id="nomeSocial"
                name="nomeSocial"
                value={formData.nomeSocial}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-purple-heart-700 py-3 text-grey-scale-off-white placeholder:text-grey-scale-dim-gray font-DMSans text-base focus:outline-none focus:border-purple-heart-500"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="font-Inter font-normal text-[18px] text-grey-scale-off-white mb-2 block">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-transparent border-b border-purple-heart-700 py-3 text-grey-scale-off-white placeholder:text-grey-scale-dim-gray font-DMSans text-base focus:outline-none focus:border-purple-heart-500 resize-none"
                placeholder="Sua mensagem..."
              />
              <p className="font-DMSans text-sm text-grey-scale-dim-gray text-right mt-2">
                {messageCount}/100
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-end">
            <button
              type="submit"
              className="relative flex items-center gap-3 bg-ui-colors-background border border-purple-heart-700 text-white font-semibold font-DMSans text-base py-3 px-11 rounded-lg hover:border-purple-heart-500 hover:bg-purple-heart-900/30 transition-colors"
            >
              <span className="w-2.5 h-2.5 bg-purple-heart-700 rounded-full" />
              Entre em Contato
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}