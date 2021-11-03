export interface Owner {
  aOwnerId: number;
  aLastName: string;
  aFirstName: string;
  aMiddleName: string;
}

// import {Observable} from 'rxjs';
//
// export interface ICarOwnersService {
//   getOwners(): Observable<OwnerEntity[]>;
//
//   getOwnerById(aId: number): Observable<OwnerEntity>;
//
//   createOwner(
//     aLastName: string,
//     aFirstName: string,
//     aMiddleName: string,
//     aCars: CarEntity[]
//   ): Observable<OwnerEntity>;
//
//   editOwner(aOwner: OwnerEntity): Observable<OwnerEntity>;
//
//   deleteOwner(aOwnerId: number): Observable<OwnerEntity[]>;
// }
