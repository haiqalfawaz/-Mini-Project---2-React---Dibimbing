import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ListUsers from "../../Components/ListUsers/ListUsers";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    per_page: null,
    total: null,
    total_pages: null,
  });

  const getListUsers = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${pagination.currentPage}&per_page=${pagination.per_page}`
      );
      setUsers(response.data.data);
      console.log(response);
      setPagination({
        currentPage: response.data.page,
        per_page: response.data.per_page,
        total: response.data.total,
        total_pages: response.data.total_pages,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.total_pages) {
      setPagination((prevState) => ({
        ...prevState,
        currentPage: prevState.currentPage + 1,
      }));
    }
  };

  const handlePreviousPage = () => {
    if (pagination.currentPage > 1) {
      setPagination((prevState) => ({
        ...prevState,
        currentPage: prevState.currentPage - 1,
      }));
    }
  };

  useEffect(() => {
    getListUsers();
  }, [pagination.currentPage, pagination.per_page]);

  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <ListUsers
        users={users}
        nextPage={handleNextPage}
        prevPage={handlePreviousPage}
        pagination={pagination}
      />
    </div>
  );
};

export default HomePage;
