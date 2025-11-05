# 🚀 Guia de Instalação Rápida - Eco Track

## Método 1: Visualização Direta (Mais Simples)

1. **Navegue até a pasta do projeto**
   ```
   d:\Arquivos\2025\Ecotrack
   ```

2. **Dê duplo clique no arquivo `index.html`**
   - O site abrirá automaticamente no seu navegador padrão
   - Pronto! ✅

## Método 2: Usando VS Code Live Server (Recomendado)

1. **Abra o VS Code**

2. **Abra a pasta do projeto**
   - File > Open Folder
   - Selecione: `d:\Arquivos\2025\Ecotrack`

3. **Instale a extensão "Live Server"**
   - Clique no ícone de extensões (Ctrl+Shift+X)
   - Busque: "Live Server"
   - Instale a extensão do Ritwick Dey

4. **Inicie o servidor**
   - Clique com botão direito em `index.html`
   - Selecione "Open with Live Server"
   - Ou clique em "Go Live" na barra de status

5. **Acesse**
   ```
   http://localhost:5500
   ```

## Método 3: Usando Python (Se instalado)

```bash
# Navegue até a pasta
cd d:\Arquivos\2025\Ecotrack

# Python 3
python -m http.server 8000

# Acesse
http://localhost:8000
```

## Método 4: Usando Node.js (Se instalado)

```bash
# Instale http-server globalmente (uma vez)
npm install -g http-server

# Navegue até a pasta
cd d:\Arquivos\2025\Ecotrack

# Inicie o servidor
http-server

# Acesse
http://localhost:8080
```

## 📱 Testando Responsividade

### No Chrome/Edge DevTools:
1. Pressione `F12` ou `Ctrl+Shift+I`
2. Clique no ícone de dispositivos móveis (Ctrl+Shift+M)
3. Teste diferentes tamanhos:
   - iPhone 12 Pro (390x844)
   - iPad (768x1024)
   - Desktop (1920x1080)

### Dicas de Teste:
- ✅ Teste navegação mobile
- ✅ Verifique animações
- ✅ Teste todas as tabs da demo
- ✅ Alterne entre planos mensais/anuais
- ✅ Role a página para ver efeitos de scroll

## 🎨 Personalizações Rápidas

### Alterar Cores:
Edite `style.css` nas linhas 8-13:
```css
--primary-green: #10B981;    /* Sua cor verde */
--primary-blue: #3B82F6;     /* Sua cor azul */
--primary-yellow: #F59E0B;   /* Sua cor amarela */
```

### Alterar Textos:
Edite `index.html` diretamente.

### Adicionar Imagens:
1. Coloque suas imagens em `assets/images/`
2. Atualize os caminhos no HTML

## 🐛 Problemas Comuns

### Animações não funcionam?
- Verifique se os arquivos JS estão carregando
- Abra o Console (F12) e veja se há erros

### CSS não está aplicado?
- Limpe o cache: Ctrl+Shift+R (Windows)
- Verifique se todos os arquivos CSS estão na pasta `components/`

### Menu mobile não abre?
- Verifique se `main.js` está carregando
- Teste em uma janela anônima (Ctrl+Shift+N)

## 📞 Suporte

Se precisar de ajuda:
- 📧 contato@ecotrack.com.br
- 📱 0800 123 4567

## ✅ Checklist de Verificação

- [ ] Site abre corretamente
- [ ] Menu de navegação funciona
- [ ] Animações estão suaves
- [ ] Tabs da demo alternam
- [ ] Toggle de preços funciona
- [ ] Site responsivo em mobile
- [ ] Todas as seções são visíveis
- [ ] Links de scroll funcionam

---

**Desenvolvido com 💚 pela equipe Eco Track**

*Última atualização: 04/11/2025*
