/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema()
export class Course {
    @Prop()
    courseId: string;

    @Prop()
    title: string;

    @Prop()
    desc: string;

}

export const CourseSchema = SchemaFactory.createForClass(Course);