import FetchFilmsApi from "./fetch-service/fechFilmsApi";
import { onKeywordSearch } from "./main/searchMovies";
import { onCreat, creatCards } from './main/renderMainMarkup';
import { onButtonScrolUp } from './main/buttonScrolUp'; 
import { onClickChangeColor } from "./main/changeColor";

onButtonScrolUp();
onCreat()
