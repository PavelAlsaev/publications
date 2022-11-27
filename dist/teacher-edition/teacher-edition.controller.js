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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherEditionController = void 0;
const common_1 = require("@nestjs/common");
const teacher_edition_service_1 = require("./teacher-edition.service");
const create_teacher_edition_dto_1 = require("./dto/create-teacher-edition.dto");
const update_teacher_edition_dto_1 = require("./dto/update-teacher-edition.dto");
let TeacherEditionController = class TeacherEditionController {
    constructor(teacherEditionService) {
        this.teacherEditionService = teacherEditionService;
    }
    create(createTeacherEditionDto) {
        return this.teacherEditionService.create(createTeacherEditionDto);
    }
    findAll() {
        return this.teacherEditionService.findAll();
    }
    findOne(id) {
        return this.teacherEditionService.findOne(+id);
    }
    update(id, updateTeacherEditionDto) {
        return this.teacherEditionService.update(+id, updateTeacherEditionDto);
    }
    remove(id) {
        return this.teacherEditionService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teacher_edition_dto_1.CreateTeacherEditionDto]),
    __metadata("design:returntype", void 0)
], TeacherEditionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherEditionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherEditionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teacher_edition_dto_1.UpdateTeacherEditionDto]),
    __metadata("design:returntype", void 0)
], TeacherEditionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherEditionController.prototype, "remove", null);
TeacherEditionController = __decorate([
    (0, common_1.Controller)('teacher-edition'),
    __metadata("design:paramtypes", [teacher_edition_service_1.TeacherEditionService])
], TeacherEditionController);
exports.TeacherEditionController = TeacherEditionController;
//# sourceMappingURL=teacher-edition.controller.js.map