import classNames from 'classnames/bind';
import styles from './BoardGame.module.scss';
import Square from '../Square';

const cx = classNames.bind(styles);

function BoardGame() {
  return (
    <div className={cx('boardgame')}>
      <div className={cx('row')}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={cx('row')}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={cx('row')}>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default BoardGame;
