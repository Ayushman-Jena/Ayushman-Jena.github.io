# 🎓 Academic Portfolio Website

A clean, dark-themed academic portfolio website ready to host on **GitHub Pages** — no backend, no build tools, just plain HTML/CSS/JS.

---

## 📁 File Structure

```
portfolio/
├── index.html              ← Homepage (Hero, About, Research, News, Contact)
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles + CSS variables (edit here to restyle)
│   ├── js/
│   │   └── main.js         ← Navigation, scroll animations, form handling
│   ├── img/                ← Drop your photos here
│   │   └── profile.jpg     ← Your profile photo (optional)
│   └── files/
│       └── cv.pdf          ← Upload your CV here
└── pages/
    ├── publications.html   ← Full publications list
    ├── projects.html       ← Research projects
    ├── team.html           ← Team members
    ├── teaching.html       ← Courses taught
    ├── openings.html       ← Job/PhD openings
    └── news.html           ← All news & updates
```

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in.
2. Click **New repository**.
3. Name it `yourusername.github.io` *(replace `yourusername` with your GitHub username)*.
4. Set it to **Public** and click **Create repository**.

### Step 2 — Upload the files
**Option A — Drag & Drop (easiest):**
1. Open your new repo on GitHub.
2. Click **Add file → Upload files**.
3. Drag the entire `portfolio/` folder contents (not the folder itself) into the upload area.
4. Commit the changes.

**Option B — Git CLI:**
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings → Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Choose branch: `main`, folder: `/ (root)`.
4. Click **Save**.

Your site will be live at: **`https://yourusername.github.io`** (usually within 1–2 minutes).

---

## ✏️ How to Edit Content

Every section has clear `<!-- EDIT: ... -->` comments to guide you.

### Change your name and title
- Open `index.html` and search for `Your Name` — replace all instances.
- Update the `<title>` tag and `nav-logo` in every page.

### Change colours / theme
Open `assets/css/style.css` and edit the `:root` block at the top:
```css
:root {
  --accent:   #4f8ef7;   /* Primary accent colour */
  --accent-2: #c084fc;   /* Secondary accent (gradient) */
  --bg:       #0d0f14;   /* Page background */
  ...
}
```

### Add a profile photo
1. Put your photo at `assets/img/profile.jpg`.
2. In `index.html`, inside the `.hero-content` block, add:
   ```html
   <img src="assets/img/profile.jpg" alt="Your Name" style="width:180px;height:180px;border-radius:50%;object-fit:cover;border:3px solid var(--accent);" />
   ```

### Add your CV
1. Place your PDF at `assets/files/cv.pdf`.
2. The download button in `index.html` already points to this path.

### Add a new page
1. Copy any existing page in `/pages/`, e.g. `teaching.html`.
2. Rename it (e.g. `awards.html`).
3. Edit the content.
4. Add a link to it in the `<nav>` of every page.

### Set up the contact form (optional)
1. Sign up at [formspree.io](https://formspree.io) (free tier available).
2. Create a form and copy your endpoint URL (e.g. `https://formspree.io/f/abcdefgh`).
3. In `index.html`, change `action="#"` to your endpoint:
   ```html
   <form class="contact-form" action="https://formspree.io/f/abcdefgh" method="POST">
   ```

---

## ➕ Adding Content Quickly

| What to add | Where | What to copy |
|---|---|---|
| New publication | `pages/publications.html` | A `.pub-item` block |
| New project | `pages/projects.html` | A `.project-card` block |
| New team member | `pages/team.html` | A `.team-card` block |
| New news item | `pages/news.html` or `index.html#news` | A `.pub-item` block |
| New research area | `index.html#research` | A `.research-card` block |
| New opening | `pages/openings.html` | A `.opening-card` block |
| New course | `pages/teaching.html` | A `.project-card` block |

---

## 🛠 Tips

- **Images**: Put all images in `assets/img/`. Reference them as `../assets/img/filename.jpg` from pages, or `assets/img/filename.jpg` from `index.html`.
- **Custom domain**: Go to repo Settings → Pages → Custom domain to use your own domain (e.g. `yourname.com`).
- **Google Scholar embed**: Replace the publications list with an iframe or keep a manual list — manual is more reliable.
- **Analytics**: Add Google Analytics or Umami by pasting a `<script>` tag before `</body>` in every page.

---

*Built with plain HTML, CSS, and JavaScript. No frameworks, no build step, no dependencies.*
