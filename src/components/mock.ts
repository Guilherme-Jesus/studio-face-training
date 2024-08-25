export interface TreatmentItem {
  title: string;
  description: string;
  duration?: string;
  steps?: string[];
}

export interface TreatmentCategory {
  title: string;
  items: TreatmentItem[];
  image: string;
}
export const treatments: TreatmentCategory[] = [
  {
    title: "Express",
    image: "https://picsum.photos/300/200?random=2",
    items: [
      {
        title: "Mini Facial - Hidratação Total",
        duration: "35 min",
        description:
          "Inclui 20 minutos de tratamento com tecnologia especíﬁca (Radiofrequência e EMS) e 15 minutos de massagem drenante e hidratação profunda.",
        steps: [
          "Limpeza com produtos especíﬁcos e tónico",
          "Radiofrequência aplicada",
          "EMS (eletroestimulação)",
          "Massagem relaxante/drenante",
          "Produto ﬁnal e SPF",
        ],
      },
      {
        title: "Power Lift",
        duration: "45 min",
        description:
          "Tratamento combinado com aparatologia EMS e massagem com efeito lifting, promovendo vitalidade à pele e toniﬁcação da musculatura do rosto.",
        steps: [
          "Limpeza e tónico",
          "SEM/ “Ruby – nat care”",
          "Massagem lifting",
          "Máscara anti stress/efeito frio",
          "Produto ﬁnal e SPF",
        ],
      },
      {
        title: "Revitalização Intensiva",
        duration: "45 min",
        description:
          "Tratamento focado em prevenir e tratar o fotoenvelhecimento, trazendo luminosidade, vitalidade e uniformizando o tom de pele.",
        steps: [
          "Limpeza e tónico",
          "Massagem rejuvenescedora / “Jade – nat care”",
          "Sérum e creme com Vitamina C",
          "Máscara mineral iluminadora",
          "Produto ﬁnal e SPF",
        ],
      },
      {
        title: "Rejuvenescimento Total",
        duration: "45 min",
        description:
          "Tratamento combinado com aparatologia Radiofrequência e massagem no rosto, pescoço e zona do decote. Inclui ainda massagem craniana.",
        steps: [
          "Limpeza e tónico",
          "Radiofrequência aplicada",
          "Massagem rejuvenescedora/ “Cupping facial”",
          "Sérum (concentrado ativo rosto perfeito)",
          "Produto ﬁnal e SPF",
        ],
      },
      {
        title: "Luminosidade Absoluta – CO2",
        duration: "35 min",
        description:
          "Tratamento especíﬁco com CO2 que estimula uma penetração de ativos, que atua ao nível da hidratação, nutrição e luminosidade da pele.",
        steps: [
          "Limpeza",
          "Exfoliação",
          "Sérum especíﬁco",
          "CO2",
          "Produto ﬁnal e SPF",
        ],
      },
      {
        title: "Detox Total",
        duration: "45 min",
        description:
          "Tratamento com o objetivo especíﬁco de desintoxicar e puriﬁcar. Auxiliada por uma drenagem linfática manual.",
        steps: [
          "Limpeza",
          "Exfoliação",
          "Sérum/gotas antistress urbano",
          "Drenagem linfática manual",
          "Máscara puriﬁcante",
          "Produto ﬁnal e SPF",
        ],
      },
      {
        title: "Fototerapia – LED Treatment",
        duration: "35 min",
        description:
          "Tratamento com fototerapia, que auxilia a ativação da renovação celular e rejuvenescimento da pele.",
        steps: [
          "Limpeza e tónico",
          "Sérum especíﬁco",
          "Fototerapia LED",
          "Máscara calmante",
          "Produto ﬁnal e SPF",
        ],
      },
      {
        title: "Make-up glowing",
        duration: "45 min",
        description:
          "Após o tratamento de rosto, ﬁnalize a sua experiência com uma maquilhagem natural que irá deixar a sua pele radiante.",
        steps: ["Creme hidratante e SPF oil free"],
      },
    ],
  },
  {
    title: "Gabinete",
    image: "https://picsum.photos/300/200?random=3",
    items: [
      {
        title: "Limpeza de Pele Profunda",
        description:
          "Tratamento de limpeza profunda com remoção de impurezas, excesso de oleosidade e células mortas da superfície da pele.",
        duration: "1 hora",
      },
      {
        title: "Peelings Químicos",
        description:
          "Utilização de uma nova geração de peelings químicos não invasivos, para ajudar a resolver ou minimizar patologias de pele.",
      },
      {
        title: "Hifu (high-intensity focused ultrasound)",
        description:
          "Tecnologia Hifu para promover rejuvenescimento e lifting facial não invasivo, estimulando a produção de colagénio.",
        duration: "30-50 min",
      },
      {
        title: "Fototerapia",
        description:
          "Tratamento personalizado consoante as necessidades da pele, combinando fototerapia e massagem manual.",
        duration: "35 min",
      },
      {
        title: "Hidratação Corporal",
        description:
          "Tratamento corporal que combina exfoliação, hidratação profunda da pele e massagem manual.",
        duration: "1 hora",
      },
      {
        title: "Radiofrequência",
        description:
          "Radiofrequência de rosto e/ou corpo, promovendo a melhoria da aparência da pele e estimulando a produção de colagénio.",
        duration: "30 min – 1 hora",
      },
    ],
  },
  {
    title: "Homens",
    image: "https://picsum.photos/300/200?random=5",
    items: [
      {
        title: "Tratamentos de antienvelhecimento facial personalizados",
        description:
          "Tratamentos focados nas necessidades específicas da pele masculina, combatendo sinais de envelhecimento e promovendo uma aparência rejuvenescida.",
      },
      {
        title: "Limpezas de pele profunda",
        description:
          "Limpezas profundas que removem impurezas e ajudam a manter a pele saudável e limpa.",
      },
      {
        title: "Depilação lazer indolor",
        description:
          "Depilação a laser com tecnologia avançada, garantindo um processo indolor e eficiente.",
      },
      {
        title: "Manicura",
        description:
          "Serviço de manicura dedicado aos homens, promovendo o cuidado e a saúde das mãos.",
      },
      {
        title: "Pedicura",
        description:
          "Tratamento completo de pedicura, focado no bem-estar e saúde dos pés masculinos.",
      },
      {
        title: "Massagens e tratamentos corporais",
        description:
          "Massagens relaxantes e tratamentos corporais que combatem a fadiga e promovem o bem-estar geral.",
      },
    ],
  },
  {
    title: "Premium Mãos e Pés",
    image: "https://picsum.photos/300/200?random=4",
    items: [
      {
        title: "Manicure",
        description:
          "Serviço premium de manicure utilizando os melhores produtos do mercado para um acabamento impecável.",
      },
      {
        title: "Pedicure",
        description:
          "Tratamento completo de pedicure com esfoliação, hidratação e cuidado especializado para os pés.",
      },
      {
        title: "Gelinho",
        description:
          "Manicure com aplicação de verniz gelinho, para um acabamento duradouro e brilhante.",
      },
      {
        title: "Gel",
        description:
          "Manicure com aplicação de gel, para um acabamento resistente e duradouro.",
      },
      {
        title: "Acrílico",
        description:
          "Manicure com aplicação de unhas acrílicas, para um acabamento resistente e duradouro.",
      },
      {
        title: "Tratamento de rejuvenescimento (mãos e pés)",
        description:
          "Tratamento especializado para rejuvenescimento das mãos e pés, com produtos e tecnologia de ponta.",
      },
    ],
  },
  {
    title: "Sobrancelhas e Lábios",
    image: "https://picsum.photos/300/200?random=1",
    items: [
      {
        title: "NANOBLANDING",
        description:
          "Defina as suas sobrancelhas com o Nanoblading, a técnica de desenho de microfios que proporciona um efeito natural e realista. Sobrancelhas perfeitas, fio a fio, para um olhar mais expressivo e definido.",
      },
      {
        title: "RECONSTRUÇÃO DE SOBRANCELHAS",
        description:
          "O tratamento revolucionário que estimula o crescimento natural dos pelos nas sobrancelhas. Diga adeus às falhas e olá a sobrancelhas cheias e definidas. Resultados visíveis e duradouros para um olhar impecável.",
      },
      {
        title: "DESIGN DE SOBRANCELHAS MAIS COLORAÇÃO",
        description:
          "Transforme o seu olhar com o nosso serviço de design de sobrancelhas mais coloração. Realce a beleza natural das suas sobrancelhas com precisão e cor duradoura.",
      },
      {
        title: "DESIGN DE SOBRANCELHAS",
        description:
          "Cuide das suas sobrancelhas com o nosso serviço de design. Perfeição e definição para um olhar irresistível.",
      },
      {
        title: "BROW LAMINATION",
        description:
          "Dê às suas sobrancelhas um efeito elegante e definido com o nosso Brow Lamination. Perfeição e estilo para um olhar mais expressivo.",
      },
      {
        title: "EYELINER",
        description:
          "Realce o seu olhar com a micropigmentação de eyeliner. Linhas precisas e duradouras para um efeito sofisticado e impecável todos os dias.",
      },
      {
        title: "LIFTING DE PESTANAS",
        description:
          "O lifting de pestanas é um tratamento estético que realça e curva os cílios naturais, proporcionando um efeito de alongamento e volume sem a necessidade de extensões ou máscara.",
      },
      {
        title: "MICROPIGMENTAÇÃO LÁBIOS",
        description:
          "Realce a beleza natural dos seus lábios com a nossa micropigmentação. Cor e definição duradouras para um sorriso impecável.",
      },
      {
        title: "HIDRALIPS",
        description:
          "Realce a beleza natural dos seus lábios com a nossa micropigmentação. Cor e definição duradouras para um sorriso impecável.",
      },
    ],
  },
];
