"use strict";

const colorLibrary = {
	buttons: ["#d4e2e7", "#c8a8b9", "#c8cdcb", "#cbb8dc", "#a5b192"],
};

const imageLibrary = {
	whiteLogo: {src: "assets/logo/logo_white.png", alt: "Logo Bortoncello Engenharia"},
	home: {
		intro: {
			solucoes: {
				src: "assets/images/solucoesEmImpermeabilizacao.webp",
				alt: "Imagem representativa",
			},
			protecao: {
				src: "assets/images/protecaoSobMedida.webp",
				alt: "Imagem representativa",
			},
			eficiencia: {
				src: "assets/images/eficienciaESeguranca.webp",
				alt: "Imagem representativa",
			},
			laudos: {
				src: "assets/images/laudosTecnicos.webp",
				alt: "Imagem representativa",
			},
		},
		entendaComoFunciona: {
			droplet: {
				src: "assets/images/droplet.webp",
				alt: "Macro de uma gota de água pingando em um lago",
			},
		},
		nossoTrabalho: {
			marquiseAntes: {
				src: "assets/images/marquiseAntes.jpg",
				alt: "Marquise antes do serviço",
			},
			marquiseDepois: {
				src: "assets/images/marquiseDepois.jpg",
				alt: "Marquise após o serviço",
			},
			lajeAntes: {
				src: "assets/images/lajeAntes.jpg",
				alt: "Laje antes do serviço",
			},
			lajeDepois: {
				src: "assets/images/lajeDepois.jpg",
				alt: "Laje após o serviço",
			},
			caixaDaguaAntes: {
				src: "assets/images/caixaDaguaAntes.jpg",
				alt: "Caixa d'Água antes do serviço",
			},
			caixaDaguaDepois: {
				src: "assets/images/caixaDaguaDepois.jpg",
				alt: "Caixa d'Água após o serviço",
			},
			estanqueidadeUm: {
				src: "assets/images/estanqueidadeUm.jpg",
				alt: "Teste de estanqueidade",
			},
			estanqueidadeDois: {
				src: "assets/images/estanqueidadeDois.jpg",
				alt: "Teste de estanqueidade",
			},
		},
	},
	quemSomos: {
		quemSomos: {
			src: "assets/images/quemSomos.jpg",
			alt: "Foto da fachada do empreendimento",
		},
		nossosLideres: {
			paulo: {
				src: "assets/images/liderPaulo.jpeg",
				alt: "Foto de Paulo Bortoncello",
			},
			beatriz: {
				src: "assets/images/liderBeatriz.jpeg",
				alt: "Foto de Beatriz Petri",
			},
			aline: {
				src: "assets/images/liderAline.jpeg",
				alt: "Foto de Aline Bortoncello",
			},
		},
	},
	solucoes: {
		intro: {src: "assets/images/solucoes.jpg", alt: "Imagem representativa"},
		tampa: {src: "assets/images/tampa.jpg", alt: "Imagem de tampa produzida pela Bortoncello"},
	},
	clientes: [
		{src: "assets/customers/petrobras.png", alt: "Logo Petrobrás"},
		{src: "assets/customers/ufrgs.png", alt: "Logo UFRGS"},
		{src: "assets/customers/corsan.png", alt: "Logo Corsan"},
		{src: "assets/customers/pucRS.webp", alt: "Logo PUC RS"},
		{src: "assets/customers/brasilit.png", alt: "Logo Brasilit"},
		{src: "assets/customers/zaffari.webp", alt: "Logo Zaffari"},
		{src: "assets/customers/grupoMarista.png", alt: "Logo Marista"},
		{src: "assets/customers/laSalle.png", alt: "Logo La Salle"},
		{src: "assets/customers/hmipv.png", alt: "Logo HMIPV"},
		{src: "assets/customers/fundacaoCEEE.png", alt: "Logo CEEE"},
	],
	imagens: {
		lajes: [
			{
				antes: {src: "assets/images/galeriaImagens/lajes23A.JPG", alt: "Imagem de laje antes"},
				depois: {src: "assets/images/galeriaImagens/lajes23D.JPG", alt: "Imagem de laje depois"},
			},
			{
				antes: {src: "assets/images/galeriaImagens/lajes43A.JPG", alt: "Imagem de laje antes"},
				depois: {src: "assets/images/galeriaImagens/lajes43D.JPG", alt: "Imagem de laje depois"},
			},
			{
				antes: {src: "assets/images/galeriaImagens/lajes53A.jpeg", alt: "Imagem de laje antes"},
				depois: {src: "assets/images/galeriaImagens/lajes53D.jpg", alt: "Imagem de laje depois"},
			},
		],
		caixasDagua: [
			{
				antes: {src: "assets/images/galeriaImagens/caixaDagua1A.JPG", alt: "Imagem de caixa d'água antes"},
				depois: {src: "assets/images/galeriaImagens/caixaDagua1D.jpg", alt: "Imagem de caixa d'água depois"},
			},
			{
				antes: {src: "assets/images/galeriaImagens/caixaDagua4A.JPG", alt: "Imagem de caixa d'água antes"},
				depois: {src: "assets/images/galeriaImagens/caixaDagua4D.jpg", alt: "Imagem de caixa d'água depois"},
			},
			{
				antes: {src: "assets/images/galeriaImagens/caixaDagua33A.JPG", alt: "Imagem de caixa d'água antes"},
				depois: {src: "assets/images/galeriaImagens/caixaDagua33D.JPG", alt: "Imagem de caixa d'água depois"},
			},
		],
		marquises: [
			{
				antes: {src: "assets/images/galeriaImagens/marquise2A.jpg", alt: "Imagem de marquise antes"},
				depois: {src: "assets/images/galeriaImagens/marquise2D.jpg", alt: "Imagem de marquise depois"},
			},
			{
				antes: {src: "assets/images/galeriaImagens/marquise3A.jpg", alt: "Imagem de marquise antes"},
				depois: {src: "assets/images/galeriaImagens/marquise3D.jpg", alt: "Imagem de marquise depois"},
			},
			{
				antes: {src: "assets/images/galeriaImagens/marquise6A.JPG", alt: "Imagem de marquise antes"},
				depois: {src: "assets/images/galeriaImagens/marquise6D.jpg", alt: "Imagem de marquise depois"},
			},
		],
	},
};

const iconLibrary = {
	internal: {
		areasMolhadas: {src: "assets/icons/areasMolhadas.png", alt: "Ícone representativo"},
		caixasDagua: {src: "assets/icons/caixasDagua.png", alt: "Ícone representativo"},
		check: {src: "assets/icons/check.png", alt: "Ícone representativo"},
		elevador: {src: "assets/icons/elevador.png", alt: "Ícone representativo"},
		emborrachadoFlexivel: {src: "assets/icons/emborrachadoFlexivel.png", alt: "Ícone representativo"},
		esquadro: {src: "assets/icons/esquadro.png", alt: "Ícone representativo"},
		lajes: {src: "assets/icons/lajes.png", alt: "Ícone representativo"},
		medalha: {src: "assets/icons/medalha.png", alt: "Ícone representativo"},
		piscinas: {src: "assets/icons/piscinas.png", alt: "Ícone representativo"},
		sistemaCristalizante: {src: "assets/icons/sistemaCristalizante.png", alt: "Ícone representativo"},
		areasMolhadasBranco: {src: "assets/icons/areasMolhadasBranco.png", alt: "Ícone representativo"},
		caixasDaguaBranco: {src: "assets/icons/caixasDaguaBranco.png", alt: "Ícone representativo"},
		checkBranco: {src: "assets/icons/checkBranco.png", alt: "Ícone representativo"},
		elevadorBranco: {src: "assets/icons/elevadorBranco.png", alt: "Ícone representativo"},
		emborrachadoFlexivelBranco: {src: "assets/icons/emborrachadoFlexivelBranco.png", alt: "Ícone representativo"},
		esquadroBranco: {src: "assets/icons/esquadroBranco.png", alt: "Ícone representativo"},
		lajesBranco: {src: "assets/icons/lajesBranco.png", alt: "Ícone representativo"},
		medalhaBranco: {src: "assets/icons/medalhaBranco.png", alt: "Ícone representativo"},
		piscinasBranco: {src: "assets/icons/piscinasBranco.png", alt: "Ícone representativo"},
		sistemaCristalizanteBranco: {src: "assets/icons/sistemaCristalizanteBranco.png", alt: "Ícone representativo"},
	},
	external: {
		linkedin: {src: "assets/icons/linkedin.webp", alt: "Ícone LinkedIn"},
		instagram: {src: "assets/icons/instagram.webp", alt: "Ícone Instagram"},
		whatsapp: {src: "assets/icons/whatsapp.png", alt: "Ícone WhatsApp"},
	},
};

const linkLibrary = {
	internal: {
		home: "index.html",
		quemSomos: "quem-somos.html",
		solucoes: "solucoes.html",
		solucoesSistemas: "solucoes.html#sistemas",
		solucoesLocaisDeAplicacao: "solucoes.html#locaisDeAplicacao",
		solucoesTampas: "solucoes.html#tampas",
		solucoesLaudosTecnicos: "solucoes.html#laudosTecnicos",
		diferenciais: "/#diferenciais",
		clientes: "clientes.html",
		imagens: "imagens.html",
		contato: "contato.html",
	},
	external: {
		email: "mailto:contato@bortoncelloengenharia.com.br",
		linkedin: "https://www.linkedin.com/company/bortoncelloengenharia",
		instagram: "https://www.instagram.com/bortoncello.engenharia",
		whatsapp:
			"https://api.whatsapp.com/send?phone=555130599200&text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+o+trabalho+da+bortoncello+e+solicitar+uma+visita+t%C3%A9cnica!",
		googleMaps:
			"https://www.google.com/maps/place/Bortoncello+Engenharia+de+Impermeabiliza%C3%A7%C3%A3o/@-29.9448175,-51.1789899,17z/data=!3m1!4b1!4m6!3m5!1s0x9519716359cb90f7:0x1e5a55c8c2b16842!8m2!3d-29.9448175!4d-51.1789899!16s%2Fg%2F11zjw7xghm",
	},
};

const contactLibrary = {
	telefone: {text: "51 3059 9200", link: linkLibrary.external.whatsapp},
	eMail: {text: "contato@bortoncelloengenharia.com.br", link: linkLibrary.external.email},
	endereço: {
		rua: {text: "Rua João Nicolau, 166", link: linkLibrary.external.googleMaps},
		cidade: {text: "Canoas / RS", link: linkLibrary.external.googleMaps},
	},
};

const textLibrary = {
	header: {
		buttons: [
			{text: "Home", link: linkLibrary.internal.home},
			{text: "Quem Somos", link: linkLibrary.internal.quemSomos},
			{
				text: "Soluções",
				link: linkLibrary.internal.solucoes,
				dropdown: [
					{text: "Sistemas", link: linkLibrary.internal.solucoesSistemas},
					{text: "Locais de Aplicação", link: linkLibrary.internal.solucoesLocaisDeAplicacao},
					{text: "Tampa para Caixa d'Água", link: linkLibrary.internal.solucoesTampas},
					{text: "Laudos Técnicos", link: linkLibrary.internal.solucoesLaudosTecnicos},
				],
			},
			{text: "Clientes", link: linkLibrary.internal.clientes},
			{
				text: "Imagens",
				link: linkLibrary.internal.imagens,
				dropdown: [
					{text: "Lajes", link: linkLibrary.internal.imagens},
					{text: "Marquises", link: linkLibrary.internal.imagens},
					{text: "Caixas d'Água", link: linkLibrary.internal.imagens},
				],
			},
			{text: "Contato", link: linkLibrary.internal.contato},
		],
		whatsapp: {
			text: "SOLICITAR VISITA TÉCNICA",
			icon: iconLibrary.external.whatsapp,
			link: linkLibrary.external.whatsapp,
		},
	},
	footer: {
		first: {
			image: imageLibrary.whiteLogo,
			text: "A Bortoncello Engenharia de Impermeabilização atua há mais de 20 anos no mercado, oferecendo soluções que protegem e valorizam o seu imóvel.",
		},
		second: {
			header: "LINKS RÁPIDOS",
			content: [
				{text: "Quem somos", link: linkLibrary.internal.quemSomos},
				{text: "Soluções", link: linkLibrary.internal.solucoes},
				{text: "Clientes", link: linkLibrary.internal.clientes},
				{text: "Imagens", link: linkLibrary.internal.imagens},
				{text: "Contato", link: linkLibrary.internal.contato},
			],
		},
		third: {
			header: "CONTATO",
			content: [contactLibrary.telefone, contactLibrary.eMail],
		},
		fourth: {
			header: "ENDEREÇO",
			content: [contactLibrary.endereço.rua, contactLibrary.endereço.cidade],
		},
		credits: "©2026 por Wagner Thiele Fracassi\nTodos direitos reservados",
	},
	home: {
		intro: {
			solucoes: {
				header: "Soluções em\nimpermeabilização",
				subheader: "que protegem e valorizam seu imóvel",
				button: {text: "Conheça nossos sistemas", icon: "", link: linkLibrary.internal.solucoesSistemas},
			},
			protecao: {
				header: "Proteção sob medida",
				subheader: "para lajes, caixas d'água, poços de elevador, áreas molhadas e muiton mais",
				button: {text: "Saiba mais", icon: "", link: linkLibrary.internal.solucoesLocaisDeAplicacao},
			},
			eficiencia: {
				header: "Eficiência e segurança",
				subheader: "Execução rápida e até 10 anos de garantia",
				button: {text: "Veja nossos diferenciais", icon: "", link: linkLibrary.internal.diferenciais},
			},
			laudos: {
				header: "Laudos técnicos",
				subheader: "Avaliação completa, com ART, vistoria especializada e suporte técnico",
				button: {text: "Saiba mais", icon: "", link: linkLibrary.internal.solucoesLaudosTecnicos},
			},
		},
		areasDeAplicacao: {
			smallHeader: "Áreas de Aplicação",
			header: "IMPERMEABILIZAÇÃO INTELIGENTE",
			buttons: [
				{
					text: "MARQUISES, LAJES E TERRAÇOS",
					icon: iconLibrary.internal.lajes,
					link: linkLibrary.internal.solucoesLocaisDeAplicacao,
				},
				{
					text: "CAIXAS D'AGUA",
					icon: iconLibrary.internal.caixasDagua,
					link: linkLibrary.internal.solucoesLocaisDeAplicacao,
				},
				{
					text: "PISCINAS",
					icon: iconLibrary.internal.piscinas,
					link: linkLibrary.internal.solucoesLocaisDeAplicacao,
				},
				{
					text: "BANHEIROS E ÁREAS MOLHADAS",
					icon: iconLibrary.internal.areasMolhadas,
					link: linkLibrary.internal.solucoesLocaisDeAplicacao,
				},
				{
					text: "FOSSOS DE ELEVADOR",
					icon: iconLibrary.internal.elevador,
					link: linkLibrary.internal.solucoesLocaisDeAplicacao,
				},
			],
		},
		entendaComoFunciona: {
			smallHeader: "Entenda como funciona",
			header: "SISTEMAS QUE IMPERMEABILIZAM E EMBELEZAM",
			text: "Os sistemas Bortoncello combinam inovação, resistência e ótimo custo-benefício. Garantem proteção duradoura com acabamento bonito e aplicação precisa em qualquer estrutura. ",
			button: {
				text: "CONHEÇA NOSSOS SISTEMAS",
				link: linkLibrary.internal.solucoesSistemas,
			},
		},
		diferenciais: {
			smallHeader: "Diferenciais",
			header: "Por que a Bortoncello é diferente?",
			cards: [
				{
					header: "VISITA TÉCNICA GRATUITA",
					text: "Avaliação sem compromisso, sem custo adicional para o cliente.",
					icon: iconLibrary.internal.checkBranco,
				},
				{
					header: "EQUIPE TÉCNICA\nESPECIALIZADA",
					text: "Colaboradores treinados conforme NR-6, NR-33 e NR-35.",
					icon: iconLibrary.internal.checkBranco,
				},
				{
					header: "EXECUÇÃO RÁPIDA\nE LIMPA",
					text: "Sem remoção de piso, minimizando transtornos e sujeira.",
					icon: iconLibrary.internal.checkBranco,
				},
				{
					header: "ACABAMENTO ESTÉTICO E SEGURO",
					text: "Resultado que garante uma superfície bonita e antiderrapante.",
					icon: iconLibrary.internal.checkBranco,
				},
				{
					header: "SISTEMAS\nADAPTÁVEIS",
					text: "Materiais flexíveis que se moldam a superfícies de qualquer formato.",
					icon: iconLibrary.internal.checkBranco,
				},
				{
					header: "GARANTIA DE\nATÉ 10 ANOS",
					text: "Segurança prolongada, garantindo tranquilidade a longo prazo.",
					icon: iconLibrary.internal.checkBranco,
				},
				{
					header: "ALTA RESISTÊNCIA A\nMOVIMENTAÇÕES\nESTRUTURAIS",
					text: "Segurança prolongada, garantindo tranquilidade a longo prazo.",
					icon: iconLibrary.internal.checkBranco,
				},
			],
		},
		clientes: {
			smallHeader: "Clientes",
			header: "Quem já conhece a nossa qualidade",
		},
		nossoTrabalho: {
			smallHeader: "Nosso trabalho",
			header: "Confira os antes e depois da Bortoncello",
			cards: [
				{
					text: "Marquise",
					before: imageLibrary.home.nossoTrabalho.marquiseAntes,
					after: imageLibrary.home.nossoTrabalho.marquiseDepois,
				},
				{
					text: "Laje",
					before: imageLibrary.home.nossoTrabalho.lajeAntes,
					after: imageLibrary.home.nossoTrabalho.lajeDepois,
				},
				{
					text: "Caixa D'água",
					before: imageLibrary.home.nossoTrabalho.caixaDaguaAntes,
					after: imageLibrary.home.nossoTrabalho.caixaDaguaDepois,
				},
				{
					text: "Teste de Estanqueidade",
					before: imageLibrary.home.nossoTrabalho.estanqueidadeUm,
					after: imageLibrary.home.nossoTrabalho.estanqueidadeDois,
				},
			],
		},
	},
	quemSomos: {
		quemSomos: {
			header: "Quem Somos",
			text: [
				"Há mais de 20 anos, a Bortoncello Engenharia de Impermeabilização busca a excelência em cada projeto, com seriedade, responsabilidade e atenção aos detalhes. Nossa história é construída sobre pilares sólidos: qualidade nos processos, dedicação no atendimento e acompanhamento técnico do orçamento à entrega final.",
				"Acreditamos que impermeabilizar é mais do que prevenir infiltrações: é proteger o investimento de uma vida, valorizar o patrimônio construído com esforço e garantir a segurança e o bem-estar das pessoas que habitam esses espaços. Nossa razão de existir é cuidar da estrutura que sustenta histórias, unindo tecnologia e humanidade por um propósito claro: proteger, preservar e proporcionar tranquilidade. ",
			],
		},
		premios: {
			top: [
				{
					header: "Prêmios que refletem nossa trajetória",
					text: "Em 2011, fomos reconhecidos como Destaque Gaúcho pelo conjunto de nossa atuação no setor. No ano seguinte, recebemos o 2012, na 17ª edição do prêmio promovido pela Revista Destaque Gaúcho, com apoio do programa Destaque Brasil da Band TV RS.",
					icon: iconLibrary.internal.medalhaBranco,
				},
				{
					header: "Rigor técnico alinhado às normas",
					text: "Nossa equipe é composta por profissionais qualificados, com formação específica e certificações exigidas para ambientes de risco, incluindo os treinamentos NR6, NR33 e NR35. Também utilizamos equipamentos adequados às normas de segurança e engenharia, assegurando processos seguros, eficientes e confiáveis em todas as obras.",
					icon: iconLibrary.internal.esquadroBranco,
				},
			],
			bottom: [
				{
					header: "Missão",
					text: "Proteger pessoas e suas conquistas, preservando lares e negócios com soluções que unem técnica, cuidado e inovação. Nossa missão é oferecer tranquilidade, segurança e valorização aos espaços, contribuindo para um mundo com edificações mais seguras, duradouras e acolhedoras.",
				},
				{
					header: "Visão",
					text: "Ser reconhecida como referência em impermeabilização pela eficiência, pela qualidade e pela tranquilidade em cada etapa do processo. Queremos ser lembrados não apenas pelo resultado final, mas pela confiança que transmitimos ao longo da jornada com nossos clientes.",
				},
				{
					header: "Valores",
					text: "- Compromisso em proteger pessoas e suas histórias\n- Eficiência que gera confiança em cada entrega\n- Cuidado humano aliado à excelência técnica\n- Transparência que fortalece relações duradouras\n- Inovação que prolonga a vida dos espaços",
				},
			],
		},
		nossosLideres: [
			{
				header: "Paulo Bortoncello",
				subheader: "Fundador e sócio-proprietário",
				text: "Com experiência em gestão empresarial, atua na coordenação estratégica e administrativa da Bortoncello desde a sua fundação, contribuindo para o crescimento com foco em qualidade, responsabilidade e solidez nas relações com clientes e parceiros.",
				image: imageLibrary.quemSomos.nossosLideres.paulo,
			},
			{
				header: "Beatriz Petri",
				subheader: "Cofundadora e sócia-proprietária",
				text: "Atua na gestão administrativa e financeira da empresa. Com ampla experiência em organização empresarial, é responsável pelo controle dos processos internos e suporte operacional. Seu trabalho contribui diretamente para a eficiência, confiabilidade e solidez das entregas da empresa. ",
				image: imageLibrary.quemSomos.nossosLideres.beatriz,
			},
			{
				header: "Aline Bortoncello",
				subheader: "Responsável técnica - CREA/RS: 223.347",
				text: "Especialista em Conservação e Reabilitação de Construções, pela ISEL, Portugal. Especialista em Tecnologia da Impermeabilização - IDD Educação Avançada. MBA Gestão Estratégica de Negócios. Responsável pela supervisão técnica de todas as obras e laudos.",
				image: imageLibrary.quemSomos.nossosLideres.aline,
			},
		],
	},
	solucoes: {
		intro: {
			header: "Soluções",
			subheader: "Confira as soluções que a\nBortoncello Engenharia proporciona",
		},
		sistemasImpermeabilizantes: {
			header: "Sistemas Impermeabilizantes",
			content: [
				{
					header: "Sistema emborrachado flexível",
					text: "O Sistema Emborrachado Flexível é composto por uma formulação exclusiva à base de resinas e cimentos aditivados, que resultam em uma membrana elástica e impermeável. Essa composição oferece excelente aderência ao substrato e alta capacidade elástica, formando uma camada resistente e flexível que acompanha as movimentações estruturais da edificação sem perder sua integridade.\n\nÉ indicado em casos de infiltração por pressão positiva da água, ou seja, quando a umidade exerce força diretamente contra a superfície impermeabilizada.\n\nIdeal para: ",
					span: "LAJES | MARQUISES | COBERTURAS | FLOREIRAS | ÁREAS MOLHADAS | CAIXAS D'ÁGUA | PISCINAS",
					spanLink: linkLibrary.internal.imagens,
					icon: iconLibrary.internal.emborrachadoFlexivel,
				},
				{
					header: "Sistema cristalizante",
					text: "O Sistema Cristalizante atua de forma diferente: sua tecnologia é baseada em uma reação química que ocorre quando o produto entra em contato com a umidade existente na estrutura. Essa reação promove a formação de cristais que penetram nos poros do concreto, bloqueando os canais capilares e impedindo a passagem da água.\n\nÉ especialmente indicado para locais que recebem pressão negativa da água, que é quando a umidade atua no sentido oposto, ou seja, tentando se infiltrar por trás da camada impermeável.\n\nIdeal para: ",
					span: "POÇOS DE ELEVADOR | SUBSOLOS | CORTINAS | CISTERNAS | FUNDAÇÕES | PAREDES EM CONTATO COM O SOLO",
					spanLink: linkLibrary.internal.imagens,
					icon: iconLibrary.internal.sistemaCristalizante,
				},
			],
		},
		locaisDeAplicacao: {
			header: "Locais de Aplicação",
			subheader: "Para cada ambiente, uma solução ideal",
			content: [
				{
					header: "Áreas Horizontais Externas",
					subheader: "Lajes, coberturas, terraços, marquises e floreiras",
					text: "Ambientes destinados ao armazenamento de líquidos requerem impermeabilização interna, capaz de resistir à umidade constante e garantir estanqueidade total. Os sistemas aplicados formam uma barreira contínua, segura e higiênica, protegendo tanto o reservatório quanto a estrutura do edifício.",
					icon: iconLibrary.internal.lajes,
				},
				{
					header: "Áreas de armazenamento\nde água",
					subheader: "Caixas d'água e tanques de retenção",
					text: "Essas superfícies ficam expostas às variações do clima e acumulam água da chuva, sofrendo com infiltrações por pressão positiva. São áreas que exigem sistemas altamente flexíveis, que acompanham as movimentações da estrutura e garantem proteção contínua, sem necessidade de remoção do revestimento existente.",
					icon: iconLibrary.internal.caixasDagua,
				},
				{
					header: "Áreas molhadas internas",
					subheader: "Banheiros, vestiários e áreas de serviço",
					text: "Presentes em ambientes internos, essas áreas são frequentemente lavadas ou expostas à água. A impermeabilização é aplicada antes do acabamento final, formando uma camada protetora que impede a passagem de umidade para andares inferiores ou estruturas vizinhas, evitando infiltrações e danos futuros.",
					icon: iconLibrary.internal.areasMolhadas,
				},
				{
					header: "Estruturas em contato com o solo",
					subheader: "Poços de elevador, subsolos, cortinas, fundações, cisternas",
					text: "Estruturas subterrâneas estão sujeitas à infiltração por pressão negativa, quando a água tenta penetrar do solo para o interior da construção. A solução ideal nesses casos é o sistema cristalizante, que atua internamente nos poros do concreto, bloqueando permanentemente a passagem da umidade. ",
					icon: iconLibrary.internal.elevador,
				},
				{
					header: "Piscinas e espelhos d'Água",
					subheader: "Piscinas residenciais ou coletivas e fontes decorativas",
					text: "Por estarem em contato constante com a água e exigirem um acabamento estético, esses espaços precisam de impermeabilização de alta performance, resistente à umidade e ao cloro. O sistema é aplicado por baixo do revestimento, garantindo vedação total e alta durabilidade. ",
					icon: iconLibrary.internal.piscinas,
				},
			],
		},
		tampas: {
			image: imageLibrary.solucoes.tampa,
			subheader: "Confecção de",
			header: "Tampas para caixa d'água",
			text: "A Bortoncello também oferece o serviço de confecção de tampas sob medida para caixas d'água, garantindo vedação eficiente, segurança e durabilidade. As tampas são produzidas em PRFV (plástico reforçado com fibra de vidro), material leve, resistente e imune à corrosão, ideal para ambientes úmidos e expostos. O acabamento de alta qualidade, aliado à fixação direta na laje e ao uso de aço inox nos componentes, assegura uma solução prática, higiênica e de excelente custo-benefício.",
			textList: [
				"Produzidas sob medida em PRFV (fiberglass)",
				"Fixação firme e segura diretamente na laje",
				"Puxadores e ganchos em aço inox, com alta durabilidade",
				"Excelente vedação contra insetos, sujeira e contaminantes",
				"Resistentes à umidade, sol, corrosão e variações climáticas",
				"Solução higiênica, leve e de fácil manuseio",
				"Ótimo custo-benefício com longa vida útil",
			],
			button: {text: "Veja a galeria", link: linkLibrary.internal.imagens},
		},
		laudosTecnicos: {
			top: {
				header: "Laudos Técnicos",
				content: [
					{
						header: "LTIP",
						subheader: "Laudo Técnico de Inspeção Predial",
						text: "O LTIP é um documento elaborado por profissional habilitado, que avalia as condições de conservação, segurança, manutenção e estabilidade de uma edificação. Ele identifica falhas, riscos e patologias que possam comprometer o desempenho da estrutura ou colocar em risco os usuários.\n\nEm cidades como Porto Alegre, o LTIP é obrigatório para edificações com mais de cinco anos e deve ser renovado a cada cinco anos, conforme a Lei Complementar nº 284/2023. A ausência do laudo pode resultar em multas ao condomínio e responsabilização legal do síndico em caso de acidentes.",
					},
					{
						header: "LEE",
						subheader: "Laudo Técnico de Estabilidade Estrutural",
						text: "O LEE tem como foco a verificação da segurança e integridade de elementos específicos da construção, como marquises, sacadas, fachadas e muros. O objetivo é detectar patologias estruturais — como fissuras, deslocamentos e armaduras expostas — que possam comprometer a estabilidade da edificação. \n\nTambém em Porto Alegre, o LEE é obrigatório a cada três anos, conforme a legislação vigente. A falta desse laudo dentro do prazo legal pode acarretar penalidades, incluindo multas e medidas administrativas. ",
					},
				],
			},
			bottom: [
				{
					header: "Procedimento e entrega",
					text: [
						"Levantamento e análise da documentação técnica do condomínio",
						"Vistoria in loco por profissional habilitado",
						"Registro fotográfico e diagnóstico técnico detalhado",
						"Recomendações para manutenção, correções ou intervenções",
						"Emissão do laudo com ART (Anotação de Responsabilidade Técnica)",
						"Protocolo junto à prefeitura, quando exigido pela legislação local",
					],
				},
				{
					header: "Vantagens dos laudos",
					text: [
						"Atendimento técnico especializado",
						"Laudos completos e claros para síndicos e gestores",
						"Diagnóstico preventivo que evita problemas futuros",
						"Valorização do imóvel e aumento da segurança",
						"Documentação que respalda decisões administrativas",
						"Conformidade legal e tranquilidade jurídica",
					],
				},
			],
		},
	},
	imagens: {
		header: "Galeria de Imagens",
		subheader: "Veja a qualidade dos nossos serviços através dos antes e depois",
		buttons: [
			{text: "Todas", link: ""},
			{text: "Lajes e Coberturas", link: ""},
			{text: "Caixas d'Água", link: ""},
			{text: "Marquises", link: ""},
		],
	},
	contato: {
		faleConosco: {
			smallHeader: "Fale com a gente",
			header: "Solicite uma visita técnica gratuita",
			text: [{}],
		},
	},
};


