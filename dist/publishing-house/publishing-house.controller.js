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
exports.PublishingHouseController = void 0;
const common_1 = require("@nestjs/common");
const publishing_house_service_1 = require("./publishing-house.service");
const create_publishing_house_dto_1 = require("./dto/create-publishing-house.dto");
const update_publishing_house_dto_1 = require("./dto/update-publishing-house.dto");
let PublishingHouseController = class PublishingHouseController {
    constructor(publishingHouseService) {
        this.publishingHouseService = publishingHouseService;
    }
    create(createPublishingHouseDto) {
        return this.publishingHouseService.create(createPublishingHouseDto);
    }
    findAll() {
        return this.publishingHouseService.findAll();
    }
    findOne(id) {
        return this.publishingHouseService.findOne(+id);
    }
    update(id, updatePublishingHouseDto) {
        return this.publishingHouseService.update(+id, updatePublishingHouseDto);
    }
    remove(id) {
        return this.publishingHouseService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_publishing_house_dto_1.CreatePublishingHouseDto]),
    __metadata("design:returntype", void 0)
], PublishingHouseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublishingHouseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublishingHouseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_publishing_house_dto_1.UpdatePublishingHouseDto]),
    __metadata("design:returntype", void 0)
], PublishingHouseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublishingHouseController.prototype, "remove", null);
PublishingHouseController = __decorate([
    (0, common_1.Controller)('publishing-house'),
    __metadata("design:paramtypes", [publishing_house_service_1.PublishingHouseService])
], PublishingHouseController);
exports.PublishingHouseController = PublishingHouseController;
//# sourceMappingURL=publishing-house.controller.js.map