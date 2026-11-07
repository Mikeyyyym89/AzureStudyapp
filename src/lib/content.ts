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
import az104Questions2 from "@/content/az-104/questions-2.json";
import az104Hard from "@/content/az-104/questions-hard.json";
import az104Hard2 from "@/content/az-104/questions-advanced-2.json";
import az104Expert from "@/content/az-104/questions-expert.json";
import az104Expert2 from "@/content/az-104/questions-expert-2.json";
import az104Cases from "@/content/az-104/case-studies.json";
import az104Cases2 from "@/content/az-104/case-studies-2.json";
import az104Docs from "@/content/az-104/docs.json";

import az305Flashcards from "@/content/az-305/flashcards.json";
import az305Questions from "@/content/az-305/questions.json";
import az305Questions2 from "@/content/az-305/questions-2.json";
import az305Hard from "@/content/az-305/questions-hard.json";
import az305Hard2 from "@/content/az-305/questions-advanced-2.json";
import az305Expert from "@/content/az-305/questions-expert.json";
import az305Expert2 from "@/content/az-305/questions-expert-2.json";
import az305Cases from "@/content/az-305/case-studies.json";
import az305Cases2 from "@/content/az-305/case-studies-2.json";
import az305Docs from "@/content/az-305/docs.json";

import sc500Flashcards from "@/content/sc-500/flashcards.json";
import sc500Questions from "@/content/sc-500/questions.json";
import sc500Questions2 from "@/content/sc-500/questions-2.json";
import sc500Hard from "@/content/sc-500/questions-hard.json";
import sc500Hard2 from "@/content/sc-500/questions-advanced-2.json";
import sc500Expert from "@/content/sc-500/questions-expert.json";
import sc500Expert2 from "@/content/sc-500/questions-expert-2.json";
import sc500Cases from "@/content/sc-500/case-studies.json";
import sc500Cases2 from "@/content/sc-500/case-studies-2.json";
import sc500Docs from "@/content/sc-500/docs.json";

import ai200Flashcards from "@/content/ai-200/flashcards.json";
import ai200Questions from "@/content/ai-200/questions.json";
import ai200Questions2 from "@/content/ai-200/questions-2.json";
import ai200Hard from "@/content/ai-200/questions-hard.json";
import ai200Hard2 from "@/content/ai-200/questions-advanced-2.json";
import ai200Expert from "@/content/ai-200/questions-expert.json";
import ai200Expert2 from "@/content/ai-200/questions-expert-2.json";
import ai200Cases from "@/content/ai-200/case-studies.json";
import ai200Cases2 from "@/content/ai-200/case-studies-2.json";
import ai200Docs from "@/content/ai-200/docs.json";

import ai500Flashcards from "@/content/ai-500/flashcards.json";
import ai500Questions from "@/content/ai-500/questions.json";
import ai500Questions2 from "@/content/ai-500/questions-2.json";
import ai500Hard from "@/content/ai-500/questions-hard.json";
import ai500Hard2 from "@/content/ai-500/questions-advanced-2.json";
import ai500Expert from "@/content/ai-500/questions-expert.json";
import ai500Expert2 from "@/content/ai-500/questions-expert-2.json";
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
      ...tag(az104Questions2 as Question[], "intermediate"),
      ...tag(az104Hard as Question[], "advanced"),
      ...tag(az104Hard2 as Question[], "advanced"),
      ...tag(az104Expert as Question[], "expert"),
      ...tag(az104Expert2 as Question[], "expert"),
    ],
    caseStudies: [...az104Cases, ...az104Cases2] as CaseStudy[],
    docs: az104Docs as DocGroup[],
  },
  "az-305": {
    flashcards: az305Flashcards as Flashcard[],
    questions: [
      ...tag(az305Questions as Question[], "foundational"),
      ...tag(az305Questions2 as Question[], "intermediate"),
      ...tag(az305Hard as Question[], "advanced"),
      ...tag(az305Hard2 as Question[], "advanced"),
      ...tag(az305Expert as Question[], "expert"),
      ...tag(az305Expert2 as Question[], "expert"),
    ],
    caseStudies: [...az305Cases, ...az305Cases2] as CaseStudy[],
    docs: az305Docs as DocGroup[],
  },
  "sc-500": {
    flashcards: sc500Flashcards as Flashcard[],
    questions: [
      ...tag(sc500Questions as Question[], "foundational"),
      ...tag(sc500Questions2 as Question[], "intermediate"),
      ...tag(sc500Hard as Question[], "advanced"),
      ...tag(sc500Hard2 as Question[], "advanced"),
      ...tag(sc500Expert as Question[], "expert"),
      ...tag(sc500Expert2 as Question[], "expert"),
    ],
    caseStudies: [...sc500Cases, ...sc500Cases2] as CaseStudy[],
    docs: sc500Docs as DocGroup[],
  },
  "ai-200": {
    flashcards: ai200Flashcards as Flashcard[],
    questions: [
      ...tag(ai200Questions as Question[], "foundational"),
      ...tag(ai200Questions2 as Question[], "intermediate"),
      ...tag(ai200Hard as Question[], "advanced"),
      ...tag(ai200Hard2 as Question[], "advanced"),
      ...tag(ai200Expert as Question[], "expert"),
      ...tag(ai200Expert2 as Question[], "expert"),
    ],
    caseStudies: [...ai200Cases, ...ai200Cases2] as CaseStudy[],
    docs: ai200Docs as DocGroup[],
  },
  "ai-500": {
    flashcards: ai500Flashcards as Flashcard[],
    questions: [
      ...tag(ai500Questions as Question[], "foundational"),
      ...tag(ai500Questions2 as Question[], "intermediate"),
      ...tag(ai500Hard as Question[], "advanced"),
      ...tag(ai500Hard2 as Question[], "advanced"),
      ...tag(ai500Expert as Question[], "expert"),
      ...tag(ai500Expert2 as Question[], "expert"),
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
