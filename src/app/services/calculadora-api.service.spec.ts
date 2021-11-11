import { TestBed } from '@angular/core/testing';

import { CalculadoraApiService } from './calculadora-api.service';

describe('CalculadoraApiService', () => {
  let service: CalculadoraApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
