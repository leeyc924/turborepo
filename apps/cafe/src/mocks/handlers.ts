import { rest } from 'msw';

const todos = ['먹기', '자기', '놀기'];

export const handlers = [
  // 할일 목록
  rest.get('/api/todos', (req, res, ctx) => {
    console.log('rerere');
    return res(ctx.status(200), ctx.json(todos));
  }),

  // 할일 추가
  // rest.post('/api/todos', (req, res, ctx) => {
  //   console.log('req', req);
  //   console.log('res', res);
  //   return res(ctx.status(201));
  // }),
];
