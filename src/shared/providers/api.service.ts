// import { HttpService } from '@nestjs/axios';
// import { Injectable, Logger } from '@nestjs/common';
// import { firstValueFrom } from 'rxjs';
// @Injectable()
// export class ApiService {
//   constructor(private readonly httpService: HttpService) {}

//   async get(
//     domain: string,
//     path: string,
//     code?: number | string,
//   ): Promise<any> {
//     path = code ? `${path}/${code}` : '/';
//     const axiosConfig = {
//       method: 'get',
//       url: encodeURI(`${domain}${path}?depth=2`),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };
//     return firstValueFrom(this.httpService.request(axiosConfig))
//       .then((res) => res.data)
//       .catch((e) => {
//         Logger.error(e.message);
//       });
//   }
// }
