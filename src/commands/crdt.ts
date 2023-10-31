import {Command, Flags, ux} from '@oclif/core'
import {ConfigFile} from '@salesforce/core'

export default class CRDT extends Command {
  public static flags = {
    key: Flags.string({
      char: 'k',
      default: 'foo',
    }),
    operation: Flags.option({
      char: 'o',
      options: ['set', 'unset', 'update'] as const,
      required: true,
    })(),
    'pre-change-wait': Flags.integer({
      default: 0,
    }),
    'pre-read-wait': Flags.integer({
      default: 0,
    }),
    'pre-write-wait': Flags.integer({
      default: 0,
    }),
    value: Flags.string({
      char: 'v',
      default: 'bar',
    }),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(CRDT)
    const {default: chalk} = await import('chalk')

    const hexCode = '#' + Math.trunc(Math.random() * 0xff_ff_ff).toString(16)

    const log = (msg: string) => {
      this.log(`[${process.pid}] ${chalk.hex(hexCode)(msg)}`)
    }

    await ux.wait(flags['pre-read-wait'])

    log(`Reading config file after ${flags['pre-read-wait']}ms...`)
    const config = await ConfigFile.create({
      filename: 'crdt.json',
      isGlobal: true,
    })

    log(`config file: ${config.getPath()}`)

    await ux.wait(flags['pre-change-wait'])
    log(`Changing config file after ${flags['pre-change-wait']}ms...`)
    switch (flags.operation) {
      case 'set': {
        log(`SET: ${flags.key}=${flags.value}`)
        config.set(flags.key, flags.value)
        break
      }

      case 'unset': {
        log(`UNSET: ${flags.key}`)
        config.unset(flags.key)
        break
      }

      case 'update': {
        log(`UPDATE: ${flags.key}=${flags.value}`)
        config.update(flags.key, flags.value)
        break
      }
    }

    await ux.wait(flags['pre-write-wait'])
    log(`Writing config file after ${flags['pre-write-wait']}ms...`)
    await config.write()
    log(`Done!`)
  }
}
