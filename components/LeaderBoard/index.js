import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { ListPlayers } from "./ListPlayers";
import { League } from "./League";
import style from './styled.module.css';
import fakeDataPlayers from './fakeDataPerson.json';

export const LeaderBoard = ({ dataListPlayers }) => {

  const [dataPlayersRange, setDataPlayersRange] = useState(0);
  const [range, setRange] = useState(100);
  const [filterDataPlayer, setFilterDataPlayer] = useState(null);

  const handleClickButtonNextRange = () => {
    setDataPlayersRange(dataPlayersRange + range)
  };

  const handleClickButtonPrevRange = () => {
    setDataPlayersRange(dataPlayersRange - range)
  };

  const handleChangeSelectRangeValue = (event) => {
    setDataPlayersRange(0);
    setFilterDataPlayer(null)
    setRange(parseInt(event.target.value));
  };

  const handleChangeSelectRankValue = (event) => {
    console.log("handleChangeSelectRankValue -> handleChangeSelectRankValue", handleChangeSelectRankValue)
  };

  const countPlayers = dataListPlayers.entries.length;

  const dataListPlayersRank = dataListPlayers.entries
    .sort((next, cur) => cur.leaguePoints - next.leaguePoints)
    .map((data, index) => {
      data.rank = index + 1
      return data
    })
    .slice(dataPlayersRange, dataPlayersRange + range);

  const handleChangeInputValue = (event, data) => {
    if (!event.target.value.toLowerCase()) {
      return setFilterDataPlayer(null)
    } 
    return setFilterDataPlayer([...data].filter(player => player ? player.summonerName.toLowerCase().includes(event.target.value.toLowerCase()) : null));
  };

  return (
    <div
      className={style.mainContent}
    >
      <div className={style.mainContent_ListPlayers}>
        <League
          dataLeague={dataListPlayers.tier}
        />
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="flex flex-row mb-1 sm:mb-0">
            <div className="relative">
              <select
                onChange={handleChangeSelectRangeValue}
                className="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>100</option>
                <option>200</option>
                <option>300</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-row mb-1 sm:mb-0">
            <div className="relative">
              <select
                onChange={handleChangeSelectRankValue}
                className="appearance-none h-full border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Challenger</option>
                <option>GrandMaster</option>
                <option>Master</option>
                <option>Diamond</option>
                <option>Platinum</option>
                <option>Gold</option>
                <option>Silver</option>
                <option>Bronze</option>
                <option>Iron</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="block relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                </path>
              </svg>
            </span>
            <input
              placeholder="Search"
              onChange={(event) => handleChangeInputValue(event, dataListPlayersRank)}
              className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
          </div>
        </div>
        <ListPlayers
          dataListPlayers={filterDataPlayer ? filterDataPlayer : dataListPlayersRank}
          onClickNextRange={(dataPlayersRange + range) >= countPlayers ? null : handleClickButtonNextRange}
          onClickPrevRange={(dataPlayersRange) <= 0 ? null : handleClickButtonPrevRange}
          countPlayers={countPlayers}
          dataPlayersRange={dataPlayersRange}
          range={(dataPlayersRange + range)}
        />
      </div>
    </div>
  )
};

LeaderBoard.defaultProps = {
  dataListPlayers: fakeDataPlayers
};

LeaderBoard.propTypes = {
  dataListPlayers: PropTypes.shape({
    entries: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};