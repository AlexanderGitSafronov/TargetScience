import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Popover } from "@mui/material";
import classes from "./ModalFileField.module.scss";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useTranslation } from "react-i18next";
export const ModalFileField = ({ nameId, change, val }) => {
  const { t } = useTranslation();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [textColor, setTextColor] = useState("#E3331F");

  useEffect(() => {
    change(files);
  }, [files]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files).slice(
      0,
      10 - files.length
    );
    if (selectedFiles.length > 0) {
      simulateUpload(selectedFiles);
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    console.log(files.length);
    if (files.length === 1) {
      handleClose();
    }
  };

  const simulateUpload = (selectedFiles) => {
    setLoading(0);
    let progress = 0;

    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        setFiles((prev) => [...prev, ...selectedFiles]);
        setLoading(0);
      } else {
        progress += 10;
        setLoading(progress);
      }
    }, 100);

    if (!isAnimating) {
      setIsAnimating(true);
      setProgress(0);
      setOpacity(1);

      let currentProgress = 0;
      setTextColor("#fff");
      const interval = setInterval(() => {
        currentProgress += 10;
        setProgress(currentProgress);

        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setOpacity(0);

            setTimeout(() => {
              setIsAnimating(false);
              setProgress(0);
            }, 400);
            setTextColor("#E3331F");
          }, 200);
        }
      }, 100);
    }
  };
  useEffect(() => {
    if (loading > 0) {
      setIsComplete(true);
      console.log(isComplete);
    } else {
      setIsComplete(false);
    }
  }, [loading]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isPopoverOpen = Boolean(anchorEl);

  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{ color: "rgba(255, 255, 255, 0.7)", marginBottom: "8px" }}
      >
        {t("formSelect.firstText")}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "16px" }}
      >
        {t("formSelect.secondText")}
      </Typography>
      {files.length > 0 ? (
        <Button
          variant="outlined"
          className={classes.btn_file}
          sx={{
            marginTop: "10px",
            color: "#E3331F",
            border: "none",
            width: "263px",
            padding: "8px 16px",
            textTransform: "none",
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden",
            borderRadius: "0px",
          }}
          onClick={handleClick}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "#E3331F",
              opacity: opacity,
              transition: `width 0.1s linear, opacity 0.4s ease-out`,
              borderTopRightRadius: progress === 100 ? 0 : "8px",
              borderBottomRightRadius: progress === 100 ? 0 : "8px",
              zIndex: 1,
            }}
          />

          <Typography
            className={classes.btn_file}
            sx={{
              color: textColor,
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "10px",
              fontWeight: "600",
            }}
          >
            {loading > 0 ? (
              `${t("formSelect.load")} ${loading}%`
            ) : (
              <>
                {" "}
                {t("form.btnCountFiles", { filesLength: files.length })}{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1121_7107)">
                    <path
                      d="M10.0026 5.33379H14.3626C14.1298 4.71704 13.7683 4.15703 13.3019 3.69113L10.9793 1.36713C10.5128 0.901348 9.95266 0.540004 9.33594 0.307129V4.66713C9.33594 5.03529 9.63441 5.33379 10.0026 5.33379Z"
                      fill={textColor}
                    />
                    <path
                      d="M14.6533 6.66714H10.0026C8.89803 6.66714 8.00259 5.77171 8.00259 4.66714V0.0164883C7.89525 0.00914453 7.78794 0.000488281 7.67925 0.000488281H4.66925C2.82922 0.00270703 1.33813 1.4938 1.33594 3.33383V12.6672C1.33813 14.5072 2.82922 15.9983 4.66925 16.0005H11.3359C13.1759 15.9983 14.667 14.5072 14.6693 12.6671V6.99049C14.6693 6.88183 14.6606 6.77449 14.6533 6.66714Z"
                      fill={textColor}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1121_7107">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.00195312 0.000488281)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </>
            )}
          </Typography>
          <svg
            className={classes.tl}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 1H16.0029V0H0.500565V0.500015H1.90735e-06L0 16.0005H1L1 1Z"
              fill="#E3331F"
            />
          </svg>

          <svg
            className={classes.tr}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 1H16.0029V0H0.500565V0.500015H1.90735e-06L0 16.0005H1L1 1Z"
              fill="#E3331F"
            />
          </svg>

          <svg
            className={classes.bl}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 1H16.0029V0H0.500565V0.500015H1.90735e-06L0 16.0005H1L1 1Z"
              fill="#E3331F"
            />
          </svg>
          <svg
            className={classes.br}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 1H16.0029V0H0.500565V0.500015H1.90735e-06L0 16.0005H1L1 1Z"
              fill="#E3331F"
            />
          </svg>
        </Button>
      ) : (
        <>
          <input
            type="file"
            id="file-upload"
            style={{ display: "none" }}
            multiple
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <Button
              variant="outlined"
              component="span"
              className={classes.btn_file}
              sx={{
                marginTop: "10px",
                color: "#E3331F",
                border: "none",
                width: "263px",
                padding: "8px 16px",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: `${progress}%`,
                  backgroundColor: "#E3331F",
                  opacity: opacity,
                  transition: `width 0.1s linear, opacity 0.4s ease-out`,
                  borderTopRightRadius: progress === 100 ? 0 : "8px",
                  borderBottomRightRadius: progress === 100 ? 0 : "8px",
                  zIndex: 1,
                }}
              />
              <svg
                className={classes.tl}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 1H16.0029V0H0.500565V0.500015H1.90735e-06L0 16.0005H1L1 1Z"
                  fill="#E3331F"
                />
              </svg>

              <svg
                className={classes.tr}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 1H16.0029V0H0.500565V0.500015H1.90735e-06L0 16.0005H1L1 1Z"
                  fill="#E3331F"
                />
              </svg>

              <svg
                className={classes.bl}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 1H16.0029V0H0.500565V0.500015H1.90735e-06L0 16.0005H1L1 1Z"
                  fill="#E3331F"
                />
              </svg>
              <svg
                className={classes.br}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 1H16.0029V0H0.500565V0.500015H1.90735e-06L0 16.0005H1L1 1Z"
                  fill="#E3331F"
                />
              </svg>
              <Typography
                sx={{
                  color: textColor,
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: "10px",
                  fontWeight: "600",
                }}
              >
                {loading > 0 ? (
                  `${t("formSelect.load")} ${loading}%`
                ) : (
                  <>
                    {t("formSelect.upload")}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.90054 11.8005C7.0721 12.9721 8.9716 12.9721 10.1432 11.8005L10.1432 11.8005L12.2846 9.65914C12.6818 9.27546 12.6928 8.64239 12.3091 8.24514C11.9254 7.84789 11.2924 7.83689 10.8951 8.22058C10.8868 8.22861 10.8786 8.23683 10.8706 8.24514L9.01523 10.0998L8.99988 1.00049C8.99988 0.448207 8.55216 0.000488281 7.99988 0.000488281C7.4476 0.000488281 6.99988 0.448207 6.99988 1.00049L7.01388 10.0851L5.17323 8.24449C4.77598 7.8608 4.14291 7.8718 3.75923 8.26905C3.38495 8.65658 3.38495 9.27096 3.75923 9.65849L5.90054 11.8005Z"
                        fill="#E3331F"
                      />
                      <path
                        d="M15 9.66724C14.4477 9.66724 14 10.115 14 10.6672V13.7279C13.9996 13.8783 13.8778 14.0002 13.7273 14.0005H2.27266C2.12222 14.0002 2.00034 13.8783 2 13.7279V10.6672C2 10.115 1.55228 9.66724 1 9.66724C0.447719 9.66724 0 10.115 0 10.6672V13.7279C0.00146875 14.9825 1.01812 15.9991 2.27266 16.0006H13.7273C14.9819 15.9991 15.9985 14.9825 16 13.7279V10.6673C16 10.115 15.5523 9.66724 15 9.66724Z"
                        fill="#E3331F"
                      />
                    </svg>
                  </>
                )}
              </Typography>
            </Button>
          </label>
        </>
      )}

      <Popover
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            marginTop: "8px",
            padding: "10px",
            maxWidth: "265px",
            maxHeight: "165px",
            width: "100%",
            backgroundColor: "#333",
            color: "#fff",
            overflow: "visible",
            borderRadius: "20px",
            border: "1px solid rgba(235, 235, 235, 0.4)",
          },
        }}
      >
        <label htmlFor="add-more-files">
          <input
            type="file"
            id="add-more-files"
            style={{ display: "none" }}
            multiple
            onChange={handleFileChange}
          />
          <Button
            variant="outlined"
            component="span"
            sx={{
              color: "#E3331F",
              border: "none",
              padding: "0px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Добавить файлы <AddIcon />
          </Button>
        </label>
        <Box
          sx={{
            maxHeight: "100px",
            marginTop: "8px",
            display: "flex",
            flexDirection: "column",
            rowGap: "5px",
            overflowY: "auto",
            paddingRight: "8px",
          }}
        >
          {files.map((file, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  columnGap: "10px",
                  alignItems: "center",
                }}
              >
                {" "}
                <InsertDriveFileIcon />{" "}
                {file.name.length > 15
                  ? file.name.slice(0, 5) + "..." + file.name.slice(-10)
                  : file.name}{" "}
              </Typography>
              <Button
                size="small"
                onClick={() => handleRemoveFile(index)}
                sx={{
                  color: "#E3331F",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                <DeleteIcon />
              </Button>
            </Box>
          ))}
        </Box>
      </Popover>
    </Box>
  );
};
