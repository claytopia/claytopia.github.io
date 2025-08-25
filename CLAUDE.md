# Claytopia Website

This is an Eleventy-based static site for Claytopia, featuring a pottery/ceramics service website.

## Project Structure

- `src/` - Source files including templates, assets, and content
- `src/_includes/` - Eleventy template includes (layout.njk, content.njk)
- `src/assets/` - Static assets (CSS, JS, images, fonts, videos)
- `src/sass/` - SCSS source files
- `eleventy.config.js` - Eleventy configuration

## Key Files

- `src/index.html` - Main homepage
- `src/assets/css/main.css` - Most important CSS Styles
- `src/brennservice.md` - Firing service content
- `src/brennservice2.html` - Additional firing service page
- `src/workshops.html` - Workshop information
- `src/_includes/layout.njk` - Main layout template
- `src/_includes/content.njk` - Content template

## Assets Organization

The project uses a comprehensive asset structure:
- CSS: Bootstrap, Font Awesome, custom styles
- JS: jQuery, Bootstrap, various plugins (flexslider, isotope, magnific popup, etc.)
- Images: Portfolio work, sliders, icons, logos
- Fonts: Brankic icons, Font Awesome webfonts

## Build Commands

To build and develop this site:
- `npm run build` - Build the site
- `npm run serve` - Serve locally for development

## Recent Changes

The project has undergone a reorganization moving assets from root-level `assets/` to `src/assets/` directory structure. Several HTML files have been removed from the root and consolidated into the src structure.

## Content Focus

The site appears to focus on:
- Pottery/ceramics services ("Brennservice")
- Workshops and classes
- Portfolio showcase
- Contact information

The recent commits indicate content updates removing "coming soon" messaging and adding pottery club/workshop content.