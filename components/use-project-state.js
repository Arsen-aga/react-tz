import { useEffect, useState } from "react";
import usersData from "../components/users-data.json";





export function useProjectState() {
    const [userActive, setUserActive] = useState(null);
    const [visibleUsers, setVisibleUsers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const usersPerPage = 50;

    useEffect(() => {
      loadMoreUsers();

      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100
        ) {
          loadMoreUsers();
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const loadMoreUsers = () => {
      const nextUsers = usersData.slice(
        currentIndex,
        currentIndex + usersPerPage
      );
      setVisibleUsers((prev) => [...prev, ...nextUsers]);
      setCurrentIndex((prev) => prev + usersPerPage);
    };

    const choiceUser = (index) => {
      setUserActive(index);
    };

    const changeUser = (index) => (userActive === index ? "violet" : null);

    return {
      visibleUsers,
      choiceUser,
      changeUser,
    };
}