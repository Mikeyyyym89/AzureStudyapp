import type {
  Course,
  CourseContent,
  CaseStudy,
  DocGroup,
  Flashcard,
  Question,
} from "@/lib/types";

import coursesData from "@/content/courses.json";
import az104Flashcards from "@/content/az-104/flashcards.json";
import az104Questions from "@/content/az-104/questions.json";
import az104Cases from "@/content/az-104/case-studies.json";
import az104Docs from "@/content/az-104/docs.json";

import az305Flashcards from "@/content/az-305/flashcards.json";
import az305Questions from "@/content/az-305/questions.json";
import az305Cases from "@/content/az-305/case-studies.json";
import az305Docs from "@/content/az-305/docs.json";

import sc500Flashcards from "@/content/sc-500/flashcards.json";
import sc500Questions from "@/content/sc-500/questions.json";
import sc500Cases from "@/content/sc-500/case-studies.json";
import sc500Docs from "@/content/sc-500/docs.json";

import ai200Flashcards from "@/content/ai-200/flashcards.json";
import ai200Questions from "@/content/ai-200/questions.json";
import ai200Cases from "@/content/ai-200/case-studies.json";
import ai200Docs from "@/content/ai-200/docs.json";

import ai500Flashcards from "@/content/ai-500/flashcards.json";
import ai500Questions from "@/content/ai-500/questions.json";
import ai500Cases from "@/content/ai-500/case-studies.json";
import ai500Docs from "@/content/ai-500/docs.json";

import az104Questions2 from "@/content/az-104/questions-2.json";
import az305Questions2 from "@/content/az-305/questions-2.json";
import sc500Questions2 from "@/content/sc-500/questions-2.json";
import ai200Questions2 from "@/content/ai-200/questions-2.json";
import ai500Questions2 from "@/content/ai-500/questions-2.json";

export const courses: Course[] = coursesData as Course[];

export const courseContent: Record<string, CourseContent> = {
  "az-104": {
    flashcards: az104Flashcards as Flashcard[],
    questions: [...az104Questions, ...az104Questions2] as Question[],
    caseStudies: az104Cases as CaseStudy[],
    docs: az104Docs as DocGroup[],
  },
  "az-305": {
    flashcards: az305Flashcards as Flashcard[],
    questions: [...az305Questions, ...az305Questions2] as Question[],
    caseStudies: az305Cases as CaseStudy[],
    docs: az305Docs as DocGroup[],
  },
  "sc-500": {
    flashcards: sc500Flashcards as Flashcard[],
    questions: [...sc500Questions, ...sc500Questions2] as Question[],
    caseStudies: sc500Cases as CaseStudy[],
    docs: sc500Docs as DocGroup[],
  },
  "ai-200": {
    flashcards: ai200Flashcards as Flashcard[],
    questions: [...ai200Questions, ...ai200Questions2] as Question[],
    caseStudies: ai200Cases as CaseStudy[],
    docs: ai200Docs as DocGroup[],
  },
  "ai-500": {
    flashcards: ai500Flashcards as Flashcard[],
    questions: [...ai500Questions, ...ai500Questions2] as Question[],
    caseStudies: ai500Cases as CaseStudy[],
    docs: ai500Docs as DocGroup[],
  },
};

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getCourseContent(id: string): CourseContent | undefined {
  return courseContent[id];
}

export function getDomain(course: Course, index: number): string {
  return course.domains[index % course.domains.length];
}
