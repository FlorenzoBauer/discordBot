const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Select a member and ban them.')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for banning'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),
        async execute(interaction) {
			// if(!member.roles.cache.has('784181622056288307')){
			// 	return interaction.reply('You do not have permission to use this command.')
			// }
            const target = interaction.options.getUser('target');
            const reason = interaction.options.getString('reason') ?? 'No reason provided';
        
            await interaction.reply(`Banning ${target.username} for reason: ${reason}`);
            // await interaction.guild.members.ban(target);
        },
};