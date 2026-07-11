Events.on(ClientLoadEvent, () => {
    // Correct package definitions
    const MultiMesh = Packages.mindustry.graphics.g3d.MultiMesh;
    const NoiseMesh = Packages.mindustry.graphics.g3d.NoiseMesh;
    const HexSkyMesh = Packages.mindustry.graphics.g3d.HexSkyMesh;
    const GenericMesh = Packages.mindustry.graphics.g3d.GenericMesh;

    // 1. Create the planet instance
    const teknet = new Planet("teknet", Planets.sun, 1.2, 3); 

    // 2. Assign the general properties
    teknet.alwaysUnlocked = true;
    teknet.accessible = true;
    teknet.visible = true;
    teknet.iconColor = Color.valueOf("007A02");
    teknet.hasAtmosphere = true;
    teknet.atmosphereColor = Color.valueOf("ffffff");
    teknet.bloom = false;
    teknet.atmosphereRadIn = 0.02;
    teknet.atmosphereRadOut = 0.3;
    teknet.startSector = 0;
    teknet.sectorSeed = 10;
    teknet.drawOrbit = true;
    teknet.orbitRadius = 47.5;
    teknet.orbitTime = 327159.22;
    teknet.minZoom = 1;
    teknet.clearSectorOnLose = true;
    teknet.enemyCoreSpawnReplace = false;
    teknet.updateLighting = true;

    // 3. Campaign / Rules
    teknet.allowCampaignRules = true;
    teknet.allowLaunchLoadout = false;
    teknet.allowLaunchSchematics = false;
    teknet.allowLaunchToNumbered = false;
    teknet.allowLegacyLaunchPads = false;
    teknet.allowSectorInvasion = false;
    teknet.allowSelfSectorLaunch = false;
    teknet.allowWaves = true;
    teknet.prebuildBase = false;
    teknet.showRtsAIRule = true;

    teknet.defaultCore = Blocks.coreShard; 

    teknet.ruleSetter = r => {
        r.coreDestroyClear = true;
    };

    // 4. Mesh Loader (FIXED: Using standard Java array generation with GenericMesh)
    teknet.meshLoader = () => {
        let meshArray = java.lang.reflect.Array.newInstance(GenericMesh, 5);
        
        meshArray[0] = new NoiseMesh(teknet, 7, 5, 1.229, 4, 1.1, 1.0, 1.0, Color.valueOf("F0F0F0"), Color.valueOf("DCF2FF"));
        meshArray[1] = new NoiseMesh(teknet, 94, 5, 1.22, 4, 0.6, 1.0, 1.0, Color.valueOf("878787"), Color.valueOf("6B6B6B"));
        meshArray[2] = new NoiseMesh(teknet, 101, 6, 1.2441, 5, 0.8, 1.0, 1.0, Color.valueOf("486ACD"), Color.valueOf("7090EA"));
        meshArray[3] = new NoiseMesh(teknet, 69, 5, 1.212, 4, 1.0, 0.75, 1.0, Color.valueOf("42693A"), Color.valueOf("5F8A4A"));
        meshArray[4] = new NoiseMesh(teknet, 19, 5, 1.247, 5, 1.1, 1.0, 1.0, Color.valueOf("F7CBA4"), Color.valueOf("D3AE8D"));

        return new MultiMesh(meshArray);
    };

    // 5. Cloud Mesh Loader
    teknet.cloudMeshLoader = () => {
        return new HexSkyMesh(teknet, 6, 0.05, 0.16, 2, Color.valueOf("ffffffaa"), 0.45, 1.0, 0.41);
    };

    // 6. Planet Generator Configuration
    const gen = new PlanetGenerator();
    gen.octaves = 3;
    gen.persistence = 0.52;
    gen.scale = 22;
    gen.mag = 0.721;
    gen.thresh = 1.152;
    gen.min = 100;
    gen.max = 100;
    gen.radMin = 220;
    gen.radMax = 600;
    gen.iceChance = 0.51;
    gen.carbonChance = 0.32;
    gen.berylChance = 0;
    gen.ferricChance = 0.26;
    
    teknet.generator = gen;

    // 7. Whitelists
    teknet.itemWhitelist.addAll(Items.copper);

    // 8. Initialize planet
    teknet.initialize();
});
