
import Image from "next/image";

const servicesPadDetails = [
    {
      icon: <Image src='/img/pad/people.png' alt='Marca com Identidade Única' />,
      title: 'Marca com Identidade Única',
      description:
        'Desenvolvemos a identidade autêntica da sua marca, contando sua história de forma única.'
    },
    {
        icon: "/img/pad/audiovisual.png",
      title: 'Experiências Memoráveis para Clientes',
      description:
        'Criamos interações marcantes que se tornam momentos inesquecíveis para seus clientes.'
    },
    {
        icon: "/img/pad/people.png",
      title: 'Estratégias Flexíveis e Adaptáveis',
      description:
        'Desenvolvemos estratégias ágeis que se ajustam ao crescimento e mudanças do seu negócio.'
    },
];
  
  export const getPadServiceData = () => servicesPadDetails;
  