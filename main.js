// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
  
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      //console.log(this.dna);
      const randBaseIndex = Math.floor(Math.random() * this.dna.length);
      let oldBase = this.dna[randBaseIndex];
      let newBase = returnRandBase();
      while (newBase === oldBase) {
        newBase = returnRandBase();
      }
      this.dna[randBase] = newBase;
      //console.log(this.dna);
      return this.dna;
    },

    compareDNA(pAequorObj) {
      let inCommon = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === pAequorObj.dna[i]) {
          inCommon++;
        }
      }
      inCommon /= 15;
      inCommon *= 100;
      console.log(`Strand ${this.specimenNum} and strand ${pAequorObj.specimenNum} have ${Math.round(inCommon)}% DNA in common.`);
    },
          
    willLikelySurvive() {
      let count = 0;
      for (let base of this.dna) {
        if (base === 'C' || base === 'G') {
          count++;
        }
      }
      return count > 8;
    },
    toString() {
      return `Specimen ${this.specimenNum}: ${this.dna}`;
    }
  }
};

const pAequorLikelyToSurvive = [];
let specimenNumCounter = 1;

while (pAequorLikelyToSurvive.length < 30) {
  const specimen = pAequorFactory(specimenNumCounter, mockUpStrand());
  if (specimen.willLikelySurvive()) {
    pAequorLikelyToSurvive.push(specimen);
  }
  specimenNumCounter++;
}

for (let pa of pAequorLikelyToSurvive) {
  console.log(pa.toString());
};

  
  
  
  
  
  