const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const app = next({ dev: false, hostname: 'localhost', port: 3000 })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
  .once('error', (err) => {
    console.error(err)
    process.exit(1)
  })
  .listen(3000, () => {
    console.log('> Ready on http://localhost:3000')
  })
})
