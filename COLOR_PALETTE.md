# Color Palette Documentation

## Overview
This portfolio uses a modern, professional color scheme inspired by the Rawand Rebwar logo. The palette combines navy blue and turquoise tones to create a fresh, tech-forward aesthetic.

## Primary Colors

### Main Theme Colors
- **Primary Turquoise**: `#14b8a6` (RGB: 20, 184, 166)
  - Used for: Primary buttons, highlights, active states
  - SCSS Variable: `$px-theme`
  
- **Secondary Blue**: `#2563eb` (RGB: 37, 99, 235)
  - Used for: Gradients, accents, hover states
  - SCSS Variable: `$px-secondary`
  
- **Accent Cyan**: `#06b6d4` (RGB: 6, 182, 212)
  - Used for: Gradient endings, visual interest
  - SCSS Variable: `$px-accent`

### Background Colors
- **Primary Background**: `#0f172a` (Slate 900)
  - Dark navy blue for main backgrounds
  
- **Secondary Background**: `#1e293b` (Slate 800)
  - Slightly lighter for layered sections
  
### Text Colors
- **Heading**: `#ffffff` (White)
  - SCSS Variable: `$px-heading`
  
- **Body Text**: `#94a3b8` (Slate 400)
  - Light gray for readable body text
  - SCSS Variable: `$px-text`
  
- **Black**: `#0f172a` (Slate 900)
  - For white backgrounds
  - SCSS Variable: `$px-black`

## Gradient Combinations

### Primary Gradient (Used in buttons, hero section)
```css
background: linear-gradient(135deg, #2563eb, #14b8a6, #06b6d4);
```

### Hover Gradient
```css
background: linear-gradient(135deg, #06b6d4, #2563eb);
```

### Background Gradient
```css
background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
```

## Usage Examples

### Buttons
- **Normal State**: Primary turquoise with gradient
- **Hover State**: Gradient shift with elevated shadow
- **Box Shadow**: `0 4px 15px rgba(20, 184, 166, 0.3)`

### Cards & Boxes
- **Border**: `2px solid rgba(20, 184, 166, 0.3)`
- **Background**: Semi-transparent with backdrop blur
- **Hover Shadow**: `0 20px 40px rgba(20, 184, 166, 0.2)`

### Forms
- **Normal State**: `rgba(255, 255, 255, 0.05)`
- **Focus State**: Theme color border with glow effect
- **Border Radius**: `10px` for modern look

## Accessibility Notes
- All color combinations meet WCAG AA standards for contrast
- Text on dark backgrounds uses white or light gray
- Interactive elements have clear hover states
- Focus states are visible with theme color highlights

## Brand Colors Reference
The color palette is designed to complement the Rawand Rebwar logo which features:
- Deep navy blue tones
- Vibrant turquoise/cyan accents
- Clean, modern aesthetic
- Professional yet approachable feel

## Implementation
All colors are defined in `/src/scss/scss/_variable.scss` and can be easily updated for theme variations or client customization.

