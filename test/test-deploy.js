const { ethers } = require("hardhat");
const { assert, expect } = require("chai");
describe("SimpleStorage", () => {
  let simpleStorage, SimpleStorageFactory;
  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFactory.deploy();
  });

  it("Should start with a favourite number of zero", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    // assert
    // expect
    assert.equal(currentValue.toString(), expectedValue);
    //expect(currentValue.toString()).to.equal(expectedValue);
  });

  it("Should update when call store", async function () {
    const expectedValue = "7";
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);
    const currentValue = await simpleStorage.retrieve();
    assert.equal(expectedValue, currentValue);
  });
});
