import {UserFacade} from '@app/features/user/services/user.facade';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {UserStore} from '@app/features/user/services/user.store';
import {TestBed} from '@angular/core/testing';
import {provideHttpClient} from '@angular/common/http';
import {provideZonelessChangeDetection} from '@angular/core';
import {UserApi} from '@app/features/user/services/user-api';

describe('UserFacade.addUser (integration)', () => {
  let facade : UserFacade;
  let http : HttpTestingController;
  let store: UserStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
        UserFacade,
        UserApi,
        UserStore]
    });

    facade = TestBed.inject(UserFacade);
    http = TestBed.inject(HttpTestingController);
    store = TestBed.inject(UserStore);
  });

  it('should call Api, update user list and return user', async () => {
    const dto = { name: 'User1', email: "user@essai.fr", age : 45 };
    const mockResponse = { ...dto, id: '123'};

    const promise = facade.createUser(dto);

    const req = http.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(dto);

    req.flush(mockResponse);

    const result = await promise;
    expect(result.id).toBe('123');
    expect(store.users()[0]).toEqual(result);
  })
})
