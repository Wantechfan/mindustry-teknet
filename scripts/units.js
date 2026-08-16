export let jepel = extend(UnitType, "jepel", { 
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
        this.region = Core.atlas.find(this.name);
    } 
}); 

jepel.constructor = () => extend(LegsUnit, {}); 

jepel.health = 175; 
jepel.speed = 0.5;
jepel.hitSize = 12; 
jepel.allowLegStep = true; 
jepel.outlineColor = Color.valueOf("253826");
jepel.stepSound = Sounds.walkerStepTiny;
jepel.targetAir = true;
jepel.targetGround = true;

jepel.legCount = 6; 
jepel.legGroupSize = 3;
jepel.legLength = 8; 
jepel.legSpeed = 0.7; 
jepel.legExtension = -2; 
jepel.legPairOffset = 3; 
jepel.legBaseOffset = 3; 
jepel.legContinousMove = true;

let jepelGunBullet = extend(ArtilleryBulletType, {
    lifetime: 46,
    splashDamage: 30,
    splashDamageRadius: 19,
});

let jepelGun = extend(Weapon, "jepel-gun", {
    reload: 5,
    x: 0,
    y: 1,
    shootSound: Sounds.wind3,
    bullet: jepelGunBullet
});

jepel.weapons.add(jepelGun);
