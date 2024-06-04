"use server";
export async function downloadVpn(userEmail: string) {
  if (process.env.API_KEY == null) {
    throw new Error("API_URL is not defined");
  }
  console.log(`${process.env.API_URL}/vpn/download?email=${userEmail}`);
  const response = await fetch(
    `${process.env.API_URL}/vpn/download?email=${userEmail}`,
    {
      headers: { secret: process.env.API_KEY },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();
  return data;
}
