import React from 'react';
import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md prose max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-primary">FAQ - Perguntas Frequentes</h1>
        <p className="mb-4 text-lg"><strong>Última atualização: 20 de agosto de 2024</strong></p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Sobre a plataforma</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">O que é o Vem Viver Lumiar?</AccordionTrigger>
            <AccordionContent className="text-base">
              Uma plataforma que conecta você aos melhores locais e experiências autênticas em Lumiar, Nova Friburgo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">O serviço é gratuito?</AccordionTrigger>
            <AccordionContent className="text-base">
              Sim, o acesso básico é totalmente gratuito. Algumas funcionalidades premium podem ter custo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">Preciso fazer cadastro?</AccordionTrigger>
            <AccordionContent className="text-base">
              Para funcionalidades básicas, não. Para salvar favoritos, avaliar e receber notificações personalizadas, sim.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Sobre o app</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium">Tem app para celular?</AccordionTrigger>
            <AccordionContent className="text-base">
              Sim, disponível para iOS e Android. Também funciona como site responsivo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium">Posso usar offline?</AccordionTrigger>
            <AccordionContent className="text-base">
              Sim, você pode baixar mapas e informações essenciais para usar sem internet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-medium">Como ativo as notificações?</AccordionTrigger>
            <AccordionContent className="text-base">
              No app, vá em Configurações &gt; Notificações e escolha suas preferências.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Sobre os locais</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-medium">Vocês verificam as informações?</AccordionTrigger>
            <AccordionContent className="text-base">
              Sim, nossa equipe verifica pessoalmente todos os locais antes de incluir na plataforma.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg font-medium">Posso sugerir um local?</AccordionTrigger>
            <AccordionContent className="text-base">
              Claro! Use o botão "Sugerir Local" ou entre em contato conosco.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-lg font-medium">Como reportar informação incorreta?</AccordionTrigger>
            <AccordionContent className="text-base">
              Use o botão "Reportar" na página do local ou nos envie um e-mail.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Sobre avaliações</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-10">
            <AccordionTrigger className="text-lg font-medium">Posso avaliar locais?</AccordionTrigger>
            <AccordionContent className="text-base">
              Sim, após criar uma conta e fazer check-in no local.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger className="text-lg font-medium">Vocês moderam avaliações?</AccordionTrigger>
            <AccordionContent className="text-base">
              Sim, removemos avaliações falsas, ofensivas ou que violem nossas diretrizes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
};

export default FAQ;