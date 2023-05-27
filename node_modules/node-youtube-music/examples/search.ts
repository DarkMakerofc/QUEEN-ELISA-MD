import { searchMusics } from '../src';

const main = () => searchMusics('DJOKO');

main().then((results) => console.log(results));
