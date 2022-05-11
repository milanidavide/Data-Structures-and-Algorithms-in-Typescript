import { assert, assertStrictEquals } from "testing/asserts.ts";
import { describe, it } from "testing/bdd.ts";
import QuickUnion from "../quick_union.ts";

const quTests = describe("QuickUnion");

it(quTests, "union of two nodes", function () {
  const qu = new QuickUnion(2);
  qu.union(1, 4);
  assert(qu.find(1, 4));
});

it(quTests, "union transitive relation", function () {
  const qu = new QuickUnion(10);
  qu.union(1, 2);
  qu.union(2, 3);
  assert(qu.find(1, 3));
});

it(quTests, "union reflexive relation", function () {
  const qu = new QuickUnion(10);
  qu.union(1, 2);
  assert(qu.find(2, 1));
});

it(quTests, "number of connected components", function () {
  const qu = new QuickUnion(10);
  qu.union(1, 2);
  qu.union(3, 4);
  qu.union(5, 6);
  qu.union(7, 8);
  assertStrictEquals(6, qu.count());
});
