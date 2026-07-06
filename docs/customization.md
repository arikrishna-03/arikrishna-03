# Profile Customization Guide

This document describes the structure, architecture, and customization process for the professional profile of **Arikrishna A**.

---

## 🎨 Theme & Color Palette

The profile uses a custom-curated, luxury dark-mode color scheme based strictly on a balance of **Blue** (representing Logic & Science) and **Red** (representing Creativity & AI).

### Color Tokens

| Hue | Purpose | Hex Code |
| :--- | :--- | :--- |
| **Blue (Primary)** | Primary interactive accents and highlights | `#1B23C9` |
| **Blue (Medium)** | Secondary accents and gradients | `#2C318C` |
| **Blue (Navy)** | Component borders and grid patterns | `#2D305F` |
| **Blue (Midnight)** | Primary container backgrounds | `#24243C` |
| **Blue (Charcoal)** | Subtle background shades | `#2F3039` |
| **Red (Primary)** | Creative accents and focal highlights | `#C71400` |
| **Red (Rust)** | Secondary warm accents | `#8F291F` |
| **Red (Brown)** | Warm divider accents and gradients | `#5B2D28` |
| **Red (Dark)** | Dark container background gradients | `#412927` |
| **Red (Charcoal)** | Muted dark-red background shades | `#403434` |

---

## 📂 Repository Structure

- `README.md`: The main landing profile, featuring structured HTML sections, GitHub Readme Stats integration, collapsible cards, and automated widgets.
- `LICENSE`: Open-source distribution permissions (MIT).
- `config/theme.json`: Key design system parameters, personal branding assets, and font mappings.
- `assets/`: Contains core graphic design components:
  - [header.svg](file:///a:/my%20files/github%20readme/assets/header.svg): Main responsive typography card with animated glowing elements.
  - [footer.svg](file:///a:/my%20files/github%20readme/assets/footer.svg): Matching branding card displaying copyright and philosophy.
  - [divider.svg](file:///a:/my%20files/github%20readme/assets/divider.svg): Sleek geometric visual separator.
- `.github/workflows/`:
  - [snake.yml](file:///a:/my%20files/github%20readme/.github/workflows/snake.yml): Generates the contributions snake SVG colored to match the profile palette.
  - [metrics.yml](file:///a:/my%20files/github%20readme/.github/workflows/metrics.yml): Gathers user contribution and language statistics.

---

## 🚀 Customizing Content

### 1. Modifying Text or Title
To change the title, name, or tagline, modify the following files:
1. `config/theme.json` (for programmatic reference)
2. `assets/header.svg` (inside the SVG `<text>` nodes)
3. `README.md` (to keep information aligned across text cards)

### 2. Updating Tech Badges
Tech badges in the `README.md` are generated via [Shields.io](https://shields.io/). They use the logo query parameter and are styled with `#24243C` (Midnight Blue) for the label background and `#C71400` (Vibrant Red) or `#1B23C9` (Vibrant Blue) for the tech identifier accent. 

To add a badge:
```markdown
![](https://img.shields.io/badge/TechName-HexColor?style=for-the-badge&logo=LogoName&logoColor=white)
```

### 3. GitHub Actions Workflows
- **Contribution Snake**: Runs automatically at midnight every day. You can also trigger it manually from the "Actions" tab under `Generate Snake`.
- **Metrics Workflow**: Generates comprehensive graphs. To enable full integration, create a Personal Access Token (PAT) with `repo` and `read:user` permissions and save it in your repository secrets as `METRICS_TOKEN`.
