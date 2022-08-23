import { connect } from 'https://unpkg.com/@planetscale/database@^0.6.1';

export default async function handler() {
  const conn = connect({
    host: Deno.env.get('PLANETSCALE_HOST'),
    username: Deno.env.get('PLANETSCALE_USERNAME'),
    password: Deno.env.get('PLANETSCALE_PASSWORD'),
  });

  const response = await conn.execute('SELECT * FROM food;', []);

  const food = response.rows;

  const json = JSON.stringify(food);

  return new Response(json, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'access-control-allow-origin': '*',
    },
  });
}
