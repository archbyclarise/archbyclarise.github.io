Source of truth: 042525_PORTFOLIO_Lutiva.pdf

Hero background (css/styles.css .hero-bg): currently pdf-pages/page-01.jpg.
For a calmer dedicated banner, add assets/images/hero/hero.jpg and point the CSS background-image there.

All web images live in pdf-pages/:
  page-01.jpg … page-26.jpg — one file per PDF page (exported from the PDF).

Regenerate after editing the PDF:
  python3 scripts/extract_portfolio_pdf.py
  pip install pymupdf pillow   (if needed)

Site mapping:
  Hero background & social preview: page-01.jpg
  Project cards (order): page-02 … page-08
  About photo: page-02.jpg (change in index.html if you prefer another sheet)
  Manual grid: page-11 … page-18
  Modal galleries: see js/main.js (PDF constant)

Full 26-page gallery: section #portfolio-sheets in index.html
