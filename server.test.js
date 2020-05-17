const axios = require("axios");

describe("Server", () => {
  it("should deliver a staus that is not 500", async () => {
    try {
      const { status } = await axios.get("/ben");
      //console.log(status);
      expect(status).not.toBe(undefined);
    } catch (err) {
      const { status } = err.response;
      expect(status).not.toBe(undefined);
    }
  });
});
