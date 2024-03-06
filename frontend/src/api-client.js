
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";


export const register = async (formData)=>{
  const response = await fetch(`${API_BASE_URL}/api/users/register`,{
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if(!response.ok){
    throw new Error (responseBody.message);
  }  
};

export const signIn = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};

// export const validateToken = async () => {
//   const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
//     credentials: "include",
//   });

//   if (!response.ok) {
//     // If the response status is not OK, check the status code to determine the appropriate error message
//     if (response.status === 401) {
//       // Unauthorized - Token invalid
//       throw new Error("Token invalid or expired");
//     } else {
//       // Other error status codes
//       throw new Error(`Failed to validate token: ${response.statusText}`);
//     }
//   }

//   // If the response status is OK, return the parsed JSON response
//   return response.json();
// };

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};



export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Error during sign out");
  }
};

