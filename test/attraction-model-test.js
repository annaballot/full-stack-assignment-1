import { assert } from "chai";
import { db } from "../src/models/db.js";
import {  testLists, testAttractions, fiona, anna, clonea } from "./fixtures.js";
import { assertSubset } from "./test-utils.js";

suite("Attraction Model tests", () => {

  let fionaList = null;

  setup(async () => {
    db.init("mongo");
    await db.listStore.deleteAllLists();
    await db.attractionStore.deleteAllAttractions();
    fionaList = await db.listStore.addList(fiona);
    for (let i = 0; i < testAttractions.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testAttractions[i] = await db.attractionStore.addAttraction(fionaList._id, testAttractions[i]);
    }
  });

  test("create single attraction", async () => {
    const annaList = await db.listStore.addList(anna);
    const attraction = await db.attractionStore.addAttraction(annaList._id, clonea)
    assert.isNotNull(attraction._id);
    assertSubset (clonea, attraction);
  });

  test("get multiple attractions", async () => {
    const attractions = await db.attractionStore.getAttractionsByListId(fionaList._id);
    assert.equal(attractions.length, testAttractions.length)
  });

  test("delete all attractions", async () => {
    const attractions = await db.attractionStore.getAllAttractions();
    assert.equal(testAttractions.length, attractions.length);
    await db.attractionStore.deleteAllAttractions();
    const newAttractions = await db.attractionStore.getAllAttractions();
    assert.equal(0, newAttractions.length);
  });

  test("get a track - success", async () => {
    const annaList = await db.listStore.addList(anna);
    const attraction = await db.attractionStore.addAttraction(annaList._id, clonea)
    const newAttraction = await db.attractionStore.getAttractionById(attraction._id);
    assertSubset (clonea, newAttraction);
  });

  test("delete One Attraction - success", async () => {
    await db.attractionStore.deleteAttraction(testAttractions[0]._id);
    const attractions = await db.attractionStore.getAllAttractions();
    assert.equal(attractions.length, testLists.length - 1);
    const deletedAttraction = await db.attractionStore.getAttractionById(testAttractions[0]._id);
    assert.isNull(deletedAttraction);
  });

  test("get an attraction - bad params", async () => {
    assert.isNull(await db.attractionStore.getAttractionById(""));
    assert.isNull(await db.attractionStore.getAttractionById());
  });

  test("delete one track - fail", async () => {
    await db.attractionStore.deleteAttraction("bad-id");
    const attractions = await db.attractionStore.getAllAttractions();
    assert.equal(attractions.length, testLists.length);
  });
});