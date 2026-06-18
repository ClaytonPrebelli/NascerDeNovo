# AGENTS.md — Nascer de Novo

## Estado Atual
- Projeto Angular 18 criado via `ng new nascer-de-novo`
- 13 componentes standalone criados: Header, Hero, About, Mvv, Areas, Numbers, Courses, Leadership, Testimonials, Gallery, Donation, Contact, Footer
- Paleta: vermelho (#D42027), dourado (#C9A84C), fundo escuro (#1C1C1E), fundo claro (#FAF8F5)
- Fonte: Playfair Display (títulos) + Inter (corpo)
- Responsivo: breakpoints 968px, 768px, 540px
- Base href: `/NascerDeNovo/` (deploy GitHub Pages)
- npm install com `--ignore-scripts` concluído, mas lmdb não compilou nativamente (falta VS C++)

## Pendências
- [x] Build production OK (190KB, 34s)
- [x] git init + remote (origin: git@github.com:claytonprebelli/NascerDeNovo.git)
- [x] Todos componentes criados e compilando
- [x] package-lock.json adicionado e commitado
- [x] Push para GitHub
- [x] Deploy GitHub Pages → https://claytonprebelli.github.io/NascerDeNovo
- [ ] Colocar imagens reais nos placeholders
- [ ] Formulário de contato funcional (enviar e-mail)
- [ ] Animações de scroll (opcional)

## Comandos Úteis
```powershell
ng serve              # dev server
ng build              # build production
npx angular-cli-ghpages --dir="dist\nascer-de-novo\browser"  # deploy gh-pages
```

## Problemas Conhecidos
- `lmdb` precisa de VS C++ para compilar nativo. Com `--ignore-scripts` funciona sem a native binding (não necessário para o build Angular padrão).
- Node v22.22.2, npm incluso.
