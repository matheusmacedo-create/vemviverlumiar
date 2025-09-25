import React from 'react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const companyName = "mm importados";
  const companyCNPJ = "30.444.611/0001-90";
  const responsible = "Matheus Macedo";
  const generalEmail = "contato@vemviverlumiar.com";
  const whatsapp = "(48) 99803-2197";
  const businessHours = "Segunda a sexta, 9h às 18h";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here, e.g., send to an API
    alert('Mensagem enviada! Em breve entraremos em contato.');
  };

  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md prose max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-primary">Contato</h1>
        <p className="mb-4 text-lg"><strong>Última atualização: 20 de agosto de 2024</strong></p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Central de Atendimento</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li><strong>E-mail geral</strong>: <a href={`mailto:${generalEmail}`} className="text-blue-600 hover:underline">{generalEmail}</a></li>
          <li><strong>WhatsApp</strong>: {whatsapp}</li>
          <li><strong>Responsável</strong>: {responsible}</li>
          <li><strong>Horário</strong>: {businessHours}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Departamentos específicos</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li><strong>Suporte técnico</strong>: <a href={`mailto:${generalEmail}`} className="text-blue-600 hover:underline">{generalEmail}</a></li>
          <li><strong>Parcerias</strong>: <a href={`mailto:${generalEmail}`} className="text-blue-600 hover:underline">{generalEmail}</a></li>
          <li><strong>Imprensa</strong>: <a href={`mailto:${generalEmail}`} className="text-blue-600 hover:underline">{generalEmail}</a></li>
          <li><strong>Privacidade</strong>: <a href={`mailto:${generalEmail}`} className="text-blue-600 hover:underline">{generalEmail}</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Endereço físico</h2>
        <p className="mb-2 text-lg">
          <strong>{companyName}</strong> (Vem Viver Lumiar)
        </p>
        <p className="mb-2 text-lg">
          CNPJ: {companyCNPJ}
        </p>
        <p className="mb-2 text-lg">
          Responsável: {responsible}
        </p>
        <p className="mb-4 text-lg">
          Contato: {whatsapp}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Formulário de contato</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" type="text" placeholder="Seu nome" required />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="seu@email.com" required />
          </div>
          <div>
            <Label htmlFor="subject">Assunto</Label>
            <Input id="subject" type="text" placeholder="Assunto da mensagem" required />
          </div>
          <div>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" placeholder="Sua mensagem..." rows={5} required />
          </div>
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">Enviar Mensagem</Button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;