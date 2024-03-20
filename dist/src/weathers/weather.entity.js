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
exports.Weather = void 0;
const typeorm_1 = require("typeorm");
const clothes_entity_1 = require("../clothes/clothes.entity");
let Weather = class Weather {
};
exports.Weather = Weather;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Weather.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Weather.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Weather.prototype, "degree", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => clothes_entity_1.Clothes, (clothes) => clothes.weather),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Weather.prototype, "clothes", void 0);
exports.Weather = Weather = __decorate([
    (0, typeorm_1.Entity)()
], Weather);
//# sourceMappingURL=weather.entity.js.map