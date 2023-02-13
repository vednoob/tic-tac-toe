import classNames from 'classnames/bind';
import styles from './GameHeader.module.scss';

const cx = classNames.bind(styles);

function GameHeader() {
  return (
    <div className={cx('wrapper')}>
      <div>
        <h1>Tic Tac Toe Game Such</h1>
      </div>
      <div>
        <span>Player X</span>
        <span>Player 0</span>
      </div>
      <div>
        <span>Player X turn</span>
      </div>
    </div>
  );
}

export default GameHeader;
