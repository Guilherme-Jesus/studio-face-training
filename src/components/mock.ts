import miniFacial from '../assets/ENC_ FOTOS_1/MINI_FACIAL.jpg';
import powerLift from '../assets/ENC_ FOTOS_1/POWER_LIFT.jpg';
import rejuvenescimentoTotal from '../assets/ENC_ FOTOS_1/REJUVENESCIMENTO_TOTAL.jpg';
import luminosidadeAbsoluta from '../assets/ENC_ FOTOS_1/LUMINOSIDADE_ABSOLUTA_CO_2.jpg';
import revitalizacaoIntensiva from '../assets/ENC_ FOTOS_1/REVITALIZAÇÃO_INTENSIVA.jpg';

import detoxTotal from '../assets/ENC_ FOTOS_2/DETOX_TOTAL.jpg';
import fototerapia from '../assets/ENC_ FOTOS_2/FOTOTERAPIA_LED.jpg';
import limpezaProfunda from '../assets/ENC_ FOTOS_2/LIMPEZA_DE_PELE_PROFUNDA.jpg';
import peelingsQuimicos from '../assets/ENC_ FOTOS_2/PEELINGS_QUIMICOS.jpg';
import makeUpGlowing from '../assets/ENC_ FOTOS_2/MAKEUP_GLOWING.jpg';

import hifu from '../assets/ENC_ FOTOS_3/HIFU.jpg';
import homemManicura from '../assets/ENC_ FOTOS_3/HOMEM_MANICURA.jpg';
import hydratacaoCorporal from '../assets/ENC_ FOTOS_6/HYDRATAÇAO_CORPORAL.jpg';
import radiofrecuncia from '../assets/ENC_ FOTOS_7/RADIOFRECUENCIA.jpg';

 import homemTratamentoAntienvelhecimento from '../assets/ENC_ FOTOS_3/HOMEM_TRATAMENTO_ANTIENVELHEC.jpg';
 import homemDepilacaoLazer from '../assets/ENC_ FOTOS_3/HOMEM_DEPILAÇAO_LASER.jpg';
 import homemPedicura from '../assets/ENC_ FOTOS_8/HOMEM_PEDICURA.jpg';

import massagemTratamentoHomens from '../assets/ENC_ FOTOS_7/MASSAGENS_E_TRATAMENTOS HOMENS.jpg';
import manicura from '../assets/ENC_ FOTOS_4/MANICURA.jpg';
import pedicura from '../assets/ENC_ FOTOS_4/PEDICURA.jpg';
import gelinho from '../assets/ENC_ FOTOS_4/GELINHO.jpg';
import unhasGel from '../assets/ENC_ FOTOS_8/UNHAS_GEL.jpg';

import rejuvenescimentoMaos from '../assets/ENC_ FOTOS_8/REJUVENECIMENTO_MAOS.jpg';
import acrilicoUnhas from '../assets/ENC_ FOTOS_6/ACRILICO_UNHAS.jpg';

import nanoblanding from '../assets/ENC_ FOTOS_5/NANOBLANDING.jpg';
import reconstrucaoSobrancelhas from '../assets/ENC_ FOTOS_5/RECONSTRUCAO_DE_SOBRANCELHAS.jpg';
import designSombrancelhas from '../assets/ENC_ FOTOS_5/DESING_DE_SOBRANCELHAS.jpg';

import brownLamination from '../assets/ENC_ FOTOS_5/BROWN_LAMINATION.jpg';

import eyelier from '../assets/ENC_ FOTOS_5/EYELINER.jpg';
import liftngPestanas from '../assets/ENC_ FOTOS_4/LIFTING_DE_PESTANAS.jpg';
import microPigmentacaoLabios from '../assets/ENC_ FOTOS_6/MICROPIGMENTACAO_LABIOS.jpg';
import hidraLips from '../assets/ENC_ FOTOS_6/HYDRA_LIPS.jpg';
export interface TreatmentItem {
  title: string;
  description: string;
  duration?: string;
  steps?: string[];
  image: string;
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
        image: miniFacial,
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
        image: powerLift,
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
        image: revitalizacaoIntensiva,
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
        image: rejuvenescimentoTotal,
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
        image: luminosidadeAbsoluta,
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
        image: detoxTotal,
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
        image: fototerapia,
      },
      {
        title: "Make-up glowing",
        duration: "45 min",
        description:
          "Após o tratamento de rosto, ﬁnalize a sua experiência com uma maquilhagem natural que irá deixar a sua pele radiante.",
        steps: ["Creme hidratante e SPF oil free"],
        image: makeUpGlowing,
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
        image: limpezaProfunda,
      },
      {
        title: "Peelings Químicos",
        description:
          "Utilização de uma nova geração de peelings químicos não invasivos, para ajudar a resolver ou minimizar patologias de pele.",
        image: peelingsQuimicos,
      },
      {
        title: "Hifu (high-intensity focused ultrasound)",
        description:
          "Tecnologia Hifu para promover rejuvenescimento e lifting facial não invasivo, estimulando a produção de colagénio.",
        duration: "30-50 min",
        image: hifu,
      },
      {
        title: "Fototerapia",
        description:
          "Tratamento personalizado consoante as necessidades da pele, combinando fototerapia e massagem manual.",
        duration: "35 min",
        image: fototerapia,
      },
      {
        title: "Hidratação Corporal",
        description:
          "Tratamento corporal que combina exfoliação, hidratação profunda da pele e massagem manual.",
        duration: "1 hora",
        image: hydratacaoCorporal,
      },
      {
        title: "Radiofrequência",
        description:
          "Radiofrequência de rosto e/ou corpo, promovendo a melhoria da aparência da pele e estimulando a produção de colagénio.",
        duration: "30 min – 1 hora",
        image: radiofrecuncia,
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
        image: homemTratamentoAntienvelhecimento,
      },
      {
        title: "Limpezas de pele profunda",
        description:
          "Limpezas profundas que removem impurezas e ajudam a manter a pele saudável e limpa.",
        image: limpezaProfunda,
      },
      {
        title: "Depilação lazer indolor",
        description:
          "Depilação a laser com tecnologia avançada, garantindo um processo indolor e eficiente.",
        image: homemDepilacaoLazer,
      },
      {
        title: "Manicura",
        description:
          "Serviço de manicura dedicado aos homens, promovendo o cuidado e a saúde das mãos.",
        image: homemManicura,
      },
      {
        title: "Pedicura",
        description:
          "Tratamento completo de pedicura, focado no bem-estar e saúde dos pés masculinos.",
        image: homemPedicura,
      },
      {
        title: "Massagens e tratamentos corporais",
        description:
          "Massagens relaxantes e tratamentos corporais que combatem a fadiga e promovem o bem-estar geral.",
        image: massagemTratamentoHomens,
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
          image: manicura,
      },
      {
        title: "Pedicure",
        description:
          "Tratamento completo de pedicure com esfoliação, hidratação e cuidado especializado para os pés.",
          image: pedicura,
      },
      {
        title: "Gelinho",
        description:
          "Manicure com aplicação de verniz gelinho, para um acabamento duradouro e brilhante.",
          image: gelinho,
      },
      {
        title: "Gel",
        description:
          "Manicure com aplicação de gel, para um acabamento resistente e duradouro.",
          image: unhasGel,
      },
      {
        title: "Acrílico",
        description:
          "Manicure com aplicação de unhas acrílicas, para um acabamento resistente e duradouro.",
          image: acrilicoUnhas,
      },
      {
        title: "Tratamento de rejuvenescimento (mãos e pés)",
        description:
          "Tratamento especializado para rejuvenescimento das mãos e pés, com produtos e tecnologia de ponta.",
          image: rejuvenescimentoMaos,
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
          image: nanoblanding,
      },
      {
        title: "RECONSTRUÇÃO DE SOBRANCELHAS",
        description:
          "O tratamento revolucionário que estimula o crescimento natural dos pelos nas sobrancelhas. Diga adeus às falhas e olá a sobrancelhas cheias e definidas. Resultados visíveis e duradouros para um olhar impecável.",
          image: reconstrucaoSobrancelhas,
      },
      {
        title: "DESIGN DE SOBRANCELHAS MAIS COLORAÇÃO",
        description:
          "Transforme o seu olhar com o nosso serviço de design de sobrancelhas mais coloração. Realce a beleza natural das suas sobrancelhas com precisão e cor duradoura.",
          image: designSombrancelhas,

      },
      {
        title: "DESIGN DE SOBRANCELHAS",
        description:
          "Cuide das suas sobrancelhas com o nosso serviço de design. Perfeição e definição para um olhar irresistível.",
          image: designSombrancelhas,
      },
      {
        title: "BROW LAMINATION",
        description:
          "Dê às suas sobrancelhas um efeito elegante e definido com o nosso Brow Lamination. Perfeição e estilo para um olhar mais expressivo.",
          image: brownLamination,
      },
      {
        title: "EYELINER",
        description:
          "Realce o seu olhar com a micropigmentação de eyeliner. Linhas precisas e duradouras para um efeito sofisticado e impecável todos os dias.",
          image: eyelier,
      },
      {
        title: "LIFTING DE PESTANAS",
        description:
          "O lifting de pestanas é um tratamento estético que realça e curva os cílios naturais, proporcionando um efeito de alongamento e volume sem a necessidade de extensões ou máscara.",
          image: liftngPestanas,
      },
      {
        title: "MICROPIGMENTAÇÃO LÁBIOS",
        description:
          "Realce a beleza natural dos seus lábios com a nossa micropigmentação. Cor e definição duradouras para um sorriso impecável.",
          image: microPigmentacaoLabios,
      },
      {
        title: "HIDRALIPS",
        description:
          "Realce a beleza natural dos seus lábios com a nossa micropigmentação. Cor e definição duradouras para um sorriso impecável.",
          image: hidraLips,
      },
    ],
  },
];
