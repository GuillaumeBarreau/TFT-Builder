import style from './styled.module.css';
import PropTypes from 'prop-types';
import { Player } from '../Player';

export const ListPlayers = ({ dataListPlayers, onClickNextRange, dataPlayersRange, onClickPrevRange, countPlayers, range }) => {

  return (
    <div>
      <table className={`min-w-full leading-normal ${style.mainContent}`}>
        <thead>
          <tr className="bg-gray-700 text-gray-300 border-gray-800 uppercase text-left text-xs font-semibold tracking-wider">
            <th className="px-5 py-3">rank</th>
            <th className="px-5 py-3">avatar</th>
            <th className="px-5 py-3">summoner-Name</th>
            <th className="px-5 py-3">league-Points</th>
            <th className="px-5 py-3">wins</th>
            <th className="px-5 py-3">losses</th>
          </tr>
        </thead>
        <tbody>
          {
            dataListPlayers
              .map(dataPlayer => {
                return (
                  <Player
                    key={dataPlayer.summonerId}
                    dataPlayer={dataPlayer}
                  />
                )
              })
          }
        </tbody>
      </table>
      <div
        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
        <span className="text-xs xs:text-sm text-gray-900">
          Showing {dataPlayersRange + 1} to {range > countPlayers ? countPlayers : range} of {countPlayers} Entries.
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={onClickPrevRange}
            className={`text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4${!onClickPrevRange ? ' opacity-50 cursor-not-allowed' : ''} `}>
            Prev
          </button>
          <button
            onClick={onClickNextRange}
            className={`button text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4${!onClickNextRange ? ' opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
};

ListPlayers.defaultProps = {
  dataListPlayers: [],
  onClickNextRange: null,
  dataPlayersRange: 0,
  countPlayers: 0,
  range: 0
};

ListPlayers.propTypes = {
  dataListPlayers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickNextRange: PropTypes.func,
  onClickPrevRange: PropTypes.func,
  countPlayers: PropTypes.number,
  dataPlayersRange: PropTypes.number,
  range: PropTypes.number
};


