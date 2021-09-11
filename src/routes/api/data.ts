import type {Response} from '@sveltejs/kit';

export async function get(): Promise<Response> {
  console.log('data.ts: get entered');
  const body = JSON.stringify({timestamp: Date.now()});
  return {status: 200, headers: {}, body};
}
