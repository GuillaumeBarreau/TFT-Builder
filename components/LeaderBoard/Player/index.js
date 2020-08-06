import style from './styled.module.css';
import PropTypes from 'prop-types';

export const Player = ({ dataPlayer }) => {

  return (
    <tr className="text-sm bg-gray-800 text-gray-300 p-5 hover:bg-gray-600 hover:text-gray-100 cursor-pointer font-bold">
      <td className="p-5">{dataPlayer.rank}</td>
      <td className="p-5">
        <div className="flex-shrink-0 w-10 h-10">
          <img className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80"
            alt="" />
        </div>
      </td>
      <td className="p-5"><p>{dataPlayer.summonerName}</p></td>
      <td className="p-5">{dataPlayer.leaguePoints}</td>
      <td className="p-5">{dataPlayer.wins}</td>
      <td className="p-5">{dataPlayer.losses}</td>
    </tr>
  )
};

Player.defaultProps = {
  dataPlayer: {
    avatar: "none"
  },
  rank: 0
};

Player.propTypes = {
  dataPlayer: PropTypes.shape({
    summonerId: PropTypes.string,
    rank: PropTypes.number,
    avatar: PropTypes.string,
    rank: PropTypes.number,
    summonerName: PropTypes.string,
    leaguePoints: PropTypes.number,
    wins: PropTypes.number,
    losses: PropTypes.number,
  }).isRequired
};