"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTeacherEditionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_teacher_edition_dto_1 = require("./create-teacher-edition.dto");
class UpdateTeacherEditionDto extends (0, mapped_types_1.PartialType)(create_teacher_edition_dto_1.CreateTeacherEditionDto) {
}
exports.UpdateTeacherEditionDto = UpdateTeacherEditionDto;
//# sourceMappingURL=update-teacher-edition.dto.js.map