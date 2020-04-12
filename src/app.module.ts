import {Module} from "@nestjs/common";
import {StudentsModule} from "./students/students.module";
import {MongooseModule} from "@nestjs/mongoose";
import {MONGO_CONNECTION} from "./constants";

@Module({
  imports: [
      StudentsModule,
      MongooseModule.forRoot(MONGO_CONNECTION)
  ],
  controllers: [
  ]
})
export class AppModule {

}
