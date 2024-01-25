const { SlashCommandBuilder } = require('discord.js');
let roasters = [
    "Yo mama so fat, she doesn't need the internet, because she's already world wide.",
    "Yo mama so ugly she made an onion cry.", "Yo mama so fat, when she sat on an iPod, she made the iPad!",
    "Yo mama so fat, when she sat on a rainbow, skittles popped out!", "Yo mama so fat, when she sat on a dollar, she made change!",
    "Yo mama so fat, when she sat on a quarter, she squeezed a booger out of George Washington's nose!",
    "Yo mama so fat, when she sat on a rainbow, she made Skittles!"
]

module.exports = {
	data: new SlashCommandBuilder()
	.setName('roast')
	.setDescription('Provides a roast about a certain user.')
	.addSubcommand(subcommand =>
		subcommand
		.setName('user')
		.setDescription('Roasts a user.')
		.addUserOption(option => option.setName('target').setDescription('The user'))
		),
		
		async execute(interaction) {
			
		let randomIndex = Math.floor(Math.random() * roasters.length);
		
		const target = interaction.options.getUser('target');
		
		if (!target) {
			return interaction.reply({content:'Please mention a user. e.g."/ roast @user"', ephemeral: true});
		} else if (target.id === '395327179648532480') {
			return interaction.reply('<@395327179648532480> You are a recently promoted Financial Accountant. ');
		}else {
			const roastMessage = `<@${target.id}>, ${roasters[randomIndex]}`;
			await interaction.reply(roastMessage);
		}
	},
};