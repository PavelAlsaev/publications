"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditionModule = void 0;
const common_1 = require("@nestjs/common");
const edition_service_1 = require("./edition.service");
const edition_controller_1 = require("./edition.controller");
const typeorm_1 = require("@nestjs/typeorm");
const edition_entity_1 = require("./entities/edition.entity");
let EditionModule = class EditionModule {
};
EditionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([edition_entity_1.Edition])],
        controllers: [edition_controller_1.EditionController],
        providers: [edition_service_1.EditionService],
    })
], EditionModule);
exports.EditionModule = EditionModule;
//# sourceMappingURL=edition.module.js.map