"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clothes = void 0;
const typeorm_1 = require("typeorm");
const weather_entity_1 = require("../weathers/weather.entity");
let Clothes = class Clothes {
};
exports.Clothes = Clothes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Clothes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clothes.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => weather_entity_1.Weather, (weather) => weather.clothes),
    __metadata("design:type", Array)
], Clothes.prototype, "weather", void 0);
exports.Clothes = Clothes = __decorate([
    (0, typeorm_1.Entity)()
], Clothes);
//# sourceMappingURL=clothes.entity.js.map