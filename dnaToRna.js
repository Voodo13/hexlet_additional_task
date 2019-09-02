const nucleotideDnaToRna = (char) => {
  switch (char) {
    case 'G': return 'C';
    case 'C': return 'G';
    case 'T': return 'A';
    case 'A': return 'U';
    default: return null;
  }
};
const dnaToRna = (dna) => {
  let rna = '';
  for (let i = 0; i < dna.length; i += 1) {
    if (nucleotideDnaToRna(dna[i]) === null) {
      return null;
    }
    rna += nucleotideDnaToRna(dna[i]);
  }
  return rna;
};

console.log(dnaToRna('ACGTGGTCTTAA'));
console.log(dnaToRna('CCGTA'));
console.log(dnaToRna(''));
console.log(dnaToRna('ACNTG'));

// export default dnaToRna;
