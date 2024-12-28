import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { HEALTH_OK_MESSAGE } from "../src/common/constants/app";

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({ 
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) gets the health check', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect({ message: HEALTH_OK_MESSAGE });
  });
});
