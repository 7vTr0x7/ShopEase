import toast from "react-hot-toast";

export const login = async (user) => {
  try {
    const res = await fetch(`http://localhost:4000/api/users/login/user`, {
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      console.log("Failed");
      return;
    }

    const data = await res.json();
    if (data.message) {
      toast.success(data.message);
      return data;
    }
  } catch (error) {
    console.log(`Failed to login ${error}`);
  }
};
