const program = require('commander')
const glob = require('glob')
const path = require('path')

glob('./*.js', function (err, files) {
  files.forEach((f) => {
    console.log(f)
  })
})

program
  .command('setup')
  .description('run remote setup commands')
  .action(() => {
    console.log('setup')
  })

program
  .command('exec <cmd>')
  .description('run the given command')
  .action((cmd) => {
    console.log('exec "%s"', cmd)
  })

program
  .command('*')
  .description('deploy the given env')
  .action((env) => {
    console.log('deploying "%s"', env)
  })
program.parse(process.argv)
