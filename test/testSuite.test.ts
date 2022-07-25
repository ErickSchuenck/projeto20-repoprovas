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
    teacherId: 5,
    disciplineId:10
}

describe ("Access tests suite", () => {
  it ("given an email, password and matching confirm password, create user", async () => {
    const response = await supertest(app).post(`/signUp`).send(createUserInput);
    expect(response.status).toBe(201)
  });

  it ("given valid email and password, return token",async () => {
    const response = await supertest(app).post(`/signIn`).send(login);
    token = response.body.token;
    console.log('TOKEN', token)
    expect(typeof response.body.token).toEqual('string')
    expect(response.body.token.length).toBeGreaterThan(0);
  });

  it ("given email and password which are already in use, fail to create",async () => {
    const response = await supertest(app).post(`/signUp`).send(login);
    expect(response.status).toBe(409)
  });
  
});

describe ("Create tests test suite", () => {
  it ("Given test data, create test",async () => {
    const response = await supertest(app).post("/test").set('Authorization', `Bearer ${token}`).send(testBody);
    expect(response.status).toBe(201)
  });

  it ("Given test data that already exists, fail create test",async () => {
    const response = await supertest(app).post(`/test`).set('Authorization', `Bearer ${token}`).send(testBody);
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