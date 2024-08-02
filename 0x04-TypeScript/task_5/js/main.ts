interface MajorCredits {
    credits:  number;
    brand: 'laMajorite' // i think thats French for majority
}

interface MinorCredits {
    credits: number;
    brand: 'laMinorite'
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'laMajorite'
    };
}
  
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'laMinorite'
    };
}

