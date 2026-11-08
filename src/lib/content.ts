import type {
  Course,
  CourseContent,
  CaseStudy,
  DocGroup,
  Flashcard,
  Question,
  Difficulty,
  Takeaway,
} from "@/lib/types";

import coursesData from "@/content/courses.json";

import az104Flashcards from "@/content/az-104/flashcards.json";
import az104Official from "@/content/az-104/questions-official.json";
import az104Cases from "@/content/az-104/case-studies.json";
import az104Cases2 from "@/content/az-104/case-studies-2.json";
import az104Docs from "@/content/az-104/docs.json";
import az104Takeaways from "@/content/az-104/takeaways.json";

import az305Flashcards from "@/content/az-305/flashcards.json";
import az305Official from "@/content/az-305/questions-official.json";
import az305Cases from "@/content/az-305/case-studies.json";
import az305Cases2 from "@/content/az-305/case-studies-2.json";
import az305Docs from "@/content/az-305/docs.json";
import az305Takeaways from "@/content/az-305/takeaways.json";

import sc500Flashcards from "@/content/sc-500/flashcards.json";
import sc500Official from "@/content/sc-500/questions-official.json";
import sc500Cases from "@/content/sc-500/case-studies.json";
import sc500Cases2 from "@/content/sc-500/case-studies-2.json";
import sc500Docs from "@/content/sc-500/docs.json";
import sc500Takeaways from "@/content/sc-500/takeaways.json";

import ai103Flashcards from "@/content/ai-103/flashcards.json";
import ai103Official from "@/content/ai-103/questions-official.json";
import ai103Cases from "@/content/ai-103/case-studies.json";
import ai103Cases2 from "@/content/ai-103/case-studies-2.json";
import ai103Docs from "@/content/ai-103/docs.json";
import ai103Takeaways from "@/content/ai-103/takeaways.json";

import ai200Flashcards from "@/content/ai-200/flashcards.json";
import ai200Official from "@/content/ai-200/questions-official.json";
import ai200Cases from "@/content/ai-200/case-studies.json";
import ai200Cases2 from "@/content/ai-200/case-studies-2.json";
import ai200Docs from "@/content/ai-200/docs.json";
import ai200Takeaways from "@/content/ai-200/takeaways.json";

import ai500Flashcards from "@/content/ai-500/flashcards.json";
import ai500Official from "@/content/ai-500/questions-official.json";
import ai500Cases from "@/content/ai-500/case-studies.json";
import ai500Cases2 from "@/content/ai-500/case-studies-2.json";
import ai500Docs from "@/content/ai-500/docs.json";
import ai500Takeaways from "@/content/ai-500/takeaways.json";

function tag(qs: Question[], difficulty: Difficulty): Question[] {
  return qs.map((q) => ({ ...q, difficulty }));
}

export const courses: Course[] = coursesData as Course[];

export const courseContent: Record<string, CourseContent> = {
  "az-104": {
    flashcards: az104Flashcards as Flashcard[],
    questions: [...tag(az104Official as Question[], "expert")],
    caseStudies: [...az104Cases, ...az104Cases2] as CaseStudy[],
    docs: az104Docs as DocGroup[],
    takeaways: az104Takeaways as Takeaway[],
  },
  "az-305": {
    flashcards: az305Flashcards as Flashcard[],
    questions: [...tag(az305Official as Question[], "expert")],
    caseStudies: [...az305Cases, ...az305Cases2] as CaseStudy[],
    docs: az305Docs as DocGroup[],
    takeaways: az305Takeaways as Takeaway[],
  },
  "sc-500": {
    flashcards: sc500Flashcards as Flashcard[],
    questions: [...tag(sc500Official as Question[], "expert")],
    caseStudies: [...sc500Cases, ...sc500Cases2] as CaseStudy[],
    docs: sc500Docs as DocGroup[],
    takeaways: sc500Takeaways as Takeaway[],
  },
  "ai-103": {
    flashcards: ai103Flashcards as Flashcard[],
    questions: [...tag(ai103Official as Question[], "expert")],
    caseStudies: [...ai103Cases, ...ai103Cases2] as CaseStudy[],
    docs: ai103Docs as DocGroup[],
    takeaways: ai103Takeaways as Takeaway[],
  },
  "ai-200": {
    flashcards: ai200Flashcards as Flashcard[],
    questions: [...tag(ai200Official as Question[], "expert")],
    caseStudies: [...ai200Cases, ...ai200Cases2] as CaseStudy[],
    docs: ai200Docs as DocGroup[],
    takeaways: ai200Takeaways as Takeaway[],
  },
  "ai-500": {
    flashcards: ai500Flashcards as Flashcard[],
    questions: [...tag(ai500Official as Question[], "expert")],
    caseStudies: [...ai500Cases, ...ai500Cases2] as CaseStudy[],
    docs: ai500Docs as DocGroup[],
    takeaways: ai500Takeaways as Takeaway[],
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
