const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export async function getTodos() {
  try {
    const response = await fetch("https://wedev-api.sky.pro/api/v2/todos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 401) throw new Error("Ты не авторизован");
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(error.message);
  }
}

export async function addTodos(text) {
  try {
    const response = await fetch("https://wedev-api.sky.pro/api/v2/todos", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ text }),
    });
    if (response.status === 401) throw new Error("Ты не авторизован");
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(error.message);
  }
}

export async function deleteTodos(id) {
  try {
    const response = await fetch(
      `https://wedev-api.sky.pro/api/v2/todos/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (response.status === 401) throw new Error("Ты не авторизован");
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(error.message);
  }
}
