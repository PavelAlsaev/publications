"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherEditionModule = void 0;
const common_1 = require("@nestjs/common");
const teacher_edition_service_1 = require("./teacher-edition.service");
const teacher_edition_controller_1 = require("./teacher-edition.controller");
const typeorm_1 = require("@nestjs/typeorm");
const teacher_edition_entity_1 = require("./entities/teacher-edition.entity");
let TeacherEditionModule = class TeacherEditionModule {
};
TeacherEditionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([teacher_edition_entity_1.TeacherEdition])],
        controllers: [teacher_edition_controller_1.TeacherEditionController],
        providers: [teacher_edition_service_1.TeacherEditionService],
    })
], TeacherEditionModule);
exports.TeacherEditionModule = TeacherEditionModule;
//# sourceMappingURL=teacher-edition.module.js.map