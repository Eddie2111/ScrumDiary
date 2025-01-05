import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { USER_FOUND, USER_NOT_FOUND } from 'src/user/user.contants';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user/:id (GET) gets a user by id succesfully', () => {
    const TEST_USER_ID = 1;
    return request(app.getHttpServer())
      .get(`/user/${TEST_USER_ID}}`)
      .expect(200)
      .expect({ statusCode: 200, message: USER_FOUND, data: {id: TEST_USER_ID, name: 'Test User', email: 'test@test.com' } });
  });
  it('/user/:id (GET) fails to get a user', () => {
    const TEST_USER_ID = 0;
    return request(app.getHttpServer())
      .get(`/user/${TEST_USER_ID}}`)
      .expect(200)
      .expect({ statusCode: 400, message: USER_NOT_FOUND, data: USER_NOT_FOUND });
  });

  it('/user/login (POST) logs in a user succesfully', () => {
    return request(app.getHttpServer())
      .post(`/user/login`)
      .send({ email: 'test@test.com', password: 'test' })
      .expect(200)
      .expect({ statusCode: 200, message: 'User logged in successfully', data: {id: 1, name: 'Test User', email: 'test@test.com' } });
  });
});
