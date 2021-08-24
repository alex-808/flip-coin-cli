const { Command, flags } = require("@oclif/command");
// ToDo
class FlipCoinCommand extends Command {
  async run() {
    const { flags } = this.parse(FlipCoinCommand);
    const flips = flags.number || 1;
    if (flips === 1) {
      console.log(this.flipCoin());
      return;
    } else {
      const flipCounts = {
        Heads: 0,
        Tails: 0,
      };

      for (let i = 0; i < flips; i++) {
        const res = this.flipCoin();
        flipCounts[res] += 1;
      }
      if (flipCounts.Heads) {
        console.log(`Heads: ${flipCounts.Heads}`);
      }
      if (flipCounts.Tails) {
        console.log(`Tails: ${flipCounts.Tails}`);
      }
    }
  }

  flipCoin() {
    const res = Math.random();
    if (res >= 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }
}

FlipCoinCommand.description = `Describe the command here
...
Extra documentation goes here
`;

FlipCoinCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: "v" }),
  // add --help flag to show CLI version
  help: flags.help({ char: "h" }),
  number: flags.string({ char: "n", description: "number of coins to flip" }),
};

module.exports = FlipCoinCommand;
