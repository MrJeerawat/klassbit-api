/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

import { Course } from './schemas/course.schema';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Get(':courseId')
  async getCourse(@Param('courseId') courseId: string): Promise<Course> {
    return this.coursesService.getCourseById(courseId);
  }

  @Get()
  async getCourses(): Promise<Course[]> {
    return this.coursesService.getCourses();
  }

  @Post()
  async createCourse(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return this.coursesService.createCourse(createCourseDto.title, createCourseDto.desc)
  }

  @Patch(':courseId')
  async updateCourse(@Param('courseId') courseId: string, @Body() updateCoursesDto: UpdateCourseDto): Promise<Course> {
    return this.coursesService.updateCourse(courseId, updateCoursesDto);
  }
}
