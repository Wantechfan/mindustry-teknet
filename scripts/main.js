const teknet = Vars.mods.locateMod("teknet").meta;

teknet.displayName = Core.bundle.get("mod.teknet.name");
teknet.author = Core.bundle.get("mod.teknet.author");
teknet.description = Core.bundle.get("mod.teknet.description");
teknet.subtitle = Core.bundle.get("mod.teknet.subtitle");
try {
    require("blocks");
    require("units");
} catch(e) {
    function getRandomString(Arr) {
        const randomIndex = Math.floor(Math.random() * Arr.length);
        return arr[randomIndex];
    }
    let strrandom = [
        "Had seizures while searching for blocks that doesn't exist",
        "But for some reason I did a failure"]
    let shit = getRandomString(strrandom);
    Log.err(shit + ": " + e);
}