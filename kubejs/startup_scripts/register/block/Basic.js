StartupEvents.registry("block", (event) => {
	event.create(`${global.namespace}:the_accelerator_of_mechanism_power`)
		.soundType(SoundType.METAL)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["wooden"])
		.requiresTool(true)

	let machineBlockRegister = [
		"andesite",
		"brass",
		"copper",
		"me",
		"mekanism"
	]
	machineBlockRegister.forEach((type) => {
		event.create(`${global.namespace}:${type}_machine`, "cardinal")
			.soundType(SoundType.METAL)
			.tagBlock(global.toolType["pickaxe"])
			.tagBlock(global.miningLevel["wooden"])
			.requiresTool(true)
			.notSolid()
	})

	// 锇砖瓦
	event.create(`${global.namespace}:osmium_tile`)
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["iron"])
		.requiresTool(true)
})