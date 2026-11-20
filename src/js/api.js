const url = "https://xaus.com/api/v1/spot";
const silverUrl =
  "https://xaus.com/api/v1/chart?symbol=silver&range=5y&interval=1d";
const goldUrl = "https://xaus.com/api/v1/history";
const rates = "https://theratesapi.com/api/latest?base=USD&symbols=MAD,EUR";
const dbUrl = "http://localhost:3000";

export async function fetchCurrentPrices() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch prices");
  }

  const data = await response.json();

  return data;
}

export async function goldHistory() {
  const response = await fetch(goldUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch the gold history");
  }
  const data = await response.json();
  return data;
}

export async function silverHistory() {
  const response = await fetch(silverUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch the silver history");
  }
  const data = await response.json();
  return data;
}

export async function fetchExchangeRates() {
  const response = await fetch(rates);

  if (!response.ok) {
    throw new Error("Failed to fetch rates");
  }

  const data = await response.json();

  return data;
}

//---------------------------------------------------------

export async function getArticles() {
  const response = await fetch(`${dbUrl}/articles`);
  if (!response.ok) {
    throw new Error("The articales aren't available");
  }
  const data = await response.json();
  return data;
}

export async function getArticle(id) {
  const response = await fetch(`${dbUrl}/articles/{id}`);
  if (!response.ok) {
    throw new Error("This articale isn't available");
  }
  const data = response.json();
  return data;
}

export async function SortedByDate() {
  const response = await fetch(`${dbUrl}/articles?_sort=date`);
  if (!response.ok) {
    throw new Error("The articales aren't available");
  }
  const data = response.json();
  return data;
}

export async function SortedByPrice() {
  const response = await fetch(`${dbUrl}/articles?_sort=price`);
  if (!response.ok) {
    throw new Error("The articales aren't available");
  }
  const data = response.json();
  return data;
}
