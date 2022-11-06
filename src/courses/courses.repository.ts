/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Course, CourseDocument } from "./schemas/course.schema";

@Injectable()
export class CoursesRepository {
    constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) {}

    async findOne(courseFilterQuery: FilterQuery<Course>): Promise<Course> {
        return this.courseModel.findOne(courseFilterQuery);
    }

    async find(courseFilterQuery: FilterQuery<Course>): Promise<Course[]> {
        return this.courseModel.find(courseFilterQuery)
    }

    async create(course: Course): Promise<Course> {
        const newCourse = new this.courseModel(course);
        return newCourse.save()
    }

    async findOneAndUpdate(courseFilterQuery: FilterQuery<Course>, course: Partial<Course>): Promise<Course> {
        return this.courseModel.findOneAndUpdate(courseFilterQuery, course, { new: true });
    }
}