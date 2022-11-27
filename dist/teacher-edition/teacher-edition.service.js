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
exports.TeacherEditionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const teacher_edition_entity_1 = require("./entities/teacher-edition.entity");
let TeacherEditionService = class TeacherEditionService {
    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    async create(createTeacherDto) {
        let teacher = this.teacherRepository.create(createTeacherDto);
        teacher = await this.teacherRepository.save(createTeacherDto);
        return teacher;
    }
    async findAll() {
        return await this.teacherRepository.find({
            relations: ['teacher', 'teacher.department', 'edition'],
        });
    }
    async findOne(id) {
        return await this.teacherRepository.findOne({
            where: { id },
            relations: ['teacher', 'teacher.department', 'edition'],
        });
    }
    async update(id, updateTeacherDto) {
        await this.teacherRepository.update({ id }, updateTeacherDto);
        return await this.teacherRepository.findOne({
            where: { id },
            relations: ['teacher', 'teacher.department', 'edition'],
        });
    }
    async remove(id) {
        await this.teacherRepository.delete({ id });
        return { deleted: true };
    }
};
TeacherEditionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(teacher_edition_entity_1.TeacherEdition)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeacherEditionService);
exports.TeacherEditionService = TeacherEditionService;
//# sourceMappingURL=teacher-edition.service.js.map