export async function getJson(url) {
  const res = await fetch(url);
  return await res.json();
}

export async function postJson(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return await res.json();
}

export async function deleteJson(url, body = null) {
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(url, options);
  return await res.json();
}

