const search = require("../users");

describe("For a user with id 1",  ()=>{
    it("should have the name Leanne Graham",  async () => {
       const user = await search.getUser().then(response => {
         expect(response.name).toEqual("Leanne Graham");
       });
    });

});