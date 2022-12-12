import request from "./request";

export async function loginAPI({ email, password }) {
  try {
    const res = await request({
      path: "auth/login",
      method: "POST",
      data: {
        email,
        password,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
    return null;
  }
}
