const coreMulet = extend(CoreBlock, "coreMulet", {
    size: 3,
    health: 4000,
    itemCapacity: 10000,
    unitType: UnitTypes.eclipse // Change this later
    requirements: ItemStack.with(
        // Change this later with new resources
        Items.surgeAlloy, 1
    ),
    
    category: Category.effect
});
