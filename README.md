# Starter: a Node.js API

A tiny Express API: `GET /`, `GET /health`, `GET /notes`, `POST /notes`.

## Deploy it on ZeroTo
**Fastest (no GitHub needed):** in ZeroTo press **Deployments → New deployment → Start from a sample app**, pick this one and deploy. When it is **Live**, open the address, then `/health` and `/notes`.

**Your own copy (so you can change it and have it redeploy on every push):**
1. Here on GitHub press **Use this template → Create a new repository**.
2. In ZeroTo open **Connectors** and connect GitHub (once).
3. **New deployment**, choose your copy, deploy. Then turn on **auto-deploy** in its settings (if your plan includes it).

> Anything that edits the code (here and below) needs **your own copy** — the one-click sample is read-only. Settings, variables, logs and releases work on both.

## Try these
- **Variables → Add** `GREETING` = `Hi from <your name>`, **Redeploy**, and reload `/`.
- Create a note: `curl -X POST https://<your-address>/notes -H 'content-type: application/json' -d '{"text":"first!"}'`
- Watch the **Logs** tab while you call the API.
- Leave it alone for 5 minutes: it goes to sleep and wakes on the next visit (`startedAt` changes — why?).

## Break it on purpose (and fix it)
- Change `port` to `8080` in `server.js` and redeploy: the app is running but unreachable. Why? (Hint: who decides the port?)
- Notes disappear after a restart — that is the lesson behind **Databases**.
