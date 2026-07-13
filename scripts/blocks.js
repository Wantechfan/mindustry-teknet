Log.info("Is it actually loading it");
const coreMulet = extend(CoreBlock, "coreMulet", {
    size: 3,
    health: 3000,
    itemCapacity: 3000,
    unitType: UnitTypes.dagger, // Change later

    load: function() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
        this.teamRegion = Core.atlas.find(this.name + "-team");
    }
});

Log.info("It works down here");
coreMulet.category = Category.effect;
coreMulet.buildVisibility = BuildVisibility.shown;
coreMulet.requirements = ItemStack.with(Items.surgeAlloy, 1);
