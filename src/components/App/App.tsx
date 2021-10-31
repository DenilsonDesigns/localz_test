import { useCallback, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { mortios } from "../../util/mortios";
import { FocusCard } from "../FocusCard/FocusCard";
import { MainList } from "../MainList/MainList";
import { DisplayError } from "../UI/DisplayError";
import { NavMain } from "../UI/NavMain";
import { SearchBox } from "../UI/SearchBox";
import { TablePagination } from "../UI/TablePagination";
import "./App.css";

export const App = (): JSX.Element => {
  const [error, setError] = useState("");
  const [rawData, setRawData] = useState<IMortiosDataObj[]>(
    [] as IMortiosDataObj[]
  );
  const [focusChar, setFocusChar] = useState<IMortiosDataObj>(
    {} as IMortiosDataObj
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [pageNum, setPageNum] = useState(1);
  const [numButs, setNumButs] = useState(0);
  const [searchBoxValue, setSearchBoxValue] = useState<string>("");

  const fetchDataByPageNum = useCallback(
    (pageNum: number, searchVal: string) => {
      setError("");
      mortios
        .get(`/character/?page=${pageNum}&status=alive&name=${searchVal}`)
        .then((res: IMortiosResponse) => {
          setRawData(res.data.results);
          setFocusChar(res.data.results[0]);
          setActiveIndex(0);
          setNumButs(res.data.info.pages);
          setPageNum(pageNum);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    },
    []
  );

  useEffect(() => {
    fetchDataByPageNum(1, searchBoxValue);
  }, [fetchDataByPageNum, searchBoxValue]);

  const handleListOnClick = (i: number) => {
    setActiveIndex(i);
    setFocusChar(rawData[i]);
  };

  const handlePaginOnClick = (i: number) => {
    fetchDataByPageNum(i, searchBoxValue);
    setPageNum(i);
  };

  const handleOnSearchChange = (val: string) => {
    console.log("calling ahndleonsearchacange", val);
    setSearchBoxValue(val);
    fetchDataByPageNum(1, val);
  };

  return (
    <div
      className="main"
      style={{ backgroundColor: "#fce5e5", minHeight: "100vh" }}
    >
      <NavMain title={"Szechuan.io"} textColour={"darkSalmon"} />
      <Container>
        <Row>
          <SearchBox
            value={searchBoxValue}
            onSearchChange={handleOnSearchChange}
          />
          {error ? (
            // api unfortunately gives 404 when its a valid request but zero results, hard
            // to deal with.
            <DisplayError errorMsg={error} />
          ) : (
            <>
              <Col style={{ paddingRight: "0" }}>
                <MainList
                  data={rawData}
                  listOnClick={handleListOnClick}
                  activeIndex={activeIndex}
                />
                <TablePagination
                  activeBut={pageNum}
                  numButs={numButs}
                  paginOnClick={handlePaginOnClick}
                />
              </Col>
              <Col style={{ paddingLeft: "0" }}>
                <FocusCard data={focusChar} />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default App;
