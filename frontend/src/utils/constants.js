import { toast } from "react-hot-toast";

export const login = async () => {
  try {
    const res = await fetch(`http://localhost:4000/api/users/login/user`);
    if (!res.ok) {
      console.log("Failed");
      return;
    }

    const data = await res.json();
    toast.success(data.message);
  } catch (error) {
    console.log(`Failed to login ${error}`);
  }
};
