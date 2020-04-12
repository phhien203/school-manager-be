import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from "@nestjs/common";
import {Student} from "../../shared/student";
import {StudentsRepository} from "../repositories/students.repository";

@Controller('students')
export class StudentsController {
    constructor(
        private studentsDB: StudentsRepository
    ) {
    }


    @Get()
    async findAllStudents(): Promise<Student[]> {
        return this.studentsDB.findAllStudents();
    }

    @Get(':studentId')
    async findStudentById(@Param('studentId') studentId: string) {
        const student = await this.studentsDB.findStudentById(studentId);

        if (!student) {
            throw new NotFoundException('Can not find student with id ' + studentId);
        }

        return student;
    }

    @Post()
    async createStudent(@Body() student: Student): Promise<Student> {
        return this.studentsDB.addStudent(student);
    }

    @Put(':studentId')
    async updateStudent(
        @Param('studentId') studentId: string,
        @Body() changes: Student): Promise<Student> {
        return this.studentsDB.updateStudent(studentId, changes);
    }

    @Delete(':studentId')
    async deleteStudent(@Param('studentId') studentId: string) {
        return this.studentsDB.deleteStudent(studentId);
    }
}