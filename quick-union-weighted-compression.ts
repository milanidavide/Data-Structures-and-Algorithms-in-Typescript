/**
 * Data structure:
 * - Integer array id[] of size n.
 * - Integer array sz[] of size n to count the size of the tree rooted at i.
 * - Interpretation: id[i] is parent of i.
 * - Root of i is id[id[...id[i]...]].
 *
 * Time complexity:
 * - initialize: O(n)
 * - union: O(log* N) *
 * - find: O(log* N) *
 * * behaves as linear in the "real world".
 */

class QuickUnion {
  private id: number[];
  private sz: number[];
  private sets: number;

  constructor(n: number) {
    this.id = [];
    this.sz = [];
    this.sets = n;

    for (let i = 0; i < n; i++) {
      this.id[i] = i;
      this.sz[i] = 1;
    }
  }

  private root(i: number): number {
    while (this.id[i] !== i) {
      this.id[i] = this.id[this.id[i]];
      i = this.id[i];
    }
    return i;
  }

  union(p: number, q: number): void {
    const proot = this.root(p);
    const qroot = this.root(q);

    if (proot == qroot) {
      return;
    }

    if (this.sz[proot] < this.sz[qroot]) {
      this.id[proot] = qroot;
      this.sz[qroot] += this.sz[proot];
    } else {
      this.id[qroot] = proot;
      this.sz[proot] += this.sz[qroot];
    }

    this.sets--;
  }

  find(p: number, q: number): boolean {
    return this.root(p) === this.root(q);
  }

  count(): number {
    return this.sets;
  }
}

const instance = new QuickUnion(10);
instance.union(0, 6);
instance.union(4, 0);
instance.union(7, 0);
instance.union(1, 8);
instance.union(9, 1);
instance.union(2, 1);
instance.union(5, 1);
instance.union(0, 1);
console.log(instance.find(0, 3)); // false
console.log(instance.find(4, 6)); // true
console.log(instance.find(0, 5)); // true
console.log(instance.count()); // 2
