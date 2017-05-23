#!/usr/bin/env node

// node for: `cat './*js' >> some.js`
const program = require('commander')
const fs = require('fs')
const glob = require('glob')

console.log(process.argv)

program
  .version('0.0.1')
  .arguments('<from> <to>')
  .action((f, t) => {
    from = f
    to = t
  })
  .parse(process.argv)

glob(from, function (err, files) {
  files.forEach((file) => {
    fs.appendFileSync(to, fs.readFileSync(file))
  })
})

console.log('done')
