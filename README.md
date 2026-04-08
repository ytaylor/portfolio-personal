# Portfolio Personal - Yanelis Serrano Taylor

Portfolio personal profesional desarrollado con React y Vite. Diseño minimalista en blanco, gris y negro, completamente responsive y optimizado para GitHub Pages.

## 🎨 Características

- ✨ Diseño minimalista moderno
- 📱 Completamente responsive (mobile-first)
- ⚡ Desarrollado con React + Vite
- 🎯 Paleta de colores: blanco, gris y negro
- 🌐 100% en español
- 🚀 Preparado para GitHub Pages

## 📋 Secciones

1. **Hero/Presentación** - Introducción principal con llamadas a la acción
2. **Sobre mí** - Perfil profesional e información personal
3. **Experiencia** - Timeline de experiencia profesional
4. **Educación** - Formación académica
5. **Tecnologías** - Habilidades técnicas organizadas por categorías
6. **Contacto** - Información de contacto y redes sociales

## 🚀 Instalación Local

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/TU_USUARIO/portfolio-yanelis.git
   cd portfolio-yanelis
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - El proyecto se ejecutará en `http://localhost:5173`
   - Vite mostrará la URL exacta en la terminal

## 🛠️ Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la versión de producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run deploy` - Despliega en GitHub Pages

## 📤 Publicar en GitHub Pages

### Configuración Inicial

1. **Crear repositorio en GitHub**
   - Ve a [GitHub](https://github.com) y crea un nuevo repositorio
   - Nómbralo `portfolio-yanelis` (o el nombre que prefieras)
   - No inicialices con README (ya existe uno)

2. **Actualizar la configuración**
   
   Edita `package.json` y actualiza el campo `homepage`:
   ```json
   "homepage": "https://TU_USUARIO_GITHUB.github.io/portfolio-yanelis"
   ```
   
   Reemplaza `TU_USUARIO_GITHUB` con tu nombre de usuario real de GitHub.

3. **Inicializar Git y conectar con GitHub**
   ```bash
   # Si no está inicializado
   git init
   
   # Agregar todos los archivos
   git add .
   
   # Hacer el primer commit
   git commit -m "Primer commit - Portfolio inicial"
   
   # Conectar con tu repositorio de GitHub
   git remote add origin https://github.com/TU_USUARIO_GITHUB/portfolio-yanelis.git
   
   # Subir a GitHub
   git push -u origin main
   ```

4. **Desplegar en GitHub Pages**
   ```bash
   npm run deploy
   ```

5. **Configurar GitHub Pages en el repositorio**
   - Ve a tu repositorio en GitHub
   - Click en "Settings" (Configuración)
   - En el menú lateral, click en "Pages"
   - En "Source", selecciona la rama `gh-pages`
   - Click en "Save"
   - ¡Tu sitio estará disponible en unos minutos!

### Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
# 1. Guardar cambios
git add .
git commit -m "Descripción de tus cambios"
git push

# 2. Desplegar la nueva versión
npm run deploy
```

## ✏️ Personalización

### Editar Información de Contacto

Abre `src/components/Contact.jsx` y modifica el array `contactInfo`:

```javascript
const contactInfo = [
  {
    label: 'Email',
    value: 'tu.email@ejemplo.com',        // <- Cambia aquí
    link: 'mailto:tu.email@ejemplo.com',  // <- Y aquí
    icon: '✉'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tu-perfil',   // <- Cambia aquí
    link: 'https://linkedin.com/in/tu-perfil', // <- Y aquí
    icon: '🔗'
  },
  // ... más opciones
];
```

### Modificar Contenido

Todos los componentes están en la carpeta `src/components/`:

- `Hero.jsx` - Sección de presentación
- `About.jsx` - Sobre mí
- `Experience.jsx` - Experiencia profesional
- `Education.jsx` - Formación académica
- `Technologies.jsx` - Tecnologías y habilidades
- `Contact.jsx` - Información de contacto

### Cambiar Colores

Edita las variables CSS en `src/index.css`:

```css
:root {
  --color-black: #1a1a1a;
  --color-dark-gray: #2d2d2d;
  --color-gray: #666666;
  --color-light-gray: #e5e5e5;
  --color-white: #ffffff;
}
```

## 📁 Estructura del Proyecto

```
portfolio-yanelis/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Education.jsx
│   │   ├── Education.css
│   │   ├── Technologies.jsx
│   │   ├── Technologies.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos generales
│   ├── index.css        # Estilos base
│   └── main.jsx         # Punto de entrada
├── package.json         # Dependencias y scripts
├── vite.config.js       # Configuración de Vite
└── README.md           # Este archivo
```

## 🐛 Solución de Problemas

### El sitio no carga en GitHub Pages

- Verifica que la rama `gh-pages` existe en tu repositorio
- Asegúrate de que GitHub Pages esté configurado para usar la rama `gh-pages`
- Espera unos minutos después del deploy (puede tardar hasta 10 minutos)

### Los estilos no se ven correctamente

- Verifica que el campo `homepage` en `package.json` tenga tu usuario correcto
- Asegúrate de que `base` en `vite.config.js` coincida con el nombre del repositorio

### Error al ejecutar npm run deploy

- Verifica que hayas hecho commit de todos tus cambios
- Asegúrate de tener instalada la dependencia `gh-pages`
- Ejecuta `npm install` nuevamente

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Yanelis Serrano Taylor**
- Ingeniera Informática
- Valladolid, España

---

¿Preguntas o sugerencias? No dudes en abrir un issue en el repositorio.
