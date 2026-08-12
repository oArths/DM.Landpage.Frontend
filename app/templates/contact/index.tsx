"use client";
import { useState } from "react";
import Field from "../../components/Field";
import Dropdown from "../../components/dropdown";
import ButtonPrimary from "../../components/ButtonPrimary";

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
    <section id={id} className="relative w-[90%] bg-ui-colors-background">
      <div className="flex flex-row items-start justify-start gap-2.5">
        <p className="bg-secondary-purple-heart h-10 w-2.5 trace" />
        <h2 className="font-Inter text-grey-scale-off-white text-3xl font-bold">
          Entre em Contato
        </h2>
      </div>
      <h2 className="font-Inter text-grey-scale-text tracking-widest mt-3.5 ml-6 mb-24 text-lg font-light">
        Alguma dúvida? Descubra como nossas soluções podem direcionar sua
        empresa ao sucesso. Entre e contato para conhecer o poder da Ciência de
        Dados e do Power BI.
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-12">
        <div className="flex flex-col gap-12">
          <div className="flex flex-row items-center justify-between gap-24">
            <Field
              className="w-1/2"
              label="Nome Social"
              id="nomeSocial"
              name="nomeSocial"
              placeholder="ex. João Silva"
              value={formData.nomeSocial}
              onChange={handleInputChange}
            />
            <Field
              className="w-1/2"
              label="Telefone"
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.telefone}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row items-center justify-between gap-24">
            <Field
              className="w-1/2"
              label="E-mail"
              id="email"
              name="email"
              type="email"
              placeholder="ex. exemplo@email.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            <div className="w-1/2">
              <label
                htmlFor="motivoContato"
                className="font-Inter text-grey-scale-off-white text-lg font-normal mb-2 block"
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
            <Field
              textarea
              label="Mensagem"
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              rows={6}
              placeholder="Sua mensagem..."
            />
            <p className="font-DMSans text-grey-scale-dim-gray text-right mt-2 text-sm">
              {messageCount}/100
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <ButtonPrimary
            type="submit"
            className="gap-3 py-3 w-1/3 font-semibold text-grey-scale-off-white hover:border-purple-heart-500 hover:bg-purple-heart-600/90 transition-colors"
          >
            Enviar
          </ButtonPrimary>
        </div>
      </form>
    </section>
  );
}
