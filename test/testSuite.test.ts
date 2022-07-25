import supertest from "supertest";
import app from "../src/app.js"
import prisma from "../src/config/database.js"

const EMAIL = `${new Date().getTime()}@gmail.com` // random email
const PASSWORD = "secretcode1234567890" // example of password
const CONFIRMPASSWORD = PASSWORD // matching password
const createUserInput = {email: EMAIL, password: PASSWORD, confirmPassword: CONFIRMPASSWORD} // body to register user
const login = {email: EMAIL, password: PASSWORD} // body to login as user
let token = null; // token that will be received as user logins

// beforeEach(async () => {
//   await prisma.$executeRaw`TRUNCATE TABLE tests;`;
// });
// afterAll(async () => {
//   await prisma.$disconnect();
// });

describe ("Access tests suite", () => {
  it ("given an email, password and matching confirm password, create user", async () => {
    const response = await supertest(app).post(`/signUp`).send(createUserInput);
    expect(response.status).toBe(201)
  });

  it ("given valid email and password, return token",async () => {
    const response = await supertest(app).post(`/signIn`).send(login);
    token = response.body.token;
    expect(token).not.toBeNull; 
  });

  it ("given email and password which are already in use, fail to create",async () => {
    const response = await supertest(app).post(`/signUp`).send(login);
    expect(response.status).toBe(409)
  });
  
});

describe ("Get tests test suite", () => {
  it ("given the token, get all tests in db grouped by its teachers", async () => {
    const response = await supertest(app)
    .get(`/tests?groupBy=teachers`)
    .set('Authorization', `Bearer ${token}`);
    console.log(response.error)
    expect(response.status).toBe(200) // por algum motivo está respondendo 409
  });

  it ("given the token, get all tests in db grouped by its disciplines", async () => {
    const response = await supertest(app)
    .get(`/tests?groupBy=disciplines`)
    .set('Authorization', `Bearer ${token}`);
    console.log(response.error)
    expect(response.status).toBe(200) // por algum motivo está respondendo 409
  });

})