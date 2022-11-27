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
exports.TeacherEdition = void 0;
const edition_entity_1 = require("../../edition/entities/edition.entity");
const teacher_entity_1 = require("../../teacher/entities/teacher.entity");
const typeorm_1 = require("typeorm");
let TeacherEdition = class TeacherEdition {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TeacherEdition.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", teacher_entity_1.Teacher)
], TeacherEdition.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => edition_entity_1.Edition, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", edition_entity_1.Edition)
], TeacherEdition.prototype, "edition", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherEdition.prototype, "contribution", void 0);
TeacherEdition = __decorate([
    (0, typeorm_1.Entity)('teacherEdition')
], TeacherEdition);
exports.TeacherEdition = TeacherEdition;
//# sourceMappingURL=teacher-edition.entity.js.map