"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const faculty_module_1 = require("./faculty/faculty.module");
const department_module_1 = require("./department/department.module");
const teacher_module_1 = require("./teacher/teacher.module");
const publishing_house_module_1 = require("./publishing-house/publishing-house.module");
const edition_module_1 = require("./edition/edition.module");
const teacher_edition_module_1 = require("./teacher-edition/teacher-edition.module");
const user_module_1 = require("./user/user.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5433,
                username: 'postgres',
                password: 'adminadmin',
                database: 'Publications',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'client'),
            }),
            faculty_module_1.FacultyModule,
            department_module_1.DepartmentModule,
            teacher_module_1.TeacherModule,
            publishing_house_module_1.PublishingHouseModule,
            edition_module_1.EditionModule,
            teacher_edition_module_1.TeacherEditionModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map