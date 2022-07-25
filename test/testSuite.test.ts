import supertest from "supertest";
import app from "../src/app.js"
import prisma from "../src/config/database.js"
import { faker } from '@faker-js/faker';

afterAll(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE tests;`;
  await prisma.$disconnect();
});

const EMAIL = `${new Date().getTime()}@gmail.com` // random email
const PASSWORD = "secretcode1234567890" // example of password
const CONFIRMPASSWORD = PASSWORD // matching password
const createUserInput = {email: EMAIL, password: PASSWORD, confirmPassword: CONFIRMPASSWORD} // body to register user

const login = {email: EMAIL, password: PASSWORD} // body to login as user

let token : string; // token that will be received as user logins

const testBody = {
    name: 'prova dificil',
    pdfUrl: 'https://http.cat/',
    categoryName: "Projeto",
    teacherId: 1,
    disciplineId:1
}

describe ("Access tests suite", () => {
  it ("given an email, password and matching confirm password, create user", async () => {
    const response = await supertest(app).post(`/signUp`).send(createUserInput);
    expect(response.status).toBe(201)
  });

  it ("given valid email and password, return token",async () => {
    const response = await supertest(app).post(`/signIn`).send(login);
    token = response.body.token;
    expect(typeof response.body.token).toEqual('string')
    expect(response.body.token.length).toBeGreaterThan(0);
  });

  it ("given email and password which are already in use, fail to create",async () => {
    const response = await supertest(app).post(`/signUp`).send(login);
    expect(response.status).toBe(409)
  });
  
});

describe ("Create tests test suite", () => {
  it ("Given test data, and token create test",async () => {
    const response = await supertest(app).post("/test").set('Authorization', `Bearer ${token}`).send(testBody);
    expect(response.status).toBe(201)
  });

  it ("Given test data without a token, fail create test",async () => {
    const response = await supertest(app).post(`/test`).send(testBody);
    expect(response.status).toBe(401)
  });

  it ("Given test data that already exists, and a token fail create test",async () => {
    const response = await supertest(app).post(`/test`).set('Authorization', `Bearer ${token}`).send(testBody);
    expect(response.status).toBe(409)
  });
});

describe ("Get tests test suite", () => {
  it ('given no token, fail to get tests in db grouped by its teachers', async () => {
    const response = await supertest(app)
    .get(`/tests?groupBy=teachers`);
    expect(response.status).toBe(401)
  });

  it ("given the token, get all tests in db grouped by its teachers", async () => {
    const response = await supertest(app)
    .get(`/tests?groupBy=teachers`)
    .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200)
  });

  it ("given no token, fail to get tests in db grouped by its disciplines", async () => {
    const response = await supertest(app)
    .get(`/tests?groupBy=disciplines`);
    expect(response.status).toBe(401)
  });

  it ("given the token, get all tests in db grouped by its disciplines", async () => {
    const response = await supertest(app)
    .get(`/tests?groupBy=disciplines`)
    .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200)
  });

  it ("given the token, but with an incorrect query input, fail to get tests in db", async () => {
    const response = await supertest(app)
    .get(`/tests?groupBy=incorrectInput`)
    .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(401)
  });

})