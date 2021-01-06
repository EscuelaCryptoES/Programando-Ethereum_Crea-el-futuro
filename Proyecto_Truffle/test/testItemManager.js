const ItemManager = artifacts.require("./ItemManager.sol");
contract("ItemManager", accounts => {
    let itemManagerInstance;
    let itemName;
    let itemPrice;
    let result;

    beforeEach(async() => {
        itemManagerInstance = await ItemManager.deployed();
        itemName = "test1";
        itemPrice = 500;
        result = await itemManagerInstance.createItem(itemName, itemPrice, { from: accounts[0] });
    });

    describe('tests itemManager', function(){
        it("Create new items", async () => {
            assert.equal(result.logs[0].args._itemIndex, 0, "There should be one item index in there");
        });

        it("Name of item same as passed", async () => {
            const item = await itemManagerInstance.items(0);
            assert.equal(item._identifier, itemName, "The item has a different identifier");
        });
    });
});



