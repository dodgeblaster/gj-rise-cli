const {Command, flags} = require('@oclif/command')

class InoCommand extends Command {
  async run() {
    this.log(`You path is: ${process.cwd()}`)
  }
}

InoCommand.description = `Describe the command here
...
Extra documentation goes here
`

InoCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = InoCommand
