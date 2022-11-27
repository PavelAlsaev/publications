"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishingHouseModule = void 0;
const common_1 = require("@nestjs/common");
const publishing_house_service_1 = require("./publishing-house.service");
const publishing_house_controller_1 = require("./publishing-house.controller");
const typeorm_1 = require("@nestjs/typeorm");
const publishing_house_entity_1 = require("./entities/publishing-house.entity");
let PublishingHouseModule = class PublishingHouseModule {
};
PublishingHouseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([publishing_house_entity_1.PublishingHouse])],
        controllers: [publishing_house_controller_1.PublishingHouseController],
        providers: [publishing_house_service_1.PublishingHouseService],
    })
], PublishingHouseModule);
exports.PublishingHouseModule = PublishingHouseModule;
//# sourceMappingURL=publishing-house.module.js.map