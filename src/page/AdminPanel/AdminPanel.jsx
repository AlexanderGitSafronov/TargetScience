import React, { useState, useEffect, createContext, useMemo } from "react";
import { AddNewCard } from "../../components/Admin/AddNewCard/AddNewCard";
import { Notifications } from "../../components/Admin/Notifications/Notifications";
import { CardList } from "../../components/Admin/CardList/CardList";
import classes from "./AdminPanel.module.scss";
import { useNotification } from "../../components/hooks/useNotification";
import CircularProgress from "@mui/material/CircularProgress";

import img1 from "../../assets/figure/notActive/1.png";
import img2 from "../../assets/figure/notActive/2.png";
import img3 from "../../assets/figure/notActive/3.png";
import img4 from "../../assets/figure/notActive/4.png";
import img5 from "../../assets/figure/notActive/5.png";
import img6 from "../../assets/figure/notActive/6.png";
import img7 from "../../assets/figure/notActive/7.png";
import img8 from "../../assets/figure/notActive/8.png";
import img9 from "../../assets/figure/notActive/9.png";
import img10 from "../../assets/figure/notActive/10.png";
import img11 from "../../assets/figure/notActive/11.png";
import img12 from "../../assets/figure/notActive/12.png";
import img13 from "../../assets/figure/notActive/13.png";
import img14 from "../../assets/figure/notActive/14.png";
import img15 from "../../assets/figure/notActive/15.png";
import img16 from "../../assets/figure/notActive/16.png";
import img17 from "../../assets/figure/notActive/17.png";
import img18 from "../../assets/figure/notActive/18.png";
import img19 from "../../assets/figure/notActive/19.png";
import img20 from "../../assets/figure/notActive/20.png";

import { Search } from "../../components/Admin/Search/Search";

export const NotyfyContext = createContext(null);

export const AdminPanel = () => {
  const currencies = [
    {
      value: "figure-1",
      label: (
        <>
          <img src={img1} alt="circle" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-2",
      label: (
        <>
          <img src={img2} alt="square" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-3",
      label: (
        <>
          <img src={img3} alt="sieve" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-4",
      label: (
        <>
          <img src={img4} alt="round" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-5",
      label: (
        <>
          <img src={img5} alt="round-2" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-6",
      label: (
        <>
          <img src={img6} alt="round-3" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-7",
      label: (
        <>
          <img src={img7} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-8",
      label: (
        <>
          <img src={img8} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-9",
      label: (
        <>
          <img src={img9} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-10",
      label: (
        <>
          <img src={img10} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-11",
      label: (
        <>
          <img src={img11} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-12",
      label: (
        <>
          <img src={img12} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-13",
      label: (
        <>
          <img src={img13} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-14",
      label: (
        <>
          <img src={img14} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-15",
      label: (
        <>
          <img src={img15} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-16",
      label: (
        <>
          <img src={img16} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-17",
      label: (
        <>
          <img src={img17} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-18",
      label: (
        <>
          <img src={img18} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-19",
      label: (
        <>
          <img src={img19} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
    {
      value: "figure-20",
      label: (
        <>
          <img src={img20} alt="spiral" style={{ width: 40, marginRight: 8 }} />
        </>
      ),
    },
  ];

  const figures = {
    "figure-1": img1,
    "figure-2": img2,
    "figure-3": img3,
    "figure-4": img4,
    "figure-5": img5,
    "figure-6": img6,
    "figure-7": img7,
    "figure-8": img8,
    "figure-9": img9,
    "figure-10": img10,
    "figure-11": img11,
    "figure-12": img12,
    "figure-13": img13,
    "figure-14": img14,
    "figure-15": img15,
    "figure-16": img16,
    "figure-17": img17,
    "figure-18": img18,
    "figure-19": img19,
    "figure-20": img20,
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://nodeserver-production-f98a.up.railway.app/"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result.cards);
        setActualList(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { notifications, showNotification, removeNotifications } =
    useNotification();

  const [activeBtn, setActiveBtn] = useState("usp");
  const [actualList, setActualList] = useState([]);
  const addCard = async (newCard) => {
    try {
      const response = await fetch(
        "https://nodeserver-production-f98a.up.railway.app/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCard),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to create: ${response.statusText}`);
      }

      const result = await response.json();

      setActualList((prev) => {
        return [...prev, newCard];
      });

      showNotification({
        text: "Карточка добавлена!",
        time: 2000,
        type: "success",
      });
    } catch (error) {
      console.error("Error creating object:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(
        `https://nodeserver-production-f98a.up.railway.app/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to delete resource. Status: ${response.status}`
        );
      }
      setActualList((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting resource:", error.message);
    }
  };

  function choiseActiveBtn(site) {
    setActiveBtn((prev) => {
      return (prev = site);
    });
  }

  const onUpdateCard = async (data) => {
    try {
      const response = await fetch(
        `https://nodeserver-production-f98a.up.railway.app/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to delete resource. Status: ${response.status}`
        );
      }

      setActualList((prev) =>
        prev.map((card) => (card.id === data.id ? { ...data } : card))
      );
    } catch (error) {
      console.error("Error deleting resource:", error.message);
    }
  };

  const [searchGlobal, setSearchGlobal] = useState("");

  const searchCard = useMemo(() => {
    if (searchGlobal) {
      const lowerSearch = searchGlobal.toLocaleLowerCase();
      return [...actualList].filter((task) => {
        return (
          task.title.ru.toLocaleLowerCase().includes(lowerSearch) ||
          task.description.ru.toLocaleLowerCase().includes(lowerSearch)
        );
      });
    }
    return actualList;
  }, [actualList, searchGlobal]);

  return (
    <NotyfyContext.Provider
      value={{ notifications, showNotification, removeNotifications }}
    >
      <Notifications notifications={notifications} />
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.aside__bar}>
            <div className={classes.aside__bar_usp}>
              <button
                onClick={() => choiseActiveBtn("usp")}
                className={`${classes.btn}  ${
                  activeBtn === "usp" ? classes.active : ""
                }`}
              >
                USP SITE
              </button>
            </div>
          </div>
          <div className={classes.main__content}>
            <div className={classes.main__content_top}>
              <AddNewCard currencies={currencies} addCard={addCard} />
              <Search setSearchGlobal={setSearchGlobal} />
            </div>

            <div className={classes.main__content_card}>
              {loading ? (
                <div className={classes.main__content_progress}>
                  <CircularProgress />
                </div>
              ) : (
                <CardList
                  currencies={currencies}
                  figures={figures}
                  onUpdateCard={onUpdateCard}
                  deleteTask={deleteTask}
                  data={searchCard}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </NotyfyContext.Provider>
  );
};
