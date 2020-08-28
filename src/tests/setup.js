process.env.NODE_ENV = "test";
process.env.DATABASE_URL =
  "postgres://postgres:root@localhost:5432/shoppingify_test";

const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

exports.chai = chai;
exports.should = should;
exports.chaiHttp = chaiHttp;
exports.server = require("../server");
exports.knex = require("../db/connection");
