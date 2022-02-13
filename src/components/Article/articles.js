import { useEffect} from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArticlesError,
  selectArticlesList,
  selectArticlesLoading,
} from "../../store/articles/selectors";
import { getArticles } from "../../store/articles/actions";

export const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticlesList);
  const isLoading = useSelector(selectArticlesLoading);
  const error = useSelector(selectArticlesError);

  const requestArticles = async () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    requestArticles();
  }, []);

  return (
    <>
      {isLoading ? (<CircularProgress />) : (
        <>
          {!!error && <h4>ERROR: {error}</h4>}
          <ul>
            <p key={articles.key}>{articles.activity}</p>
            <p>Price:{articles.price}</p>
            <a href={articles.link}>{articles.link}</a>
            <button onClick={requestArticles}>Запрос</button>
          </ul>
        </>
      )}
    </>
  );
};
