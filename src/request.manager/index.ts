import axios from 'axios';
import { config } from 'process';

export class RequestManager {

  static async CreateItem(InputData) {
    let status = 'fuck you';

    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZmFiZDA2ZjktOWNiMy00YzMzLWFjNjEtNmJlMzBiYjBkMWVhIiwiaWF0IjoxNjc1NzY1Nzc4LCJleHAiOjE2Nzc1NjU3NzgsInN1YiI6ImZhYmQwNmY5LTljYjMtNGMzMy1hYzYxLTZiZTMwYmIwZDFlYSJ9.IOM1PLFaaY8cy3z12oj-hSC_pVhk5sPrR9eWANIYYL4';

    const bdurl = 'https://api.entersight.ru/graphql';
    headers = [{ autarization: 'Brearer ' + token }];
    body = '';

    let config = {

    }

    request = axios.request(config)

    return status;
  }
}
