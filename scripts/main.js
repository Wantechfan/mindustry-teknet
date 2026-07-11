const teknetGenerator = extend(SerpuloPlanetGenerator, {});

const teknet = extend(Planet, "teknet", Planets.sun, 1, {
    alwaysUnlocked: true,
    accessible: true,
    visible: true,
    allowCampaignRules: true,
    allowLaunchLoadout: true,
    allowLaunchSchematics: true,
    allowLaunchToNumbered: true,
    allowLegacyLaunchPads: false,
    allowSectorInvasion: false,
    allowSelfSectorLaunch: false,
    allowWaves: true,
    iconColor: Color.valueOf("#007A02"),
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("#ffffff"),
    bloom: false,
    atmosphereRadIn: 0.02,
    atmosphereRadOut: 0.3,
    startSector: 0,
    sectorSize: 3,
    sectorSeed: 10,
    parent: Planets.sun,
    solarSystem: Planets.sun,
    drawOrbit: true,
    orbitRadius: 47.5,
    orbitTime: 327159.22,
    radius: 1.2,
    minZoom: 1,
    prebuildBase: true,
    clearSectorOnLose: false,
    defaultCore: Blocks.coreShard,
    enemyCoreSpawnReplace: false,
    updateLighting: true,
    launchCandidates: Seq.with(),
    itemWhitelist: Seq.with(Items.copper) 
});

teknet.generator = teknetGenerator;

Events.on(ContentInitEvent, e => {
    let meshList = [];
    let props;

    //#region Ice
    props = {
        seed: 7, divisions: 5, radius: 1.229, octaves: 4, persistence: 1.1, scale: 1, mag: 1,
        color1: Color.valueOf("#F0F0F0"), color2: Color.valueOf("#DCF2FF"),
        colorOct: 1, colorPersi: 1, colorScale: 1, colorThres: 0.5
    };
    meshList.push(new NoiseMesh(
        teknet, props.seed, props.divisions, props.radius, props.octaves,
        props.persistence, props.scale, props.mag, props.color1, props.color2,
        props.colorOct, props.colorPersi, props.colorScale, props.colorThres
    ));
    //#endregion

    //#region Rock
    props = {
        seed: 94, divisions: 5, radius: 1.22, octaves: 4, persistence: 0.6, scale: 1, mag: 0.5,
        color1: Color.valueOf("#878787"), color2: Color.valueOf("#6B6B6B"),
        colorOct: 1, colorPersi: 0.5, colorScale: 1, colorThres: 0.5
    };
    meshList.push(new NoiseMesh(
        teknet, props.seed, props.divisions, props.radius, props.octaves,
        props.persistence, props.scale, props.mag, props.color1, props.color2,
        props.colorOct, props.colorPersi, props.colorScale, props.colorThres
    ));
    //#endregion

    //#region Water
    props = {
        seed: 101, divisions: 6, radius: 1.2441, octaves: 5, persistence: 0.8, scale: 1, mag: 0,
        color1: Color.valueOf("#486ACD"), color2: Color.valueOf("#7090EA"),
        colorOct: 1, colorPersi: 0.5, colorScale: 1, colorThres: 0.5
    };
    meshList.push(new NoiseMesh(
        teknet, props.seed, props.divisions, props.radius, props.octaves,
        props.persistence, props.scale, props.mag, props.color1, props.color2,
        props.colorOct, props.colorPersi, props.colorScale, props.colorThres
    ));
    //#endregion

    //#region Grass
    props = {
        seed: 69, divisions: 5, radius: 1.212, octaves: 4, persistence: 1, scale: 0.75, mag: 1,
        color1: Color.valueOf("#42693A"), color2: Color.valueOf("#5F8A4A"),
        colorOct: 1, colorPersi: 0.5, colorScale: 1, colorThres: 0.5
    };
    meshList.push(new NoiseMesh(
        teknet, props.seed, props.divisions, props.radius, props.octaves,
        props.persistence, props.scale, props.mag, props.color1, props.color2,
        props.colorOct, props.colorPersi, props.colorScale, props.colorThres
    ));
    //#endregion

    //#region Sand
    props = {
        seed: 19, divisions: 5, radius: 1.247, octaves: 4, persistence: 1.1, scale: 1, mag: 0.5,
        color1: Color.valueOf("#F7CBA4"), color2: Color.valueOf("#D3AE8D"),
        colorOct: 1, colorPersi: 0.5, colorScale: 1, colorThres: 0.5
    };
    meshList.push(new NoiseMesh(
        teknet, props.seed, props.divisions, props.radius, props.octaves,
        props.persistence, props.scale, props.mag, props.color1, props.color2,
        props.colorOct, props.colorPersi, props.colorScale, props.colorThres
    ));
    //#endregion

    //#region Clouds
    props = {
        seed: 0, speed: 1.2, radius: 0.16, divisions: 6, color: Color.valueOf("#ffffffaa"),
        octaves: 2, persistence: 0.45, scl: 1.0, thresh: 0.41
    };
    meshList.push(new HexSkyMesh(
        teknet, props.seed, props.speed, props.radius, props.divisions,
        props.color, props.octaves, props.persistence, props.scl, props.thresh
    ));
    //#endregion

    let javaMeshArray = java.lang.reflect.Array.newInstance(GenericMesh, meshList.length);
    for(let i = 0; i < meshList.length; i++){
        javaMeshArray[i] = meshList[i];
    }

    teknet.mesh = new MultiMesh(javaMeshArray);
});
