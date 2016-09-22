import Types from './Types';

const doThing = thing => ({
  thing,
  type: Types.THING_DO,
});

export default {
  doThing,
};
