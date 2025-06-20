# FLAGS
📄 LICENSE (Archivo de Licencia MIT)
# 🌍 World Flags CSS Collection

<div align="center">

![World Flags Banner](https://img.shields.io/badge/World%20Flags-CSS%20Collection-blue?style=for-the-badge&logo=css3&logoColor=white)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://choosealicense.com/licenses/mit/)
[![Responsive](https://img.shields.io/badge/Responsive-Design-orange?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

**Una colección completa de banderas de países del mundo implementadas únicamente con HTML y CSS puro - Sin imágenes**

[Demo en Vivo](https://pepegamboa.github.io/world-flags) · [Reportar Bug](https://github.com/PepeGamboa/world-flags/issues) · [Solicitar Característica](https://github.com/PepeGamboa/world-flags/issues)

</div>

---

## 📋 Tabla de Contenidos

- [🎯 Características](#-características)
- [🌍 Banderas Incluidas](#-banderas-incluidas)
- [🚀 Instalación y Uso](#-instalación-y-uso)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [💻 Ejemplos de Uso](#-ejemplos-de-uso)
- [🛠️ Personalización](#️-personalización)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)
- [👨‍💻 Autor](#-autor)

---

## 🎯 Características

- ✅ **CSS Puro** - Sin imágenes, iconos o librerías externas
- ✅ **Responsive Design** - Se adapta a todos los dispositivos
- ✅ **Colores Oficiales** - Basados en especificaciones gubernamentales
- ✅ **Efectos Interactivos** - Animaciones y hover effects
- ✅ **Fácil Implementación** - Copia y pega el código
- ✅ **Optimizado** - Carga rápida y rendimiento eficiente
- ✅ **Accesible** - Cumple estándares de accesibilidad web
- ✅ **Bien Documentado** - Código comentado y estructurado

---

## 🌍 Banderas Incluidas

### Principales (Completamente Implementadas)
| Bandera | País | Complejidad | Estado |
|---------|------|-------------|--------|
| 🇨🇴 | Colombia | ⭐ | ✅ Completa |
| 🇺🇸 | Estados Unidos | ⭐⭐⭐ | ✅ Completa |
| 🇧🇷 | Brasil | ⭐⭐ | ✅ Completa |
| 🇦🇷 | Argentina | ⭐⭐ | ✅ Completa |
| 🇲🇽 | México | ⭐⭐ | ✅ Completa |
| 🇪🇸 | España | ⭐ | ✅ Completa |
| 🇫🇷 | Francia | ⭐ | ✅ Completa |
| 🇩🇪 | Alemania | ⭐ | ✅ Completa |
| 🇬🇧 | Reino Unido | ⭐⭐⭐ | ✅ Completa |
| 🇯🇵 | Japón | ⭐ | ✅ Completa |

### Adicionales (Listas para usar)
| Bandera | País | Estado |
|---------|------|--------|
| 🇨🇦 | Canadá | 🔄 En desarrollo |
| 🇦🇺 | Australia | 🔄 En desarrollo |
| 🇮🇳 | India | 🔄 En desarrollo |
| 🇨🇳 | China | 🔄 En desarrollo |
| 🇮🇹 | Italia | ✅ Completa |

**Complejidad:** ⭐ Simple | ⭐⭐ Intermedia | ⭐⭐⭐ Compleja

---

## 🚀 Instalación y Uso

### Opción 1: Clonar el Repositorio
```bash
git clone https://github.com/PepeGamboa/world-flags.git
cd world-flags
```

### Opción 2: Descargar ZIP
1. Haz clic en el botón "Code" > "Download ZIP"
2. Extrae el archivo
3. Abre `index.html` en tu navegador

### Opción 3: CDN (Próximamente)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/PepeGamboa/world-flags@main/css/flags.css">
```

### 🌐 Ver Demo
Simplemente abre `index.html` en tu navegador preferido o visita la [demo en línea](https://pepegamboa.github.io/world-flags).

---

## 📁 Estructura del Proyecto

```
world-flags/
├── 📄 index.html              # Página principal con todas las banderas
├── 📁 css/
│   ├── 🎨 styles.css          # Estilos generales y layout
│   └── 🏳️ flags.css           # Estilos específicos de banderas
├── 📁 flags/
│   ├── 🇨🇴 colombia.html      # Bandera individual de Colombia
│   ├── 🇺🇸 usa.html           # Bandera individual de USA
│   └── 📄 [otras banderas]    # Más banderas individuales
├── 📁 assets/
│   └── 📸 screenshots/        # Capturas de pantalla
├── 📁 docs/
│   └── 📚 [documentación]     # Documentación adicional
├── 📄 README.md               # Este archivo
├── 📄 LICENSE                 # Licencia MIT
├── 📄 CONTRIBUTING.md         # Guía de contribución
└── 📄 .gitignore              # Archivos ignorados por Git
```

---

## 💻 Ejemplos de Uso

### Implementar una Bandera Simple
```html
<div class="flag colombia">
    <div class="stripe yellow"></div>
    <div class="stripe blue"></div>
    <div class="stripe red"></div>
</div>
```

```css
.colombia {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
}

.colombia .yellow { background: #FFCD00; flex: 2; }
.colombia .blue { background: #003893; flex: 1; }
.colombia .red { background: #CE1126; flex: 1; }
```

### Implementar una Bandera Compleja
```html
<div class="flag usa">
    <div class="canton">
        <!-- 50 estrellas -->
        <div class="star"></div>
        <!-- ... más estrellas ... -->
    </div>
    <div class="stripes">
        <!-- 13 franjas -->
        <div class="stripe"></div>
        <!-- ... más franjas ... -->
    </div>
</div>
```

### Usar con Frameworks

#### React/JSX
```jsx
const ColombiaFlag = () => (
    <div className="flag colombia">
        <div className="stripe yellow"></div>
        <div className="stripe blue"></div>
        <div className="stripe red"></div>
    </div>
);
```

#### Vue.js
```vue
<template>
    <div class="flag colombia">
        <div class="stripe yellow"></div>
        <div class="stripe blue"></div>
        <div class="stripe red"></div>
    </div>
</template>
```

---

## 🛠️ Personalización

### Cambiar Tamaños
```css
.flag {
    width: 400px;  /* Personalizar ancho */
    height: 267px; /* Personalizar alto (ratio 3:2) */
}
```

### Agregar Efectos
```css
.flag:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}
```

### Colores Personalizados
```css
.colombia .yellow { background: #FFD700; } /* Amarillo más brillante */
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Aquí te explicamos cómo puedes ayudar:

### 🎯 Formas de Contribuir
- 🏳️ **Agregar nuevas banderas**
- 🐛 **Reportar bugs**
- 💡 **Sugerir mejoras**
- 📖 **Mejorar documentación**
- 🎨 **Optimizar diseños existentes**

### 📝 Proceso de Contribución
1. **Fork** este repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-bandera`)
3. **Commit** tus cambios (`git commit -m 'Add: Bandera de [País]'`)
4. **Push** a la rama (`git push origin feature/nueva-bandera`)
5. **Abre** un Pull Request

### ✅ Directrices para Nuevas Banderas
- Usar **solo CSS puro** (sin imágenes)
- Implementar **colores oficiales** del país
- Mantener **estructura consistente**
- **Documentar** el código con comentarios
- **Testear** en múltiples navegadores
- Incluir en el **README** y **index.html**

Lee nuestra [Guía de Contribución](CONTRIBUTING.md) para más detalles.

---

## 📊 Estadísticas del Proyecto

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/PepeGamboa/world-flags?style=social)
![GitHub forks](https://img.shields.io/github/forks/PepeGamboa/world-flags?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/PepeGamboa/world-flags?style=social)

![GitHub issues](https://img.shields.io/github/issues/PepeGamboa/world-flags)
![GitHub pull requests](https://img.shields.io/github/issues-pr/PepeGamboa/world-flags)
![GitHub last commit](https://img.shields.io/github/last-commit/PepeGamboa/world-flags)

</div>

---

## 🌐 Compatibilidad

| Navegador | Versión Mínima | Estado |
|-----------|----------------|--------|
| Chrome | 60+ | ✅ Completo |
| Firefox | 55+ | ✅ Completo |
| Safari | 12+ | ✅ Completo |
| Edge | 79+ | ✅ Completo |
| Opera | 47+ | ✅ Completo |

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Esto significa que puedes:

- ✅ **Usar** comercialmente
- ✅ **Modificar** el código
- ✅ **Distribuir** libremente
- ✅ **Uso privado**

Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

<div align="center">

**PepeGamboa**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PepeGamboa)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/pepegamboa)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pepegamboa@email.com)

*"Creando el mundo una bandera a la vez"* 🌍

</div>

---

## 🎉 Reconocimientos

- 🎨 **Inspiración**: Amor por la diversidad cultural mundial
- 🎯 **Colores**: Especificaciones oficiales de cada gobierno
- 💡 **Comunidad**: Contribuidores y usuarios que hacen posible este proyecto
- 🌍 **Países**: Todas las naciones representadas en este proyecto

---

## 🔄 Roadmap

### Versión 2.0
- [ ] 50+ banderas adicionales
- [ ] Modo oscuro
- [ ] Animaciones avanzadas
- [ ] API para desarrolladores
- [ ] Componentes para frameworks

### Versión 2.1
- [ ] Banderas históricas
- [ ] Banderas de estados/provincias
- [ ] Generador de banderas personalizado
- [ ] Integración con NPM

---

<div align="center">

**⭐ Si te gusta este proyecto, ¡dale una estrella! ⭐**

*Made with ❤️ in Colombia* 🇨🇴

[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/PepeGamboa/world-flags)

</div>
