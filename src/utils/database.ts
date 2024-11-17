// src/utils/database.ts
export const getUserFromDb = async (userId: string) => {
    // Mock data giả lập
    const mockUsers = [
      { id: "1", name: "Alice", email: "alice@example.com" },
      { id: "2", name: "Bob", email: "bob@example.com" },
    ];
  
    // Tìm user theo id
    const user = mockUsers.find((u) => u.id === userId);
  
    // Trả về Promise giả lập để mô phỏng hành vi async của backend
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error("User not found"));
        }
      }, 500); // Giả lập thời gian chờ 500ms
    });
  };
  