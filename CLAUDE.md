# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Developer

**Manoj Garg** — manojgargdba@gmail.com — https://github.com/manojgargdba

## Environment

- **OS**: macOS (Darwin 25.4.0)
- **Python**: 3.14.3
- **Node.js**: v24.15.0 / npm 11.12.1
- **Shell**: zsh

## Projects

All active projects live under `/Users/manoj/`:

| Project | Path | Stack | GitHub |
|---------|------|-------|--------|
| Flask webapp | `/Users/manoj/webapp/` | Python, Flask, Jinja2 templates | https://github.com/manojgargdba/webapp |
| Node/Express app | `/Users/manoj/reactapp/` | Node.js, Express 5, MySQL2, React 19 | https://github.com/manojgargdba/recatapp |
| Standalone scripts | `/Users/manoj/` | Python, PySpark | — |

---

## Flask Webapp (`/Users/manoj/webapp/`)

**Run the dev server:**
```bash
cd /Users/manoj/webapp
python3 app.py
```
Runs on `http://localhost:5000` by default (Flask debug mode enabled).

**Structure:**
- `app.py` — Flask routes and application entry point
- `templates/` — Jinja2 HTML templates (e.g., `register.html`)
- `static/` — CSS and static assets

---

## Node/Express + React App (`/Users/manoj/reactapp/`)

This project has two separate parts:

**Express backend** (`server.js`) — handles form submissions, writes to MySQL:
```bash
cd /Users/manoj/reactapp
node server.js
```
Runs on `http://localhost:3001`. Requires a local MySQL instance with database `testdb` and a `users(name, email)` table.

**React frontend** (CRA, `src/index.js`):
```bash
cd /Users/manoj/reactapp
npm start       # dev server on http://localhost:3000
npm run build   # production build
npm test        # run Jest tests
```

**MySQL setup:**
```sql
CREATE DATABASE testdb;
USE testdb;
CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100));
```
MySQL credentials are configured in `src/db.js` — update `host`, `user`, `password` there.

---

## Architecture Notes

- `reactapp/server.js` is the Express backend (port 3001); `reactapp/src/App.js` is the React frontend. `package.json` proxies `/submit` from the CRA dev server (port 3000) to the Express server (port 3001).
- PySpark scripts (`First_pyspark.py`, `hello_pyspark.py`) at `/Users/manoj/` use the local `pyspark-env` virtualenv at `/Users/manoj/pyspark-env/`.
