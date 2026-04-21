#!/usr/bin/env python3
"""Extract each page of 042525_PORTFOLIO_Lutiva.pdf as a web JPEG in assets/images/pdf-pages/."""
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    raise SystemExit("Install: pip install pymupdf pillow")

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "042525_PORTFOLIO_Lutiva.pdf"
OUT_DIR = ROOT / "assets" / "images" / "pdf-pages"
TMP = ROOT / "assets" / "images" / "_pdf_extract"
MAX_W = 2000
QUALITY = 82


def main() -> None:
    if not PDF.is_file():
        raise SystemExit(f"Missing {PDF}")
    TMP.mkdir(parents=True, exist_ok=True)
    doc = fitz.open(PDF)
    for i in range(doc.page_count):
        page = doc[i]
        for img_idx, img in enumerate(page.get_images(full=True)):
            xref = img[0]
            base = doc.extract_image(xref)
            fn = TMP / f"page{i+1:02d}_img{img_idx+1}.{base['ext']}"
            fn.write_bytes(base["image"])
    doc.close()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for png in sorted(TMP.glob("page*_img1.png")):
        part = png.stem.split("_")[0]
        num = int(part.replace("page", ""))
        out = OUT_DIR / f"page-{num:02d}.jpg"
        im = Image.open(png).convert("RGB")
        w, h = im.size
        if w > MAX_W:
            nh = int(h * (MAX_W / w))
            im = im.resize((MAX_W, nh), Image.Resampling.LANCZOS)
        im.save(out, "JPEG", quality=QUALITY, optimize=True)
        print(out.relative_to(ROOT))

    import shutil
    shutil.rmtree(TMP, ignore_errors=True)
    print("Done. Update index.html / js only if paths change.")


if __name__ == "__main__":
    main()
