import { NextResponse } from 'next/server';
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from '@/constant/ServerUrl';
import fetchApi from '@/util/fetch';

export async function POST(request) {
  const { name, surname, email, message } = await request.json();
  console.log(name,surname,email,message)

  try {
    const response = await fetchApi(
      `${API_HOST_ADDRESS}${PUBLIC_PREFIX}${endPoints.makeNewContact}`,
      'POST',
      { name, surname, email, message }
    );
    console.log(response);
    // Handle response
    if (response) {
      return NextResponse.json({ message: 'Contact form submitted successfully.' }, { status: 200 });
    } else {
      // Handle API errors
      return NextResponse.json({ error: response.error || 'Something went wrong.' }, { status: 400 });
    }
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
