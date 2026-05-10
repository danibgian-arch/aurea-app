import { useState, useRef } from "react";
import {
  Sun, CloudRain, Cloud, Moon, CloudLightning, Wind,
  ArrowRight, ArrowLeft, Check, MapPin, Calendar,
  Briefcase, Coffee, Star, Plane, Dumbbell, Home,
  ShoppingBag, Heart, Bookmark, Sparkles, Shirt,
  ChevronRight, ChevronLeft, Plus, X, MoreHorizontal,
  Compass, Luggage, Zap, Clock, Mail, User, Eye,
  Layers, RefreshCw, Sliders, TrendingUp, Gift,
  Navigation, Phone, MessageCircle, Map, Search,
  CheckSquare, Square, ToggleLeft, ToggleRight,
  Sunrise, Sunset, Utensils, Camera, Globe,
  Settings, LogOut, Bell, Shield, Star as StarIcon
} from "lucide-react";

const IMGS = {
  onboard1: "https://res.cloudinary.com/dxbapgxie/image/upload/v1778274730/IMG_6448_lrcdht.png",
  onboard2: "https://res.cloudinary.com/dxbapgxie/image/upload/v1778265199/BAAC20ED-5D2F-44C4-8550-E2410A574D47_c33cya.png",
  onboard3: "https://res.cloudinary.com/dxbapgxie/image/upload/v1778265200/IMG_5847_edqtia.png",
  dia:        "https://res.cloudinary.com/dxbapgxie/image/upload/v1778268568/5DA4F1F9-A657-4C08-A726-5AC6D7BAFA0F_wcdtim.png",
  trabalho:   "https://res.cloudinary.com/dxbapgxie/image/upload/v1778268567/ECE8A2EF-191B-4A79-8210-884268CB86C6_hywijd.png",
  almoco:     "https://res.cloudinary.com/dxbapgxie/image/upload/v1778268568/4565CC99-C3C5-49C9-9221-552A7C199AE0_uotq7k.png",
  evento:     "https://res.cloudinary.com/dxbapgxie/image/upload/v1778268568/4565CC99-C3C5-49C9-9221-552A7C199AE0_uotq7k.png",
  viagem:     "https://res.cloudinary.com/dxbapgxie/image/upload/v1778268568/4565CC99-C3C5-49C9-9221-552A7C199AE0_uotq7k.png",
  fimdesemana:"https://res.cloudinary.com/dxbapgxie/image/upload/v1778268568/4565CC99-C3C5-49C9-9221-552A7C199AE0_uotq7k.png",
  academia:   "https://res.cloudinary.com/dxbapgxie/image/upload/v1778268567/DEA4322F-F3D4-4C86-A56F-9F7421D44DC6_i4j24z.png",
  emcasa:     "https://res.cloudinary.com/dxbapgxie/image/upload/v1778268568/9FA03988-B00B-4F9D-84B6-2C1EF0CABCC8_ekavj7.png",
  jantar:     "https://res.cloudinary.com/dxbapgxie/image/upload/v1778269379/95b80f7a-8a36-4491-867f-b40525d64a84_herjki.png",
};

const QUICK_LOOKS = {
  confortavel: [
    { id:"ql-c1", title:"Camisa branca + jeans reta", sub:"O clássico que nunca falha", img:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=700&q=85", flatlay:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700&q=85", pieces:["Camisa branca","Jeans reta","Tênis branco","Bolsa tote"], tags:["básico","versátil","qualquer ocasião"] },
    { id:"ql-c2", title:"Vestido camiseta + tênis", sub:"Conforto com personalidade", img:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&q=85", flatlay:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=85", pieces:["Vestido camiseta","Tênis chunky","Bolsa de palha","Óculos de sol"], tags:["casual","leve","fim de semana"] },
    { id:"ql-c3", title:"Calça wide leg + top simples", sub:"Fluído e moderno sem esforço", img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85", flatlay:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=85", pieces:["Calça wide leg neutra","Top básico","Sandália rasteira","Bolsa shoulder"], tags:["fluído","dia a dia","leve"] },
  ],
  elegante: [
    { id:"ql-e1", title:"Blazer oversized + calça reta", sub:"Presença sem nenhum esforço", img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=700&q=85", flatlay:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85", pieces:["Blazer oversized","Calça reta","Mule fino","Bolsa estruturada"], tags:["trabalho","elegante","atemporal"] },
    { id:"ql-e2", title:"Vestido preto + sandália fina", sub:"Clássico elegante para qualquer hora", img:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=700&q=85", flatlay:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=700&q=85", pieces:["Vestido preto midi","Sandália de tiras","Clutch pequeno","Brinco argola"], tags:["jantar","elegante","noite"] },
    { id:"ql-e3", title:"Saia midi + blusa de seda", sub:"Feminino e refinado", img:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=85", flatlay:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&q=85", pieces:["Saia midi","Blusa de seda","Scarpin nude","Bolsa estruturada"], tags:["almoço","reunião","feminino"] },
  ],
  fashion: [
    { id:"ql-f1", title:"Blazer + tênis + jeans", sub:"Street chic, sempre atual", img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=85", flatlay:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85", pieces:["Blazer desconstruído","Jeans levemente destroyed","Tênis branco","Bolsa mini"], tags:["street","moderno","coolest"] },
    { id:"ql-f2", title:"Calça de couro + camisa branca", sub:"Editorial mas vestível", img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=700&q=85", flatlay:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85", pieces:["Calça de couro","Camisa branca oversized","Scarpin bico fino","Clutch slim"], tags:["editorial","marcante","noite"] },
    { id:"ql-f3", title:"Conjunto de alfaiataria + tênis", sub:"Contraste que funciona", img:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=700&q=85", flatlay:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=700&q=85", pieces:["Blazer + calça de alfaiataria","Tênis chunky","Bolsa tote couro","Argola grande"], tags:["tendência","mix","moderno"] },
  ],
};

const CITIES = [
  "São Paulo, SP","Rio de Janeiro, RJ","Belo Horizonte, MG","Curitiba, PR",
  "Porto Alegre, RS","Campinas, SP","Salvador, BA","Fortaleza, CE","Brasília, DF",
  "Manaus, AM","Recife, PE","Goiânia, GO","Florianópolis, SC","Vitória, ES",
  "Natal, RN","Maceió, AL","São Luís, MA","Belém, PA","Teresina, PI",
  "Campo Grande, MS","Cuiabá, MT","Santos, SP","Ribeirão Preto, SP",
  "São José dos Campos, SP","Sorocaba, SP","Uberlândia, MG","Joinville, SC",
  "Londrina, PR","Maringá, PR","Foz do Iguaçu, PR","Feira de Santana, BA",
  "Niterói, RJ","Juiz de Fora, MG","Caxias do Sul, RS","Blumenau, SC",
  "Lisboa, Portugal","Porto, Portugal","Buenos Aires, Argentina","Santiago, Chile",
  "Montevidéu, Uruguai","Lima, Peru","Bogotá, Colômbia","Medellín, Colômbia",
  "Miami, EUA","Nova York, EUA","Los Angeles, EUA","Orlando, EUA",
  "Toronto, Canadá","Cidade do México, México","Cancún, México","Paris, França",
  "Londres, Reino Unido","Madri, Espanha","Barcelona, Espanha","Milão, Itália",
  "Roma, Itália","Berlim, Alemanha","Amsterdã, Holanda","Dubai, Emirados",
  "Tóquio, Japão","Sydney, Austrália","Punta del Este, Uruguai",
];

// ── Momentos (sem "Evento") ─────────────────────────────────────────────
const MOMENTS = [
  {id:"dia",         title:"Dia a dia",      sub:"leve e bonito sem esforço",          Icon:Sun,      grad:"linear-gradient(160deg,#e8ddd0,#c9b99a)", main:true},
  {id:"trabalho",    title:"Trabalho",       sub:"presença na medida certa",           Icon:Briefcase,grad:"linear-gradient(160deg,#d5cfc7,#b5a898)", main:true},
  {id:"almoco",      title:"Almoço",         sub:"arrumada sem exagero",               Icon:Coffee,   grad:"linear-gradient(160deg,#ddd5c5,#c4b49a)", main:true},
  {id:"jantar",      title:"Jantar",         sub:"bonita sem exagero",                 Icon:Utensils, grad:"linear-gradient(160deg,#2a2420,#4a3c34)", main:true},
  {id:"fimdesemana", title:"Final de semana",sub:"leve, descomplicado e cheio de estilo",Icon:Compass,grad:"linear-gradient(160deg,#e0d8cc,#c8bfb0)", main:false},
  {id:"viagem",      title:"Viagem",         sub:"conforto com estilo em qualquer destino",Icon:Plane,grad:"linear-gradient(160deg,#c5cdd4,#8a9aaa)", main:false},
  {id:"academia",    title:"Treino",         sub:"movimento com leveza e sofisticação", Icon:Dumbbell, grad:"linear-gradient(160deg,#ccc5bc,#9a9088)", main:false},
  {id:"emcasa",      title:"Em casa",        sub:"conforto que também é chic",         Icon:Home,     grad:"linear-gradient(160deg,#e4ddd4,#cdc4b8)", main:false},
];

const OCCASION_SUBTYPES = {
  dia: { q:"Como você gosta de se vestir no dia a dia?", opts:[{id:"basica",label:"Mais básica",sub:"Looks simples e fáceis"},{id:"arrumada",label:"Bem arrumada",sub:"Visual mais alinhado"},{id:"fashion",label:"Mais fashion",sub:"Looks com mais personalidade"},{id:"confortavel",label:"Confortável e estilosa",sub:"Bem-estar sem perder o estilo"}] },
  trabalho: { q:"Como é o seu ambiente de trabalho?", opts:[{id:"formal",label:"Mais formal",sub:"Imagem mais alinhada"},{id:"equilibrado",label:"Refinado",sub:"Elegante na medida certa"},{id:"tranquilo",label:"Casual alinhado",sub:"Confortável sem perder presença"},{id:"criativo",label:"Mais criativo",sub:"Looks com mais personalidade"}] },
  almoco: { q:"Qual é a proposta do almoço?", opts:[{id:"casualchic",label:"Casual chic",sub:"Elegante de forma natural"},{id:"arrumada",label:"Feminina e alinhada",sub:"Mais presença, sem exagero"},{id:"fashion",label:"Fashion atual",sub:"Mais personalidade no look"},{id:"leve",label:"Leve e confortável",sub:"Bonita de um jeito descomplicado"}] },
  jantar: { q:"Como você quer se sentir?", opts:[{id:"casualchic",label:"Casual chic",sub:"Leve, elegante e natural"},{id:"elegante",label:"Mais elegante",sub:"Visual mais refinado"},{id:"fashion",label:"Mais atual",sub:"Mais tendência, sem exageros"},{id:"confortavel",label:"Confortável chic",sub:"Elegante sem abrir mão do conforto"}] },
  fimdesemana: { q:"Como você quer viver o final de semana?", opts:[{id:"leve",label:"Casual chic",sub:"Leve, bonita e fácil de usar"},{id:"arrumada",label:"Mais arrumada",sub:"Um visual mais alinhado e feminino"},{id:"fashion",label:"Mais atual",sub:"Com informação de moda na medida certa"},{id:"confortavel",label:"Relax confortável",sub:"Conforto sem perder o estilo"}] },
  academia: { q:"Como você quer se sentir no treino?", opts:[{id:"funcional",label:"Clean esportiva",sub:"Visual leve e minimalista"},{id:"sportychic",label:"Esportivo chic",sub:"Treino com visual alinhado"},{id:"fashion",label:"Mais atual",sub:"Fitness com informação de moda"},{id:"confortavel",label:"Conforto absoluto",sub:"Liberdade total para o movimento"}] },
  emcasa: { q:"Como você quer se sentir em casa?", opts:[{id:"confortavel",label:"Conforto total",sub:"Leve, prática e relaxada"},{id:"arrumadinha",label:"Arrumada na medida",sub:"Confortável, mas com presença"},{id:"homeoffice",label:"Receber em casa",sub:"Bonita sem parecer produzida"},{id:"cozychic",label:"Cozy chic",sub:"Conforto com estética sofisticada"}] },
  viagem_look: { q:"Como você quer viajar?", opts:[{id:"leve",label:"Leve e confortável",sub:"Tranquila e bem o dia todo"},{id:"arrumada",label:"Bem arrumada",sub:"Confortável com visual alinhado"},{id:"sofisticada",label:"Mais sofisticada",sub:"Elegante em trânsito"}] },
};

// ── Títulos editoriais para a revelação do look (sem repetir nome do filtro) ──
const EDITORIAL_TITLES = [
  "Arrumada do jeito certo",
  "Leve, atual e pronta pro dia",
  "O tipo de look que funciona o dia inteiro",
  "Elegância descomplicada",
  "Refinada sem exagero",
  "Bonita sem parecer que tentou demais",
  "Do café à reunião, sem trocar nada",
  "Simples de montar, difícil de ignorar",
];

const LOOK_CONTEXTS = {
  dia:         ["Pensei em um look confortável, alinhado e fácil para acompanhar sua rotina.", "Montei algo prático e bonito para um dia com ritmo.", "Um look que resolve sem precisar pensar duas vezes."],
  trabalho:    ["Pensei em algo que transmite presença sem esforço aparente.", "Montei uma proposta que funciona do início ao fim do dia de trabalho.", "Um look que comunica competência com elegância."],
  almoco:      ["Montei algo feminino e leve — arrumada sem parecer que exagerou.", "Pensei em um look que funciona bem à mesa, sem perder o conforto.", "Uma proposta fácil e bonita para o almoço."],
  jantar:      ["Pensei em algo que tem presença sem ser exagerado para a noite.", "Montei uma proposta elegante e versátil para o jantar.", "Um look que eleva a noite sem complicar."],
  fimdesemana: ["Montei algo leve e bonito para um fim de semana sem pressa.", "Pensei em um look descomplicado com personalidade.", "Uma proposta fácil para aproveitar o fim de semana."],
  viagem:      ["Montei algo confortável e estiloso para o deslocamento.", "Pensei em um look que funciona no aeroporto e além.", "Uma proposta prática e bonita para viajar bem."],
  academia:    ["Pensei em algo que une conforto e presença para o treino.", "Montei um look esportivo com cuidado no estilo.", "Uma proposta funcional e estilosa para se movimentar bem."],
  emcasa:      ["Montei algo confortável que também é bonito de usar em casa.", "Pensei em um look de casa que tem cuidado nos detalhes.", "Uma proposta cozy com intenção de estilo."],
  jantar:      ["Pensei em uma proposta prática e elegante para uma noite com compromissos leves.", "Montei algo que tem presença sem ser exagerado.", "Um look que resolve a noite com elegância."],
};

// ── Comentário editorial da Áurea — voz humana, sem bullets ─────────────
const getAureaComentario = (occasion, subtype, city) => {
  const cidade = city ? city.split(",")[0] : null;
  const occMap = {
    dia: ["dia a dia","rotina do dia","seu dia"],
    trabalho: ["o trabalho","esse dia de trabalho","a proposta profissional"],
    almoco: ["o almoço","essa saída","o programa do almoço"],
    jantar: ["o jantar","a noite","esse programa"],
    fimdesemana: ["o fim de semana","o final de semana","esse programa"],
    viagem: ["a viagem","o deslocamento","esse programa"],
    academia: ["o treino","a academia","o exercício"],
    emcasa: ["ficar em casa","o dia em casa","esse momento"],
  };
  const subtypeMap = {
    casualchic: ["leve e chic","natural e elegante","chic sem esforço"],
    elegante: ["sofisticado","refinado e elegante","com muita presença"],
    fashion: ["atual e com personalidade","moderno e marcante","com um toque editorial"],
    confortavel: ["confortável e bonito","leve e fácil de usar","descomplicado e estiloso"],
    arrumada: ["alinhado e feminino","bem resolvido","elegante e arrumado"],
    basica: ["limpo e inteligente","simples do jeito certo","básico que funciona"],
    leve: ["leve e prático","despretensioso e bonito","fácil de usar o dia todo"],
    formal: ["impecável e profissional","com muita autoridade","refinado e assertivo"],
    equilibrado: ["equilibrado na medida certa","profissional sem exagero","com presença natural"],
  };

  const occOptions = occMap[occasion] || ["esse momento"];
  const subOptions = subtypeMap[subtype] || ["muito bonito","perfeito para você","bem resolvido"];
  const occ = occOptions[Math.floor(Math.random()*occOptions.length)];
  const sub = subOptions[Math.floor(Math.random()*subOptions.length)];

  const templates = [
    cidade
      ? `Esse look ficou perfeito para ${occ}. Como ${cidade} está com clima quente hoje, a proposta ficou ${sub} — e vai funcionar muito bem.`
      : `Esse look ficou perfeito para ${occ}. A proposta ficou ${sub} — e vai funcionar muito bem.`,
    `Acho que essa combinação vai funcionar super bem para hoje. Ficou ${sub} e muito adequada para ${occ}.`,
    `Para ${occ}, escolhi algo ${sub}. O resultado ficou atual e sem exagero.`,
    cidade
      ? `Esse look conversa muito bem com o clima de ${cidade} e com a proposta que você escolheu. Vai estar ${sub} do começo ao fim.`
      : `Esse look conversa muito bem com a proposta que você escolheu. Vai estar ${sub} do começo ao fim.`,
    `Pode confiar nessa proposta. Ela funciona muito bem para ${occ} e ficou ${sub}.`,
  ];

  return templates[Math.floor(Math.random()*templates.length)];
};

const getEditorialTitle = (idx = 0) => EDITORIAL_TITLES[idx % EDITORIAL_TITLES.length];
const getAureaContext = (occasion) => {
  const arr = LOOK_CONTEXTS[occasion] || LOOK_CONTEXTS.dia;
  return arr[Math.floor(Math.random() * arr.length)];
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  --cream:#FAF8F4;
  --linen:#F2EDE4;
  --nude:#D9C9B5;
  --caramel:#B8956A;
  --bark:#7A5C3E;
  --ink:#1C1714;
  --mist:#E8E2D9;
  --white:#FFFFFF;
  --red:#B03A2E;
  --espresso:#2C1F14;
  --olive:#6B7153;
  --warm-brown:#8B6347;
  --soft-black:#1A1A1A;
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'DM Sans',system-ui,sans-serif;
  --r:20px;
  --rcard:16px;
  --ease:cubic-bezier(.22,.68,0,1.2)
}

html,body,#root{height:100%;background:#CFC9BF}

.app{max-width:430px;min-height:100dvh;margin:0 auto;background:var(--cream);position:relative;overflow:hidden;font-family:var(--sans);color:var(--ink);box-shadow:0 0 80px rgba(0,0,0,.18)}
.screen{position:absolute;inset:0;display:flex;flex-direction:column;opacity:0;transition:opacity .75s cubic-bezier(.4,0,.6,1);pointer-events:none;overflow-y:auto;-webkit-overflow-scrolling:touch;background:var(--cream)}
.screen.active{opacity:1;pointer-events:all;transition:opacity .75s cubic-bezier(.4,0,.6,1)}
.screen.exit{opacity:0;pointer-events:none;transition:opacity .5s cubic-bezier(.4,0,.6,1)}

.img-full{width:100%;height:54dvh;object-fit:cover;object-position:top center;display:block;flex-shrink:0}
.img-half{width:100%;height:250px;object-fit:cover;object-position:top center;display:block;flex-shrink:0}
.pad{padding:28px}
.spacer{flex:1}
.scroll-pb{padding-bottom:52px}

.topbar{display:flex;align-items:center;justify-content:space-between;padding:14px 20px 0;flex-shrink:0;gap:8px}
.topbar-back{width:36px;height:36px;border-radius:50%;border:none;cursor:pointer;background:var(--linen);display:flex;align-items:center;justify-content:center;color:var(--ink);flex-shrink:0;-webkit-tap-highlight-color:transparent;transition:background .15s}
.topbar-back:active{background:var(--mist)}

.logo{font-family:var(--serif);font-size:13px;font-weight:400;letter-spacing:.22em;text-transform:uppercase;color:var(--caramel)}
.logo-c{display:flex;justify-content:center;padding:22px 28px 0}

.step-n{font-size:11px;font-weight:400;letter-spacing:.1em;text-transform:uppercase;color:var(--nude)}
.prog{height:1.5px;background:var(--mist);margin:10px 28px 0;border-radius:2px;flex-shrink:0}
.prog-f{height:100%;background:var(--caramel);border-radius:2px;transition:width .45s var(--ease)}

.eyebrow{font-size:10px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--caramel);margin-bottom:10px}
h1{font-family:var(--serif);font-size:36px;font-weight:300;line-height:1.15;color:var(--ink);margin-bottom:14px}
h2{font-family:var(--serif);font-size:28px;font-weight:300;line-height:1.2;color:var(--ink);margin-bottom:10px}
p{font-size:15px;font-weight:300;line-height:1.65;color:#5a5046}

.bp{width:100%;padding:17px 24px;background:var(--ink);color:var(--cream);font-family:var(--sans);font-size:13px;font-weight:400;letter-spacing:.08em;border:none;border-radius:var(--r);cursor:pointer;transition:background .2s,transform .15s,opacity .2s;-webkit-tap-highlight-color:transparent}
.bp:not(:disabled):active{transform:scale(.97);background:var(--espresso)}
.bp:disabled{opacity:.28;cursor:not-allowed}
.bs{width:100%;padding:15px 24px;background:transparent;color:var(--ink);font-family:var(--sans);font-size:13px;font-weight:400;letter-spacing:.04em;border:1.5px solid var(--nude);border-radius:var(--r);cursor:pointer;transition:border-color .2s,transform .15s;-webkit-tap-highlight-color:transparent}
.bs:active{transform:scale(.97);border-color:var(--caramel)}
.bg{background:none;border:none;color:var(--caramel);font-family:var(--sans);font-size:13px;cursor:pointer;padding:10px 0;text-decoration:underline;text-underline-offset:3px;-webkit-tap-highlight-color:transparent}

.stack{display:flex;flex-direction:column;gap:11px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px}

.mc{position:relative;overflow:hidden;border-radius:var(--rcard);cursor:pointer;aspect-ratio:3/4;border:2px solid transparent;transition:border-color .2s,transform .15s;-webkit-tap-highlight-color:transparent}
.mc img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block}
.mc-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(28,23,20,.80) 0%,rgba(28,23,20,.06) 52%,transparent 75%);display:flex;flex-direction:column;justify-content:flex-end;padding:14px 12px}
.mc.on{border-color:var(--caramel)}

.fc{background:var(--linen);border:1.5px solid var(--mist);border-radius:var(--rcard);padding:16px 18px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:border-color .2s,transform .15s,background .2s;-webkit-tap-highlight-color:transparent}
.fc:active{transform:scale(.97)}
.fc.on{border-color:var(--caramel);background:#FDF6EC}

.pills{display:flex;flex-wrap:wrap;gap:9px}
.pill{padding:11px 18px;border:1.5px solid var(--nude);border-radius:40px;font-size:13px;font-weight:300;background:transparent;color:var(--ink);cursor:pointer;transition:all .2s;-webkit-tap-highlight-color:transparent}
.pill.on{background:var(--ink);color:var(--cream);border-color:var(--ink)}
.pill:active{transform:scale(.95)}

.field{width:100%;padding:16px 18px;font-family:var(--sans);font-size:15px;font-weight:300;background:var(--linen);border:1.5px solid var(--mist);border-radius:var(--rcard);color:var(--ink);outline:none;transition:border-color .2s;-webkit-appearance:none}
.field:focus{border-color:var(--caramel)}
.field.err{border-color:var(--red) !important}
.field::placeholder{color:#b5a898}

.ac{position:relative}
.ac-list{position:absolute;top:calc(100%+6px);left:0;right:0;background:var(--white);border:1.5px solid var(--mist);border-radius:var(--rcard);overflow:hidden;z-index:60;box-shadow:0 8px 32px rgba(0,0,0,.1);max-height:230px;overflow-y:auto}
.ac-item{padding:13px 18px;font-size:14px;cursor:pointer;border-bottom:1px solid var(--mist);transition:background .12s}
.ac-item:last-child{border-bottom:none}
.ac-item:hover,.ac-item:active{background:var(--linen)}
.ac-free{padding:13px 18px;font-size:13px;font-weight:300;color:var(--caramel);cursor:pointer;border-top:1px solid var(--mist);display:flex;align-items:center;gap:8px}
.ac-free:hover{background:#FDF6EC}

.hint{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:400;color:#9a8878;margin-top:9px}
.hint.err{color:var(--red)}
.hint.ok{color:var(--caramel)}
.hd{width:5px;height:5px;border-radius:50%;background:currentColor;flex-shrink:0}

.dchips{display:flex;gap:9px;margin-bottom:20px}
.dchip{flex:1;padding:14px 8px;border:1.5px solid var(--nude);border-radius:var(--rcard);font-size:13px;font-weight:300;background:transparent;color:var(--ink);cursor:pointer;transition:all .2s;text-align:center;-webkit-tap-highlight-color:transparent}
.dchip .dc-label{display:block;font-family:var(--serif);font-size:17px;font-weight:400;margin-bottom:2px}
.dchip .dc-sub{display:block;font-size:11px;color:#9a8878}
.dchip.on,.dchip.sel{background:var(--ink);color:var(--cream);border-color:var(--ink);box-shadow:0 4px 16px rgba(28,23,20,.2);transform:scale(1.04)}
.dchip.on .dc-sub,.dchip.sel .dc-sub{color:rgba(255,255,255,.6)}
.dchip:not(.on):not(.sel):active{transform:scale(.96)}

.cal-card{background:var(--linen);border:1.5px solid var(--nude);border-radius:var(--rcard);overflow:hidden}
.cal-header{background:var(--ink);color:var(--cream);padding:18px 20px 14px;display:flex;align-items:center;justify-content:space-between}
.cal-month{font-family:var(--serif);font-size:20px;font-weight:300;font-style:italic}
.cal-year{font-size:12px;font-weight:300;opacity:.6}
.cal-nav{background:none;border:none;color:var(--cream);font-size:18px;cursor:pointer;padding:4px 8px;opacity:.7;transition:opacity .15s}
.cal-nav:hover{opacity:1}
.cal-grid{padding:14px 16px 18px}
.cal-dow{display:grid;grid-template-columns:repeat(7,1fr);margin-bottom:8px}
.cal-dow span{text-align:center;font-size:10px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--caramel);padding:4px 0}
.cal-days{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}
.cal-day{aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:300;border-radius:50%;cursor:pointer;transition:background .15s,color .15s;-webkit-tap-highlight-color:transparent}
.cal-day:not(.disabled):hover{background:var(--mist)}
.cal-day.today{font-weight:500;color:var(--caramel)}
.cal-day.selected{background:var(--ink);color:var(--cream);font-weight:500}
.cal-day.today.selected{background:var(--caramel)}
.cal-day.disabled{color:var(--mist);cursor:default}
.cal-day.other{color:var(--nude)}
.cal-day.empty{cursor:default}

.date-confirm{margin-top:14px;padding:14px 18px;background:#FDF6EC;border:1.5px solid var(--caramel);border-radius:var(--rcard);display:flex;align-items:center;gap:12px}
.date-confirm .dc-text{font-family:var(--serif);font-size:16px;font-weight:400;color:var(--ink)}
.date-confirm .dc-change{margin-left:auto;font-size:12px;color:var(--caramel);cursor:pointer;text-decoration:underline;text-underline-offset:3px}

.travel-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.travel-card{background:var(--linen);border:1.5px solid var(--mist);border-radius:var(--rcard);padding:14px 16px;cursor:pointer;transition:border-color .2s;-webkit-tap-highlight-color:transparent;position:relative}
.travel-card.has-val{border-color:var(--nude)}
.travel-label{font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--caramel);display:block;margin-bottom:6px}
.travel-val{font-family:var(--serif);font-size:18px;font-weight:300;color:var(--ink)}
.travel-val.empty{color:var(--nude);font-size:14px;font-style:italic}
.travel-input{position:absolute;opacity:0;inset:0;cursor:pointer;width:100%;height:100%}

.wcard{background:linear-gradient(135deg,#FDF6EC 0%,#EEE4D5 100%);border:1.5px solid var(--nude);border-radius:24px;padding:28px 24px;text-align:center}
.w-cond{font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--caramel);margin-bottom:8px}
.w-temp{font-family:var(--serif);font-size:72px;font-weight:300;color:var(--bark);line-height:1}
.tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:14px}
.tag{font-size:12px;font-weight:300;padding:5px 13px;border:1px solid var(--nude);border-radius:40px;color:#8a7a6a;display:flex;align-items:center;gap:5px}

.look-img{width:100%;height:52dvh;object-fit:cover;object-position:top center;display:block;flex-shrink:0}

.vc{display:flex;align-items:stretch;background:var(--linen);border:1.5px solid var(--mist);border-radius:var(--rcard);overflow:hidden;cursor:pointer;transition:border-color .2s,transform .15s;-webkit-tap-highlight-color:transparent}
.vc:active{transform:scale(.97)}
.vc.on{border-color:var(--caramel)}
.vc img{width:88px;height:108px;object-fit:cover;flex-shrink:0}
.vc-body{padding:14px 16px;flex:1;display:flex;flex-direction:column;justify-content:center}
.vc-tag{font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--caramel);margin-bottom:4px;display:block}
.vc-ttl{font-family:var(--serif);font-size:16px;font-weight:400;color:var(--ink);margin-bottom:3px}
.vc-dsc{font-size:12px;font-weight:300;color:#8a7a6a}

.back{position:absolute;top:72px;left:16px;width:46px;height:46px;border-radius:50%;background:rgba(250,248,244,.95);backdrop-filter:blur(8px);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:20;-webkit-tap-highlight-color:transparent;transition:transform .15s;box-shadow:0 2px 10px rgba(0,0,0,.08)}
.back:active{transform:scale(.88)}
.divider{height:1px;background:var(--mist);margin:18px 0}

.bnav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:430px;background:rgba(250,248,244,.97);backdrop-filter:blur(16px);border-top:1px solid var(--mist);display:flex;align-items:center;justify-content:space-around;padding:10px 0 max(10px,env(safe-area-inset-bottom));z-index:100}
.bnav-btn{display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;cursor:pointer;padding:4px 12px;-webkit-tap-highlight-color:transparent;transition:opacity .15s}
.bnav-btn:active{opacity:.6}
.bnav-icon{display:flex;align-items:center;justify-content:center;height:22px}
.bnav-label{font-size:10px;font-weight:400;letter-spacing:.04em;color:var(--nude);transition:color .2s}
.bnav-btn.active .bnav-label{color:var(--caramel);font-weight:500}

.btn-action{width:100%;padding:14px 20px;background:var(--linen);color:var(--ink);font-family:var(--sans);font-size:13px;font-weight:400;letter-spacing:.04em;border:1.5px solid var(--mist);border-radius:var(--r);cursor:pointer;display:flex;align-items:center;gap:12px;transition:border-color .2s,transform .15s,background .2s;-webkit-tap-highlight-color:transparent;text-align:left}
.btn-action:active{transform:scale(.97);border-color:var(--caramel);background:#FDF6EC}
.btn-action .ba-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--caramel)}
.btn-action .ba-text{flex:1}
.btn-action .ba-title{display:block;font-weight:500;font-size:13px;color:var(--ink);margin-bottom:1px}
.btn-action .ba-sub{display:block;font-size:11px;color:#9a8878;font-weight:300}

.toast{position:fixed;bottom:90px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--ink);color:var(--cream);padding:12px 24px;border-radius:40px;font-size:13px;font-weight:400;letter-spacing:.04em;white-space:nowrap;opacity:0;transition:opacity .3s,transform .3s;z-index:200;pointer-events:none;max-width:calc(100% - 48px)}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}

.home-greeting{font-family:var(--serif);font-size:32px;font-weight:300;line-height:1.2;color:var(--ink);margin-bottom:6px}
.home-date{font-size:11px;font-weight:300;color:#9a8878;letter-spacing:.07em;text-transform:uppercase;margin-bottom:28px}
.weather-mini{display:flex;align-items:center;gap:12px;background:var(--linen);border:1.5px solid var(--mist);border-radius:var(--rcard);padding:14px 18px;margin-bottom:20px}
.wm-temp{font-family:var(--serif);font-size:28px;font-weight:300;color:var(--bark)}
.wm-info{flex:1}
.wm-city{font-size:12px;font-weight:500;color:var(--ink);letter-spacing:.04em}
.wm-desc{font-size:11px;font-weight:300;color:#9a8878;margin-top:2px}

.btn-hero{width:100%;padding:20px 24px;background:var(--ink);color:var(--cream);font-family:var(--serif);font-size:22px;font-weight:300;font-style:italic;border:none;border-radius:var(--r);cursor:pointer;text-align:left;display:flex;align-items:center;justify-content:space-between;-webkit-tap-highlight-color:transparent;transition:background .2s,transform .15s;margin-bottom:28px}
.btn-hero:active{transform:scale(.98);background:var(--espresso)}
.section-title{font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--caramel);margin-bottom:14px}
.shortcut-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:28px}
.shortcut-card{background:var(--linen);border:1.5px solid var(--mist);border-radius:var(--rcard);padding:16px 14px;cursor:pointer;transition:border-color .2s,transform .15s;-webkit-tap-highlight-color:transparent}
.shortcut-card:active{transform:scale(.96);border-color:var(--caramel)}
.sc-icon{display:flex;align-items:center;margin-bottom:10px;color:var(--caramel)}
.sc-title{font-family:var(--serif);font-size:15px;font-weight:400;color:var(--ink);display:block;margin-bottom:2px}
.sc-sub{font-size:11px;font-weight:300;color:#9a8878;display:block}

.mala-trip{background:var(--linen);border:1.5px solid var(--mist);border-radius:var(--rcard);padding:20px 18px;margin-bottom:14px}
.check-item{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--mist);cursor:pointer;-webkit-tap-highlight-color:transparent}
.check-item:last-child{border-bottom:none}
.ci-box{width:20px;height:20px;border-radius:4px;border:1.5px solid var(--nude);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all .2s;color:white}
.ci-box.done{background:var(--caramel);border-color:var(--caramel)}
.ci-text{font-size:14px;font-weight:300;color:var(--ink)}
.ci-text.done{color:var(--nude);text-decoration:line-through}

.inspo-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.inspo-card{border-radius:var(--rcard);overflow:hidden;cursor:pointer;transition:transform .15s;-webkit-tap-highlight-color:transparent;position:relative}
.inspo-card:active{transform:scale(.97)}
.inspo-card img{width:100%;aspect-ratio:3/4;object-fit:cover;display:block}
.inspo-card .ic-label{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(28,23,20,.75) 0%,transparent 60%);padding:20px 12px 12px;font-family:var(--serif);font-size:14px;font-weight:300;color:white}

.has-nav{padding-bottom:72px}
.modal-overlay{position:fixed;inset:0;background:rgba(28,23,20,.45);backdrop-filter:blur(4px);z-index:150;display:flex;align-items:flex-end}
.modal-sheet{background:var(--cream);border-radius:24px 24px 0 0;padding:24px 28px 48px;width:100%;max-width:430px;margin:0 auto;animation:slideUp .35s cubic-bezier(.4,0,.2,1)}
@keyframes slideUp{from{transform:translateY(100%)} to{transform:translateY(0)}}
.modal-handle{width:32px;height:3px;background:var(--mist);border-radius:2px;margin:0 auto 20px}

@keyframes auth-rise{from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)}}
.auth-overlay{position:fixed;inset:0;z-index:300;background:rgba(28,23,20,.55);backdrop-filter:blur(8px) saturate(1.2);display:flex;align-items:flex-end;animation:fadeIn .25s ease}
@keyframes fadeIn{from{opacity:0} to{opacity:1}}
.auth-sheet{width:100%;max-width:430px;margin:0 auto;background:var(--cream);border-radius:28px 28px 0 0;overflow:hidden;animation:auth-rise .38s cubic-bezier(.4,0,.2,1)}
.auth-look-preview{width:100%;height:200px;object-fit:cover;display:block;position:relative}
.auth-look-overlay{position:absolute;top:0;left:0;right:0;height:200px;background:linear-gradient(to bottom,transparent 40%,rgba(28,23,20,.65) 100%);display:flex;align-items:flex-end;padding:16px 20px}
.auth-look-badge{font-family:var(--serif);font-size:16px;font-weight:300;color:white;font-style:italic}
.auth-body{padding:24px 28px 44px}
.auth-eyebrow{font-size:10px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--caramel);text-align:center;margin-bottom:12px}
.auth-title{font-family:var(--serif);font-size:26px;font-weight:300;color:var(--ink);text-align:center;line-height:1.2;margin-bottom:8px}
.auth-sub{font-size:13px;font-weight:300;color:#9a8878;text-align:center;line-height:1.6;margin-bottom:24px}
.auth-btn{width:100%;padding:16px 20px;border-radius:var(--r);font-family:var(--sans);font-size:14px;font-weight:400;letter-spacing:.02em;cursor:pointer;border:none;display:flex;align-items:center;justify-content:center;gap:10px;transition:opacity .18s,transform .15s;-webkit-tap-highlight-color:transparent;margin-bottom:10px}
.auth-btn:active{opacity:.8;transform:scale(.98)}
.auth-btn-apple{background:#000;color:#fff}
.auth-btn-google{background:#fff;color:#3c3c3c;border:1.5px solid #e0dbd5 !important}
.auth-btn-email{background:#EDE7DC;color:var(--ink)}
.auth-skip{display:block;width:100%;text-align:center;padding:12px;background:none;border:none;font-size:13px;font-weight:300;color:#c0b8ae;cursor:pointer;letter-spacing:.03em;margin-top:4px}
.auth-divider{display:flex;align-items:center;gap:12px;margin:16px 0}
.auth-divider::before,.auth-divider::after{content:'';flex:1;height:1px;background:var(--mist)}
.auth-divider span{font-size:11px;color:var(--nude);font-weight:300}
.auth-back-btn{background:none;border:none;font-size:18px;color:var(--nude);cursor:pointer;padding:0 0 16px;display:block;-webkit-tap-highlight-color:transparent}

.day-time-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}
.day-time-btn{padding:18px 12px;border:1.5px solid var(--mist);border-radius:var(--rcard);background:var(--linen);font-family:var(--sans);cursor:pointer;text-align:center;transition:all .2s;-webkit-tap-highlight-color:transparent}
.day-time-btn.sel{border-color:var(--caramel);background:#FDF6EC}
.day-time-icon{display:flex;justify-content:center;margin-bottom:8px;color:var(--caramel)}
.day-time-label{font-size:14px;font-weight:400;color:var(--ink);display:block;margin-bottom:2px}
.day-time-sub{font-size:11px;font-weight:300;color:#9a8878;display:block}

.seu-dia-card{border-radius:var(--rcard);overflow:hidden;border:1.5px solid var(--caramel);background:var(--linen);margin-bottom:20px;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform .15s}
.seu-dia-card:active{transform:scale(.98)}
.seu-dia-header{background:linear-gradient(135deg,var(--caramel),#c9844a);padding:10px 16px;display:flex;align-items:center;justify-content:space-between}
.seu-dia-label{font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.85)}
.seu-dia-time{font-size:12px;font-weight:400;color:white}
.seu-dia-body{display:flex;align-items:stretch}
.seu-dia-img{width:80px;height:90px;object-fit:cover;flex-shrink:0}
.seu-dia-info{padding:14px 16px;flex:1}
.seu-dia-occasion{font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--caramel);margin-bottom:4px}
.seu-dia-proposal{font-family:var(--serif);font-size:16px;font-weight:400;color:var(--ink);margin-bottom:8px}
.seu-dia-btn{font-size:12px;font-weight:500;color:var(--caramel);letter-spacing:.04em;display:flex;align-items:center;gap:4px}

.closet-section{margin-bottom:32px}
.closet-sec-header{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:14px}
.closet-sec-title{font-size:10px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--caramel)}
.closet-sec-count{font-size:11px;font-weight:300;color:var(--nude)}
.closet-sec-sub{font-size:12px;font-weight:300;color:#9a8878;margin-top:3px;margin-bottom:14px;line-height:1.4}
.cl-card{display:flex;align-items:stretch;background:var(--white);border:1.5px solid var(--mist);border-radius:var(--rcard);overflow:hidden;cursor:pointer;transition:border-color .2s,transform .15s;-webkit-tap-highlight-color:transparent;margin-bottom:10px}
.cl-card:active{transform:scale(.98);border-color:var(--caramel)}
.cl-card-img{width:80px;height:96px;object-fit:cover;flex-shrink:0}
.cl-card-body{padding:12px 14px;flex:1;display:flex;flex-direction:column;justify-content:space-between;min-width:0}
.cl-card-eyebrow{font-size:9px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--caramel);margin-bottom:3px}
.cl-card-title{font-family:var(--serif);font-size:16px;font-weight:400;color:var(--ink);margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cl-card-meta{font-size:11px;font-weight:300;color:#9a8878}
.cl-card-chips{display:flex;gap:5px;flex-wrap:wrap;margin-top:6px}
.cl-chip{font-size:10px;font-weight:400;padding:3px 9px;border-radius:20px;border:1px solid var(--mist);color:#9a8878;background:var(--linen);white-space:nowrap}
.cl-chip.sched{border-color:var(--caramel);color:var(--caramel);background:#FDF6EC}
.cl-empty{text-align:center;padding:28px 20px;background:var(--linen);border:1.5px dashed var(--nude);border-radius:var(--rcard);margin-bottom:10px}
.cl-empty-icon{margin:0 auto 10px;display:block}
.cl-empty-text{font-size:13px;font-weight:300;color:#9a8878;line-height:1.5}
@keyframes closet-in{from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)}}
.cl-card{animation:closet-in .3s ease both}

.ql-tone-card{border-radius:var(--rcard);overflow:hidden;cursor:pointer;transition:all .2s;-webkit-tap-highlight-color:transparent;position:relative;border:2.5px solid transparent}
.ql-tone-card.sel{border-color:var(--caramel);box-shadow:0 6px 24px rgba(184,149,106,.28)}
.ql-tone-card:active{transform:scale(.96)}
.ql-tone-img{width:100%;aspect-ratio:2/3;object-fit:cover;display:block;filter:brightness(.75) saturate(.88)}
.ql-tone-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(28,23,20,.82) 0%,transparent 55%);display:flex;flex-direction:column;justify-content:flex-end;padding:14px 12px}
.ql-result-img{width:100%;height:55dvh;object-fit:cover;object-position:top center;display:block;flex-shrink:0}
@keyframes ql-reveal{from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)}}
.ql-reveal{animation:ql-reveal .4s cubic-bezier(.4,0,.2,1) both}
.ql-piece-row{display:flex;align-items:center;gap:12px;padding:11px 14px;background:var(--linen);border:1.5px solid var(--mist);border-radius:var(--rcard)}
.ql-piece-num{width:22px;height:22px;border-radius:50%;background:var(--ink);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:500;color:white;flex-shrink:0}

.mala-hero{background:linear-gradient(135deg,var(--espresso) 0%,#3a2e28 100%);padding:28px 28px 24px;margin:0 -28px;display:flex;align-items:center;gap:16px}
.mala-hero-icon{display:flex;align-items:center;color:rgba(255,255,255,.7)}
.mala-hero-text h2{font-family:var(--serif);font-size:24px;font-weight:300;color:white;margin-bottom:4px;line-height:1.2}
.mala-hero-text p{font-size:12px;font-weight:300;color:rgba(255,255,255,.65);line-height:1.5}
.mala-type-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px}
.mala-type-card{border-radius:var(--rcard);padding:20px 16px;text-align:center;border:2px solid var(--mist);background:var(--linen);cursor:pointer;transition:all .2s;-webkit-tap-highlight-color:transparent}
.mala-type-card.sel{border-color:var(--caramel);background:#FDF6EC}
.mala-type-card:active{transform:scale(.97)}
.mala-type-icon{display:flex;justify-content:center;margin-bottom:12px;color:var(--caramel)}
.mala-type-title{font-family:var(--serif);font-size:16px;font-weight:400;color:var(--ink);margin-bottom:4px}
.mala-type-sub{font-size:11px;font-weight:300;color:#9a8878;line-height:1.4}
.mala-day-card{background:var(--linen);border:1.5px solid var(--mist);border-radius:var(--rcard);overflow:hidden;margin-bottom:12px}
.mala-day-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--mist);background:var(--cream)}
.mala-day-num{font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--caramel)}
.mala-day-body{display:flex;align-items:stretch}
.mala-day-img{width:90px;height:110px;object-fit:cover;flex-shrink:0}
.mala-day-info{padding:12px 14px;flex:1}
.mala-day-proposal{font-family:var(--serif);font-size:15px;font-weight:400;color:var(--ink);margin-bottom:8px}
.mala-day-actions{display:flex;gap:6px;flex-wrap:wrap}
.mala-motto{background:linear-gradient(135deg,#FDF6EC,#F5EDE0);border:1.5px solid var(--caramel);border-radius:var(--rcard);padding:16px 20px;text-align:center;margin-bottom:24px}
.mala-motto p{font-family:var(--serif);font-size:16px;font-weight:300;color:var(--bark);font-style:italic;line-height:1.6}

.inspo-hero{position:relative;height:280px;overflow:hidden;margin:0 -28px;border-radius:0}
.inspo-hero img{width:100%;height:100%;object-fit:cover;display:block;filter:brightness(.75) saturate(.9)}
.inspo-hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(28,23,20,.1) 0%,rgba(28,23,20,.65) 100%);padding:20px 28px;display:flex;flex-direction:column;justify-content:flex-end}
.inspo-hero-title{font-family:var(--serif);font-size:32px;font-weight:300;color:white;line-height:1.1;margin-bottom:6px}
.inspo-hero-sub{font-size:13px;font-weight:300;color:rgba(255,255,255,.8);line-height:1.5}
.inspo-pills{display:flex;gap:8px;overflow-x:auto;padding:16px 28px;margin:0 -28px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.inspo-pills::-webkit-scrollbar{display:none}
.inspo-pill{flex-shrink:0;padding:8px 16px;border-radius:40px;font-size:12px;font-weight:400;letter-spacing:.04em;border:1.5px solid var(--mist);background:transparent;color:var(--ink);cursor:pointer;transition:all .2s;-webkit-tap-highlight-color:transparent}
.inspo-pill.active{background:var(--ink);color:var(--cream);border-color:var(--ink)}

.editorial-card{border-radius:var(--rcard);overflow:hidden;cursor:pointer;background:var(--linen);border:1.5px solid var(--mist);margin-bottom:14px;transition:transform .15s;-webkit-tap-highlight-color:transparent}
.editorial-card:active{transform:scale(.98)}
.editorial-card img{width:100%;height:200px;object-fit:cover;display:block}
.editorial-card-body{padding:16px 18px}
.editorial-card-title{font-family:var(--serif);font-size:20px;font-weight:400;color:var(--ink);line-height:1.2;margin-bottom:6px}
.editorial-card-text{font-size:13px;font-weight:300;color:#9a8878;line-height:1.6;margin-bottom:14px}
.editorial-card-cta{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:var(--caramel);letter-spacing:.04em;cursor:pointer;border:none;background:none;padding:0}

.vale-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:24px}
.vale-item{border-radius:var(--rcard);overflow:hidden;cursor:pointer;border:1.5px solid var(--mist);background:var(--linen);transition:transform .15s;-webkit-tap-highlight-color:transparent}
.vale-item:active{transform:scale(.96)}
.vale-item img{width:100%;aspect-ratio:3/4;object-fit:cover;display:block}
.vale-item-label{padding:8px;font-family:var(--serif);font-size:12px;font-weight:400;color:var(--ink);text-align:center;line-height:1.3}

.section-gap{height:28px}
.section-divider{height:1px;background:var(--mist);margin:24px 0}

@keyframes look-promote{0%{opacity:0;transform:scale(.97) translateY(10px)} 100%{opacity:1;transform:scale(1) translateY(0)}}
.look-active-img{animation:look-promote .4s cubic-bezier(.4,0,.2,1) forwards}
@keyframes slide-in-top{from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)}}
@keyframes pulse-glow{0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.75;transform:scale(1.08)}}
`;

const MONTHS_PT = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const DAYS_PT = ["D","S","T","Q","Q","S","S"];

function MiniCalendar({ value, onChange, minDate }) {
  const todayObj = new Date(); todayObj.setHours(0,0,0,0);
  const minObj = minDate ? new Date(minDate + "T00:00:00") : todayObj;
  const initDate = value ? new Date(value + "T00:00:00") : todayObj;
  const [viewY, setViewY] = useState(initDate.getFullYear());
  const [viewM, setViewM] = useState(initDate.getMonth());
  const prevMonth = () => { if(viewM===0){setViewM(11);setViewY(y=>y-1);}else setViewM(m=>m-1); };
  const nextMonth = () => { if(viewM===11){setViewM(0);setViewY(y=>y+1);}else setViewM(m=>m+1); };
  const firstDay = new Date(viewY,viewM,1).getDay();
  const daysInMon = new Date(viewY,viewM+1,0).getDate();
  const cells = [];
  for(let i=0;i<firstDay;i++) cells.push(null);
  for(let d=1;d<=daysInMon;d++) cells.push(d);
  const selDate = value ? new Date(value+"T00:00:00") : null;
  return (
    <div className="cal-card">
      <div className="cal-header">
        <div><div className="cal-month">{MONTHS_PT[viewM]}</div><div className="cal-year">{viewY}</div></div>
        <div style={{display:"flex",gap:4}}>
          <button className="cal-nav" onClick={prevMonth}><ChevronLeft size={16}/></button>
          <button className="cal-nav" onClick={nextMonth}><ChevronRight size={16}/></button>
        </div>
      </div>
      <div className="cal-grid">
        <div className="cal-dow">{DAYS_PT.map((d,i)=><span key={i}>{d}</span>)}</div>
        <div className="cal-days">
          {cells.map((d,i)=>{
            if(!d) return <div key={i} className="cal-day empty"/>;
            const cellDate = new Date(viewY,viewM,d); cellDate.setHours(0,0,0,0);
            const isDisabled = cellDate < minObj;
            const isToday = cellDate.getTime()===todayObj.getTime();
            const isSel = selDate && cellDate.getTime()===selDate.getTime();
            const cls=["cal-day",isDisabled?"disabled":"",isToday?"today":"",isSel?"selected":""].filter(Boolean).join(" ");
            return <div key={i} className={cls} onClick={!isDisabled?()=>{const iso=`${viewY}-${String(viewM+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;onChange(iso);}:undefined}>{d}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

function WeatherIcon({ condition="sunny", size=110 }) {
  const iconProps = { size:size*0.55, strokeWidth:1.25 };
  const wrapStyle = { width:size, height:size, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 12px" };
  if(condition==="sunny") return <div style={wrapStyle}><Sun {...iconProps} color="#F0A500" style={{filter:"drop-shadow(0 0 12px rgba(245,200,66,.5))",animation:"pulse-glow 2.5s ease-in-out infinite"}}/></div>;
  if(condition==="rainy") return <div style={wrapStyle}><CloudRain {...iconProps} color="#74b9e8"/></div>;
  if(condition==="cloudy") return <div style={wrapStyle}><Cloud {...iconProps} color="#9aabbc"/></div>;
  return <div style={wrapStyle}><Sun {...iconProps} color="#F0A500"/></div>;
}

const NAV_ITEMS = [
  { id:"inicio",  Icon:Home,     label:"Início" },
  { id:"closet",  Icon:Layers,   label:"Closet" },
  { id:"aurea",   Icon:Sparkles, label:"Áurea" },
  { id:"mala",    Icon:Plane,    label:"Mala" },
  { id:"inspira", Icon:Eye,      label:"Inspiração" },
];

const LOOK_PIECES = {
  default:[{id:"peca-1",name:"Calça wide leg",category:"bottom",hint:"Calça fluída de alfaiataria ou palazzo"},{id:"peca-2",name:"Blusa de linho",category:"top",hint:"Blusa de algodão ou viscose no mesmo tom"},{id:"peca-3",name:"Sandália nude",category:"shoes",hint:"Qualquer sandália bege ou bege claro"},{id:"peca-4",name:"Bolsa estruturada",category:"bag",hint:"Bolsa de couro ou sintética com estrutura"}],
  dia:[{id:"peca-1",name:"Calça reta",category:"bottom",hint:"Calça straight ou slim no mesmo tom"},{id:"peca-2",name:"Camiseta branca",category:"top",hint:"Qualquer camiseta branca ou off-white"},{id:"peca-3",name:"Tênis branco",category:"shoes",hint:"Tênis clean — qualquer marca funciona"},{id:"peca-4",name:"Bolsa de palha",category:"bag",hint:"Bolsa casual ou tote de tecido"}],
  trabalho:[{id:"peca-1",name:"Calça de alfaiataria",category:"bottom",hint:"Calça reta ou wide leg em tom neutro"},{id:"peca-2",name:"Blusa de seda",category:"top",hint:"Blusa fluída ou camisa social"},{id:"peca-3",name:"Scarpin nude",category:"shoes",hint:"Sandália fina ou sapato fechado"},{id:"peca-4",name:"Bolsa estruturada",category:"bag",hint:"Bolsa de couro ou semelhante"}],
  almoco:[{id:"peca-1",name:"Saia midi",category:"bottom",hint:"Saia plissada, wrap ou envelope"},{id:"peca-2",name:"Top de tecido",category:"top",hint:"Blusa leve, regata ou top estruturado"},{id:"peca-3",name:"Sandália rasteira",category:"shoes",hint:"Rasteira de couro ou nude"},{id:"peca-4",name:"Bolsa tote",category:"bag",hint:"Tote em couro ou lona"}],
  jantar:[{id:"peca-1",name:"Calça de alfaiataria",category:"bottom",hint:"Calça reta ou wide leg em tom escuro"},{id:"peca-2",name:"Blusa seda ou renda",category:"top",hint:"Blusa fluída ou peça com acabamento especial"},{id:"peca-3",name:"Sandália fina",category:"shoes",hint:"Sandália de tiras ou mule fino"},{id:"peca-4",name:"Bolsa de mão",category:"bag",hint:"Clutch ou bolsa pequena estruturada"}],
  viagem:[{id:"peca-1",name:"Calça confortável",category:"bottom",hint:"Calça fluída, wide leg ou jogger chic"},{id:"peca-2",name:"Camiseta neutra",category:"top",hint:"Camiseta clean em tom neutro"},{id:"peca-3",name:"Tênis versátil",category:"shoes",hint:"Tênis que vai em qualquer look"},{id:"peca-4",name:"Mochila pequena",category:"bag",hint:"Bolsa crossbody ou mochila slim"}],
};

const OCC_LABEL = {dia:"Dia a dia",trabalho:"Trabalho",almoco:"Almoço",viagem:"Viagem",fimdesemana:"Fim de semana",academia:"Esporte",emcasa:"Em casa",jantar:"Jantar"};
const MONTH_SHORT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

const DEMO_LOOKS = [
  {id:"demo-1",occasion:"jantar",tone:"Elegante",city:"São Paulo",savedAt:"2025-05-02",img:IMGS.jantar,label:"Elegante",version:"principal",pieces:["Vestido midi","Sandália fina","Clutch","Brinco fino"],saveType:"scheduled",schedDate:"2025-05-14",schedTime:"noite",usedAt:null},
  {id:"demo-2",occasion:"trabalho",tone:"Fashion",city:"São Paulo",savedAt:"2025-05-01",img:IMGS.trabalho,label:"Fashion",version:"fashion",pieces:["Calça alfaiataria","Blusa de seda","Mule nude","Bolsa estruturada"],saveType:"saved",schedDate:null,schedTime:null,usedAt:null},
  {id:"demo-3",occasion:"dia",tone:"Confortável",city:"São Paulo",savedAt:"2025-04-28",img:IMGS.dia,label:"Confortável",version:"principal",pieces:["Calça reta","Camiseta branca","Tênis branco","Bolsa de palha"],saveType:"used",schedDate:null,schedTime:null,usedAt:"2025-04-28"},
];

export default function Aurea() {
  const [screen,setScreen]=useState(0);
  const [prev,setPrev]=useState(null);
  const [name,setName]=useState("");
  const [moment,setMoment]=useState(null);
  const [jantarContext,setJantarContext]=useState(null);
  const [cityInput,setCityInput]=useState("");
  const [cityOk,setCityOk]=useState(false);
  const [cityErr,setCityErr]=useState(false);
  const [citySuggs,setCitySuggs]=useState([]);
  const [dateMode,setDateMode]=useState(null);
  const [dateChoice,setDateChoice]=useState(null);
  const [customDate,setCustomDate]=useState("");
  const [showCal,setShowCal]=useState(false);
  const [travelStart,setTravelStart]=useState("");
  const [travelEnd,setTravelEnd]=useState("");
  const [feeling,setFeeling]=useState([]);
  const [diaSubtype,setDiaSubtype]=useState(null);
  const [savedCity,setSavedCity]=useState("");
  const [hasOnboarded,setHasOnboarded]=useState(false);
  const [ownedItems,setOwnedItems]=useState([]);
  const [travelStyle,setTravelStyle]=useState(null);
  const [travelMoments,setTravelMoments]=useState([]);
  const [travelEventCustom,setTravelEventCustom]=useState("");
  const [travelAlert,setTravelAlert]=useState(true);
  const [malaType,setMalaType]=useState(null);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [authModal,setAuthModal]=useState(false);
  const [authStep,setAuthStep]=useState("modal");
  const [authEmail,setAuthEmail]=useState("");
  const [authTrigger,setAuthTrigger]=useState(null);
  const [lookOfDay,setLookOfDay]=useState(null);
  const [tab,setTab]=useState("inicio");
  const [savedLooks,setSavedLooks]=useState([]);
  const [checklist,setChecklist]=useState({});
  const [toast,setToast]=useState("");
  const [showAdjust,setShowAdjust]=useState(false);
  const [showSaveModal,setShowSaveModal]=useState(false);
  const [saveCalDate,setSaveCalDate]=useState("");
  const [saveCalTime,setSaveCalTime]=useState("");
  const [saveStep,setSaveStep]=useState("choose");
  const [activeLook,setActiveLook]=useState(null);
  const [extraVariations,setExtraVariations]=useState([]);
  const [ownedPieces,setOwnedPieces]=useState({});
  const [showQuickLook,setShowQuickLook]=useState(false);
  const [quickTone,setQuickTone]=useState(null);
  const [quickLookIdx,setQuickLookIdx]=useState(0);
  const [occasionSubtype,setOccasionSubtype]=useState(null);
  const [lookIntensity,setLookIntensity]=useState(1); // 0=leve, 1=equilibrado, 2=presença
  const [lookVariantIdx,setLookVariantIdx]=useState(0);
  const [dislikedLooks,setDislikedLooks]=useState([]);
  const [editorialTitleIdx,setEditorialTitleIdx]=useState(0);
  const [aureaContextText,setAureaContextText]=useState("");
  const [aureaComentarioText,setAureaComentarioText]=useState("");
  const [closetMemory,setClosetMemory]=useState({pieces:{},tones:{},occasions:{},interactions:0});
  const [premiumInterest,setPremiumInterest]=useState(false);

  // Mapa de navegação: cada tela sabe de onde veio
  const BACK={
    // Onboarding
    1:0, 2:1, 3:2,
    // Fluxo principal
    4:3,   // Momentos ← Nome
    18:4,  // Dia subtype ← Momentos
    5:4,   // Cidade ← Momentos (demais ocasiões)
    6:5,   // Data ← Cidade
    7:6,   // Clima ← Data
    22:7,  // Contexto jantar ← Clima
    8:moment==="jantar"?22:7,  // Filtro ← Contexto jantar ou Clima
    23:8,  // Transição ← Filtro
    10:23, // Look ← Transição
    // Dia a dia
    19:18, // Onde e quando ← Mood dia
    // Resultado
    21:10,
    // Hub e abas
    28:13, 29:28,
    // Viagem
    30:6,  31:30, 25:31, 26:25, 27:26,
  };
  const NAV_SCREENS=[13,14,15,16,17];
  const showNav=NAV_SCREENS.includes(screen);
  const isViagem=moment==="viagem";

  const go=(n)=>{
    if(n<=4||n===18){setOwnedPieces({});setActiveLook(null);setExtraVariations([]);setOccasionSubtype(null);setLookVariantIdx(0);setLookIntensity(1);}
    if(n===10||n===23){
      setEditorialTitleIdx(Math.floor(Math.random()*EDITORIAL_TITLES.length));
      setAureaContextText(getAureaContext(moment||"dia"));
      setAureaComentarioText("");
    }
    setPrev(screen);setScreen(n);
  };
  const goBack=()=>{
    if((screen===4||screen===18)&&hasOnboarded){setPrev(screen);setScreen(13);return;}
    const t=BACK[screen]!==undefined?BACK[screen]:screen-1;
    setPrev(screen);setScreen(t);
  };
  const requireAuth=(action)=>{if(isLoggedIn){action();return;}setAuthTrigger(action);setAuthStep("modal");setAuthModal(true);};
  const completeAuth=()=>{setIsLoggedIn(true);setAuthModal(false);if(authTrigger){authTrigger();setAuthTrigger(null);}};
  const showToast=(msg)=>{setToast(msg);setTimeout(()=>setToast(""),3000);};
  const toggleCheck=(k)=>setChecklist(p=>({...p,[k]:!p[k]}));

  const switchTab=(t)=>{
    if(t==="closet"&&!isLoggedIn){setAuthTrigger(()=>{setTab("closet");go(14);});setAuthStep("modal");setAuthModal(true);return;}
    setTab(t);
    const map={inicio:13,closet:14,aurea:15,mala:16,inspira:17};
    go(map[t]);
  };
  const onCityType=(v)=>{setCityInput(v);setCityOk(false);setCityErr(false);if(v.length>=2){setCitySuggs(CITIES.filter(c=>c.toLowerCase().startsWith(v.toLowerCase())).slice(0,5));}else setCitySuggs([]);};
  const pickCity=(c)=>{setCityInput(c);setCityOk(true);setCitySuggs([]);setCityErr(false);setSavedCity(c);};
  const useFreeCity=()=>{if(cityInput.trim()){setCityOk(true);setCitySuggs([]);setCityErr(false);setSavedCity(cityInput.trim());}};
  const tryCity=()=>{if(cityOk){go(6);}else if(cityInput.trim()){useFreeCity();setTimeout(()=>go(6),50);}else{setCityErr(true);}};

  const today=new Date().toISOString().split("T")[0];
  const todayLabel=(()=>{const[,m,d]=today.split("-");return`${d}/${m}`;})();
  const tomorrow=new Date(Date.now()+86400000).toISOString().split("T")[0];
  const amanhaLabel=(()=>{const[,m,d]=tomorrow.split("-");return`${d}/${m}`;})();
  const cs=cityInput?cityInput.split(",")[0]:"";
  const dn=name.trim()?name.trim().split(" ")[0]:"você";
  const dateValid=dateMode==="hoje"||dateMode==="amanha"||(dateMode==="custom"&&customDate)||(isViagem&&travelStart);
  const travelValid=!isViagem||(travelStart&&travelEnd&&travelEnd>=travelStart);
  const canDate=dateValid&&travelValid;
  const dateHint=!dateMode?"Selecione uma data para continuar":isViagem&&(!travelStart||!travelEnd)?"Informe o período completo da viagem":null;
  const formatDate=(iso)=>{const[y,m,d]=iso.split("-");const mn=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];return`${d} de ${mn[parseInt(m)-1]}, ${y}`;};
  const greeting=()=>{const h=new Date().getHours();return h<12?"Bom dia":h<18?"Boa tarde":"Boa noite";};
  const MPF=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  const DS=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
  const fullDate=(()=>{const n=new Date();return`${DS[n.getDay()]}, ${n.getDate()} de ${MPF[n.getMonth()]}`;})();
  const fmtDateShort=(iso)=>{if(!iso)return"";const[,m,d]=iso.split("-");return`${parseInt(d)} ${MONTH_SHORT[parseInt(m)-1]}`;};
  const fmtTimeLabel=(t)=>({manha:"7h",tarde:"12h",noite:"18h",agora:"agora"}[t]||t||"");

  const getLookPieces=()=>LOOK_PIECES[moment]||LOOK_PIECES.default;
  const ownedCount=Object.values(ownedPieces).filter(Boolean).length;
  const hasOwned=ownedCount>0;

  const BASE_VARIATIONS=[
    {id:"fashion",label:"Mais fashion",sub:"Marcante e editorial",img:IMGS.jantar,pieces:["Calça de couro","Top estruturado","Scarpin fino","Clutch de verniz"]},
    {id:"confortavel",label:"Mais confortável",sub:"Fluído, sem esforço",img:IMGS.dia,pieces:["Calça jogger","Camiseta oversized","Tênis chunky","Shoulder bag"]},
    {id:"elegante",label:"Mais elegante",sub:"Refinada e com presença",img:IMGS.trabalho,pieces:["Calça alfaiataria","Blusa de seda","Mule nude","Bolsa estruturada"]},
  ];
  const allVariations=[...BASE_VARIATIONS,...extraVariations];

  const getActiveLookData=()=>{
    if(!activeLook) return {img:IMGS[moment]||IMGS.evento,label:feeling[0]||"Look personalizado",sub:cs,pieces:getLookPieces().map(p=>p.name),id:"principal"};
    const found=allVariations.find(v=>v.id===activeLook);
    return found?{...found,sub:cs}:{img:IMGS[moment]||IMGS.evento,label:feeling[0]||"Look personalizado",sub:cs,pieces:getLookPieces().map(p=>p.name),id:"principal"};
  };

  const guessCategoryFromName=(name="")=>{
    const n=name.toLowerCase();
    if(n.includes("calça")||n.includes("saia")||n.includes("shorts")) return "bottom";
    if(n.includes("blusa")||n.includes("camisa")||n.includes("top")||n.includes("camiseta")||n.includes("blazer")) return "top";
    if(n.includes("vestido")||n.includes("conjunto")) return "full";
    if(n.includes("sapato")||n.includes("sandália")||n.includes("tênis")||n.includes("scarpin")||n.includes("mule")) return "shoes";
    if(n.includes("bolsa")||n.includes("clutch")||n.includes("mochila")) return "bag";
    return "other";
  };

  const learnOwnedPiece=(pieceName,category)=>{
    setClosetMemory(prev=>{
      const next=JSON.parse(JSON.stringify(prev));
      next.interactions=(next.interactions||0)+1;
      if(!next.pieces[category]) next.pieces[category]=[];
      const existing=next.pieces[category].find(p=>p.name===pieceName);
      if(existing){existing.count++;existing.confirmed=true;existing.lastSeen=today;}
      else next.pieces[category].push({name:pieceName,count:1,lastSeen:today,confirmed:true});
      return next;
    });
  };

  const learnTone=(tone)=>{
    setClosetMemory(prev=>{const next=JSON.parse(JSON.stringify(prev));next.interactions=(next.interactions||0)+1;next.tones[tone]=(next.tones[tone]||0)+1;return next;});
  };

  const learnFromLook=(lk)=>{
    setClosetMemory(prev=>{
      const next=JSON.parse(JSON.stringify(prev));
      next.interactions=(next.interactions||0)+1;
      if(lk.occasion) next.occasions[lk.occasion]=(next.occasions[lk.occasion]||0)+1;
      if(lk.tone) next.tones[lk.tone]=(next.tones[lk.tone]||0)+1;
      (lk.pieces||[]).forEach(name=>{
        const cat=guessCategoryFromName(name);
        if(!next.pieces[cat]) next.pieces[cat]=[];
        const existing=next.pieces[cat].find(p=>p.name===name);
        if(existing){existing.count++;existing.lastSeen=today;}
        else next.pieces[cat].push({name,count:1,lastSeen:today,confirmed:false});
      });
      return next;
    });
  };

  const buildLook=(opts={})=>{
    const active=getActiveLookData();
    return {id:Date.now(),occasion:moment,tone:feeling[0]||"",city:savedCity,savedAt:today,img:active.img,label:active.label,version:active.id,pieces:active.pieces,saveType:opts.saveType||"saved",schedDate:opts.schedDate||null,schedTime:opts.schedTime||null,usedAt:null};
  };
  const saveLook=(opts={})=>{
    const lk=buildLook(opts);
    setSavedLooks(p=>[lk,...p]);
    learnFromLook(lk);
    showToast("Look salvo ✦");
  };

  const allSavedLooks=savedLooks.length>0?savedLooks:DEMO_LOOKS;
  const scheduledLooks=allSavedLooks.filter(l=>l.saveType==="scheduled");
  const inspirationLooks=allSavedLooks.filter(l=>l.saveType==="saved");
  const usedLooks=allSavedLooks.filter(l=>l.saveType==="used");

  const confirmedPiecesCount=Object.values(closetMemory.pieces).flat().filter(p=>p.confirmed).length;
  const totalKnownPieces=Object.values(closetMemory.pieces).flat().length;
  const memoryLevel=closetMemory.interactions===0?"new":closetMemory.interactions<3?"learning":closetMemory.interactions<8?"growing":"smart";

  // ── Estilo favorito para o Closet ─────────────────────────────────
  const topTones = Object.entries(closetMemory.tones).sort((a,b)=>b[1]-a[1]).slice(0,3).map(e=>e[0]);
  const topOccasions = Object.entries(closetMemory.occasions).sort((a,b)=>b[1]-a[1]).slice(0,2).map(e=>OCC_LABEL[e[0]]||e[0]);

  const screens = [

    // 0 — Onboard 1 — A DOR
    <div key="0" style={{minHeight:"100dvh",display:"flex",flexDirection:"column",background:"var(--cream)"}}>
      <img src={IMGS.onboard1} alt="" style={{width:"100%",height:"55vh",objectFit:"cover",objectPosition:"center top",display:"block",flexShrink:0}}/>
      <div style={{flex:1,display:"flex",flexDirection:"column",padding:"32px 28px 0"}}>
        <div style={{fontFamily:"var(--serif)",fontSize:10,fontWeight:400,letterSpacing:".28em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:24}}>ÁUREA</div>
        <h1 style={{fontFamily:"var(--serif)",fontSize:28,lineHeight:1.3,fontWeight:300,color:"var(--ink)",marginBottom:18}}>Já ficou parada em frente ao seu closet sem saber o que vestir?</h1>
        <p style={{fontSize:15,fontWeight:400,color:"var(--ink)",lineHeight:1.6,marginBottom:8}}>A Áurea resolve o look pra você.</p>
        <p style={{fontSize:12,fontWeight:300,color:"#9a8878",lineHeight:1.6,marginBottom:0}}>Menos indecisão. Mais combinações que funcionam.</p>
      </div>
      <div style={{padding:"28px 28px 48px"}}><button className="bp" onClick={()=>go(1)}>Continuar</button></div>
    </div>,

    // 1 — Onboard 2 — A SOLUÇÃO
    <div key="1" style={{position:"relative",minHeight:"100dvh",display:"flex",flexDirection:"column"}}>
      <img src={IMGS.onboard2} alt=""
        style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center"}}/>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(20,16,12,.15) 0%,rgba(20,16,12,.5) 45%,rgba(20,16,12,.88) 75%,rgba(20,16,12,.96) 100%)"}}/>
      <div style={{position:"relative",zIndex:2,marginTop:"auto",padding:"0 28px 48px"}}>
        <div style={{fontFamily:"var(--serif)",fontSize:10,fontWeight:400,letterSpacing:".28em",textTransform:"uppercase",color:"rgba(250,248,244,.6)",marginBottom:22}}>ÁUREA</div>
        <h1 style={{color:"white",fontSize:36,lineHeight:1.2,marginBottom:18,fontWeight:300,fontFamily:"var(--serif)"}}>
          Seu look resolvido,<br/><em>simples assim.</em>
        </h1>
        <p style={{color:"rgba(250,248,244,.78)",fontSize:14,fontWeight:300,lineHeight:1.7,marginBottom:36}}>
          A Áurea sugere combinações inteligentes com o que você já tem — e com o que realmente vale a pena acrescentar.
        </p>
        <button className="bp" onClick={()=>go(3)}
          style={{background:"rgba(250,248,244,.95)",color:"var(--ink)"}}>
          Continuar
        </button>
      </div>
      <button className="back" onClick={goBack} style={{top:56,color:"white",background:"rgba(255,255,255,.15)"}}><ArrowLeft size={16}/></button>
    </div>,

    // 2 — Onboard 3 — O VALOR DO CLOSET
    <div key="2" style={{minHeight:"100dvh",display:"flex",flexDirection:"column",background:"var(--cream)"}}>
      <img src={IMGS.onboard3} alt="" style={{width:"100%",height:"42vh",objectFit:"cover",objectPosition:"center center",display:"block",flexShrink:0}}/>
      <div style={{flex:1,display:"flex",flexDirection:"column",padding:"32px 28px 0"}}>
        <div style={{fontFamily:"var(--serif)",fontSize:10,fontWeight:400,letterSpacing:".28em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:22}}>ÁUREA</div>
        <h1 style={{fontFamily:"var(--serif)",fontSize:30,lineHeight:1.25,fontWeight:300,color:"var(--ink)",marginBottom:16}}>Você já tem<br/><em>muita coisa boa.</em></h1>
        <p style={{fontSize:14,fontWeight:300,color:"#5a5046",lineHeight:1.7,marginBottom:24}}>A Áurea organiza ideias, conecta peças e transforma seu closet em possibilidades reais.</p>
        <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:8}}>
          {[
            "Combinações que fazem sentido pra você",
            "Mais possibilidades com o que você já tem",
            "Menos tempo decidindo o que vestir",
          ].map(t=>(
            <div key={t} style={{display:"flex",alignItems:"center",gap:10,fontSize:13,fontWeight:300,color:"#5a5046",lineHeight:1.5}}>
              <div style={{width:18,height:18,borderRadius:"50%",background:"var(--linen)",border:"1px solid var(--caramel)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <Check size={10} color="var(--caramel)" strokeWidth={2.5}/>
              </div>
              {t}
            </div>
          ))}
        </div>
      </div>
      <div style={{padding:"28px 28px 48px"}}><button className="bp" onClick={()=>go(3)}>Quero começar</button></div>
      <button className="back" onClick={goBack}><ArrowLeft size={16}/></button>
    </div>,

    // 3 — Nome (onboarding natural, sem "cadastro")
    <div key="3" style={{minHeight:"100dvh",display:"flex",flexDirection:"column",background:"var(--cream)"}}>
      {/* Imagem elegante no topo */}
      <div style={{position:"relative",height:"35vh",flexShrink:0,overflow:"hidden"}}>
        <img src="https://res.cloudinary.com/dxbapgxie/image/upload/v1778274730/IMG_6448_lrcdht.png" alt=""
          style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 20%"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 60%,var(--cream) 100%)"}}/>
        <button className="topbar-back" onClick={goBack} style={{position:"absolute",top:56,left:20,zIndex:3}}><ArrowLeft size={16}/></button>
      </div>
      {/* Conteúdo */}
      <div style={{flex:1,display:"flex",flexDirection:"column",padding:"8px 28px 0"}}>
        <div style={{fontFamily:"var(--serif)",fontSize:10,fontWeight:400,letterSpacing:".28em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:20}}>ÁUREA</div>
        <h2 style={{fontFamily:"var(--serif)",fontSize:26,fontWeight:300,lineHeight:1.3,color:"var(--ink)",marginBottom:12}}>Como a Áurea pode te chamar?</h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",lineHeight:1.65,marginBottom:32}}>Quero deixar suas sugestões cada vez mais com a sua cara.</p>
        <input className="field" placeholder="Seu nome" value={name} onChange={e=>setName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&go(4)} autoCapitalize="words"/>
      </div>
      <div style={{padding:"20px 28px 48px"}}>
        <button className="bp" style={{marginBottom:12}} onClick={()=>{setHasOnboarded(true);go(4);}}>Continuar</button>
        <button className="bg" onClick={()=>{setName("");setHasOnboarded(true);go(4);}}>Pular</button>
      </div>
    </div>,

    // 4 — Momento (sem "Evento")
    <div key="4" className="scroll-pb" style={{background:"var(--cream)"}}>
      <div className="topbar">
        <button className="topbar-back" onClick={goBack}><ArrowLeft size={16}/></button>
        <div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div>
        <span className="step-n">1 de 4</span>
      </div>
      <div className="prog"><div className="prog-f" style={{width:"25%"}}/></div>
      <div className="pad" style={{paddingTop:22}}>
        <div style={{fontSize:10,fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:10}}>Seu momento</div>
        <h2 style={{marginBottom:8,fontSize:24,fontFamily:"var(--serif)",fontWeight:300}}>Pra onde você vai hoje{name.trim()?`, ${dn}`:""}?</h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:24,lineHeight:1.6}}>A Áurea entende a ocasião e resolve o look pra você.</p>

        {/* Cards principais — imagem quase todo o card */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:28}}>
          {MOMENTS.filter(m=>m.main).map(m=>(
            <div key={m.id} onClick={()=>setMoment(m.id)}
              style={{borderRadius:18,overflow:"hidden",cursor:"pointer",position:"relative",
                border:`2px solid ${moment===m.id?"var(--caramel)":"transparent"}`,
                boxShadow:moment===m.id?"0 6px 24px rgba(184,149,106,.32)":"0 2px 12px rgba(0,0,0,.08)",
                transition:"all .22s",WebkitTapHighlightColor:"transparent",aspectRatio:"3/4"}}>
              {/* Imagem */}
              <img src={IMGS[m.id]} alt={m.title}
                style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center"}}
                onError={e=>{e.target.style.background=m.grad;e.target.style.display="none";}}/>
              {/* Overlay gradiente */}
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 40%,rgba(20,16,12,.72) 80%,rgba(20,16,12,.88) 100%)"}}/>
              {/* Nome */}
              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"12px 14px 14px"}}>
                <div style={{fontFamily:"var(--serif)",fontSize:17,fontWeight:300,color:"white",lineHeight:1.2}}>{m.title}</div>
              </div>
              {/* Check selecionado */}
              {moment===m.id&&<div style={{position:"absolute",top:10,right:10,width:24,height:24,borderRadius:"50%",background:"var(--caramel)",display:"flex",alignItems:"center",justifyContent:"center"}}><Check size={12} strokeWidth={2.5} color="white"/></div>}
            </div>
          ))}
        </div>

        {/* Separador */}
        <div style={{fontSize:10,fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:14}}>Outros momentos</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:8}}>
          {MOMENTS.filter(m=>!m.main).map(m=>(
            <div key={m.id} onClick={()=>setMoment(m.id)}
              style={{borderRadius:16,overflow:"hidden",cursor:"pointer",position:"relative",
                border:`2px solid ${moment===m.id?"var(--caramel)":"transparent"}`,
                boxShadow:moment===m.id?"0 4px 20px rgba(184,149,106,.28)":"0 2px 10px rgba(0,0,0,.06)",
                transition:"all .22s",WebkitTapHighlightColor:"transparent",aspectRatio:"1/1"}}>
              <img src={IMGS[m.id]} alt={m.title}
                style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center"}}
                onError={e=>{e.target.style.display="none";}}/>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 30%,rgba(20,16,12,.78) 100%)"}}/>
              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"10px 12px 12px"}}>
                <div style={{fontFamily:"var(--serif)",fontSize:15,fontWeight:300,color:"white"}}>{m.title}</div>
              </div>
              {moment===m.id&&<div style={{position:"absolute",top:8,right:8,width:20,height:20,borderRadius:"50%",background:"var(--caramel)",display:"flex",alignItems:"center",justifyContent:"center"}}><Check size={10} strokeWidth={2.5} color="white"/></div>}
            </div>
          ))}
        </div>
        {!moment&&<div className="hint" style={{marginTop:10}}><span className="hd"/>Escolha um momento para continuar</div>}
      </div>
      <div style={{padding:"16px 28px 48px"}}>
        <button className="bp" disabled={!moment} onClick={()=>{
          if(moment==="dia")go(18);
          else if(savedCity){setCityInput(savedCity);setCityOk(true);if(moment==="viagem")go(30);else go(6);}
          else go(5);
        }}>Continuar</button>
      </div>
    </div>,

    // 5 — Cidade
    <div key="5">
      <div className="topbar">
        <button className="topbar-back" onClick={goBack}><ArrowLeft size={16}/></button>
        <div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div>
        <span className="step-n">2 de 4</span>
      </div>
      <div className="prog"><div className="prog-f" style={{width:"50%"}}/></div>
      <div className="pad" style={{paddingTop:22}}>
        <div className="eyebrow">Passo 2</div>
        <h2>Onde será?</h2>
        <p style={{marginBottom:24}}>Aqui a gente já descobre qual o clima do dia.</p>
        <div className="ac">
          <input className={`field${cityErr?" err":""}`} placeholder="Digite sua cidade…" value={cityInput} onChange={e=>onCityType(e.target.value)} autoComplete="off" autoCapitalize="words"/>
          {(citySuggs.length>0||(cityInput.length>=2&&!cityOk))&&(
            <div className="ac-list">
              {citySuggs.map(c=>(<div key={c} className="ac-item" onClick={()=>pickCity(c)}>{c}</div>))}
              {cityInput.length>=2&&(<div className="ac-free" onClick={useFreeCity}><MapPin size={13}/><span>Usar "<strong>{cityInput}</strong>"</span></div>)}
            </div>
          )}
        </div>
        {cityErr&&<div className="hint err"><span className="hd"/>Confirme ou selecione a cidade</div>}
        {cityOk&&<div className="hint ok"><span className="hd"/><Check size={11}/> {cityInput}</div>}
      </div>
      <div className="spacer"/>
      <div style={{padding:"0 28px 48px"}}><button className="bp" onClick={tryCity}>Continuar</button></div>
    </div>,

    // 6 — Data
    <div key="6" className="scroll-pb">
      <div className="topbar">
        <button className="topbar-back" onClick={goBack}><ArrowLeft size={16}/></button>
        <div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div>
        <span className="step-n">3 de 4</span>
      </div>
      <div className="prog"><div className="prog-f" style={{width:"75%"}}/></div>
      <div className="pad" style={{paddingTop:22}}>
        <div className="eyebrow">Passo 3</div>
        <h2>Quando você vai usar esse look?</h2>
        <div style={{height:8}}/>
        {!isViagem?(
          <div>
            <div className="dchips">
              {[{id:"hoje",l:"Hoje",s:todayLabel},{id:"amanha",l:"Amanhã",s:amanhaLabel},{id:"custom",l:"Outra",s:"data"}].map(d=>(
                <button key={d.id} className={`dchip${dateMode===d.id?" sel":""}`} onClick={()=>{setDateMode(d.id);if(d.id==="custom")setShowCal(true);}}>
                  <span className="dc-label">{d.l}</span><span className="dc-sub">{d.s}</span>
                </button>
              ))}
            </div>
            {dateMode==="custom"&&showCal&&<MiniCalendar value={customDate} minDate={today} onChange={(iso)=>{setCustomDate(iso);setShowCal(false);}}/>}
            {dateMode==="custom"&&customDate&&!showCal&&(
              <div className="date-confirm">
                <Calendar size={18} color="var(--caramel)"/>
                <span className="dc-text">{formatDate(customDate)}</span>
                <span className="dc-change" onClick={()=>setShowCal(true)}>Alterar</span>
              </div>
            )}
          </div>
        ):(
          <div>
            <p style={{fontSize:13,color:"var(--caramel)",fontWeight:500,marginBottom:14,display:"flex",alignItems:"center",gap:6}}><Plane size={13}/>Quando é sua viagem?</p>
            <div className="travel-grid">
              {[{label:"Saída",val:travelStart,setter:setTravelStart,min:today},{label:"Volta",val:travelEnd,setter:setTravelEnd,min:travelStart||today}].map(({label,val,setter,min})=>(
                <div key={label} className={`travel-card${val?" has-val":""}`} style={{position:"relative"}}>
                  <span className="travel-label">{label}</span>
                  <div className={`travel-val${!val?" empty":""}`}>{val?(()=>{const[,m,d]=val.split("-");return`${d}/${m}`;})():"— / —"}</div>
                  <input type="date" className="travel-input" min={min} value={val} onChange={e=>{setter(e.target.value);setDateMode("custom");}}/>
                </div>
              ))}
            </div>
          </div>
        )}
        {dateHint&&<div className="hint" style={{marginTop:14}}><span className="hd"/>{dateHint}</div>}
      </div>
      <div className="spacer"/>
      <div style={{padding:"0 28px 48px"}}>
        <button className="bp" disabled={!canDate} onClick={()=>{if(moment==="viagem")go(30);else go(7);}}>Continuar</button>
      </div>
    </div>,

    // 7 — Clima contextualizado
    <div key="7" style={{minHeight:"100dvh",display:"flex",flexDirection:"column",background:"var(--cream)"}}>
      <div className="topbar">
        <button className="topbar-back" onClick={goBack}><ArrowLeft size={16}/></button>
        <div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div>
        <span className="step-n">Clima</span>
      </div>
      <div className="prog"><div className="prog-f" style={{width:"85%"}}/></div>
      {(()=>{
        // Lógica de data
        const isAmanha = dateMode==="amanha";
        const isCustom = dateMode==="custom" && customDate;
        const dataLabel = isAmanha ? "amanhã"
          : isCustom ? `em ${formatDate(customDate).split(" de ")[0]} de ${formatDate(customDate).split(" de ")[1]}`
          : "hoje";

        // Lógica de horário por ocasião
        const periodoMap = {
          jantar:     {icone:"🌙", periodo:"noite",    desc:isAmanha?"A noite de amanhã vai estar mais fresca e agradável.":"A noite vai estar mais fresca e agradável."},
          almoco:     {icone:"☀️", periodo:"meio-dia", desc:isAmanha?"Amanhã ao meio-dia vai estar bem quente.":isCustom?`Na data escolhida, o meio do dia vai estar quente.`:"Ao meio-dia vai estar bem quente."},
          academia:   {icone:"🌤️", periodo:"dia todo", desc:isAmanha?"Amanhã vai estar quente durante todo o dia.":isCustom?"Na data escolhida o dia vai estar quente.":"O dia vai estar quente. Leve tecidos leves."},
          trabalho:   {icone:"☀️", periodo:"dia",      desc:isAmanha?"Amanhã vai estar quente durante o dia.":isCustom?"Na data escolhida o dia vai estar ensolarado.":"O dia vai estar quente e ensolarado."},
          fimdesemana:{icone:"🌤️", periodo:"tarde",    desc:isAmanha?"Amanhã vai estar agradável durante o dia.":isCustom?"Na data escolhida o dia vai estar bom.":"O dia vai estar agradável."},
          emcasa:     {icone:"☀️", periodo:"dia",      desc:isAmanha?"Amanhã vai estar quente.":"O dia vai estar quente."},
          viagem:     {icone:"🌤️", periodo:"variado",  desc:"Dias quentes com noites mais amenas. Considere camadas."},
          dia:        {icone:"☀️", periodo:"dia",      desc:isAmanha?"Amanhã vai estar quente e seco.":"O dia vai estar quente e seco."},
        };
        const ctx = periodoMap[moment||"dia"] || periodoMap.dia;

        // Frase contextualizada por data
        const fraseClima = isAmanha
          ? `${cs} amanhã: ${ctx.desc}`
          : isCustom
          ? `Na data escolhida em ${cs}: ${ctx.desc}`
          : `${cs} hoje: ${ctx.desc}`;

        return (
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"28px 28px"}}>
            {/* ÁUREA label */}
            <div style={{fontFamily:"var(--serif)",fontSize:10,fontWeight:400,letterSpacing:".28em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:24,textAlign:"center"}}>ÁUREA</div>

            {/* Card clima compacto */}
            <div style={{width:"100%",maxWidth:300,background:"var(--linen)",border:"1px solid var(--mist)",borderRadius:16,padding:"18px 22px",marginBottom:28}}>
              {/* Linha principal */}
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                <span style={{fontSize:20,flexShrink:0}}>{ctx.icone}</span>
                <div style={{flex:1}}>
                  <div style={{fontFamily:"var(--serif)",fontSize:15,fontWeight:300,color:"var(--ink)"}}>
                    {cs} · <span style={{fontSize:13,color:"#9a8878",fontWeight:300}}>{isAmanha?"amanhã":isCustom?dataLabel:"hoje"}</span>
                  </div>
                  <div style={{fontSize:12,fontWeight:300,color:"#9a8878",marginTop:2}}>28° · {ctx.periodo}</div>
                </div>
              </div>
              <div style={{width:"100%",height:1,background:"var(--mist)",marginBottom:12}}/>
              {/* Frase simples e direta */}
              <div style={{fontSize:13,fontWeight:300,color:"#5a5046",lineHeight:1.6}}>
                {fraseClima}
              </div>
            </div>

            {/* Loading */}
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:10,fontWeight:500,color:"var(--caramel)",letterSpacing:".16em",textTransform:"uppercase",marginBottom:12}}>Montando seu look</div>
              <div style={{display:"flex",gap:5,justifyContent:"center"}}>
                {[0,1,2].map(i=>(
                  <div key={i} style={{width:4,height:4,borderRadius:"50%",background:"var(--caramel)",opacity:.3+i*.25}}/>
                ))}
              </div>
            </div>
          </div>
        );
      })()}
      <div style={{padding:"0 28px 48px"}}>
        <button className="bp" onClick={()=>moment==="jantar"?go(22):go(8)}>Continuar →</button>
      </div>
    </div>,

    // 8 — Intensidade do look (slider)
    <div key="8" style={{minHeight:"100dvh",display:"flex",flexDirection:"column",background:"var(--cream)"}}>
      <div className="topbar">
        <button className="topbar-back" onClick={goBack}><ArrowLeft size={16}/></button>
        <div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div>
        <span className="step-n">4 de 4</span>
      </div>
      <div className="prog"><div className="prog-f" style={{width:"100%"}}/></div>
      {(()=>{
        const niveis = [
          {id:"leve",      emoji:"🌿", label:"Leve",       desc:"Natural, confortável e descomplicado"},
          {id:"equilibrado",emoji:"✨",label:"Equilibrado", desc:"Casual chic e bem resolvido"},
          {id:"presenca",  emoji:"🔥", label:"Presença",    desc:"Mais impacto, styling e informação de moda"},
        ];
        const atual = niveis[lookIntensity];

        // Exemplo contextualizado por ocasião + intensidade
        const exemploMap = {
          jantar:      ["Leve e chic para a noite","Elegante na medida certa","Look marcante e sofisticado"],
          almoco:      ["Leve e feminino","Bem arrumada sem esforço","Fashion e com presença"],
          trabalho:    ["Confortável e alinhada","Profissional e elegante","Impacto total no trabalho"],
          fimdesemana: ["Relaxada e bonita","Casual chic para o passeio","Estilosa e atual"],
          academia:    ["Clean e funcional","Esportivo e alinhado","Fashion fitness"],
          emcasa:      ["Conforto total","Arrumada e relaxada","Cozy chic sofisticado"],
          dia:         ["Effortless e prático","Chic no dia a dia","Produzida e com estilo"],
          viagem_look: ["Leve para viajar","Confortável e alinhada","Sofisticada em trânsito"],
        };
        const exemplos = exemploMap[moment||"dia"] || exemploMap.dia;

        return (
          <div style={{flex:1,display:"flex",flexDirection:"column",padding:"28px 28px 0"}}>
            <div style={{fontSize:10,fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:16}}>Intensidade do look</div>
            <h2 style={{fontFamily:"var(--serif)",fontSize:24,fontWeight:300,lineHeight:1.3,color:"var(--ink)",marginBottom:8}}>Qual é a intensidade do look hoje?</h2>
            <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:36,lineHeight:1.65}}>A Áurea ajusta o styling ao seu momento, do mais leve ao mais marcante.</p>

            {/* Preview do nível atual */}
            <div style={{textAlign:"center",marginBottom:36}}>
              <div style={{fontSize:40,marginBottom:12,transition:"all .3s"}}>{atual.emoji}</div>
              <div style={{fontFamily:"var(--serif)",fontSize:26,fontWeight:300,color:"var(--ink)",marginBottom:6,transition:"all .3s"}}>{atual.label}</div>
              <div style={{fontSize:13,fontWeight:300,color:"#9a8878",lineHeight:1.5,marginBottom:12}}>{atual.desc}</div>
              <div style={{display:"inline-block",padding:"6px 16px",borderRadius:20,background:"var(--linen)",border:"1px solid var(--mist)"}}>
                <span style={{fontSize:12,fontWeight:300,color:"var(--caramel)",fontStyle:"italic"}}>{exemplos[lookIntensity]}</span>
              </div>
            </div>

            {/* Slider */}
            <div style={{padding:"0 8px",marginBottom:24}}>
              <input type="range" min="0" max="2" step="1" value={lookIntensity}
                onChange={e=>{
                  const v=parseInt(e.target.value);
                  setLookIntensity(v);
                  setOccasionSubtype(niveis[v].id);
                  setFeeling([niveis[v].label]);
                  learnTone(niveis[v].id);
                }}
                style={{width:"100%",WebkitAppearance:"none",appearance:"none",height:3,borderRadius:2,
                  background:`linear-gradient(to right, var(--caramel) ${lookIntensity*50}%, var(--mist) ${lookIntensity*50}%)`,
                  outline:"none",cursor:"pointer"}}
              />
              {/* Labels */}
              <div style={{display:"flex",justifyContent:"space-between",marginTop:10}}>
                {niveis.map((n,i)=>(
                  <div key={n.id} onClick={()=>{setLookIntensity(i);setOccasionSubtype(n.id);setFeeling([n.label]);learnTone(n.id);}}
                    style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer",opacity:lookIntensity===i?1:.45,transition:"opacity .2s"}}>
                    <div style={{width:8,height:8,borderRadius:"50%",background:lookIntensity===i?"var(--caramel)":"var(--mist)",transition:"all .2s"}}/>
                    <div style={{fontSize:11,fontWeight:lookIntensity===i?500:300,color:lookIntensity===i?"var(--caramel)":"#9a8878",letterSpacing:".04em"}}>{n.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}
      <div style={{padding:"16px 28px 48px"}}>
        <button className="bp" onClick={()=>go(23)}>Ver meu look →</button>
      </div>
    </div>,

    // 9 — slot vazio
    <div key="9" style={{display:"none"}}/>,

    // 10 — REVELAÇÃO DO LOOK (redesenhada conforme doc)
    <div key="10" className="scroll-pb">
      {(()=>{
        const active=getActiveLookData();
        const editorialTitle=getEditorialTitle(editorialTitleIdx);
        const contextText=aureaContextText||getAureaContext(moment||"dia");
        const comentario=getAureaComentario(moment||"dia",occasionSubtype||"",savedCity);
        return (
          <>
            {/* ── 1. FOTO GRANDE DO LOOK ─────────────────────────── */}
            <div style={{position:"relative"}}>
              <img key={active.id} src={active.img} className="look-img look-active-img" alt={editorialTitle}/>
              <div style={{position:"absolute",top:16,left:0,right:0,display:"flex",justifyContent:"center",pointerEvents:"none"}}>
                <div style={{fontFamily:"var(--serif)",fontSize:11,fontWeight:400,letterSpacing:".2em",textTransform:"uppercase",color:"rgba(250,248,244,.85)",textShadow:"0 1px 6px rgba(0,0,0,.3)"}}>ÁUREA</div>
              </div>
            </div>

            <div style={{padding:"24px 28px 0"}}>

              {/* ── 2. TÍTULO EDITORIAL (sem repetir nome do filtro) ── */}
              <div style={{marginBottom:18}}>
                <h2 style={{fontStyle:"italic",fontSize:28,lineHeight:1.15,marginBottom:12,color:"var(--ink)"}}>
                  {editorialTitle}
                </h2>

                {/* ── 3. TEXTO DA ÁUREA ─────────────────────────────── */}
                <p style={{fontSize:14,fontWeight:300,color:"#7a6a5a",lineHeight:1.7,marginBottom:0,fontStyle:"italic",fontFamily:"var(--serif)"}}>
                  "{contextText}"
                </p>
              </div>

              {/* ── 4. COMENTÁRIO EDITORIAL DA ÁUREA ─────────────────── */}
              <div style={{marginBottom:20,padding:"16px 20px",background:"var(--linen)",borderRadius:"var(--rcard)",borderLeft:"3px solid var(--caramel)"}}>
                <p style={{fontSize:14,fontWeight:300,color:"#5a5046",lineHeight:1.75,margin:0,fontStyle:"italic",fontFamily:"var(--serif)"}}>
                  {getAureaComentario(moment||"dia", occasionSubtype||"", savedCity)}
                </p>
              </div>

              {/* ── CTAs ─────────────────────────────────────────────── */}
              <button className="bp" style={{marginBottom:10}} onClick={()=>{setSaveStep("choose");setShowSaveModal(true);}}>
                Gostei, vou usar →
              </button>
              <div style={{display:"flex",gap:8,marginBottom:20}}>
                <button style={{flex:1,padding:"11px 12px",background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--r)",fontSize:12,fontWeight:400,color:"var(--ink)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6,WebkitTapHighlightColor:"transparent",transition:"all .15s"}}
                  onClick={()=>{
                    setDislikedLooks(p=>[...p,activeLook||"principal"]);
                    const nextVar=allVariations.filter(v=>!dislikedLooks.includes(v.id))[0];
                    if(nextVar) setActiveLook(nextVar.id);
                    else showToast("Não tenho mais sugestões diferentes agora.");
                    setEditorialTitleIdx(i=>(i+1)%EDITORIAL_TITLES.length);
                    setAureaContextText(getAureaContext(moment||"dia"));
                  }}>
                  <RefreshCw size={13} color="var(--caramel)" strokeWidth={1.75}/> Ver outro look
                </button>
                <button style={{flex:1,padding:"11px 12px",background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--r)",fontSize:12,fontWeight:400,color:"var(--ink)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6,WebkitTapHighlightColor:"transparent",transition:"all .15s"}}
                  onClick={()=>requireAuth(()=>{saveLook({saveType:"saved"});showToast("Look salvo no seu Closet Áurea");})}>
                  <Bookmark size={13} color="var(--caramel)" strokeWidth={1.75}/> Salvar
                </button>
              </div>

              {/* ── Peças do look ──────────────────────────────────── */}
              <div style={{marginBottom:24}}>
                <div style={{fontSize:10,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:10}}>Peças do look</div>
                <div style={{display:"flex",flexDirection:"column",gap:7}}>
                  {getLookPieces().map(p=>(
                    <div key={p.id} style={{background:"var(--linen)",border:`1.5px solid ${ownedPieces[p.id]?"var(--caramel)":"var(--mist)"}`,borderRadius:"var(--rcard)",overflow:"hidden",transition:"border-color .2s"}}>
                      <div style={{padding:"11px 14px 7px",display:"flex",alignItems:"flex-start",gap:10}}>
                        <div style={{flex:1}}>
                          <div style={{fontFamily:"var(--serif)",fontSize:14,fontWeight:400,color:"var(--ink)",marginBottom:1}}>{p.name}</div>
                          <div style={{fontSize:11,fontWeight:300,color:"#b5a898",lineHeight:1.4}}>{p.hint}</div>
                        </div>
                        {ownedPieces[p.id]&&<div style={{flexShrink:0,width:18,height:18,borderRadius:"50%",background:"var(--caramel)",display:"flex",alignItems:"center",justifyContent:"center",marginTop:2}}><Check size={10} color="white" strokeWidth={2.5}/></div>}
                      </div>
                      <div style={{display:"flex",borderTop:"1px solid var(--mist)"}}>
                        <button style={{flex:1,padding:"9px 8px",background:ownedPieces[p.id]?"rgba(184,149,106,.08)":"transparent",border:"none",borderRight:"1px solid var(--mist)",fontSize:11,fontWeight:ownedPieces[p.id]?500:400,color:ownedPieces[p.id]?"var(--caramel)":"var(--ink)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,WebkitTapHighlightColor:"transparent",transition:"all .2s"}}
                          onClick={()=>{const next=!ownedPieces[p.id];setOwnedPieces(prev=>({...prev,[p.id]:next}));if(next){learnOwnedPiece(p.name,p.category);showToast("Salvo no Closet Áurea ✦");}}}>
                          {ownedPieces[p.id]?<Check size={12} color="var(--caramel)"/>:<Plus size={12}/>}
                          {ownedPieces[p.id]?"Tenho similar":"Tenho algo parecido"}
                        </button>
                        <button style={{flex:1,padding:"9px 8px",background:"transparent",border:"none",fontSize:11,fontWeight:400,color:"#9a8878",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,WebkitTapHighlightColor:"transparent"}}
                          onClick={()=>showToast("Buscando "+p.name)}>
                          <Search size={12}/> Buscar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {hasOwned&&(
                  <div style={{marginTop:10,padding:"10px 14px",background:"var(--linen)",border:"1px solid var(--mist)",borderRadius:"var(--rcard)",display:"flex",alignItems:"center",gap:8,animation:"slide-in-top .3s ease"}}>
                    <Check size={13} color="var(--caramel)" strokeWidth={2}/>
                    <p style={{fontSize:12,fontWeight:300,color:"#7a6a5a",margin:0,lineHeight:1.5,fontStyle:"italic"}}>Vou considerar essas peças nos próximos looks para você.</p>
                  </div>
                )}
              </div>

              <div style={{height:1,background:"var(--mist)",marginBottom:20}}/>

              {/* ── Ajustes que funcionam ────────────────────────── */}
              <div style={{marginBottom:24}}>
                <div style={{fontSize:10,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:4}}>Ajustes que funcionam</div>
                <p style={{fontSize:12,fontWeight:300,color:"#9a8878",marginBottom:16,lineHeight:1.6}}>Algumas mudanças sutis podem deixar o look ainda mais você.</p>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  {[
                    {Icon:Compass, title:"Para mais conforto",              tip:"Tênis branco ou sapatilha deixam a proposta mais prática e fácil de usar o dia todo."},
                    {Icon:Wind,    title:"Se a temperatura cair",            tip:"Um blazer leve ou tricô fino funciona super bem por cima."},
                    {Icon:Sparkles,title:"Para um toque mais sofisticado",   tip:"Acessórios dourados e uma bolsa estruturada elevam o visual."},
                    {Icon:Eye,     title:"Para uma proposta mais atual",     tip:"Texturas ou um ponto de cor deixam o look mais interessante."},
                  ].map((card,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"flex-start",gap:14,padding:"14px 16px",background:"var(--linen)",border:"1px solid var(--mist)",borderRadius:"var(--rcard)"}}>
                      <div style={{flexShrink:0,marginTop:2,color:"var(--caramel)"}}>
                        <card.Icon size={16} strokeWidth={1.5}/>
                      </div>
                      <div>
                        <div style={{fontSize:13,fontWeight:500,color:"var(--ink)",marginBottom:4}}>{card.title}</div>
                        <div style={{fontSize:12,fontWeight:300,color:"#7a6a5a",lineHeight:1.6}}>{card.tip}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn-action" style={{marginBottom:24}} onClick={()=>go(19)}>
                <span className="ba-icon"><Sparkles size={17}/></span>
                <span className="ba-text">
                  <span className="ba-title">Elevar ainda mais</span>
                  <span className="ba-sub">Acessórios e detalhes que transformam o look</span>
                </span>
              </button>

              {isViagem&&(
                <button className="bs" style={{marginBottom:24}} onClick={()=>requireAuth(()=>{saveLook({saveType:"saved"});showToast("Look adicionado à mala");})}>
                  <Luggage size={14} style={{marginRight:8}}/>Adicionar à mala de viagem
                </button>
              )}
              <div style={{height:32}}/>
            </div>

            <button className="back" onClick={goBack}><ArrowLeft size={16}/></button>

            {/* ── Modal salvar ──────────────────────────────────────── */}
            {showSaveModal&&(
              <div className="modal-overlay" onClick={()=>{setShowSaveModal(false);setSaveStep("choose");}}>
                <div className="modal-sheet" onClick={e=>e.stopPropagation()} style={{paddingBottom:52}}>
                  <div className="modal-handle"/>

                  {saveStep==="choose"&&(
                    <>
                      <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:22,padding:"12px 16px",background:"var(--linen)",borderRadius:"var(--rcard)",border:"1.5px solid var(--caramel)"}}>
                        <img src={active.img} alt="" style={{width:52,height:64,objectFit:"cover",borderRadius:10,flexShrink:0}}/>
                        <div style={{flex:1}}>
                          <div style={{fontSize:10,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:3}}>Seu look</div>
                          <div style={{fontFamily:"var(--serif)",fontSize:16,fontWeight:400,color:"var(--ink)",marginBottom:2}}>{editorialTitle}</div>
                          <div style={{fontSize:11,fontWeight:300,color:"#9a8878"}}>{cs}</div>
                        </div>
                        <div style={{width:8,height:8,borderRadius:"50%",background:"var(--caramel)",flexShrink:0}}/>
                      </div>

                      <h2 style={{fontSize:22,marginBottom:4}}>Quer guardar esse look?</h2>
                      <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:6,lineHeight:1.5}}>Crie sua conta para salvar:</p>
                      <div style={{display:"flex",flexDirection:"column",gap:3,marginBottom:20,paddingLeft:4}}>
                        {["looks favoritos","peças do seu closet","looks agendados","preferências da Áurea"].map((item,i)=>(
                          <div key={i} style={{display:"flex",alignItems:"center",gap:7,fontSize:12,fontWeight:300,color:"#7a6a5a"}}>
                            <div style={{width:4,height:4,borderRadius:"50%",background:"var(--caramel)",flexShrink:0}}/>
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="stack">
                        <div style={{background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--rcard)",overflow:"hidden",cursor:"pointer",WebkitTapHighlightColor:"transparent"}} onClick={()=>setSaveStep("calendar")}>
                          <div style={{padding:"16px 18px",display:"flex",gap:14,alignItems:"center"}}>
                            <div style={{width:40,height:40,borderRadius:"50%",background:"var(--ink)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Calendar size={18} color="white" strokeWidth={1.5}/></div>
                            <div style={{flex:1}}>
                              <div style={{fontFamily:"var(--serif)",fontSize:16,fontWeight:400,color:"var(--ink)",marginBottom:3}}>Usar em uma data</div>
                              <div style={{fontSize:12,fontWeight:300,color:"#9a8878",lineHeight:1.4}}>Receba um lembrete antes do compromisso.</div>
                            </div>
                            <ChevronRight size={16} color="var(--nude)"/>
                          </div>
                        </div>
                        <div style={{background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--rcard)",overflow:"hidden",cursor:"pointer",WebkitTapHighlightColor:"transparent"}}
                          onClick={()=>requireAuth(()=>{saveLook({saveType:"saved"});setSaveStep("done");})}>
                          <div style={{padding:"16px 18px",display:"flex",gap:14,alignItems:"center"}}>
                            <div style={{width:40,height:40,borderRadius:"50%",background:"var(--linen)",border:"1.5px solid var(--nude)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Bookmark size={18} color="var(--caramel)" strokeWidth={1.5}/></div>
                            <div style={{flex:1}}>
                              <div style={{fontFamily:"var(--serif)",fontSize:16,fontWeight:400,color:"var(--ink)",marginBottom:3}}>Salvar para depois</div>
                              <div style={{fontSize:12,fontWeight:300,color:"#9a8878",lineHeight:1.4}}>Guardar no Closet Áurea para usar outro dia.</div>
                            </div>
                            <ChevronRight size={16} color="var(--nude)"/>
                          </div>
                        </div>
                      </div>
                      <button style={{display:"block",width:"100%",marginTop:16,padding:"12px",background:"none",border:"none",fontSize:13,fontWeight:300,color:"#c0b8ae",cursor:"pointer",textAlign:"center"}}
                        onClick={()=>{saveLook({saveType:"used"});setShowSaveModal(false);setSaveStep("choose");setLookOfDay({time:"agora",img:active.img,occasion:moment,proposal:editorialTitle});showToast("Look marcado como look do dia");}}>
                        Agora não
                      </button>
                    </>
                  )}

                  {saveStep==="calendar"&&(
                    <>
                      <button style={{background:"none",border:"none",color:"var(--nude)",cursor:"pointer",padding:"0 0 16px",display:"flex",alignItems:"center",gap:6,fontSize:13}} onClick={()=>setSaveStep("choose")}><ArrowLeft size={15}/> Voltar</button>
                      <h2 style={{fontSize:22,marginBottom:4}}>Quando vai usar?</h2>
                      <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:20,lineHeight:1.5}}>Escolha a data e a Áurea te lembra na hora certa.</p>
                      <MiniCalendar value={saveCalDate} minDate={new Date().toISOString().split("T")[0]} onChange={d=>setSaveCalDate(d)}/>
                      {saveCalDate&&(
                        <div style={{marginTop:14}}>
                          <div style={{fontSize:11,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:10}}>Horário (opcional)</div>
                          <input type="time" className="field" value={saveCalTime} onChange={e=>setSaveCalTime(e.target.value)} style={{marginBottom:0}}/>
                        </div>
                      )}
                      <button className="bp" disabled={!saveCalDate} style={{marginTop:20}}
                        onClick={()=>{saveLook({saveType:"scheduled",schedDate:saveCalDate,schedTime:saveCalTime||"agora"});setLookOfDay({time:saveCalTime||"agora",img:active.img,occasion:moment,proposal:editorialTitle});setSaveStep("done");}}>
                        Salvar e programar lembrete
                      </button>
                    </>
                  )}

                  {saveStep==="done"&&(
                    <div style={{textAlign:"center",paddingTop:8}}>
                      <div style={{width:64,height:64,borderRadius:"50%",background:"var(--caramel)",margin:"0 auto 20px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(184,149,106,.35)"}}><Check size={26} color="white" strokeWidth={2}/></div>
                      <h2 style={{fontSize:26,marginBottom:8}}>Look salvo no seu<br/>Closet Áurea.</h2>
                      <p style={{fontSize:14,fontWeight:300,color:"#9a8878",lineHeight:1.7,marginBottom:28}}>{saveCalDate?"Te lembro antes do compromisso.":"Disponível quando precisar."}</p>
                      <div style={{display:"flex",gap:10}}>
                        <button className="bs" style={{flex:1,fontSize:13}} onClick={()=>{setShowSaveModal(false);setSaveStep("choose");switchTab("inicio");}}>Ir para Início</button>
                        <button className="bp" style={{flex:1,fontSize:13}} onClick={()=>{setShowSaveModal(false);setSaveStep("choose");setMoment(null);setDateMode(null);setCustomDate("");setFeeling([]);setActiveLook(null);setExtraVariations([]);setOwnedPieces({});setSaveCalDate("");setSaveCalTime("");setOccasionSubtype(null);setLookVariantIdx(0);setDislikedLooks([]);go(4);}}>Novo look</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        );
      })()}
    </div>,

    // 11, 12 — slots
    <div key="11" style={{display:"none"}}/>,
    <div key="12" style={{display:"none"}}/>,

    // 13 — HOME (sem "Usar o que eu já tenho" no hero, com clima natural)
    <div key="13" className="scroll-pb has-nav">
      <div className="pad" style={{paddingTop:36}}>
        <div className="logo" style={{marginBottom:4}}>ÁUREA</div>
        {isLoggedIn&&name.trim()?(
          <div className="home-greeting">Olá, {dn}.<br/><span style={{fontSize:20,fontWeight:300,color:"#9a8878"}}>Como posso te ajudar hoje?</span></div>
        ):!hasOnboarded?(
          <div><div className="home-greeting">Bem-vinda à<br/><em>Áurea.</em></div><p style={{fontSize:14,fontWeight:300,color:"#9a8878",marginBottom:8,lineHeight:1.6}}>Em menos de 1 minuto, seu look resolvido.</p></div>
        ):(
          <div className="home-greeting">{name.trim()?<>{greeting()}, {dn}.</>:<>{greeting()}.</>}</div>
        )}
        <div className="home-date">{fullDate}</div>

        {lookOfDay&&(
          <div className="seu-dia-card" onClick={()=>go(10)}>
            <div className="seu-dia-header"><span className="seu-dia-label">Seu dia</span><span className="seu-dia-time">{{agora:"Agora",manha:"Manhã",tarde:"Tarde",noite:"Noite"}[lookOfDay.time]||lookOfDay.time}</span></div>
            <div className="seu-dia-body"><img src={lookOfDay.img||IMGS.evento} className="seu-dia-img" alt=""/><div className="seu-dia-info"><div className="seu-dia-occasion">{OCC_LABEL[lookOfDay.occasion]||lookOfDay.occasion}</div><div className="seu-dia-proposal">{lookOfDay.proposal}</div><div className="seu-dia-btn">Ver look <ChevronRight size={11}/></div></div></div>
          </div>
        )}

        {/* Clima natural, sem pergunta */}
        {savedCity&&(
          <div className="weather-mini">
            <Sun size={24} color="#F0A500" strokeWidth={1.5}/>
            <div className="wm-info"><div className="wm-city">{cs}</div><div className="wm-desc">Hoje está quente em {cs} — looks leves em destaque</div></div>
            <div className="wm-temp">28°</div>
          </div>
        )}

        {/* Look sem pensar */}
        <div style={{borderRadius:"var(--rcard)",overflow:"hidden",marginBottom:20,background:"var(--linen)",border:"1.5px solid var(--mist)"}}>
          <div style={{padding:"18px 20px 14px"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
              <Zap size={16} color="var(--caramel)" strokeWidth={1.75}/>
              <span style={{fontFamily:"var(--serif)",fontSize:18,fontWeight:400,color:"var(--ink)"}}>Look sem pensar</span>
            </div>
            <p style={{fontSize:13,fontWeight:300,color:"#9a8878",lineHeight:1.5,margin:"0 0 14px"}}>Uma ideia rápida e estilosa pra hoje.</p>
            <button className="bp" style={{fontSize:13,padding:"13px 20px"}} onClick={()=>{setQuickTone(null);setQuickLookIdx(0);go(28);}}>
              Gerar look
            </button>
          </div>
        </div>

        <button className="btn-hero" onClick={()=>{setTab("aurea");go(15);}}>
          <div>
            <div style={{fontSize:10,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",opacity:.6,marginBottom:4}}>Montar um look</div>
            <span>Resolva o que vestir<br/><em>agora</em></span>
          </div>
          <ArrowRight size={22} strokeWidth={1.5}/>
        </button>

        <div style={{display:"flex",alignItems:"center",gap:14,padding:"16px 18px",background:"linear-gradient(135deg,var(--espresso) 0%,#3a2e28 100%)",borderRadius:"var(--r)",marginBottom:28,cursor:"pointer",WebkitTapHighlightColor:"transparent"}} onClick={()=>setPremiumInterest(true)}>
          <div style={{flex:1}}>
            <div style={{fontSize:10,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"#C9A84C",marginBottom:4}}>Áurea+</div>
            <div style={{fontFamily:"var(--serif)",fontSize:18,fontWeight:300,fontStyle:"italic",color:"white",lineHeight:1.2}}>Looks da semana prontos</div>
          </div>
          <div style={{padding:"6px 12px",background:"rgba(201,168,76,.15)",border:"1px solid #C9A84C",borderRadius:20,fontSize:11,fontWeight:500,color:"#C9A84C",whiteSpace:"nowrap"}}>Em breve</div>
        </div>

        <div className="section-title">Atalhos</div>
        <div className="shortcut-grid" style={{marginBottom:28}}>
          {[{Icon:Sun,title:"Dia a dia",sub:"casual e bonito",id:"dia"},{Icon:Briefcase,title:"Trabalho",sub:"look para o dia",id:"trabalho"},{Icon:Utensils,title:"Jantar",sub:"noite especial",id:"jantar"},{Icon:Plane,title:"Viagem",sub:"montar a mala",id:"viagem"}].map(s=>(
            <div key={s.title} className="shortcut-card" onClick={()=>{setMoment(s.id);if(s.id==="dia")go(18);else if(savedCity){setCityInput(savedCity);setCityOk(true);if(s.id==="viagem")go(30);else go(6);}else go(5);}}>
              <div className="sc-icon"><s.Icon size={18} strokeWidth={1.5}/></div>
              <span className="sc-title">{s.title}</span><span className="sc-sub">{s.sub}</span>
            </div>
          ))}
        </div>

        {savedLooks.length>0&&(
          <>
            <div className="section-title">Recentes</div>
            <div className="stack">
              {savedLooks.slice(0,3).map(lk=>(
                <div key={lk.id} style={{display:"flex",alignItems:"stretch",background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--rcard)",overflow:"hidden",cursor:"pointer"}} onClick={()=>go(10)}>
                  <img src={lk.img} alt="" style={{width:72,height:90,objectFit:"cover",flexShrink:0}}/>
                  <div style={{padding:"12px 14px",flex:1}}>
                    <div style={{fontSize:9,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:3}}>{OCC_LABEL[lk.occasion]||lk.occasion}</div>
                    <div style={{fontFamily:"var(--serif)",fontSize:14,fontWeight:400,color:"var(--ink)",marginBottom:2}}>{lk.label}</div>
                    <div style={{fontSize:11,fontWeight:300,color:"#9a8878"}}>{(lk.city||"").split(",")[0]}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>,

    // 14 — CLOSET ÁUREA (redesenhado conforme doc)
    <div key="14" className="scroll-pb has-nav">
      <div className="pad" style={{paddingTop:36}}>
        <div style={{marginBottom:28}}>
          <div className="logo" style={{marginBottom:6}}>ÁUREA</div>
          <div style={{fontFamily:"var(--serif)",fontSize:26,fontWeight:300,color:"var(--ink)",marginBottom:4}}>Seu espaço na Áurea</div>
          <p style={{fontSize:13,fontWeight:300,color:"#9a8878",lineHeight:1.5,margin:0}}>Tudo que você salvou, organizou e a Áurea aprendeu.</p>
        </div>

        {/* ── 1. LOOKS AGENDADOS ──────────────────────────────── */}
        <div className="closet-section">
          <div className="closet-sec-header">
            <span className="closet-sec-title">Looks agendados</span>
            {scheduledLooks.length>0&&<span className="closet-sec-count">{scheduledLooks.length}</span>}
          </div>
          {scheduledLooks.length===0?(
            <div className="cl-empty">
              <Calendar size={28} color="var(--nude)" strokeWidth={1} className="cl-empty-icon"/>
              <p className="cl-empty-text">Nenhum look agendado ainda.<br/>Ao salvar um look com data, ele aparece aqui.</p>
            </div>
          ):(
            scheduledLooks.slice().sort((a,b)=>new Date(a.schedDate)-new Date(b.schedDate)).map((lk,i)=>(
              <div key={lk.id} className="cl-card" style={{animationDelay:`${i*60}ms`}}
                onClick={()=>{setMoment(lk.occasion);setCityInput(lk.city||"");setCityOk(!!lk.city);if(lk.city)setSavedCity(lk.city);go(10);}}>
                <img src={lk.img||IMGS.evento} className="cl-card-img" alt=""/>
                <div className="cl-card-body">
                  <div>
                    <div className="cl-card-eyebrow">{OCC_LABEL[lk.occasion]||lk.occasion}</div>
                    <div className="cl-card-title">{lk.label||lk.tone||"Look"}</div>
                    {/* "Agendado para X" — nunca "Usado em X" */}
                    <div style={{display:"flex",alignItems:"center",gap:6,marginTop:5}}>
                      <span className="cl-chip sched">
                        <Calendar size={9} style={{display:"inline",marginRight:3}}/>
                        Agendado para {fmtDateShort(lk.schedDate)}{lk.schedTime?" · "+fmtTimeLabel(lk.schedTime):""}
                      </span>
                    </div>
                  </div>
                  <div className="cl-card-chips" style={{marginTop:6}}>
                    {(lk.pieces||[]).slice(0,2).map((p,j)=><span key={j} className="cl-chip">{p}</span>)}
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",paddingRight:12}}>
                  <button style={{padding:"6px 10px",background:"transparent",border:"1px solid var(--mist)",borderRadius:12,fontSize:10,fontWeight:400,color:"#9a8878",cursor:"pointer",whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"}}
                    onClick={e=>{e.stopPropagation();setSavedLooks(p=>p.filter(l=>l.id!==lk.id));showToast("Look removido da agenda");}}>
                    Remover
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ── 2. LOOKS SALVOS ──────────────────────────────────── */}
        <div className="closet-section">
          <div className="closet-sec-header">
            <span className="closet-sec-title">Looks salvos</span>
            {inspirationLooks.length>0&&<span className="closet-sec-count">{inspirationLooks.length}</span>}
          </div>
          <p className="closet-sec-sub">Looks para usar outro dia ou como inspiração.</p>
          {inspirationLooks.length===0?(
            <div className="cl-empty">
              <Bookmark size={28} color="var(--nude)" strokeWidth={1} className="cl-empty-icon"/>
              <p className="cl-empty-text">Nenhum look salvo ainda.<br/>Ao salvar uma inspiração, ela aparece aqui.</p>
            </div>
          ):(
            inspirationLooks.map((lk,i)=>(
              <div key={lk.id} className="cl-card" style={{animationDelay:`${i*60}ms`}}
                onClick={()=>{setMoment(lk.occasion);setCityInput(lk.city||"");setCityOk(!!lk.city);if(lk.city)setSavedCity(lk.city);go(10);}}>
                <img src={lk.img||IMGS.evento} className="cl-card-img" alt=""/>
                <div className="cl-card-body">
                  <div>
                    <div className="cl-card-eyebrow">{OCC_LABEL[lk.occasion]||lk.occasion}</div>
                    <div className="cl-card-title">{lk.label||lk.tone||"Look"}</div>
                    <div className="cl-card-meta">Salvo para inspiração</div>
                  </div>
                  <div className="cl-card-chips">
                    {(lk.pieces||[]).slice(0,2).map((p,j)=><span key={j} className="cl-chip">{p}</span>)}
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",paddingRight:12}}>
                  <ChevronRight size={15} color="var(--nude)"/>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ── 3. PEÇAS DO MEU CLOSET ────────────────────────────── */}
        <div className="closet-section">
          <div className="closet-sec-header">
            <span className="closet-sec-title">Peças do meu closet</span>
            {confirmedPiecesCount>0&&<span className="closet-sec-count">{confirmedPiecesCount} {confirmedPiecesCount===1?"peça":"peças"}</span>}
          </div>
          <p className="closet-sec-sub">Peças que você marcou como "Tenho algo parecido".</p>
          {confirmedPiecesCount===0?(
            <div className="cl-empty">
              <Shirt size={28} color="var(--nude)" strokeWidth={1} className="cl-empty-icon"/>
              <p className="cl-empty-text">Nenhuma peça adicionada ainda.<br/>Ao marcar "Tenho algo parecido" em um look, as peças aparecem aqui.</p>
            </div>
          ):(
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {Object.entries(closetMemory.pieces).flatMap(([cat,pieces])=>
                pieces.filter(p=>p.confirmed).map((p,i)=>({...p,cat}))
              ).map((p,i)=>{
                const catLabel={bottom:"Parte de baixo",top:"Parte de cima",full:"Vestido / conjunto",shoes:"Calçado",bag:"Bolsa",accessory:"Acessório",other:"Peça"}[p.cat]||"Peça";
                return (
                  <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--rcard)"}}>
                    <div style={{width:40,height:40,borderRadius:"var(--rcard)",background:"var(--mist)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <Shirt size={18} color="var(--caramel)" strokeWidth={1.5}/>
                    </div>
                    <div style={{flex:1}}>
                      <div style={{fontFamily:"var(--serif)",fontSize:14,fontWeight:400,color:"var(--ink)",marginBottom:2}}>{p.name}</div>
                      <div style={{fontSize:10,fontWeight:500,letterSpacing:".08em",textTransform:"uppercase",color:"var(--nude)"}}>{catLabel}</div>
                    </div>
                    <Check size={14} color="var(--caramel)" strokeWidth={2}/>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── 4. ESTILO NA ÁUREA (sem chips técnicos, leitura humana) ── */}
        <div className="closet-section">
          <div className="closet-sec-header">
            <span className="closet-sec-title">Estilo na Áurea</span>
          </div>
          {memoryLevel==="new"?(
            <div className="cl-empty">
              <Sparkles size={28} color="var(--nude)" strokeWidth={1} className="cl-empty-icon"/>
              <p className="cl-empty-text">A Áurea ainda está te conhecendo.<br/>Use o app para ela ir percebendo seu estilo.</p>
            </div>
          ):(
            <div style={{padding:"18px 20px",background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--rcard)"}}>
              <div style={{fontSize:12,fontWeight:300,color:"#5a5046",lineHeight:1.8,fontStyle:"italic",fontFamily:"var(--serif)",marginBottom:topTones.length>0?14:0}}>
                "A Áurea percebeu que você gosta de looks {topTones[0]||"bem resolvidos"}{topTones[1]?` e ${topTones[1]}`:""}
                {topOccasions.length>0?` — principalmente para ${topOccasions.join(" e ")}`:""}."
              </div>
              {confirmedPiecesCount>=2&&(
                <div style={{display:"flex",alignItems:"center",gap:10,paddingTop:12,borderTop:"1px solid var(--mist)"}}>
                  <div style={{width:28,height:28,borderRadius:"50%",background:"var(--caramel)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <Sparkles size={13} color="white" strokeWidth={1.5}/>
                  </div>
                  <div style={{flex:1,fontSize:12,fontWeight:300,color:"#7a6a5a"}}>Com {confirmedPiecesCount} peças confirmadas, a Áurea já consegue sugerir combinações para você.</div>
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{height:1,background:"var(--mist)",marginBottom:20}}/>
        <button className="bp" style={{marginBottom:32}} onClick={()=>{setTab("aurea");go(15);}}>Montar um look →</button>
      </div>
    </div>,

    // 15 — Áurea hub (sem "Evento", com clima natural, sem "Usar o que eu já tenho" no corpo)
    <div key="15" className="scroll-pb has-nav">
      <div className="pad" style={{paddingTop:32}}>
        <div className="logo" style={{marginBottom:20}}>ÁUREA</div>
        <h2 style={{fontSize:28,marginBottom:4,lineHeight:1.2}}>Pra onde você vai{name.trim()?`, ${dn}`:""}?</h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:16,lineHeight:1.5}}>Escolha o momento e a Áurea monta uma proposta para você.</p>

        {/* Clima natural — sem pergunta */}
        {savedCity&&(
          <div style={{display:"flex",alignItems:"center",gap:8,padding:"10px 14px",background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:40,marginBottom:24}}>
            <Sun size={15} color="var(--caramel)" strokeWidth={1.5}/>
            <span style={{fontSize:12,fontWeight:300,color:"#5a5046"}}>Hoje está quente em {savedCity.split(",")[0]} — vou considerar isso no look.</span>
          </div>
        )}

        {/* Grade de categorias — sem "Evento" */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
          {[{id:"dia",img:IMGS.dia,title:"Dia a dia",sub:"Leve e bonito sem esforço"},{id:"trabalho",img:IMGS.trabalho,title:"Trabalho",sub:"Presença na medida certa"},{id:"almoco",img:IMGS.almoco,title:"Almoço",sub:"Arrumada sem exagero"},{id:"jantar",img:IMGS.jantar,title:"Jantar",sub:"Bonita sem exagero"}].map(m=>(
            <div key={m.id} onClick={()=>{setMoment(m.id);if(m.id==="dia")go(18);else if(savedCity){setCityInput(savedCity);setCityOk(true);go(6);}else go(5);}} style={{borderRadius:"var(--rcard)",overflow:"hidden",cursor:"pointer",border:"1.5px solid var(--mist)",WebkitTapHighlightColor:"transparent"}}>
              <div style={{position:"relative",height:130}}>
                <img src={m.img} alt={m.title} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:"brightness(.78) saturate(.88)"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 30%,rgba(28,23,20,.7) 100%)",padding:"10px 12px",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
                  <div style={{fontFamily:"var(--serif)",fontSize:16,fontWeight:400,color:"white",marginBottom:2}}>{m.title}</div>
                  <div style={{fontSize:10,fontWeight:300,color:"rgba(255,255,255,.75)"}}>{m.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outros momentos como pills */}
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:20}}>
          {[{id:"fimdesemana",label:"Fim de semana"},{id:"viagem",label:"Viagem"},{id:"academia",label:"Treino"},{id:"emcasa",label:"Em casa"}].map(m=>(
            <button key={m.id} style={{padding:"9px 16px",border:"1.5px solid var(--mist)",borderRadius:40,fontSize:13,fontWeight:300,color:"var(--ink)",background:"var(--linen)",cursor:"pointer",WebkitTapHighlightColor:"transparent"}}
              onClick={()=>{setMoment(m.id);if(m.id==="viagem")go(30);else if(savedCity){setCityInput(savedCity);setCityOk(true);go(6);}else go(5);}}>{m.label}</button>
          ))}
        </div>

        {/* Ver tudo */}
        <button className="bp" style={{marginBottom:16}} onClick={()=>go(4)}>Ver todos os momentos →</button>
        <div style={{height:16}}/>
      </div>
    </div>,

    // 16 — Mala (fluxo separado de looks do dia, sem "Como quer guardar?")
    <div key="16" className="scroll-pb has-nav">
      {savedLooks.filter(l=>l.occasion==="viagem").length===0&&!malaType?(
        <div>
          <div className="mala-hero"><div className="mala-hero-icon"><Luggage size={40} strokeWidth={1}/></div><div className="mala-hero-text"><h2>Monte sua mala inteligente</h2><p>Looks por dia, checklist e combinações inteligentes</p></div></div>
          <div className="pad" style={{paddingTop:28}}>
            <h2 style={{marginBottom:6}}>Como você vai viajar?</h2>
            <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:24,lineHeight:1.5}}>Isso define a quantidade de peças e a variedade de looks.</p>
            <div className="mala-type-grid">
              {[{id:"mao",Icon:ShoppingBag,title:"Mala de mão",sub:"Menos peças, mais combinações"},{id:"despachada",Icon:Luggage,title:"Mala despachada",sub:"Mais variedade e conforto"}].map(t=>(
                <div key={t.id} className={`mala-type-card${malaType===t.id?" sel":""}`} onClick={()=>setMalaType(t.id)}>
                  <div className="mala-type-icon"><t.Icon size={32} strokeWidth={1}/></div>
                  <div className="mala-type-title">{t.title}</div>
                  <div className="mala-type-sub">{t.sub}</div>
                  {malaType===t.id&&<div style={{marginTop:10,fontSize:11,fontWeight:500,color:"var(--caramel)",letterSpacing:".08em"}}>SELECIONADO</div>}
                </div>
              ))}
            </div>
            <button className="bp" disabled={!malaType} onClick={()=>{setMoment("viagem");go(5);}}>Montar minha mala →</button>
          </div>
        </div>
      ):(
        <div>
          <div className="mala-hero"><div className="mala-hero-icon"><Plane size={36} strokeWidth={1}/></div><div className="mala-hero-text"><h2>Sua mala está pronta</h2><p>Looks por dia, organizados com inteligência</p></div></div>
          <div className="pad" style={{paddingTop:24}}>
            <div className="mala-motto"><p>"{malaType==="mao"?"Menos peças, mais possibilidades":"Tudo combina entre si — sua mala pensada com intenção"}"</p></div>
            <div className="section-title" style={{marginBottom:14}}>Looks por dia</div>

            {/* Estrutura por dia — aspecto de planejamento de viagem */}
            {savedLooks.filter(l=>l.occasion==="viagem").length>0?(
              savedLooks.filter(l=>l.occasion==="viagem").map((lk,i)=>(
                <div key={lk.id} className="mala-day-card">
                  <div className="mala-day-header">
                    <span className="mala-day-num">
                      {i===0?"✈️ Aeroporto":`☀️ Dia ${i+1}`}
                    </span>
                    <span style={{fontSize:11,fontWeight:300,color:"#9a8878"}}>Look adicionado à viagem</span>
                  </div>
                  <div className="mala-day-body">
                    <img src={lk.img||IMGS.viagem} className="mala-day-img" alt=""/>
                    <div className="mala-day-info">
                      <div className="mala-day-proposal">{lk.label||"Look da viagem"}</div>
                      <div className="mala-day-actions">
                        {[{label:"Ajustar",action:()=>setShowAdjust(true)},{label:"Substituir",action:()=>go(10)}].map(btn=>(
                          <button key={btn.label} style={{padding:"5px 12px",border:"1px solid var(--nude)",borderRadius:20,fontSize:11,color:"var(--ink)",background:"transparent",cursor:"pointer"}} onClick={btn.action}>{btn.label}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ):(
              <div style={{textAlign:"center",padding:"20px 0"}}>
                <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:14}}>Monte sua viagem completa</p>
                <button className="bs" onClick={()=>{setMoment("viagem");go(5);}}>Gerar looks da viagem →</button>
              </div>
            )}

            <div className="section-divider"/>
            <div className="section-title" style={{marginBottom:14}}>Checklist essencial</div>
            {[{group:"Roupas",items:["Looks do dia","Peça coringa extra","Roupa de dormir"]},{group:"Necessários",items:["Documentos","Carregadores","Adaptador de tomada","Seguro viagem"]},{group:"Extras",items:["Protetor solar","Medicamentos","Óculos de sol","Guarda-chuva"]}].map((group,gi)=>(
              <div key={gi} style={{marginBottom:16}}>
                <div style={{fontSize:11,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:8}}>{group.group}</div>
                {group.items.map(item=>(
                  <div key={item} className="check-item" onClick={()=>toggleCheck("mala-"+item)}>
                    <div className={`ci-box${checklist["mala-"+item]?" done":""}`}>{checklist["mala-"+item]?<Check size={11} strokeWidth={2.5}/>:""}</div>
                    <div className={`ci-text${checklist["mala-"+item]?" done":""}`}>{item}</div>
                  </div>
                ))}
              </div>
            ))}
            <div style={{height:16}}/>
          </div>
        </div>
      )}
    </div>,

    // 17 — Inspiração
    <div key="17" className="scroll-pb has-nav">
      <div className="inspo-hero" style={{marginTop:0}}><img src={IMGS.evento} alt=""/><div className="inspo-hero-overlay"><div style={{fontSize:10,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"rgba(255,255,255,.65)",marginBottom:8}}>Editorial · Hoje</div><div className="inspo-hero-title">Alfaiataria<br/>relaxada</div><div className="inspo-hero-sub">Como usar blazers oversized no dia a dia</div></div></div>
      <div className="inspo-pills">{["Todos","Looks","Tendências","Como usar","Vale investir"].map((cat,i)=>(<button key={cat} className={`inspo-pill${i===0?" active":""}`}>{cat}</button>))}</div>
      <div className="pad" style={{paddingTop:8}}>
        <div className="section-title" style={{marginBottom:14}}>Em destaque</div>
        {[{img:IMGS.trabalho,cat:"Tendência",title:"Alfaiataria relaxada",text:"Blazers oversized + calça wide leg = elegância sem esforço",tag:"trabalho"},{img:IMGS.dia,cat:"Como usar",title:"A camisa branca perfeita",text:"A peça que eleva qualquer combinação",tag:"dia"},{img:IMGS.jantar,cat:"Looks",title:"Noite especial sem exageros",text:"Elegância está nos detalhes",tag:"jantar"}].map((card,i)=>(
          <div key={i} className="editorial-card">
            <div style={{position:"relative"}}><img src={card.img} alt=""/><div style={{position:"absolute",top:12,left:14,background:"rgba(28,23,20,.6)",borderRadius:20,padding:"4px 12px",backdropFilter:"blur(4px)"}}><span style={{fontSize:10,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"white"}}>{card.cat}</span></div></div>
            <div className="editorial-card-body"><div className="editorial-card-title">{card.title}</div><div className="editorial-card-text">{card.text}</div><button className="editorial-card-cta" onClick={()=>{setMoment(card.tag);if(savedCity){setCityInput(savedCity);setCityOk(true);go(8);}else go(5);}}>Montar look com essa ideia <ArrowRight size={12}/></button></div>
          </div>
        ))}
        <div className="section-divider"/>
        <div className="section-title" style={{marginBottom:14}}>Vale investir</div>
        <div className="vale-grid">{[{img:IMGS.trabalho,label:"Blazer oversized"},{img:IMGS.almoco,label:"Sandália minimalista"},{img:IMGS.evento,label:"Bolsa estruturada"},{img:IMGS.dia,label:"Camisa branca"},{img:IMGS.jantar,label:"Calça de alfaiataria"},{img:IMGS.viagem,label:"Casaco neutro"}].map((item,i)=>(<div key={i} className="vale-item" onClick={()=>showToast("Montar look com "+item.label+" →")}><img src={item.img} alt=""/><div className="vale-item-label">{item.label}</div></div>))}</div>
        <div style={{height:16}}/>
      </div>
    </div>,

    // 18 — Dia a dia: TELA 1 — MOOD DO DIA
    <div key="18" className="scroll-pb" style={{background:"var(--cream)"}}>
      <div className="topbar"><button className="topbar-back" onClick={goBack}><ArrowLeft size={16}/></button><div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div><span className="step-n">1 de 2</span></div>
      <div className="prog"><div className="prog-f" style={{width:"50%"}}/></div>
      <div className="pad" style={{paddingTop:28}}>
        <div style={{fontSize:10,fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:12}}>Dia a dia</div>
        <h2 style={{fontFamily:"var(--serif)",fontSize:24,fontWeight:300,lineHeight:1.3,marginBottom:8}}>Como está seu dia hoje?</h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:28,lineHeight:1.65}}>A Áurea adapta o look ao ritmo do seu momento.</p>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {[
            {id:"correria", title:"Leve e prática",       desc:"Para um dia corrido, mas ainda bem vestida"},
            {id:"equilibrado",title:"Naturalmente elegante",desc:"Tudo parece simples, mas funciona"},
            {id:"arrumado", title:"Mais presença",         desc:"Quando você quer um look que chama mais atenção"},
          ].map(o=>(
            <div key={o.id} onClick={()=>setDiaSubtype(o.id)}
              style={{padding:"16px 18px",borderRadius:"var(--rcard)",cursor:"pointer",
                background:diaSubtype===o.id?"var(--linen)":"white",
                border:`1.5px solid ${diaSubtype===o.id?"var(--caramel)":"var(--mist)"}`,
                boxShadow:diaSubtype===o.id?"0 4px 16px rgba(184,149,106,.18)":"none",
                transition:"all .2s",WebkitTapHighlightColor:"transparent",
                display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div>
                <div style={{fontFamily:"var(--serif)",fontSize:16,fontWeight:400,color:"var(--ink)",marginBottom:4}}>{o.title}</div>
                <div style={{fontSize:12,fontWeight:300,color:"#9a8878",lineHeight:1.5}}>{o.desc}</div>
              </div>
              {diaSubtype===o.id&&<Check size={16} color="var(--caramel)" strokeWidth={2} style={{flexShrink:0,marginLeft:12}}/>}
            </div>
          ))}
        </div>
      </div>
      <div style={{padding:"24px 28px 48px"}}>
        <button className="bp" disabled={!diaSubtype} onClick={()=>go(19)}>Continuar</button>
      </div>
    </div>,

    // 19 — Dia a dia: TELA 2 — ONDE E QUANDO (unificada)
    <div key="19" className="scroll-pb" style={{background:"var(--cream)"}}>
      <div className="topbar"><button className="topbar-back" onClick={goBack}><ArrowLeft size={16}/></button><div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div><span className="step-n">2 de 2</span></div>
      <div className="prog"><div className="prog-f" style={{width:"100%"}}/></div>
      <div className="pad" style={{paddingTop:28}}>
        <div style={{fontSize:10,fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:12}}>Dia a dia</div>
        <h2 style={{fontFamily:"var(--serif)",fontSize:24,fontWeight:300,lineHeight:1.3,marginBottom:8}}>Onde e quando?</h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:32,lineHeight:1.65}}>A Áurea usa isso para adaptar o look ao clima e ao momento.</p>

        {/* Cidade */}
        <div style={{marginBottom:28}}>
          <div style={{fontSize:11,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:10}}>Cidade</div>
          {savedCity && !cityInput ? (
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",background:"var(--linen)",border:"1.5px solid var(--caramel)",borderRadius:"var(--rcard)"}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <MapPin size={14} color="var(--caramel)"/>
                <span style={{fontFamily:"var(--serif)",fontSize:16,color:"var(--ink)"}}>{savedCity}</span>
              </div>
              <button onClick={()=>{setSavedCity("");setCityInput("");setCityOk(false);}} style={{fontSize:11,fontWeight:400,color:"#9a8878",background:"none",border:"none",cursor:"pointer",textDecoration:"underline"}}>alterar</button>
            </div>
          ) : (
            <div className="ac">
              <input className={`field${cityErr?" err":""}`} placeholder="Digite sua cidade" value={cityInput} onChange={e=>onCityType(e.target.value)} autoComplete="off" autoCapitalize="words"/>
              {(citySuggs.length>0||(cityInput.length>=2&&!cityOk))&&(
                <div className="ac-list">
                  {citySuggs.map(c=>(<div key={c} className="ac-item" onClick={()=>pickCity(c)}>{c}</div>))}
                  {cityInput.length>=2&&(<div className="ac-free" onClick={useFreeCity}><MapPin size={13}/><span>Usar "<strong>{cityInput}</strong>"</span></div>)}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Data */}
        <div style={{marginBottom:8}}>
          <div style={{fontSize:11,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:10}}>Data</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
            {[
              {id:"hoje",    label:"Hoje",    sub:new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})},
              {id:"amanha",  label:"Amanhã",  sub:new Date(Date.now()+86400000).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})},
              {id:"outra",   label:"Outra",   sub:"data"},
            ].map(d=>(
              <div key={d.id} onClick={()=>setDateChoice(d.id)}
                style={{padding:"12px 8px",borderRadius:"var(--rcard)",cursor:"pointer",textAlign:"center",
                  background:dateChoice===d.id?"var(--linen)":"white",
                  border:`1.5px solid ${dateChoice===d.id?"var(--caramel)":"var(--mist)"}`,
                  transition:"all .18s",WebkitTapHighlightColor:"transparent"}}>
                <div style={{fontFamily:"var(--serif)",fontSize:15,fontWeight:400,color:"var(--ink)",marginBottom:2}}>{d.label}</div>
                <div style={{fontSize:11,fontWeight:300,color:"#9a8878"}}>{d.sub}</div>
              </div>
            ))}
          </div>
          {dateChoice==="outra"&&(
            <input type="date" className="field" style={{marginTop:12}}
              value={customDate} onChange={e=>setCustomDate(e.target.value)}/>
          )}
        </div>
      </div>
      <div style={{padding:"24px 28px 48px"}}>
        <button className="bp" disabled={!(cityOk||savedCity)&&!cityInput||!dateChoice}
          onClick={()=>{
            if(cityInput&&!cityOk){setSavedCity(cityInput);setCityOk(true);}
            go(10);
          }}>Ver meu look →</button>
      </div>
    </div>,

    // 20, 21 — slots
    <div key="20" style={{display:"none"}}/>,
    <div key="21" style={{display:"none"}}/>,

    // 22 — Contexto social do jantar
    <div key="22" className="scroll-pb" style={{background:"var(--cream)"}}>
      <div className="topbar">
        <button className="topbar-back" onClick={goBack}><ArrowLeft size={16}/></button>
        <div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div>
        <span className="step-n">3 de 4</span>
      </div>
      <div className="prog"><div className="prog-f" style={{width:"75%"}}/></div>
      <div className="pad" style={{paddingTop:28}}>
        <div style={{fontSize:10,fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:12}}>Jantar</div>
        <h2 style={{fontFamily:"var(--serif)",fontSize:24,fontWeight:300,lineHeight:1.3,marginBottom:8}}>Qual é o clima desse jantar?</h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:28,lineHeight:1.65}}>O contexto muda tudo — da elegância ao styling.</p>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {[
            {id:"romantico",   emoji:"🍷", title:"Romântico",      desc:"Mais elegante e feminino"},
            {id:"amigas",      emoji:"🥂", title:"Com amigas",     desc:"Atual, leve e estilosa"},
            {id:"trabalho",    emoji:"💼", title:"Trabalho",        desc:"Alinhada e sofisticada"},
            {id:"comemoracao", emoji:"✨", title:"Comemoração",     desc:"Mais presença e impacto"},
            {id:"casual",      emoji:"🍝", title:"Casual",          desc:"Bonita sem esforço"},
          ].map(o=>(
            <div key={o.id} onClick={()=>setJantarContext(o.id)}
              style={{padding:"14px 18px",borderRadius:"var(--rcard)",cursor:"pointer",
                background:jantarContext===o.id?"var(--linen)":"white",
                border:`1.5px solid ${jantarContext===o.id?"var(--caramel)":"var(--mist)"}`,
                boxShadow:jantarContext===o.id?"0 4px 16px rgba(184,149,106,.18)":"none",
                transition:"all .2s",WebkitTapHighlightColor:"transparent",
                display:"flex",alignItems:"center",gap:14}}>
              <span style={{fontSize:20,flexShrink:0}}>{o.emoji}</span>
              <div style={{flex:1}}>
                <div style={{fontFamily:"var(--serif)",fontSize:16,fontWeight:400,color:"var(--ink)",marginBottom:3}}>{o.title}</div>
                <div style={{fontSize:12,fontWeight:300,color:"#9a8878",lineHeight:1.5}}>{o.desc}</div>
              </div>
              {jantarContext===o.id&&<Check size={16} color="var(--caramel)" strokeWidth={2} style={{flexShrink:0}}/>}
            </div>
          ))}
        </div>
      </div>
      <div style={{padding:"20px 28px 48px"}}>
        <button className="bp" disabled={!jantarContext} onClick={()=>go(8)}>Continuar</button>
      </div>
    </div>,
    // 23 — Tela de transição elegante antes do look
    <div key="23" style={{minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"var(--cream)",padding:"40px 28px"}}>
      <div style={{textAlign:"center",maxWidth:280}}>
        <div style={{fontFamily:"var(--serif)",fontSize:10,fontWeight:400,letterSpacing:".28em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:32}}>ÁUREA</div>
        <div style={{width:48,height:48,borderRadius:"50%",border:"1.5px solid var(--caramel)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 28px",opacity:.7}}>
          <Sparkles size={18} color="var(--caramel)" strokeWidth={1.5}/>
        </div>
        <h2 style={{fontFamily:"var(--serif)",fontSize:26,fontWeight:300,color:"var(--ink)",lineHeight:1.3,marginBottom:12}}>
          {moment==="jantar"?"Montando o look da noite"
          :moment==="almoco"?"Montando o look do almoço"
          :moment==="trabalho"?"Montando o look de trabalho"
          :moment==="fimdesemana"?"Montando o look do fim de semana"
          :moment==="academia"?"Montando o look do treino"
          :moment==="emcasa"?"Montando o look de casa"
          :"Montando seu look"}
        </h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",lineHeight:1.65,marginBottom:40}}>
          {moment==="jantar"&&jantarContext==="romantico"?"Pensando em algo elegante e feminino para a noite…"
          :moment==="jantar"&&jantarContext==="amigas"?"Criando um look atual e estiloso…"
          :moment==="jantar"&&jantarContext==="trabalho"?"Buscando o equilíbrio entre elegância e profissionalismo…"
          :moment==="almoco"?"Considerando o clima do meio-dia e a proposta do almoço…"
          :moment==="academia"?"Ajustando o look para o ritmo do seu treino…"
          :"A Áurea está considerando o clima, o momento e o seu estilo…"}
        </p>
        <div style={{display:"flex",gap:6,justifyContent:"center",marginBottom:48}}>
          {[0,1,2,3].map(i=>(
            <div key={i} style={{width:4,height:4,borderRadius:"50%",background:"var(--caramel)",opacity:.25+i*.2}}/>
          ))}
        </div>
        <button className="bp" onClick={()=>go(10)} style={{width:"100%"}}>Ver o look →</button>
      </div>
    </div>,

    // 24 — slot
    <div key="24" style={{display:"none"}}/>,

    // 25 — Mala: como prefere montar (etapa 2 de 4)
    <div key="25" className="scroll-pb" style={{background:"var(--cream)"}}>
      <div className="topbar"><button className="topbar-back" onClick={()=>go(31)}><ArrowLeft size={16}/></button><div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div><span className="step-n">Mala · 2 de 4</span></div>
      <div className="prog"><div className="prog-f" style={{width:"50%"}}/></div>
      <div className="pad" style={{paddingTop:28}}>
        <div style={{fontSize:10,fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:12}}>Mala inteligente</div>
        <h2 style={{fontFamily:"var(--serif)",fontSize:24,fontWeight:300,lineHeight:1.3,marginBottom:8}}>Como você prefere montar sua mala?</h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:28,lineHeight:1.65}}>A Áurea organiza tudo com base no seu estilo.</p>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {[
            {id:"enxuta",   title:"Mala inteligente enxuta",  desc:"Poucas peças, muitos looks"},
            {id:"mix",      title:"Mala equilibrada",          desc:"Versátil para diferentes momentos"},
            {id:"completa", title:"Mala completa",             desc:"Mais variedade para ocasiões específicas"},
            {id:"aurea",    title:"Quero ajuda da Áurea",      desc:"A Áurea equilibra clima, programação e combinações automaticamente"},
          ].map(o=>(
            <div key={o.id} onClick={()=>setTravelStyle(o.id)}
              style={{padding:"16px 18px",borderRadius:"var(--rcard)",cursor:"pointer",
                background:travelStyle===o.id?"var(--linen)":"white",
                border:`1.5px solid ${travelStyle===o.id?"var(--caramel)":"var(--mist)"}`,
                boxShadow:travelStyle===o.id?"0 4px 16px rgba(184,149,106,.18)":"none",
                transition:"all .2s",WebkitTapHighlightColor:"transparent",
                display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div>
                <div style={{fontFamily:"var(--serif)",fontSize:16,fontWeight:400,color:"var(--ink)",marginBottom:4}}>{o.title}</div>
                <div style={{fontSize:12,fontWeight:300,color:"#9a8878",lineHeight:1.5}}>{o.desc}</div>
              </div>
              {travelStyle===o.id&&<Check size={16} color="var(--caramel)" strokeWidth={2} style={{flexShrink:0,marginLeft:12}}/>}
            </div>
          ))}
        </div>
      </div>
      <div style={{padding:"20px 28px 48px"}}><div style={{display:"flex",flexDirection:"column",gap:10}}><button className="bp" disabled={!travelStyle} onClick={()=>go(26)}>Continuar</button><button className="bg" onClick={()=>{setTravelStyle("mix");go(26);}}>Pular</button></div></div>
    </div>,

    // 26 — Travel momentos especiais
    <div key="26" className="scroll-pb" style={{background:"var(--cream)"}}>
      <div className="topbar"><button className="topbar-back" onClick={()=>go(25)}><ArrowLeft size={16}/></button><div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div><span className="step-n">Mala · 3 de 4</span></div>
      <div className="prog"><div className="prog-f" style={{width:"75%"}}/></div>
      <div className="pad" style={{paddingTop:28}}>
        <div style={{fontSize:10,fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:12}}>Mala inteligente</div>
        <h2 style={{fontFamily:"var(--serif)",fontSize:24,fontWeight:300,lineHeight:1.3,marginBottom:8}}>Tem algum momento especial nessa viagem?</h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:24,lineHeight:1.65}}>Pode escolher mais de um.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
          {[
            {id:"jantar",     Icon:Utensils,  label:"Jantar especial"},
            {id:"praia",      Icon:Sun,       label:"Praia ou piscina"},
            {id:"show",       Icon:Sparkles,  label:"Estádio ou show"},
            {id:"turismo",    Icon:MapPin,    label:"Passeio longo"},
            {id:"restaurante",Icon:Coffee,    label:"Restaurante elegante"},
            {id:"reuniao",    Icon:Briefcase, label:"Trabalho ou reunião"},
            {id:"criancas",   Icon:Home,      label:"Passeio com crianças"},
            {id:"academia",   Icon:Dumbbell,  label:"Academia"},
          ].map(m=>(
            <div key={m.id}
              style={{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderRadius:"var(--rcard)",cursor:"pointer",
                border:`1.5px solid ${travelMoments.includes(m.id)?"var(--caramel)":"var(--mist)"}`,
                background:travelMoments.includes(m.id)?"var(--linen)":"white",
                transition:"all .2s",WebkitTapHighlightColor:"transparent"}}
              onClick={()=>setTravelMoments(p=>p.includes(m.id)?p.filter(x=>x!==m.id):[...p,m.id])}>
              <m.Icon size={15} color={travelMoments.includes(m.id)?"var(--caramel)":"#b5a898"} strokeWidth={1.5} style={{flexShrink:0}}/>
              <span style={{fontSize:13,fontWeight:300,color:"var(--ink)",flex:1,lineHeight:1.3}}>{m.label}</span>
              {travelMoments.includes(m.id)&&<Check size={12} color="var(--caramel)" strokeWidth={2.5}/>}
            </div>
          ))}
        </div>
        <div style={{fontSize:11,fontWeight:500,color:"var(--caramel)",letterSpacing:".1em",textTransform:"uppercase",marginBottom:8}}>Outro momento</div>
        <input className="field" placeholder="Ex: casamento, spa day, show…" value={travelEventCustom} onChange={e=>setTravelEventCustom(e.target.value)}/>
      </div>
      <div style={{padding:"16px 28px 48px"}}><div style={{display:"flex",flexDirection:"column",gap:10}}><button className="bp" onClick={()=>go(27)}>Continuar</button><button className="bg" onClick={()=>go(27)}>Pular</button></div></div>
    </div>,

    // 27 — Travel alerta
    <div key="27">
      <div className="topbar"><button className="topbar-back" onClick={goBack}><ArrowLeft size={16}/></button><div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div><span className="step-n">Mala</span></div>
      <div className="prog"><div className="prog-f" style={{width:"65%"}}/></div>
      <div className="pad" style={{paddingTop:28}}>
        <div className="eyebrow" style={{marginBottom:8}}>Quase lá</div>
        <h2 style={{marginBottom:8}}>Quer que a Áurea cuide disso pra você?</h2>
        <p style={{marginBottom:28,fontSize:14,color:"#9a8878"}}>Te aviso antes com clima + looks já prontos.</p>
        <div style={{display:"flex",alignItems:"center",gap:16,padding:"20px",background:travelAlert?"#FDF6EC":"var(--linen)",border:`1.5px solid ${travelAlert?"var(--caramel)":"var(--mist)"}`,borderRadius:"var(--rcard)",cursor:"pointer",transition:"all .3s",marginBottom:24}} onClick={()=>setTravelAlert(p=>!p)}>
          <Bell size={20} color={travelAlert?"var(--caramel)":"#9a8878"} strokeWidth={1.5}/>
          <div style={{flex:1}}><div style={{fontSize:15,fontWeight:500,color:"var(--ink)",marginBottom:4}}>Aviso 7 dias antes</div><div style={{fontSize:12,fontWeight:300,color:"#9a8878",lineHeight:1.5}}>Previsão de temperatura e sugestões de looks prontos</div></div>
          <div style={{width:44,height:26,borderRadius:13,flexShrink:0,background:travelAlert?"var(--caramel)":"var(--mist)",position:"relative",transition:"background .3s"}}><div style={{width:20,height:20,borderRadius:"50%",background:"white",position:"absolute",top:3,left:travelAlert?20:3,transition:"left .3s",boxShadow:"0 1px 4px rgba(0,0,0,.18)"}}/></div>
        </div>
        <div style={{background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--rcard)",padding:"18px 20px",marginBottom:16}}>
          <div style={{fontSize:10,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:12}}>Resumo da viagem</div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <div style={{display:"flex",gap:10,alignItems:"center"}}><MapPin size={15} color="var(--caramel)" strokeWidth={1.5}/><span style={{fontSize:13,fontWeight:300,color:"var(--ink)"}}>{cs}</span></div>
            {travelStart&&travelEnd&&(<div style={{display:"flex",gap:10,alignItems:"center"}}><Calendar size={15} color="var(--caramel)" strokeWidth={1.5}/><span style={{fontSize:13,fontWeight:300,color:"var(--ink)"}}>{(()=>{const[,m,d]=travelStart.split("-");return`${d}/${m}`;})()}{" → "}{(()=>{const[,m,d]=travelEnd.split("-");return`${d}/${m}`;})()}</span></div>)}
            {travelStyle&&(<div style={{display:"flex",gap:10,alignItems:"center"}}><Compass size={15} color="var(--caramel)" strokeWidth={1.5}/><span style={{fontSize:13,fontWeight:300,color:"var(--ink)",textTransform:"capitalize"}}>{{explorar:"Explorar e conhecer",descansar:"Descansar e relaxar",trabalho:"Trabalho com estilo",mix:"Um pouco de tudo"}[travelStyle]}</span></div>)}
          </div>
        </div>
        <div style={{padding:"16px 18px",background:"linear-gradient(135deg,#FDF6EC,#F5EDE0)",border:"1.5px solid var(--caramel)",borderRadius:"var(--rcard)"}}><p style={{fontSize:14,fontWeight:300,color:"var(--bark)",lineHeight:1.7,fontStyle:"italic",fontFamily:"var(--serif)",textAlign:"center",margin:0}}>"Perfeito — vou montar sua mala pensando no seu ritmo, nos seus momentos e no clima."</p></div>
      </div>
      <div style={{padding:"20px 28px 48px"}}><button className="bp" onClick={()=>go(7)}>Ver clima da viagem →</button></div>
    </div>,

    // 28 — Look sem pensar: tom
    <div key="28">
      <div style={{display:"flex",alignItems:"center",padding:"14px 20px 0",gap:8}}>
        <button className="topbar-back" onClick={()=>go(13)}><ArrowLeft size={16}/></button>
        <div style={{flex:1,textAlign:"center"}}><div className="logo">ÁUREA</div></div>
        <div style={{width:36}}/>
      </div>
      <div className="pad" style={{paddingTop:22}}>
        <div className="eyebrow">Look sem pensar</div>
        <h2 style={{marginBottom:6}}>Hoje você quer algo:</h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:24,lineHeight:1.5}}>Só isso. O look aparece na próxima tela.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          {[{id:"confortavel",label:"Confortável",sub:"Fluído, fácil",img:IMGS.dia},{id:"elegante",label:"Elegante",sub:"Refinado",img:IMGS.trabalho},{id:"fashion",label:"Fashion",sub:"Marcante",img:IMGS.evento}].map(t=>(
            <div key={t.id} className={`ql-tone-card${quickTone===t.id?" sel":""}`} onClick={()=>setQuickTone(t.id)}>
              <img src={t.img} className="ql-tone-img" alt={t.label}/>
              <div className="ql-tone-overlay">
                <div style={{fontFamily:"var(--serif)",fontSize:14,fontWeight:400,color:"white",marginBottom:2}}>{t.label}</div>
                <div style={{fontSize:10,fontWeight:300,color:"rgba(255,255,255,.7)"}}>{t.sub}</div>
              </div>
              {quickTone===t.id&&<div style={{position:"absolute",top:8,right:8,width:20,height:20,borderRadius:"50%",background:"var(--caramel)",display:"flex",alignItems:"center",justifyContent:"center"}}><Check size={11} color="white" strokeWidth={2.5}/></div>}
            </div>
          ))}
        </div>
        {!quickTone&&<div className="hint" style={{marginTop:14}}><span className="hd"/>Escolha um tom para continuar</div>}
      </div>
      <div className="spacer"/>
      <div style={{padding:"16px 28px 48px"}}>
        <button className="bp" disabled={!quickTone} onClick={()=>{setQuickLookIdx(0);go(29);}}>Ver meu look →</button>
      </div>
    </div>,

    // 29 — Look sem pensar: revelação
    <div key="29" className="scroll-pb">
      {(()=>{
        const looks=quickTone?QUICK_LOOKS[quickTone]:QUICK_LOOKS.confortavel;
        const look=looks[quickLookIdx%looks.length];
        const isLast=quickLookIdx>=looks.length-1;
        return (
          <>
            <div style={{position:"relative"}}>
              <img key={look.id} src={look.img} className="ql-result-img" alt={look.title} style={{animation:"ql-reveal .4s cubic-bezier(.4,0,.2,1) both"}}/>
              <div style={{position:"absolute",top:16,left:16,display:"flex",alignItems:"center",gap:7,padding:"7px 14px",borderRadius:40,background:"rgba(250,248,244,.96)",backdropFilter:"blur(10px)",boxShadow:"0 2px 12px rgba(0,0,0,.12)"}}>
                <Zap size={11} color="var(--caramel)" strokeWidth={2}/>
                <span style={{fontSize:11,fontWeight:500,letterSpacing:".08em",textTransform:"uppercase",color:"var(--ink)"}}>Look sem pensar</span>
              </div>
            </div>

            <div style={{padding:"22px 28px 0"}}>
              <div className="ql-reveal" style={{animationDelay:".1s",marginBottom:18}}>
                <h2 style={{fontStyle:"italic",marginBottom:4,fontSize:24}}>{look.title}</h2>
                <p style={{fontSize:13,fontWeight:300,color:"#9a8878",margin:0}}>{look.sub}</p>
              </div>
              <div className="ql-reveal" style={{animationDelay:".18s",marginBottom:20}}>
                <div style={{fontSize:10,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:10}}>Peças</div>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  {look.pieces.map((p,i)=>(
                    <div key={i} className="ql-piece-row">
                      <div className="ql-piece-num">{i+1}</div>
                      <span style={{fontSize:14,fontWeight:300,color:"var(--ink)",flex:1}}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ql-reveal" style={{animationDelay:".22s",display:"flex",gap:6,flexWrap:"wrap",marginBottom:24}}>
                {look.tags.map((t,i)=><span key={i} style={{fontSize:11,fontWeight:300,padding:"4px 12px",borderRadius:40,border:"1px solid var(--mist)",color:"#9a8878"}}>{t}</span>)}
              </div>
              <div className="ql-reveal" style={{animationDelay:".26s"}}>
                <button className="bp" style={{marginBottom:10}} onClick={()=>{setMoment("dia");setFeeling([quickTone==="confortavel"?"Confortável":quickTone==="elegante"?"Elegante":"Fashion"]);setSaveStep("choose");setShowSaveModal(true);}}>
                  Vou usar esse look →
                </button>
                <div style={{display:"flex",gap:8,marginBottom:16}}>
                  <button style={{flex:1,padding:"11px 8px",background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--r)",fontSize:12,fontWeight:400,color:"var(--ink)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6,WebkitTapHighlightColor:"transparent"}}
                    onClick={()=>{if(isLast){const tones=["confortavel","elegante","fashion"];const nextTone=tones[(tones.indexOf(quickTone)+1)%tones.length];setQuickTone(nextTone);setQuickLookIdx(0);}else{setQuickLookIdx(i=>i+1);}}}>
                    <RefreshCw size={13} color="var(--caramel)" strokeWidth={1.75}/>
                    {isLast?"Outro estilo":"Outra ideia"}
                  </button>
                  <button style={{flex:1,padding:"11px 8px",background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--r)",fontSize:12,fontWeight:400,color:"var(--ink)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6,WebkitTapHighlightColor:"transparent"}} onClick={()=>go(28)}>
                    <Sliders size={13} color="var(--caramel)" strokeWidth={1.75}/> Ajustar tom
                  </button>
                  <button style={{flex:1,padding:"11px 8px",background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--r)",fontSize:12,fontWeight:400,color:"var(--ink)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6,WebkitTapHighlightColor:"transparent"}}
                    onClick={()=>requireAuth(()=>{setMoment("dia");setFeeling([quickTone==="confortavel"?"Confortável":quickTone==="elegante"?"Elegante":"Fashion"]);saveLook({saveType:"saved"});})}>
                    <Bookmark size={13} color="var(--caramel)" strokeWidth={1.75}/> Salvar
                  </button>
                </div>
                <img src={look.flatlay} alt="" style={{width:"100%",height:160,objectFit:"cover",borderRadius:"var(--rcard)",display:"block",marginBottom:32}}/>
              </div>
            </div>

            <button className="back" style={{top:60}} onClick={()=>go(28)}><ArrowLeft size={16}/></button>

            {showSaveModal&&(
              <div className="modal-overlay" onClick={()=>{setShowSaveModal(false);setSaveStep("choose");}}>
                <div className="modal-sheet" onClick={e=>e.stopPropagation()} style={{paddingBottom:52}}>
                  <div className="modal-handle"/>
                  {saveStep==="choose"&&(
                    <>
                      <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:22,padding:"12px 16px",background:"var(--linen)",borderRadius:"var(--rcard)",border:"1.5px solid var(--caramel)"}}>
                        <img src={look.img} alt="" style={{width:52,height:64,objectFit:"cover",borderRadius:10,flexShrink:0}}/>
                        <div style={{flex:1}}>
                          <div style={{fontSize:10,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:3}}>Seu look</div>
                          <div style={{fontFamily:"var(--serif)",fontSize:16,fontWeight:400,color:"var(--ink)",marginBottom:2}}>{look.title}</div>
                        </div>
                      </div>
                      <h2 style={{fontSize:22,marginBottom:4}}>Quer guardar esse look?</h2>
                      <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:20,lineHeight:1.5}}>Salve para usar depois ou agendar.</p>
                      <div className="stack">
                        <div style={{background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--rcard)",overflow:"hidden",cursor:"pointer",WebkitTapHighlightColor:"transparent"}} onClick={()=>setSaveStep("calendar")}>
                          <div style={{padding:"16px 18px",display:"flex",gap:14,alignItems:"center"}}>
                            <div style={{width:40,height:40,borderRadius:"50%",background:"var(--ink)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Calendar size={18} color="white" strokeWidth={1.5}/></div>
                            <div style={{flex:1}}><div style={{fontFamily:"var(--serif)",fontSize:16,fontWeight:400,color:"var(--ink)",marginBottom:3}}>Usar em uma data</div><div style={{fontSize:12,fontWeight:300,color:"#9a8878",lineHeight:1.4}}>Receba um lembrete antes do compromisso.</div></div>
                            <ChevronRight size={16} color="var(--nude)"/>
                          </div>
                        </div>
                        <div style={{background:"var(--linen)",border:"1.5px solid var(--mist)",borderRadius:"var(--rcard)",overflow:"hidden",cursor:"pointer",WebkitTapHighlightColor:"transparent"}} onClick={()=>requireAuth(()=>{saveLook({saveType:"saved"});setSaveStep("done");})}>
                          <div style={{padding:"16px 18px",display:"flex",gap:14,alignItems:"center"}}>
                            <div style={{width:40,height:40,borderRadius:"50%",background:"var(--linen)",border:"1.5px solid var(--nude)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Bookmark size={18} color="var(--caramel)" strokeWidth={1.5}/></div>
                            <div style={{flex:1}}><div style={{fontFamily:"var(--serif)",fontSize:16,fontWeight:400,color:"var(--ink)",marginBottom:3}}>Salvar para depois</div><div style={{fontSize:12,fontWeight:300,color:"#9a8878",lineHeight:1.4}}>Guardar no Closet Áurea para usar outro dia.</div></div>
                            <ChevronRight size={16} color="var(--nude)"/>
                          </div>
                        </div>
                      </div>
                      <button style={{display:"block",width:"100%",marginTop:16,padding:"12px",background:"none",border:"none",fontSize:13,fontWeight:300,color:"#c0b8ae",cursor:"pointer",textAlign:"center"}} onClick={()=>{setShowSaveModal(false);setSaveStep("choose");}}>Agora não</button>
                    </>
                  )}
                  {saveStep==="calendar"&&(
                    <>
                      <button style={{background:"none",border:"none",color:"var(--nude)",cursor:"pointer",padding:"0 0 16px",display:"flex",alignItems:"center",gap:6,fontSize:13}} onClick={()=>setSaveStep("choose")}><ArrowLeft size={15}/> Voltar</button>
                      <h2 style={{fontSize:22,marginBottom:4}}>Quando vai usar?</h2>
                      <MiniCalendar value={saveCalDate} minDate={new Date().toISOString().split("T")[0]} onChange={d=>setSaveCalDate(d)}/>
                      {saveCalDate&&<input type="time" className="field" value={saveCalTime} onChange={e=>setSaveCalTime(e.target.value)} style={{marginTop:14}}/>}
                      <button className="bp" disabled={!saveCalDate} style={{marginTop:20}} onClick={()=>{saveLook({saveType:"scheduled",schedDate:saveCalDate,schedTime:saveCalTime||"agora"});setLookOfDay({time:saveCalTime||"agora",img:look.img,occasion:"dia",proposal:look.title});setSaveStep("done");}}>Salvar e programar lembrete</button>
                    </>
                  )}
                  {saveStep==="done"&&(
                    <div style={{textAlign:"center",paddingTop:8}}>
                      <div style={{width:64,height:64,borderRadius:"50%",background:"var(--caramel)",margin:"0 auto 20px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(184,149,106,.35)"}}><Check size={26} color="white" strokeWidth={2}/></div>
                      <h2 style={{fontSize:26,marginBottom:8}}>Look guardado.</h2>
                      <p style={{fontSize:14,fontWeight:300,color:"#9a8878",lineHeight:1.7,marginBottom:28}}>{saveCalDate?"Te lembro antes do compromisso.":"Está no Closet Áurea."}</p>
                      <div style={{display:"flex",gap:10}}>
                        <button className="bs" style={{flex:1,fontSize:13}} onClick={()=>{setShowSaveModal(false);setSaveStep("choose");switchTab("inicio");}}>Ir para Início</button>
                        <button className="bp" style={{flex:1,fontSize:13}} onClick={()=>{setShowSaveModal(false);setSaveStep("choose");setQuickTone(null);setQuickLookIdx(0);go(28);}}>Outro look</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        );
      })()}
    </div>,

    // 30 — Viagem: Look de aeroporto/estrada  OU  Mala inteligente
    // LOOK DE VIAGEM → fluxo normal (vai pra tela 8, tom do look, sem perguntar datas de novo)
    // MALA INTELIGENTE → fluxo próprio: destino → datas → estilo → momentos → clima → alerta → mala pronta
    <div key="30">
      <div className="topbar">
        <button className="topbar-back" onClick={goBack}><ArrowLeft size={16}/></button>
        <div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div>
        <span className="step-n">Viagem</span>
      </div>
      <div className="prog"><div className="prog-f" style={{width:"30%"}}/></div>
      <div className="pad" style={{paddingTop:28}}>
        <div className="eyebrow">Para a sua viagem</div>
        <h2 style={{marginBottom:6}}>O que você precisa agora?</h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:28,lineHeight:1.5}}>São produtos diferentes — escolha o que faz mais sentido.</p>
        <div className="stack">

          {/* ── Opção 1: Look para viajar ─────────────────────────── */}
          <div style={{borderRadius:"var(--rcard)",overflow:"hidden",border:"1.5px solid var(--mist)",cursor:"pointer",background:"var(--linen)",WebkitTapHighlightColor:"transparent",transition:"border-color .2s"}}
            onClick={()=>{
              // Vai direto pra tela de tom do look — sem criar mala
              setMoment("viagem");
              go(8);
            }}>
            <div style={{display:"flex",gap:0,alignItems:"stretch"}}>
              <img src={IMGS.viagem} alt="" style={{width:90,height:116,objectFit:"cover",flexShrink:0}}/>
              <div style={{padding:"16px 14px",flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <div style={{fontSize:10,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:4}}>Look único</div>
                <div style={{fontFamily:"var(--serif)",fontSize:18,fontWeight:400,color:"var(--ink)",marginBottom:4,lineHeight:1.2}}>Look de viagem</div>
                <div style={{fontSize:12,fontWeight:300,color:"#9a8878",lineHeight:1.4}}>Para o deslocamento: avião, carro, aeroporto ou estrada.</div>
              </div>
              <div style={{display:"flex",alignItems:"center",paddingRight:14}}><ChevronRight size={16} color="var(--nude)"/></div>
            </div>
          </div>

          {/* ── Opção 2: Mala inteligente ─────────────────────────── */}
          <div style={{borderRadius:"var(--rcard)",overflow:"hidden",border:"1.5px solid var(--mist)",cursor:"pointer",background:"var(--linen)",WebkitTapHighlightColor:"transparent",transition:"border-color .2s"}}
            onClick={()=>go(31)}>
            <div style={{display:"flex",gap:0,alignItems:"stretch"}}>
              <div style={{width:90,height:116,background:"linear-gradient(160deg,var(--espresso),#3a2e28)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <Luggage size={32} color="rgba(255,255,255,.7)" strokeWidth={1}/>
              </div>
              <div style={{padding:"16px 14px",flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <div style={{fontSize:10,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:4}}>Planejamento completo</div>
                <div style={{fontFamily:"var(--serif)",fontSize:18,fontWeight:400,color:"var(--ink)",marginBottom:4,lineHeight:1.2}}>Mala inteligente</div>
                <div style={{fontSize:12,fontWeight:300,color:"#9a8878",lineHeight:1.4}}>Looks por dia, peças essenciais e checklist completo.</div>
              </div>
              <div style={{display:"flex",alignItems:"center",paddingRight:14}}><ChevronRight size={16} color="var(--nude)"/></div>
            </div>
          </div>

        </div>
      </div>
    </div>,

    // 31 — Mala inteligente: destino + datas (entrada própria, separada do look de viagem)
    <div key="31" className="scroll-pb">
      <div className="topbar">
        <button className="topbar-back" onClick={()=>go(30)}><ArrowLeft size={16}/></button>
        <div className="logo" style={{cursor:"pointer",flex:1,textAlign:"center"}} onClick={()=>{if(hasOnboarded){setTab("inicio");go(13);}}}>ÁUREA</div>
        <span className="step-n">Mala · 1 de 4</span>
      </div>
      <div className="prog"><div className="prog-f" style={{width:"25%"}}/></div>
      <div className="pad" style={{paddingTop:22}}>
        <div className="eyebrow">Mala inteligente</div>
        <h2 style={{marginBottom:6}}>Para onde e quando?</h2>
        <p style={{fontSize:13,fontWeight:300,color:"#9a8878",marginBottom:24,lineHeight:1.5}}>Vou montar sua mala completa com o clima e o ritmo da viagem.</p>

        {/* Destino */}
        <div style={{marginBottom:20}}>
          <div style={{fontSize:11,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:10}}>Destino</div>
          <div className="ac">
            <input className={`field${cityErr?" err":""}`} placeholder="Cidade de destino…" value={cityInput} onChange={e=>onCityType(e.target.value)} autoComplete="off" autoCapitalize="words"/>
            {(citySuggs.length>0||(cityInput.length>=2&&!cityOk))&&(
              <div className="ac-list">
                {citySuggs.map(c=>(<div key={c} className="ac-item" onClick={()=>pickCity(c)}>{c}</div>))}
                {cityInput.length>=2&&(<div className="ac-free" onClick={useFreeCity}><MapPin size={13}/><span>Usar "<strong>{cityInput}</strong>"</span></div>)}
              </div>
            )}
          </div>
          {cityOk&&<div className="hint ok"><span className="hd"/><Check size={11}/> {cityInput}</div>}
        </div>

        {/* Datas */}
        <div style={{fontSize:11,fontWeight:500,letterSpacing:".1em",textTransform:"uppercase",color:"var(--caramel)",marginBottom:10}}>Período da viagem</div>
        <div className="travel-grid" style={{marginBottom:8}}>
          {[{label:"Saída",val:travelStart,setter:setTravelStart,min:today},{label:"Volta",val:travelEnd,setter:setTravelEnd,min:travelStart||today}].map(({label,val,setter,min})=>(
            <div key={label} className={`travel-card${val?" has-val":""}`} style={{position:"relative"}}>
              <span className="travel-label">{label}</span>
              <div className={`travel-val${!val?" empty":""}`}>{val?(()=>{const[,m,d]=val.split("-");return`${d}/${m}`;})():"— / —"}</div>
              <input type="date" className="travel-input" min={min} value={val} onChange={e=>setter(e.target.value)}/>
            </div>
          ))}
        </div>
        {travelStart&&travelEnd&&(()=>{
          const dias = Math.round((new Date(travelEnd)-new Date(travelStart))/(1000*60*60*24))+1;
          return <div className="hint ok"><span className="hd"/>{dias} {dias===1?"dia":"dias"} de viagem</div>;
        })()}
        {(!travelStart||!travelEnd)&&travelStart&&<div className="hint"><span className="hd"/>Informe a data de volta para continuar</div>}
      </div>
      <div className="spacer"/>
      <div style={{padding:"16px 28px 48px"}}>
        <button className="bp" disabled={!cityOk||!travelStart||!travelEnd} onClick={()=>go(25)}>Continuar</button>
      </div>
    </div>,

  ];

  return (
    <>
      <style>{CSS}</style>
      <div className="app">
        {screens.map((s,i)=>(
          <div key={i} className={`screen${screen===i?" active":prev===i?" exit":""}`} onTransitionEnd={()=>{if(i===prev)setPrev(null);}}>
            {s}
          </div>
        ))}
        {showNav&&(
          <nav className="bnav">
            {NAV_ITEMS.map(b=>(
              <button key={b.id} className={`bnav-btn${tab===b.id?" active":""}`} onClick={()=>switchTab(b.id)}>
                <span className="bnav-icon"><b.Icon size={20} strokeWidth={tab===b.id?1.75:1.25} color={tab===b.id?"var(--caramel)":"var(--nude)"}/></span>
                <span className="bnav-label">{b.label}</span>
              </button>
            ))}
          </nav>
        )}
        <div className={`toast${toast?" show":""}`}>{toast}</div>

        {/* Auth modal — tela contextual, não de cadastro */}
        {authModal&&authStep==="modal"&&(
          <div className="auth-overlay" onClick={()=>{setAuthModal(false);setAuthTrigger(null);}}>
            <div className="auth-sheet" onClick={e=>e.stopPropagation()}>
              <div style={{position:"relative"}}>
                <img src={IMGS.evento} className="auth-look-preview" alt=""/>
                <div className="auth-look-overlay"><div className="auth-look-badge">Seu look ficou pronto</div></div>
                <div style={{position:"absolute",top:12,left:"50%",transform:"translateX(-50%)",width:32,height:3,borderRadius:2,background:"rgba(255,255,255,.5)"}}/>
              </div>
              <div className="auth-body">
                <div className="auth-eyebrow">Salve seu estilo</div>
                {/* Título que não soa obrigatório */}
                <h2 className="auth-title">Quer que a Áurea<br/>guarde isso pra você?</h2>
                <p className="auth-sub">Crie sua conta para salvar looks favoritos,<br/>peças do seu closet e preferências da Áurea.</p>
                <button className="auth-btn auth-btn-apple" onClick={()=>completeAuth()}><svg width="18" height="18" viewBox="0 0 814 1000" fill="white"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-32.8-159.2-93.5C93.8 814.8 42 699 42 591c0-149.5 97.5-228.8 191-228.8 50.4 0 92.5 33.1 124.1 33.1 30.3 0 77.1-35.1 134.2-35.1 21.8 0 108.2 1.9 160.8 73.5zM554.1 107.3c27.1-32.1 46.2-76.7 46.2-121.3 0-6.4-.6-12.8-1.9-18.6-44.5 1.9-97.7 29.4-130.4 66.5-24.4 27.7-47.2 72.3-47.2 117.5 0 7.1 1.3 14.2 1.9 16.5 2.6.6 6.4 1.3 10.3 1.3 40 0 90.4-26.5 121.1-61.9z"/></svg> Continuar com Apple</button>
                <button className="auth-btn auth-btn-google" style={{border:"1.5px solid #e0dbd5"}} onClick={()=>completeAuth()}><svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.2l6.8-6.8C35.7 2.3 30.2 0 24 0 14.7 0 6.7 5.4 2.7 13.3l7.9 6.1C12.6 13.1 17.9 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17z"/><path fill="#FBBC05" d="M10.6 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.7-4.6l-7.9-6.1A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.7 10.7l7.9-6.1z"/><path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.5-5.8c-2 1.4-4.6 2.2-7.7 2.2-6.1 0-11.3-4.1-13.2-9.6l-7.9 6.1C6.7 42.6 14.7 48 24 48z"/></svg> Continuar com Google</button>
                <div className="auth-divider"><span>ou</span></div>
                <button className="auth-btn auth-btn-email" onClick={()=>setAuthStep("email")}><Mail size={16}/> Continuar com e-mail</button>
                <button className="auth-skip" onClick={()=>{setAuthModal(false);setAuthTrigger(null);}}>Agora não</button>
              </div>
            </div>
          </div>
        )}
        {authModal&&authStep==="email"&&(
          <div className="auth-overlay"><div className="auth-sheet"><div className="auth-body"><button className="auth-back-btn" onClick={()=>setAuthStep("modal")}><ArrowLeft size={18}/></button><h2 className="auth-title" style={{textAlign:"left",marginBottom:8}}>Entre com<br/>seu e-mail</h2><p style={{fontSize:13,fontWeight:300,color:"#9a8878",lineHeight:1.6,marginBottom:24}}>Vamos usar seu e-mail apenas para salvar sua experiência na Áurea.</p><input className="field" type="email" placeholder="seuemail@exemplo.com" value={authEmail} onChange={e=>setAuthEmail(e.target.value)} style={{marginBottom:16}}/><button className="bp" disabled={!authEmail.includes("@")} onClick={()=>setAuthStep("name")}>Continuar</button><button className="auth-skip" onClick={()=>{setAuthModal(false);setAuthTrigger(null);}}>Agora não</button></div></div></div>
        )}
        {authModal&&authStep==="name"&&(
          <div className="auth-overlay"><div className="auth-sheet"><div className="auth-body"><button className="auth-back-btn" onClick={()=>setAuthStep("email")}><ArrowLeft size={18}/></button><div className="auth-eyebrow" style={{textAlign:"left",marginBottom:12}}>Quase lá</div><h2 className="auth-title" style={{textAlign:"left",marginBottom:8}}>Como a Áurea<br/>pode te chamar?</h2><p style={{fontSize:13,fontWeight:300,color:"#9a8878",lineHeight:1.6,marginBottom:24}}>Só para deixar sua experiência mais pessoal.</p><input className="field" placeholder="Seu nome" value={name} onChange={e=>setName(e.target.value)} autoCapitalize="words" style={{marginBottom:16}}/><button className="bp" onClick={()=>{completeAuth();showToast("Bem-vinda à Áurea"+(name.trim()?", "+name.trim().split(" ")[0]:"")+"!");}}>Salvar meu estilo</button><button className="auth-skip" onClick={()=>{setAuthModal(false);setAuthTrigger(null);}}>Continuar sem salvar</button></div></div></div>
        )}
      </div>
    </>
  );
}
