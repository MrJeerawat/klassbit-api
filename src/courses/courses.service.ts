/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateCourseDto } from "./dto/update-course.dto";

import { Course } from "./schemas/course.schema";
import { CoursesRepository } from "./courses.repository";

@Injectable()
export class CoursesService {
    constructor(private readonly courseRepository: CoursesRepository) {}

    async getCourseById(courseId: string): Promise<Course> {
        return this.courseRepository.findOne({ courseId })
    }

    async getCourses(): Promise<Course[]> {
        return this.courseRepository.find({});
    }

    async createCourse(title: string, desc: string): Promise<Course> {
        return this.courseRepository.create({
            courseId: uuidv4(),
            title,
            desc
        })
    }

    async updateCourse(courseId: string, courseUpdates: UpdateCourseDto): Promise<Course> {
        return this.courseRepository.findOneAndUpdate({ courseId }, courseUpdates);
    }
}