const {Command, flags} = require('@oclif/command')
const appsync = require('gj-service-appsync')

class RemoveCommand extends Command {
  async run() {
    this.log('Removing Appsync App...')
    await appsync.remove(process.cwd())
    this.log('Succssfully removed Appsync App!')
  }
}

RemoveCommand.description = `Describe the command here
...
Extra documentation goes here
`

RemoveCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = RemoveCommand
