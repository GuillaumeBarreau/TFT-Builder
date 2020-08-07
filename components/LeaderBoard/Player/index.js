import style from './styled.module.css';
import PropTypes from 'prop-types';

export const Player = ({ dataPlayer }) => {

  return (
    <tr className={style.mainContent}>
      <td className={style.mainContent_item}>{dataPlayer.rank}</td>
      <td className={style.mainContent_item}>
        <img className={style.mainContent_item_image}
          src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80"
          alt="" />
      </td>
      <td className={style.mainContent_item}><p>{dataPlayer.summonerName}</p></td>
      <td className={style.mainContent_item}>{dataPlayer.leaguePoints}</td>
      <td className={style.mainContent_item}>{dataPlayer.wins}</td>
      <td className={style.mainContent_item}>{dataPlayer.losses}</td>
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