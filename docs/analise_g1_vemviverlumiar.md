# Análise G1 → Adaptações para Vem Viver Lumiar

## 🎯 Elementos Estratégicos Identificados

### 1. **HIERARQUIA VISUAL CLARA**

**O que funciona no G1:**
- Matéria principal em destaque (maior)
- Matérias secundárias menores mas visíveis
- Imagens grandes e impactantes
- Títulos em tamanhos hierárquicos

**Como aplicar no Vem Viver Lumiar:**
```
HERO SECTION (Destaque principal)
- Local em destaque da semana
- Imagem full-width impactante
- Título grande + descrição curta
- CTA: "Descobrir agora"

DESTAQUES SECUNDÁRIOS (3-4 cards)
- Locais populares/novos
- Imagens médias (16:9)
- Títulos menores
- Badges: "Novo", "Popular", "Imperdível"
```

### 2. **LAYOUT EM GRID RESPONSIVO**

**Estrutura G1:**
- Coluna principal (70%) + sidebar (30%)
- Cards organizados verticalmente
- Espaçamento consistente

**Adaptação Vem Viver Lumiar:**
```css
DESKTOP:
┌─────────────────┬─────────┐
│   HERO GRANDE   │ SIDEBAR │
├─────────────────┤         │
│ GRID 2x2 MÉDIOS │         │
├─────────────────┼─────────┤
│   LISTA LINEAR  │ WIDGETS │
└─────────────────┴─────────┘

MOBILE:
┌─────────────────┐
│   HERO STACK    │
├─────────────────┤
│  CARDS ÚNICOS   │
├─────────────────┤
│   CATEGORIAS    │
└─────────────────┘
```

### 3. **SISTEMA DE CARDS PADRONIZADO**

**Padrão G1:**
- Imagem + título + linha de apoio
- Timestamp/autor
- Categoria colorida

**Para Vem Viver Lumiar:**
```html
<div class="location-card">
  <img src="local.jpg" alt="Local">
  <div class="card-content">
    <span class="category natureza">Natureza</span>
    <h3>Nome do Local</h3>
    <p class="description">Descrição curta...</p>
    <div class="meta">
      <span class="rating">⭐ 4.8</span>
      <span class="distance">📍 2.3km</span>
      <span class="time">⏱️ 1h trilha</span>
    </div>
  </div>
</div>
```

### 4. **SIDEBAR INTELIGENTE**

**G1 usa para:**
- Notícias relacionadas
- Mais lidas
- Publicidade contextual

**Vem Viver Lumiar:**
```
┌─────────────────┐
│ 🌦️ CLIMA HOJE   │
│ Ideal p/ trilhas │
├─────────────────┤
│ 🔥 MAIS VISITADOS│
│ Top 5 da semana │
├─────────────────┤
│ 🎯 PERTO DE VOCÊ │
│ Baseado em GPS  │
├─────────────────┤
│ 📅 EVENTOS HOJE │
│ Shows, feiras   │
└─────────────────┘
```

### 5. **NAVEGAÇÃO CATEGORIA SUPERIOR**

**G1:** Brasil, Mundo, Política, Economia...

**Vem Viver Lumiar:**
```
🌿 Natureza | 🍯 Sabores | 🏡 Hospedagem | 
🎨 Cultura | 🧘‍♀️ Bem-estar | 🛍️ Compras
```

### 6. **SISTEMA DE TAGS/BADGES**

**G1:** "Ao Vivo", "Última Hora", "Vídeo"

**Vem Viver Lumiar:**
- 🆕 "Novo"
- 🔥 "Popular" 
- ⭐ "Imperdível"
- 📍 "Próximo"
- 🎫 "Evento Hoje"
- 💰 "Gratuito"

### 7. **CARREGAMENTO PROGRESSIVO**

**G1:** Scroll infinito com loading

**Vem Viver Lumiar:**
- Carrega 12 locais iniciais
- "Ver mais" ou scroll infinito
- Skeleton loading
- Filtros mantidos na URL

## 🎨 Especificações Técnicas para Implementação

### **CORES E TIPOGRAFIA**

```css
/* Hierarquia de títulos */
.hero-title { 
  font-size: 2.5rem; 
  font-weight: 700; 
}

.secondary-title { 
  font-size: 1.5rem; 
  font-weight: 600; 
}

.card-title { 
  font-size: 1.1rem; 
  font-weight: 500; 
}

/* Sistema de badges */
.badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.badge-novo { background: #ff6b47; }
.badge-popular { background: #2d5a3d; }
.badge-gratuito { background: #87ceeb; }
```

### **GRID RESPONSIVO**

```css
.main-grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .main-grid {
    grid-template-columns: 1fr;
  }
}
```

### **CARD COMPONENT**

```css
.location-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.location-card:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
}
```

## 📱 Componentes Prioritários

### **1. Hero Section**
```
- Imagem: 1200x600px (2:1 ratio)
- Overlay escuro 40% para legibilidade
- Título: máx 60 caracteres
- Descrição: máx 120 caracteres
- CTA primário + CTA secundário
```

### **2. Cards Grid**
```
- Imagem: 300x200px (3:2 ratio)
- Título: máx 45 caracteres
- Descrição: máx 80 caracteres
- Meta informações: rating, distância, tempo
```

### **3. Sidebar Widgets**
```
- Largura fixa: 300px desktop
- Stack vertical em mobile
- Scroll independente
- Refresh automático (clima/eventos)
```

### **4. Navigation Bar**
```
- Sticky no scroll
- Dropdown hover/click
- Busca integrada
- Breadcrumb em páginas internas
```

## 🚀 Roadmap de Implementação

### **Fase 1: Estrutura Base**
1. Grid layout responsivo
2. Sistema de cards
3. Navegação principal
4. Hero section

### **Fase 2: Componentes Avançados**
1. Sidebar com widgets
2. Sistema de filtros
3. Carregamento progressivo
4. Search integrada

### **Fase 3: Otimizações**
1. Performance (lazy loading)
2. SEO (structured data)
3. Analytics
4. A/B testing

## 📊 Métricas de Sucesso

**Baseadas no modelo G1:**
- **Time on page**: +40% vs site atual
- **Bounce rate**: <35%
- **Page views per session**: >3
- **CTR nos cards**: >12%
- **Mobile engagement**: >60% do total

## 🛠️ Stack Técnico Recomendado

```javascript
// Framework
Next.js 14 + TypeScript

// Styling
Tailwind CSS + CSS Modules

// Componentes
// Card component
const LocationCard = ({ 
  image, title, description, 
  category, rating, distance 
}) => {...}

// Grid layout
const ContentGrid = ({ children }) => {...}

// Hero section
const HeroSection = ({ featured }) => {...}
```

## ⚡ Performance Otimizations

**Baseadas na experiência G1:**
- Lazy loading para imagens
- Infinite scroll com skeleton
- Cache estratégico (1h para conteúdo)
- CDN para assets estáticos
- WebP + fallback para imagens
- Prefetch nos links importantes