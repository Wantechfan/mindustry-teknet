const teknet = Vars.mods.locateMod("teknet").meta;

teknet.displayName = Core.bundle.get("mod.teknet.name");
teknet.author = Core.bundle.get("mod.teknet.author");
teknet.description = Core.bundle.get("mod.teknet.description");
teknet.subtitle = Core.bundle.get("mod.teknet.subtitle");
Log.info("It works before require");
try {
    require("blocks");
} catch(e) {
    Log.err("Error while requiring blocks: " + e);
}
Log.info("It works after require");
