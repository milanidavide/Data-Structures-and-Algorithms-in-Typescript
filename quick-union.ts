/**
 * Data structure:
 * - Integer array id[] of size n.
 * - Interpretation: id[i] is parent of i.
 * - Root of i is id[id[...id[i]...]].
 *
 * Time complexity:
 * - initialize: O(n)
 * - union: O(n)
 * - find: O(n)
 */

class QuickUnion {
  private id: number[];

  constructor(n: number) {
    this.id = [];

    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  private root(i: number): number {
    while (this.id[i] !== i) {
      i = this.id[i];
    }
    return i;
  }

  union(p: number, q: number): void {
    const proot = this.root(p);
    const qroot = this.root(q);
    this.id[proot] = qroot;
  }

  find(p: number, q: number): boolean {
    return this.root(p) === this.root(q);
  }
}

const instance = new QuickUnion(10);
instance.union(0, 6);
instance.union(4, 0);
console.log(instance.find(0, 5)); // false
console.log(instance.find(4, 6)); // true
console.log(instance.find(0, 6)); // true
