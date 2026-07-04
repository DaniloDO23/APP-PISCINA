# 🏊 AquaOrça AI

Orçamentos inteligentes para manutenção de piscinas — calibrados para o mercado de Uberlândia/MG.

App mobile-first para piscineiros gerarem orçamentos profissionais a partir de foto + ajuste manual, com motor de cálculo por m² e índice de complexidade.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Onde colar o código

O código do app fica em `src/App.jsx`. Cole ali o conteúdo do artifact gerado no Claude (ele já vem com `export default`).

## Deploy (Vercel)

1. Suba este repositório no GitHub
2. Em vercel.com → **Add New → Project** → importe o repositório
3. A Vercel detecta Vite automaticamente. Clique em **Deploy**

Pronto — sai um domínio `aquaorca-ai.vercel.app`.

## Stack

- React 18 + Vite
- Estilo: CSS-in-JS (single file)
- Dados em memória (sem backend ainda)
