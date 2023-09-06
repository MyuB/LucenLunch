import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
  const [lunchData, setLunchData] = useState();
  const [parsedLunchData, setParsedLunchData] = useState({
    korean: undefined,
    ilpoom: undefined,
    sides: undefined,
  });

  const fetchLunchData = () => {
    axios
      .get(
        "https://front.cjfreshmeal.co.kr/meal/v1/today-all-meal?storeIdx=5923"
      )
      .then(({ data }) => {
        setLunchData(data.data[2]);
      });
  };

  useEffect(() => {
    if (lunchData) {
      setParsedLunchData({
        korean: lunchData[0].name + lunchData[0].side,
        ilpoom: lunchData[1].name + lunchData[1].side,
        sides: lunchData[2].name + lunchData[2].side,
      });
    }
  }, [lunchData]);

  return (
    <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      <Typography component="h4" variant="h4" color="text.primary">
        {"간단한 루첸 점심"}
      </Typography>
      {parsedLunchData && (
        <>
          <Card>
            <CardHeader
              title={"한식"}
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
              }}
              gutterBottom
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                  mb: 2,
                }}
              >
                <Typography component="h5" variant="h5" color="text.primary">
                  {parsedLunchData.korean}
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardHeader
              title={"일품"}
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
              }}
              gutterBottom
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                  mb: 2,
                }}
              >
                <Typography component="h5" variant="h5" color="text.primary">
                  {parsedLunchData.ilpoom}
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardHeader
              title={"사이드메뉴"}
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
              }}
              gutterBottom
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                  mb: 2,
                }}
              >
                <Typography component="h5" variant="h5" color="text.primary">
                  {parsedLunchData.sides}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </>
      )}
      <Button
        onClick={fetchLunchData}
        variant="outlined"
        sx={{ my: 2, mx: 2.5 }}
        justifyContent="center"
      >
        Seek Menu
      </Button>
    </Container>
  );
}

export default Home;
