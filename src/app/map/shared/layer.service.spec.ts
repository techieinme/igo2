import { TestBed, inject } from '@angular/core/testing';

import { LayerService } from './layer.service';

import { MockBackend } from '@angular/http/testing';
import {
    Http,
    BaseRequestOptions
} from '@angular/http';

const mockHttpProvider = {
    deps: [ MockBackend, BaseRequestOptions ],
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions);
    }
};

describe('LayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: Http, useValue: mockHttpProvider }, LayerService]
    });
  });

  it('should ...', inject([LayerService], (service: LayerService) => {
    expect(service).toBeTruthy();
  }));
});