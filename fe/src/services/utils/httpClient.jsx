class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async post(path, body) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: header,
    });

    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} = ${response.statusText}`);
  }
}

export default HttpClient;
