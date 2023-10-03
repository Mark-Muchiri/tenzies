import dice from './dice.module.css';

function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#707070"
  };
  return (
    <section>
      <main className={dice.grid}>
        <div
          onClick={props.toggle}
          className={dice.cube}
          style={styles}
        >
          <p className={dice.value}>
            {props.value}
          </p>
        </div>
      </main>
    </section>
  );
}
export default Dice;
