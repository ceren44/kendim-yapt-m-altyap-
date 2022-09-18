const { SlashCommandBuilder, hyperlink  } = require("@discordjs/builders");
const { MessageEmbed, IntegrationApplication } = require("discord.js");
const Config = require("../jaylen.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("restart")
    .setDescription("Destek Botunu yeniden başlatmaya yarar."),

  async execute(interaction, client) {
   if(!Config.OwnerID.includes(interaction.user.id)) {
        return interaction.reply({ content: ":x: Bot developerı olmadığın için kullanamazsın.", ephemeral: true })
    }
    await interaction.reply({ content: `__**Bot**__ yeniden başlatılıyor!`, ephemeral: true })
    process.exit(0)
}
  };