import dice from './dice.module.css';

function Dice(props) {
  return (
    <section>
      <main className={dice.grid}>
        <div className={dice.cube}>
          <p className={dice.value}>{props.value}</p>
        </div>
      </main>
    </section>
  );
}
export default Dice;
