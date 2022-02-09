'use strict';

// Task 11.

export interface MajorCredits {
    credits: number;
    _brand: void;
  }
  
export  interface MinorCredits {
    credits: number;
    _brand: void;
  }
  
export function sumMajorCredits(
    subject1: MajorCredits,
    subject2: MajorCredits
  ): MajorCredits {
    const sum = subject1.credits + subject2.credits;
    const obj: MajorCredits = {
      credits: sum,
      _brand: "Major",
    };
  
    return obj;
  }
  
export function sumMinorCredits(
    subject1: MinorCredits,
    subject2: MinorCredits
  ): MinorCredits {
    const sum = subject1.credits + subject2.credits;
    const obj: MinorCredits = {
      credits: sum,
      _brand: "Minor",
    };
  
    return obj;
  }
  