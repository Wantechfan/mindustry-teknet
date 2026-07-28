let Jepel = extend(UnitType, "jepel", { 
    load() { 
        this.super$load(); 
        this.baseRegion = Core.atlas.find(this.name + "-base"); 
        this.cellRegion = Core.atlas.find(this.name + "-cell"); 
        this.footRegion = Core.atlas.find(this.name + "-foot"); 
        this.fullIcon = Core.atlas.find(this.name + "-full"); 
        //this.glowRegion = Core.atlas.find(this.name + "-glow"); 
        //this.jointRegion = Core.atlas.find(this.name + "-joint"); 
        this.legBaseRegion = Core.atlas.find(this.name + "-leg-base");
        this.legRegion = Core.atlas.find(this.name + "-leg"); 
        this.uiIcon = Core.atlas.find(this.name + "-ui"); 
        this.region = Core.atlas.find(this.name + "-base");
    } 
}); 

Jepel.constructor = () => extend(LegsUnit, {}); 

Jepel.health = 175; 
Jepel.speed = 0.5;
Jepel.hitSize = 12; 
Jepel.allowLegStep = true; 
Jepel.outlineColor = Color.valueOf("253826");
Jepel.stepSound = Sounds.walkerStepTiny;

Jepel.legs = 6; 
Jepel.legLength = 8; 
Jepel.legSpeed = 0.3; 
Jepel.legExtension = 3; 
Jepel.legPairOffset = 3; 
Jepel.legBaseOffset = 5; 

let jepelGunBullet = new ArtilleryBulletType();

let jepelGun = extend(Weapon, "jepel-gun", {
    reload: 5,
    x: 0,
    y: 0,
    shootSound: Sounds.wind3,
    bullet: jepelGunBullet
});

Jepel.weapons.add(jepelGun);
