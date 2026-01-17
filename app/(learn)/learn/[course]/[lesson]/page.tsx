import React from 'react';
import dynamic from 'next/dynamic';
import { courses, type Course, type Lesson } from '@/data/courses';

const LessonPageClient = dynamic(
  () => import('./LessonPageClient').then(mod => ({ default: mod.LessonPageClient })),
  { ssr: false }
);

export function generateStaticParams() {
  const params: { course: string; lesson: string }[] = [];
  
  courses.forEach((course: Course) => {
    course.lessons.forEach((lesson: Lesson) => {
      params.push({
        course: course.id,
        lesson: lesson.id,
      });
    });
  });
  
  return params;
}

export default function LessonPage({
  params,
}: {
  params: { course: string; lesson: string };
}) {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <LessonPageClient courseId={params.course} lessonId={params.lesson} />
    </div>
  );
}
