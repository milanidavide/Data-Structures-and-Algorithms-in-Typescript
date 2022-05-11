/**
 * Data Structure:
 * - Integer array id[] of size n.
 * - Interpretation: p and q are connected iff they have the same id.
 *
 * Time complexity:
 * - initialize: O(n)
 * - union: O(n)
 * - find: O(1)
 */

export default class QuickFind {
  private id: number[];

  constructor(n: number) {
    this.id = [];

    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  union(p: number, q: number): void {
    const pid = this.id[p];
    const qid = this.id[q];

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] == pid) {
        this.id[i] = qid;
      }
    }
  }

  find(p: number, q: number): boolean {
    return this.id[p] === this.id[q];
  }
}
