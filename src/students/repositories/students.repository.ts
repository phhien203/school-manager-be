import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Student} from "../../shared/student";
import {Model} from 'mongoose';

@Injectable()
export class StudentsRepository {
    constructor(
        @InjectModel('Student') private studentModel: Model<Student>
    ) {
    }

    async findAllStudents(): Promise<Student[]> {
        return this.studentModel.find();
    }

    async findStudentById(studentId: string): Promise<Student> {
        return this.studentModel.findOne({_id: studentId});
    }

    async addStudent(student: Partial<Student>): Promise<Student> {
        const newStudent = this.studentModel(student);

        await newStudent.save();

        return newStudent.toObject({versionKey: false});
    }

    async updateStudent(studentId: string, changes: Partial<Student>): Promise<Student> {
        return this.studentModel.findOneAndUpdate(
            {_id: studentId},
            changes,
            {new: true}
        );
    }

    async deleteStudent(studentId: string) {
        return this.studentModel.deleteOne({_id: studentId});
    }
}