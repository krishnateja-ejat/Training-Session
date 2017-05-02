var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by MINNU on 5/2/2017.
 */
var Animal = (function () {
    function Animal(Name) {
        this.Name = "";
        this.Speed = 10;
        this.Name = Name;
        alert(this.Name);
    }
    return Animal;
})();
var Tourtoise = (function (_super) {
    __extends(Tourtoise, _super);
    function Tourtoise() {
        _super.apply(this, arguments);
    }
    Tourtoise.prototype.calcul = function () {
        var speed = 6;
        var c = this.Speed - speed;
        return c;
    };
    return Tourtoise;
})(Animal);
var Rabbit = (function (_super) {
    __extends(Rabbit, _super);
    function Rabbit() {
        _super.apply(this, arguments);
    }
    Rabbit.prototype.calcul = function () {
        var speed = 10;
        return this.Speed * speed;
    };
    return Rabbit;
})(Animal);
//# sourceMappingURL=Animal.js.map