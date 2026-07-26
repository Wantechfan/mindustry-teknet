/* Will be done this night on UTC+7
const Jepel = extend(LegsType, "jepel", {
    load: function() {
        this.super$load();
        this.baseRegion = Core.atlas.find(this.name);
        this.legRegion = Core.atlas.find(this.name + "-leg");
        this.jointRegion = Core.atlas.find(this.name + "-joint");
        this.teamRegion = Core.atlas.find(this.name + "-team");
    }
});

Jepel.constructor = () => extend(LegsUnit, {});
Jepel.health = 175;
Jepel.speed = 5; // Adjust
Jepel.hitSize = 12; // Change
Jepel.allowLegStep = true;

Jepel.legs = 4;
Jepel.legLength = 15; // Change
Jepel.legSpeed = 0.3; // Change
Jepel.legExtension = 2; // Change
Jepel.legPairOffset = 3; // Change
Jepel.legBaseOffset = 5; // Change

Jepel.weapons.add(new Weapon("jepel-gun"){{
    reload = 5;
    x = 0;
    y = 0;
    shootSound = Sounds.shootAlpha;
    bullet = Bullets.standardCopper; // Adjust
}});
*/
