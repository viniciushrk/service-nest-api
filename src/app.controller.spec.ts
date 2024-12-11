import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  it('should return the correct JSON response with status 200', () => {
    const controller = app.get(AppController);

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    controller.getHello(mockRes as any);

    // Verifica se o status foi chamado com 201
    expect(mockRes.status).toHaveBeenCalledWith(200);

    // Verifica se o json foi chamado com o objeto correto
    expect(mockRes.json).toHaveBeenCalledWith({
      message: 'Resource created successfully!',
    });
  });
});
