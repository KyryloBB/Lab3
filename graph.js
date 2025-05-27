class Graph {
  constructor() {
    this.matrix = [];
    this.seed = 4101;
    this.m = Math.pow(2, 32);
    this.k = 1.0 - 0 * 0.02 - 1 * 0.005 - 0.25;
  }

  random() {
    this.seed = (1103515245 * this.seed + 12345) % this.m;
    const randomNumber = (this.seed / this.m) * 2;
    return randomNumber;
  }

  matrixGenerate() {
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(this.random() * this.k);
        if (row[j] < 1) {
          row[j] = 0;
        } else {
          row[j] = 1;
        }
      }
      this.matrix.push(row);
    }
  }
}

export { Graph };
