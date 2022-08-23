import type { Context } from 'https://edge.netlify.com';
import { HTMLRewriter } from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts';
import { connect } from 'https://unpkg.com/@planetscale/database@^0.6.1';

export default async function handler(_req: Request, context: Context) {
  const conn = connect({
    host: Deno.env.get('PLANETSCALE_HOST'),
    username: Deno.env.get('PLANETSCALE_USERNAME'),
    password: Deno.env.get('PLANETSCALE_PASSWORD'),
  });

  const data = await conn.execute('SELECT * FROM food;', []);

  const food = data.rows;

  const response = await context.next();
  const randomIndex = Math.floor(Math.random() * food.length);

  return new HTMLRewriter()
    .on('.food', {
      element(element) {
        element.setInnerContent(food[randomIndex].name);
      },
    })
    .transform(response);
}
