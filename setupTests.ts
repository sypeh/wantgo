import { server } from './mocks/server';

// テスト前にサーバーを起動
beforeAll(() => server.listen());

// 各テストごとにハンドラーをリセット
afterEach(() => server.resetHandlers());

// テスト終了後にサーバーを停止
afterAll(() => server.close());
