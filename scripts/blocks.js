const jepel = require("jepel")

let coreMulet = extend(CoreBlock, "coreMulet", {
    size: 3,
    health: 3000,
    itemCapacity: 3000,
    unitType: jepel
});

coreMulet.category = Category.effect;
coreMulet.buildVisibility = BuildVisibility.shown;
coreMulet.requirements = ItemStack.with(Items.surgeAlloy, 1);

let itemPipe = extend(Duct, "itemPipe", {
    size: 1,
    health: 30,
    itemCapacity: 1
});
