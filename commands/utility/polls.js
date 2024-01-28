const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription('Creates a poll.')
    .addStringOption(option => option 
       .setName('poll')
       .setDescription('Title of Poll')
       .setMaxLength(50)
       .setRequired(true)
    )
    .addStringOption(option => option 
        .setName('option1')
        .setDescription('Option 1 of 5.')
        .setMaxLength(50)
        .setRequired(true)
    )
    .addStringOption(option => option 
        .setName('option2')
        .setDescription('Option 2 of 5.')
        .setMaxLength(50)
        .setRequired(true)
    )
    .addStringOption(option => option 
        .setName('option3')
        .setDescription('Option 3 of 5.')
        .setMaxLength(50)
    )
    .addStringOption(option => option 
        .setName('option4')
        .setDescription('Option 4 of 5.')
        .setMaxLength(50)
    ),

    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const { option, channel } = await interaction;
        const options = await interaction.options.data;
        const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣"];

        const embed = new EmbedBuilder()
            .setTitle(`${options[0].value}`)
            .setColor('Green');

        options.slice(1).forEach((option, i) => {
            const emoji = emojis[i];
            embed.addFields({
                name: `${emoji} ${option.value}`,
                value: ' ',
            });
        });

        const message = await channel.send({ embeds: [embed] });

        options.slice(1).forEach(async (_, i) => {
            const emoji = emojis[i];
            await message.react(emoji);
        });

        await interaction.editReply({ content: 'Sent poll Successfully!' });
    }
}
