var should = require("should");

describe("User", function () {
    describe("defaults", function () {
        var user = {};

        before(function () {
            user = new User({ email: "ibrahim@biztek.io" });
        });

        it("email is ibrahim@biztek.io");
        it("has an authentication token");
        it("has a pending status");
        it("has a created date");
        it("has a signInCount of 0");
        it("has lastLogin");
        it("has currentLogin");
        it("has a sessionToken");
        it("has an authentication token");
        it("has a reminderToken");
        it("has a reminder sent date");
    });
});