# 🌍 Eco Track - Website

> Transformando consumo em economia e sustentabilidade através de tecnologia IoT inteligente

## 📋 Sobre o Projeto

O Eco Track é um website moderno e altamente responsivo desenvolvido para apresentar uma plataforma IoT revolucionária que promove economia e sustentabilidade através do monitoramento inteligente de recursos.

### ✨ Características Principais

- **Design Moderno e Criativo**: Interface vibrante com animações elegantes e microinterações
- **100% Responsivo**: Adaptação perfeita para desktop, tablet e mobile
- **Performance Otimizada**: Código limpo e otimizado para carregamento rápido
- **Acessibilidade**: Seguindo as melhores práticas de WCAG
- **Animações Fluidas**: Transições suaves e efeitos impressionantes
- **Paleta Harmônica**: Verde, azul, amarelo/laranja e branco

## 🎨 Paleta de Cores

```css
Verde Primário:   #10B981
Azul Primário:    #3B82F6
Amarelo:          #F59E0B
Laranja:          #F97316
Branco:           #FFFFFF
Cinza Escuro:     #1F2937
```

## 🏗️ Estrutura do Projeto

```
Ecotrack/
├── index.html              # Página principal
├── style.css               # Estilos globais e variáveis
├── components/             # CSS modular por componente
│   ├── header.css         # Navegação e cabeçalho
│   ├── hero.css           # Seção hero com animações
│   ├── how-it-works.css   # Explicação do funcionamento
│   ├── demo.css           # Demonstração interativa
│   ├── pricing.css        # Planos e preços
│   ├── about.css          # Sobre nós e ESG
│   └── footer.css         # Rodapé
├── js/                     # Scripts JavaScript
│   ├── main.js            # Funcionalidades principais
│   └── animations.js      # Animações avançadas
└── assets/                 # Recursos estáticos
    ├── fonts/             # Fontes customizadas
    ├── icons/             # Ícones SVG
    └── images/            # Imagens e ilustrações
```

## 🚀 Seções do Site

### 1. **Home / Hero**
- Título impactante com gradiente animado
- Chamada para ação (CTA) dupla
- Estatísticas em tempo real
- Preview do dashboard com cards animados

### 2. **Como Funciona**
- 4 etapas visuais do processo IoT
- Animações sequenciais
- Cards de recursos (Energia, Água, Gás)
- Ícones SVG customizados

### 3. **Demonstração**
- Tabs interativas (Dashboard, Análises, Alertas, Ranking)
- Simulação de interface real
- Gráficos animados
- Métricas em tempo real

### 4. **Planos e Preços**
- Toggle mensal/anual com desconto
- 3 planos (Residencial, Empresarial, Industrial)
- Comparação "Com vs Sem Eco Track"
- Animações de hover impressionantes

### 5. **Sobre Nós**
- Missão, Visão e Valores
- Pilares ESG (Environmental, Social, Governance)
- Estatísticas de impacto
- Design card-based

### 6. **Rodapé**
- Informações de contato
- Links rápidos
- Redes sociais
- Badge de suporte 24/7

## 🎭 Animações e Efeitos

### CSS Animations
- `fadeIn`, `fadeInUp`, `fadeInDown`
- `slideInLeft`, `slideInRight`
- `scaleIn`, `float`, `rotate`
- `pulse`, `bounce`, `shimmer`
- Gradientes dinâmicos
- Efeitos de hover 3D

### JavaScript Interactions
- Scroll reveal
- Parallax effect
- Magnetic buttons
- Card tilt effect
- Ripple effect
- Counter animations
- Scroll progress bar
- Tabs dinâmicas
- Toggle de preços

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Animations, Transitions
- **JavaScript ES6+**: Vanilla JS, sem frameworks
- **Google Fonts**: Inter, Space Grotesk
- **SVG**: Ícones e ilustrações vetoriais

## 📱 Responsividade

### Breakpoints

```css
Desktop:  > 1024px
Tablet:   768px - 1024px
Mobile:   < 768px
Small:    < 480px
```

### Abordagem
- Mobile-first approach
- Fluid typography com `clamp()`
- Flexible layouts com Grid e Flexbox
- Imagens otimizadas e lazy loading

## ⚡ Performance

### Otimizações Implementadas

- [x] Minificação de CSS/JS (produção)
- [x] Lazy loading de imagens
- [x] Debounce/Throttle em eventos
- [x] CSS Grid/Flexbox ao invés de floats
- [x] Animações com `transform` e `opacity`
- [x] Intersection Observer API
- [x] Preload de fontes críticas

## 🎯 Boas Práticas

- Código semântico e acessível
- Comentários claros e organizados
- Arquitetura CSS modular (BEM-like)
- JavaScript orientado a objetos
- Progressive Enhancement
- Graceful Degradation

## 🌐 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📦 Como Usar

1. Clone ou baixe o repositório
2. Abra `index.html` em seu navegador
3. Ou use um servidor local:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

4. Acesse `http://localhost:8000`

## 🎨 Customização

### Alterar Cores

Edite as variáveis CSS em `style.css`:

```css
:root {
    --primary-green: #10B981;
    --primary-blue: #3B82F6;
    --primary-yellow: #F59E0B;
    /* ... */
}
```

### Adicionar Novos Componentes

1. Crie um arquivo CSS em `components/`
2. Importe no `index.html`
3. Adicione o HTML correspondente
4. Configure animações se necessário

## 🐛 Debugging

### Console do Navegador

O site inclui mensagens úteis no console:
- Logo ASCII Art
- Mensagens de inicialização
- Avisos de desenvolvimento

### DevTools

Use as ferramentas de desenvolvedor para:
- Inspecionar animações
- Verificar responsividade
- Analisar performance
- Debug JavaScript

## 📄 Licença

© 2025 Eco Track. Todos os direitos reservados.

## 🤝 Contribuições

Para melhorias e sugestões, entre em contato:
- 📧 Email: contato@ecotrack.com.br
- 📱 Telefone: 0800 123 4567

## 🎓 Créditos

- **Design**: Eco Track Innovation Team
- **Desenvolvimento**: Eco Track Dev Team
- **Fontes**: Google Fonts (Inter, Space Grotesk)

---

**Desenvolvido com 💚 para um futuro mais sustentável**

🌱 Economize recursos | 📊 Dados em tempo real | 🌍 Impacto ambiental positivo
