const coreMulet = extend(PowerNode, "coreMulet", {
    size: 3,
    health: 3000,
    itemCapacity: 3000,
    unitType: UnitTypes.eclipse // Change later
});
coreMulet.category = Category.effect;
coreMulet.buildVisibility = BuildVisibility.shown;
coreMulet.requirements = ItemStack.with(Items.surgeAlloy, 1); // Change with later new resource
