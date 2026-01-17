import React from 'react';
import { courses } from '@/data/courses';
import { CoursePageClient } from './CoursePageClient';

export function generateStaticParams() {
  return courses.map(course => ({
    course: course.id,
  }));
}

export default function CoursePage({ params }: { params: { course: string } }) {
  return <CoursePageClient courseId={params.course} />;
}
