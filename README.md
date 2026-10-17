# Agro Brasil Insumos Agrícolas Ltda. — Site Institucional

Site institucional oficial, responsivo e moderno da **Agro Brasil Insumos Agrícolas Ltda.**, desenvolvido em **React 19, TypeScript e Tailwind CSS v4 com Vite**, pronto para publicação estática no **GitHub Pages**.

---

## 🌾 Informações Oficiais da Empresa

- **Razão Social:** Agro Brasil Insumos Agrícolas Ltda.
- **Segmento:** Atacado de produtos e insumos agrícolas.
- **Endereço:** Perimetral Sudeste, 11107, Centro Sul, Sorriso – MT, CEP 78896-084.
- **Telefone e WhatsApp:** [+55 66 99980-5400](tel:+5566999805400)
- **Localização no Google Maps:** [Abrir rota no Maps](https://www.google.com/maps/search/?api=1&query=Perimetral+Sudeste%2C+11107%2C+Centro+Sul%2C+Sorriso+-+MT%2C+78896-084%2C+Brasil)
- **Mensagem pré-escrita oficial do WhatsApp:**
  > *"Olá! Conheci a Agro Brasil Insumos Agrícolas pelo site e gostaria de obter mais informações sobre os produtos e insumos agrícolas. Poderiam me atender, por favor?"*

---

## 📁 Estrutura de Arquivos

```text
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automação de publicação no GitHub Pages
├── public/
│   └── images/                   # Pasta oficial com as fotografias reais
│       ├── fachada-agrobrasil.jpeg
│       ├── logo-agrobrasil.jpeg
│       ├── analise-tecnica.jpeg
│       ├── planta-soja.jpeg
│       ├── lavoura-equipe.jpeg
│       ├── tecnico-no-campo.jpeg
│       └── equipe-na-lavoura.jpeg
├── src/
│   ├── components/
│   │   ├── BrandLogo.tsx         # Logotipo oficial (variantes clara e escura)
│   │   ├── TopBar.tsx            # Barra superior (endereço e telefone direto)
│   │   ├── Header.tsx            # Menu de navegação e botão WhatsApp
│   │   ├── Hero.tsx              # Banner principal com foto técnica e CTAs
│   │   ├── AboutSection.tsx      # Institucional, pilares 01, 02, 03 e fotos
│   │   ├── FieldWorkSection.tsx  # Atuação no campo com 4 cards técnicos
│   │   ├── GallerySection.tsx    # Galeria "Registro em Imagens"
│   │   ├── ContactSection.tsx    # Contato, rota Google Maps e fachada
│   │   ├── Footer.tsx            # Rodapé institucional completo
│   │   ├── FloatingWhatsApp.tsx  # Botão flutuante do WhatsApp com pulso
│   │   ├── ImageModal.tsx        # Lightbox/Modal de ampliação com navegação
│   │   ├── PhotoUploadAssistant.tsx # Gerenciador de fotos oficial
│   │   └── SafeImage.tsx         # Carregamento seguro e responsivo de imagens
│   ├── constants/
│   │   └── company.ts            # Dados da empresa, rotas, textos e fotos
│   ├── context/
│   │   └── ImageContext.tsx      # Provedor de imagens e fallback
│   ├── App.tsx                   # Composição principal da página única
│   ├── main.tsx                  # Ponto de entrada React
│   └── index.css                 # Importação do Tailwind CSS v4
├── index.html                    # SEO, OpenGraph, JSON-LD Schema.org e fontes
├── vite.config.ts                # Configuração com base relativa './' para GitHub Pages
├── tsconfig.json                 # Configuração TypeScript
└── package.json                  # Dependências e scripts
```

---

## 🚀 Como Executar Localmente

### 1. Pré-requisitos
- Node.js versão 20 ou 22 instalada.
- npm ou yarn.

### 2. Instalação das dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse no seu navegador: `http://localhost:3000`

---

## 🛠️ Como Gerar a Versão de Produção (Build Estático)

Para gerar os arquivos estáticos na pasta `dist/`:

```bash
npm run build
```

O comando compilará o TypeScript e o Tailwind CSS, gerando o bundle otimizado em `dist/`.

Para testar o resultado localmente antes de publicar:
```bash
npm run preview
```

---

## 🌐 Publicação no GitHub Pages

O projeto já vem 100% configurado para o GitHub Pages:

### Método 1: Publicação Automática via GitHub Actions (Recomendado)

1. Envie o projeto para o seu repositório no GitHub:
   ```bash
   git init
   git add .
   git commit -m "Site institucional Agro Brasil"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   git push -u origin main
   ```
2. No GitHub, abra o repositório e acesse:
   **Settings** > **Pages**.
3. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
4. O workflow `.github/workflows/deploy.yml` será acionado automaticamente a cada commit na branch `main` e publicará o site em poucos segundos!

### Método 2: Repositório com Subdiretório (`/nome-do-repositorio/`)

O arquivo `vite.config.ts` utiliza `base: process.env.VITE_BASE_PATH || './'`.
- Graças aos caminhos relativos `'./'`, o site funciona tanto na raiz de domínios personalizados (`https://agrobrasil.com.br/`) quanto em subpastas do GitHub Pages (`https://seu-usuario.github.io/nome-do-repositorio/`) sem quebrar imagens ou folhas de estilo.
- Se preferir definir explicitamente no build:
  ```bash
  VITE_BASE_PATH=/nome-do-repositorio/ npm run build
  ```

---

## 📸 Fotografias Oficiais da Empresa

As 7 fotografias reais fornecidas estão padronizadas na pasta `public/images/`:

1. `fachada-agrobrasil.jpeg` — Sede e Fachada Comercial em Sorriso - MT.
2. `logo-agrobrasil.jpeg` — Identidade Visual e Recepção com Sofá.
3. `analise-tecnica.jpeg` — Avaliação Técnica Coletiva na Lavoura de Soja.
4. `planta-soja.jpeg` — Monitoramento Radicular e Desenvolvimento da Soja.
5. `lavoura-equipe.jpeg` — Dia de Campo e Integração Técnica com Produtores.
6. `tecnico-no-campo.jpeg` — Agrônomo com Chapéu em Meio à Lavoura.
7. `equipe-na-lavoura.jpeg` — Presença e Parceria com o Produtor Rural.

---

## ✅ Conformidade e Checklist de Entrega

- [x] Nome e razão social oficiais: **Agro Brasil Insumos Agrícolas Ltda.**
- [x] Endereço completo: Perimetral Sudeste, 11107, Centro Sul, Sorriso – MT.
- [x] Todos os botões de WhatsApp funcionam com o número `5566999805400` e mensagem pré-escrita codificada.
- [x] Botão "Como chegar" abre o Google Maps diretamente no endereço da empresa sem chave de API.
- [x] Link de telefone direto `tel:+5566999805400`.
- [x] Menu mobile responsivo com abertura, fechamento e rolagem suave.
- [x] Galeria com ampliação (lightbox), navegação anterior/próxima e tecla `Esc`.
- [x] Animações suaves respeitando `prefers-reduced-motion`.
- [x] Totalmente compatível com hospedagem estática no GitHub Pages.
- [x] Metadados SEO, OpenGraph e dados estruturados Schema.org em português brasileiro.
