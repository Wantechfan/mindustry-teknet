const teknet = Vars.mods.locateMod("teknet").meta;

teknet.displayName = Core.bundle.get("mod.teknet.name");
teknet.author = Core.bundle.get("mod.teknet.author");
teknet.description = Core.bundle.get("mod.teknet.description");
teknet.subtitle = Core.bundle.get("mod.teknet.subtitle");
try {
    require("blocks");
    require("units");
} catch(e) {
    Log.err("Had seizures while searching for blocks that doesn't exist: " + e);
}
Log.info("It works after require");
