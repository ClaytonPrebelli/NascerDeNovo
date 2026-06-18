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
- [ ] Rodar `ng build` para verificar erros de compilação
- [ ] git init e configurar remote (origin: git@github.com:claytonprebelli/NascerDeNovo.git)
- [ ] Fazer primeiro commit
- [ ] Push para GitHub
- [ ] Deploy GitHub Pages (ng deploy ou manual)
- [ ] Colocar imagens reais nos placeholders
- [ ] Formulário de contato funcional (enviar e-mail)
- [ ] Animações de scroll (opcional)
- [ ] Testar build production e corrigir warnings de budget

## Comandos Úteis
```powershell
ng serve              # dev server
ng build              # build production
```

## Problemas Conhecidos
- `lmdb` precisa de VS C++ para compilar nativo. Com `--ignore-scripts` funciona sem a native binding (não necessário para o build Angular padrão).
- Node v22.22.2, npm incluso.
