import style from './styled.module.css';
import PropTypes from 'prop-types';
import { Player } from '../Player';
import { Button } from '../../communs/Button';

export const ListPlayers = ({ dataListPlayers, onClickNextRange, dataPlayersRange, onClickPrevRange, countPlayers, range }) => {

  return (
    <div>
      <table className={style.mainContent}>
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
        className="px-5 py-5 border-t flex flex-col xs:flex-row items-center xs:justify-between">
        <span className="text-xs xs:text-sm text-gray-100">
          Showing {dataPlayersRange + 1} to {range > countPlayers ? countPlayers : range} of {countPlayers} Entries.
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <Button
            disabled={!onClickPrevRange ? 'disabled' : null}
            onClick={onClickPrevRange}
          >
            Prev
          </Button>
          <Button
            disabled={!onClickNextRange ? 'disabled' : null}
            onClick={onClickNextRange}
          >
            Next
          </Button>
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


