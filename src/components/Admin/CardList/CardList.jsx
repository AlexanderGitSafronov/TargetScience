import React, { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import classes from "./CardList.module.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const CardList = ({
  data,
  deleteTask,
  onUpdateCard,
  figures,
  currencies,
}) => {
  const [page, setPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1325) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 668 && window.innerWidth < 1325) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 668) {
        setItemsPerPage(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    if (data.length === 0) {
      setPage(1);
    } else if (page > totalPages) {
      setPage(totalPages);
    }
  }, [data, itemsPerPage]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__list}>
        {data.length
          ? currentPageData.map((card) => {
              return (
                <Card
                  currencies={currencies}
                  tags={card.tags}
                  figures={figures}
                  onUpdateCard={onUpdateCard}
                  deleteTask={deleteTask}
                  key={card.id}
                  figure={card.figure}
                  id={card.id}
                  titleE={card.title}
                  descriptionN={card.description}
                />
              );
            })
          : "Список карточек пуст"}
      </div>
      <div>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#ccc",
              },
              "& .Mui-selected": {
                backgroundColor: "#ab2c1e",
                color: "white",
              },
            }}
          />
        </Stack>
      </div>
    </div>
  );
};
