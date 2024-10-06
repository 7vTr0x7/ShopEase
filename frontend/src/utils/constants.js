import toast from "react-hot-toast";

export const login = async (user) => {
  try {
    const res = await fetch(
      `https://shopease-backend.vercel.app/api/users/login/user`,
      {
        method: "POST",
        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
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
