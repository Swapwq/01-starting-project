import classes from './purchases.module.css';

export default function Purchases() {
    const classs = classes.container + ' ' + classes.bordergradientpurchases;
  return (
    <>
    <div className={classs}>
      <h1 className={classes.message}>Покупок не было!</h1>
    </div>
    </>
  );
}