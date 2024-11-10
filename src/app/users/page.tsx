"use client";

import { useState, useEffect } from "react";

interface User {
  id: number | string;
  name: string;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = "http://localhost:3000/users";
        const res = await fetch(url);
        const data: User[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      { users.length > 0 ? (
        users.map((item) => (
          <ul key={item.id}>
            <li> {item.name} - {item.email} </li>
          </ul>
        ))) 
        : ( <p>Loading users...</p> )
      }
    </div>
  );
};

export default Users;
