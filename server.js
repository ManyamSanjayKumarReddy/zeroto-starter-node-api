import express from "express"

const app = express()
// ZeroTo tells your app which port to listen on through PORT. Always read it from the environment.
const port = Number(process.env.PORT ?? 3000)
// Anything you add under "Variables" in ZeroTo shows up here. Try adding GREETING and redeploying.
const greeting = process.env.GREETING ?? "Hello from my first API"

const notes = [{ id: 1, text: "Deployed with ZeroTo" }]

app.use(express.json())

app.get("/", (_req, res) => res.json({ message: greeting, startedAt, notes: notes.length }))
// A cheap URL that says "I'm alive" — handy to open in the browser after every deploy.
app.get("/health", (_req, res) => res.json({ ok: true }))
app.get("/notes", (_req, res) => res.json(notes))
app.post("/notes", (req, res) => {
  const text = String(req.body?.text ?? "").trim()
  if (!text) return res.status(400).json({ message: "text is required" })
  const note = { id: notes.length + 1, text }
  notes.push(note) // lives in memory only: it is gone when the app restarts or sleeps — add a database to keep it
  res.status(201).json(note)
})

const startedAt = new Date().toISOString()
app.listen(port, "0.0.0.0", () => console.log(`Listening on ${port}`))
