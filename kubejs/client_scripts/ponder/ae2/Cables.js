Ponder.registry((event) => {
    event.create("ae2:fluix_glass_cable")
        .tag("ue_addons:ae2")
        .scene("ae2:cable", "Cables", "ue_addons:ae2/cables", (scene) => {
            scene.showBasePlate()
            scene.idle(20)
            scene.world.showSection([1, 1, 3, 7, 1, 3], Direction.DOWN)
            scene.world.showSection([2, 1, 5, 7, 1, 5], Direction.DOWN)
            scene.world.showSection([4, 1, 4], Direction.DOWN)
            scene.idle(20)

            // 除了粗线缆和细线缆以外
            scene.text(40, "Except the thick and thin cables", [4.5, 1.5, 4.5])
            scene.idle(60)

            // AE2还有三种特殊的线缆
            scene.text(40, "There are 3 more types of cable bus in AE2", [4.5, 1.5, 4.5])
            scene.idle(60)
            scene.addKeyframe()

            // 石英纤维可以在ME网络之间传输能量，不会干扰网络频道
            scene.showControls(80, [4.5, 2, 4.5], "down")
                .withItem("ae2:quartz_fiber")
            scene.text(80, "Quartz fiber can transmit energy between ME networks without impacting channels", [4.5, 1.5, 4.5])
            scene.idle(100)
            scene.addKeyframe()

            // 触发总线和反向触发总线可以调节设备在线状态
            scene.showControls(80, [6.5, 2, 3.5], "down")
                .withItem("ae2:toggle_bus")
            scene.showControls(80, [6.5, 2, 5.5], "down")
                .withItem("ae2:inverted_toggle_bus")
            scene.text(80, "Toggle Bus and Inverted Toggle Bus can switch connection of devices to ME system", [4.5, 1.5, 4.5])
            scene.idle(100)

            // 现在上面的设备在线而下面的设备离线
            scene.text(40, "Now the device above is online while the device below is offline", [6.5, 2, 4.5])
            scene.showControls(40, [7.5, 2, 5.5], "down")
                .withItem("minecraft:redstone_torch")
            scene.showControls(40, [7.5, 2, 3.5], "down")
                .withItem("minecraft:barrier")
            scene.idle(60)

            // 如果在这里放一个红石信号……
            scene.text(40, "If a redstone signal comes here...", [6.5, 2, 4.5])
            scene.idle(60)
            scene.world.setBlocks([6, 1, 4], "minecraft:redstone_block")
            scene.world.showSection([6, 1, 4], Direction.DOWN)
            scene.idle(40)

            // 那么上面的设备就下线了，而下面的设备就上线了
            scene.text(40, "Now the device below is online while the device above is offline", [6.5, 2, 4.5])
            scene.showControls(40, [7.5, 2, 3.5], "down")
                .withItem("minecraft:redstone_torch")
            scene.showControls(40, [7.5, 2, 5.5], "down")
                .withItem("minecraft:barrier")
            scene.idle(60)
        })
})