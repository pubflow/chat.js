import nhostClient from '../services/nhost';

export function fetchChats() {
  return nhostClient.authenticated(async (client) => {
    const response = await client.get('/chats');
    return response.data;
  });
}

export function fetchUser() {
  return nhostClient.authenticated(async (client) => {
    const response = await client.get('/user');
    return response.data;
  });
}

export function updateStatus(status) {
  return nhostClient.authenticated(async (client) => {
    await client.put('/user', { status });
  });
}
