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
exports.Edition = void 0;
const publishing_house_entity_1 = require("../../publishing-house/entities/publishing-house.entity");
const typeorm_1 = require("typeorm");
let Edition = class Edition {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Edition.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => publishing_house_entity_1.PublishingHouse),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", publishing_house_entity_1.PublishingHouse)
], Edition.prototype, "publishingHouse", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Edition.prototype, "udc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Edition.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Edition.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Edition.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Edition.prototype, "countOfPages", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Edition.prototype, "countOfTables", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Edition.prototype, "countOfDrawnings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Edition.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Edition.prototype, "annotationArticle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Edition.prototype, "annotationThesis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Edition.prototype, "yearOfPublicationAnnotation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Edition.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Edition.prototype, "nameAnnotation", void 0);
Edition = __decorate([
    (0, typeorm_1.Entity)('edition')
], Edition);
exports.Edition = Edition;
//# sourceMappingURL=edition.entity.js.map