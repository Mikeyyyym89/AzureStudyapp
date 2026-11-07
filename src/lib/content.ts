import type {
  Course,
  CourseContent,
  CaseStudy,
  DocGroup,
  Flashcard,
  Question,
  Difficulty,
} from "@/lib/types";

import coursesData from "@/content/courses.json";

import az104Flashcards from "@/content/az-104/flashcards.json";
import az104Questions from "@/content/az-104/questions.json";
import az104Official from "@/content/az-104/questions-official.json";
import az104Cases from "@/content/az-104/case-studies.json";
import az104Cases2 from "@/content/az-104/case-studies-2.json";
import az104Docs from "@/content/az-104/docs.json";

import az305Flashcards from "@/content/az-305/flashcards.json";
import az305Questions from "@/content/az-305/questions.json";
import az305Official from "@/content/az-305/questions-official.json";
import az305Cases from "@/content/az-305/case-studies.json";
import az305Cases2 from "@/content/az-305/case-studies-2.json";
import az305Docs from "@/content/az-305/docs.json";

import sc500Flashcards from "@/content/sc-500/flashcards.json";
import sc500Questions from "@/content/sc-500/questions.json";
import sc500Official from "@/content/sc-500/questions-official.json";
import sc500Cases from "@/content/sc-500/case-studies.json";
import sc500Cases2 from "@/content/sc-500/case-studies-2.json";
import sc500Docs from "@/content/sc-500/docs.json";

import ai200Flashcards from "@/content/ai-200/flashcards.json";
import ai200Questions from "@/content/ai-200/questions.json";
import ai200Official from "@/content/ai-200/questions-official.json";
import ai200Cases from "@/content/ai-200/case-studies.json";
import ai200Cases2 from "@/content/ai-200/case-studies-2.json";
import ai200Docs from "@/content/ai-200/docs.json";

import ai500Flashcards from "@/content/ai-500/flashcards.json";
import ai500Questions from "@/content/ai-500/questions.json";
import ai500Official from "@/content/ai-500/questions-official.json";
import ai500Cases from "@/content/ai-500/case-studies.json";
import ai500Cases2 from "@/content/ai-500/case-studies-2.json";
import ai500Docs from "@/content/ai-500/docs.json";

function tag(qs: Question[], difficulty: Difficulty): Question[] {
  return qs.map((q) => ({ ...q, difficulty }));
}

export const courses: Course[] = coursesData as Course[];

export const courseContent: Record<string, CourseContent> = {
  "az-104": {
    flashcards: az104Flashcards as Flashcard[],
    questions: [
      ...tag(az104Questions as Question[], "foundational"),
      ...tag(az104Official as Question[], "expert"),
    ],
    caseStudies: [...az104Cases, ...az104Cases2] as CaseStudy[],
    docs: az104Docs as DocGroup[],
  },
  "az-305": {
    flashcards: az305Flashcards as Flashcard[],
    questions: [
      ...tag(az305Questions as Question[], "foundational"),
      ...tag(az305Official as Question[], "expert"),
    ],
    caseStudies: [...az305Cases, ...az305Cases2] as CaseStudy[],
    docs: az305Docs as DocGroup[],
  },
  "sc-500": {
    flashcards: sc500Flashcards as Flashcard[],
    questions: [
      ...tag(sc500Questions as Question[], "foundational"),
      ...tag(sc500Official as Question[], "expert"),
    ],
    caseStudies: [...sc500Cases, ...sc500Cases2] as CaseStudy[],
    docs: sc500Docs as DocGroup[],
  },
  "ai-200": {
    flashcards: ai200Flashcards as Flashcard[],
    questions: [
      ...tag(ai200Questions as Question[], "foundational"),
      ...tag(ai200Official as Question[], "expert"),
    ],
    caseStudies: [...ai200Cases, ...ai200Cases2] as CaseStudy[],
    docs: ai200Docs as DocGroup[],
  },
  "ai-500": {
    flashcards: ai500Flashcards as Flashcard[],
    questions: [
      ...tag(ai500Questions as Question[], "foundational"),
      ...tag(ai500Official as Question[], "expert"),
    ],
    caseStudies: [...ai500Cases, ...ai500Cases2] as CaseStudy[],
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
