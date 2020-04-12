import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {StudentsSchema} from "./schemas/students.schema";
import {StudentsController} from "./controllers/students.controller";
import {StudentsRepository} from "./repositories/students.repository";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Student',
                schema: StudentsSchema
            }
        ])
    ],
    controllers: [
        StudentsController
    ],
    providers: [
        StudentsRepository
    ]
})
export class StudentsModule {

}