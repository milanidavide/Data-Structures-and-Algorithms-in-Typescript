import { assert } from "testing/asserts.ts";
import { describe, it } from "testing/bdd.ts";
import QuickFind from "../quick_find.ts";

const qfTests = describe("QuickFind");

it(qfTests, "union of two nodes", function () {
  const qf = new QuickFind(2);
  qf.union(1, 4);
  assert(qf.find(1, 4));
});

it(qfTests, "union transitive relation", function () {
  const qf = new QuickFind(10);
  qf.union(1, 2);
  qf.union(2, 3);
  assert(qf.find(1, 3));
});

it(qfTests, "union reflexive relation", function () {
  const qf = new QuickFind(10);
  qf.union(1, 2);
  assert(qf.find(2, 1));
});
