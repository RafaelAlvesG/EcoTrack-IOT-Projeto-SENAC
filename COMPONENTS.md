# 🎨 Guia de Componentes - Eco Track

## 📐 Sistema de Design

### Paleta de Cores

#### Cores Principais
```css
--primary-green:   #10B981  /* Verde - Sustentabilidade */
--primary-blue:    #3B82F6  /* Azul - Tecnologia */
--primary-yellow:  #F59E0B  /* Amarelo - Energia */
--primary-orange:  #F97316  /* Laranja - Ação */
```

#### Cores Neutras
```css
--white:    #FFFFFF
--gray-50:  #F9FAFB
--gray-100: #F3F4F6
--gray-200: #E5E7EB
--gray-900: #111827
--black:    #000000
```

#### Cores Semânticas
```css
--success: #10B981  /* Verde */
--warning: #F59E0B  /* Amarelo */
--error:   #EF4444  /* Vermelho */
--info:    #3B82F6  /* Azul */
```

---

## 🔤 Tipografia

### Fontes
- **Display/Headings:** Space Grotesk (400, 500, 600, 700)
- **Body/UI:** Inter (300, 400, 500, 600, 700, 800, 900)

### Escala de Texto
```css
h1: clamp(2.5rem, 5vw, 4rem)      /* 40-64px */
h2: clamp(2rem, 4vw, 3rem)        /* 32-48px */
h3: clamp(1.5rem, 3vw, 2rem)      /* 24-32px */
h4: clamp(1.25rem, 2vw, 1.5rem)   /* 20-24px */
p:  1rem (16px)                   /* Base */
```

---

## 📦 Componentes

### 1. Botões (`.btn`)

#### Variantes:
```html
<!-- Primário (gradiente verde-azul) -->
<button class="btn btn--primary">Começar Agora</button>

<!-- Outline (borda com hover) -->
<button class="btn btn--outline">Saiba Mais</button>

<!-- Ghost (transparente com hover) -->
<button class="btn btn--ghost">Contato</button>

<!-- Tamanho Grande -->
<button class="btn btn--primary btn--large">CTA Principal</button>

<!-- Largura Total -->
<button class="btn btn--primary btn--full">Escolher Plano</button>
```

#### Estados:
- **Hover:** `translateY(-2px)` + shadow aumentado
- **Active:** `translateY(0)`
- **Focus:** Outline verde
- **Disabled:** Opacity 0.5

---

### 2. Cards

#### Card Básico:
```html
<div class="feature-card">
    <div class="feature-icon">⚡</div>
    <h4>Título do Card</h4>
    <p>Descrição do recurso</p>
</div>
```

#### Dashboard Card:
```html
<div class="dashboard-card">
    <div class="card-icon energy">⚡</div>
    <div class="card-data">
        <span class="card-label">Energia</span>
        <span class="card-value">320 kWh</span>
        <span class="card-trend down">-12%</span>
    </div>
</div>
```

#### Pricing Card:
```html
<div class="pricing-card featured">
    <div class="popular-badge">Mais Popular</div>
    <div class="pricing-header">
        <h3>Empresarial</h3>
        <p>Para pequenas e médias empresas</p>
    </div>
    <div class="pricing-price">
        <span class="currency">R$</span>
        <span class="amount">199</span>
        <span class="period">/mês</span>
    </div>
    <ul class="pricing-features">
        <li>✓ Recurso 1</li>
        <li>✓ Recurso 2</li>
    </ul>
    <a href="#" class="btn btn--primary btn--full">Escolher Plano</a>
</div>
```

---

### 3. Badges

```html
<!-- Badge de Seção -->
<span class="section-badge">Como Funciona</span>

<!-- Badge de Desconto -->
<span class="discount-badge">-20%</span>

<!-- Badge Popular -->
<div class="popular-badge">Mais Popular</div>

<!-- Badge de Suporte -->
<div class="support-badge">
    <span class="pulse-dot"></span>
    <span>Suporte 24/7 Online</span>
</div>
```

---

### 4. Estatísticas

#### Stats do Hero:
```html
<div class="stat">
    <div class="stat__number">40%</div>
    <div class="stat__label">Redução de Custos</div>
</div>
```

#### Stats Highlight (About):
```html
<div class="stat-highlight">
    <span class="stat-number">50k+</span>
    <span class="stat-label">Usuários Ativos</span>
</div>
```

---

### 5. Gradientes

#### Texto com Gradiente:
```html
<h1>
    Transforme <span class="gradient-text">Consumo</span> em 
    <span class="gradient-text">Economia</span>
</h1>
```

#### CSS:
```css
.gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

---

## 🎭 Animações

### Animações de Entrada

```css
/* Fade In Up */
animation: fadeInUp 0.8s ease-out;

/* Slide In Left */
animation: slideInLeft 0.8s ease-out;

/* Scale In */
animation: scaleIn 0.6s ease-out;
```

### Animações Contínuas

```css
/* Float (ícones) */
animation: float 3s ease-in-out infinite;

/* Pulse (badges) */
animation: pulse 2s ease-in-out infinite;

/* Rotate (loading) */
animation: rotate 2s linear infinite;
```

### Delays Sequenciais

```css
.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }
```

---

## 📱 Responsividade

### Container
```css
.container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}
```

### Grid Responsivo
```css
/* Auto-fit com min-max */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

/* Desktop/Tablet/Mobile */
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small */ }
```

---

## 🎨 Efeitos de Hover

### Card Elevation
```css
transition: all var(--transition-base);

&:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
}
```

### Button Ripple
```css
/* Efeito de onda ao clicar */
position: relative;
overflow: hidden;

&::before {
    content: '';
    position: absolute;
    /* ... */
    transition: width 0.6s, height 0.6s;
}
```

### Card Tilt (3D)
```javascript
// JavaScript para tilt 3D
card.style.transform = `
    perspective(1000px) 
    rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg)
`;
```

---

## 🌟 Microinterações

### 1. Scroll Indicator
- Animação bounce
- Fade out ao scrollar

### 2. Progress Bar
- Cresce com scroll
- Gradiente animado

### 3. Counter Animation
- Anima de 0 até valor final
- Easing suave

### 4. Tab Switch
- Fade in/out
- Slide transition

### 5. Pricing Toggle
- Smooth price change
- Scale animation

---

## 🎯 Utilitários

### Spacing
```css
--spacing-xs:  0.25rem  /* 4px */
--spacing-sm:  0.5rem   /* 8px */
--spacing-md:  1rem     /* 16px */
--spacing-lg:  1.5rem   /* 24px */
--spacing-xl:  2rem     /* 32px */
--spacing-2xl: 3rem     /* 48px */
--spacing-3xl: 4rem     /* 64px */
--spacing-4xl: 6rem     /* 96px */
```

### Border Radius
```css
--radius-sm:   0.375rem  /* 6px */
--radius-md:   0.5rem    /* 8px */
--radius-lg:   0.75rem   /* 12px */
--radius-xl:   1rem      /* 16px */
--radius-2xl:  1.5rem    /* 24px */
--radius-full: 9999px    /* Circular */
```

### Shadows
```css
--shadow-sm:   0 1px 2px rgba(0,0,0,0.05)
--shadow-md:   0 4px 6px rgba(0,0,0,0.1)
--shadow-lg:   0 10px 15px rgba(0,0,0,0.1)
--shadow-xl:   0 20px 25px rgba(0,0,0,0.1)
--shadow-2xl:  0 25px 50px rgba(0,0,0,0.25)
--shadow-glow: 0 0 20px rgba(16,185,129,0.3)
```

---

## 🔧 Classes Utilitárias

```css
/* Texto com gradiente */
.gradient-text { /* ... */ }

/* Container centralizado */
.container { /* ... */ }

/* Esconder visualmente (acessibilidade) */
.sr-only { /* ... */ }

/* Animação de reveal */
.reveal { /* ... */ }
.reveal.active { /* ... */ }

/* Skeleton loading */
.skeleton { /* ... */ }

/* Esconder em mobile */
.hidden { display: none; }
```

---

## 📋 Checklist de Uso

Ao criar um novo componente:

- [ ] Use custom properties para cores
- [ ] Adicione estados de hover/focus
- [ ] Implemente versão mobile
- [ ] Adicione animação de entrada
- [ ] Teste acessibilidade
- [ ] Otimize performance
- [ ] Documente se complexo

---

**🎨 Design System v1.0 - Eco Track**  
*Atualizado em: 04/11/2025*
