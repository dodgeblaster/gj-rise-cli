const {Command, flags} = require('@oclif/command')
const appsync = require('gj-service-appsync')

class DeployCommand extends Command {
  async run() {
    this.log('Deploying Appsync App...')
    await appsync.deploy(process.cwd())
  }
}

DeployCommand.description = `Describe the command here
...
Extra documentation goes here
`

DeployCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DeployCommand
