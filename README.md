# Jingdan (Aria) Yang — academic website

Static, multi-page site for GitHub Pages. No build step — HTML + one CSS file. Your repo `yjingdan/yjingdan.github.io` is already a **user site**, so once these files are in it, the site is live at:

### → https://yjingdan.github.io

```
index.html        Home  (photo, bio, at-a-glance, education)
research.html     Research (themes, research & training, publications)
clinical.html     Clinical experience (roles, assessments, expertise)
teaching.html     Teaching & mentorship
assets/
  style.css       All styling + colour/font settings (edit here)
  profile.jpg     Your photo (already added, web-optimised)
  cv.pdf          Your CV (already added; the nav "CV" link opens it)
```

---

## 1. Put it live

**Your repo already exists**, so you just need the files in it:

1. Go to `github.com/yjingdan/yjingdan.github.io`.
2. Upload everything in this folder to the repo **root** — the four `.html` files and the whole `assets/` folder. (Web UI: *Add file → Upload files → drag them in → Commit*. Or use `git`.)
3. Check **Settings → Pages**: source should be *Deploy from a branch*, branch `main`, folder `/ (root)`. For a `username.github.io` repo this is usually on by default.
4. Give it ~1–2 minutes, then open **https://yjingdan.github.io**.

> Preview locally first by double-clicking `index.html` — fonts and links load from the web, so you'll see the real thing.

---

## 2. Small decisions left to you

| Item | Note |
|---|---|
| **Contact email** | The site currently shows your PolyU address `jingdan.yang@connect.polyu.hk` (matches your live Google Site). Your CV uses `y.jingdan@gmail.com`. Say the word and I'll switch, or show both. |
| **Advisor names / details** | Pulled from your CV (Prof. Li Sheng; Prof. Trina Spencer, U. Kansas). Confirm the spelling/titles you prefer. |
| **Implementation research** | You list it as a core interest, but your current outputs are assessment/diagnosis/intervention, so I kept it inside the research statement rather than as its own theme. I can promote it to a 5th theme card if you'd like. |
| **Phone / address** | Deliberately **left off** the public site (they're on your CV). Add back only if you want them public. |
| **Publications** | Your 2 published works + 2 conference presentations are in, formatted APA-style. As new work lands, follow the existing `.pub` pattern in `research.html`. |

---

## 3. Editing basics

- **Colours & fonts:** open `assets/style.css` — everything lives in the `:root { … }` block at the top (`--pine`, `--gold`, `--paper`, etc.). Change once, applies everywhere.
- **Text:** edit the `.html` files directly; content is plain text between the tags.
- **Swap the photo:** replace `assets/profile.jpg` (a ~4:5 portrait works best).
- **Update the CV:** replace `assets/cv.pdf` (keep the filename).
- **Remove a page:** delete its `.html` file **and** its `<a>` link from the `navlinks` block in the other pages.

Design notes: restrained academic style — a single sans-serif family (Source Sans 3, with Chinese fallbacks), academic navy accent on white, section headings with rules. No decorative/display typefaces.
