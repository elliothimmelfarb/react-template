const typesArray =
  [
    'THING_DO',
  ];

const Types = {};

//  make types object
for (const type of typesArray) {
  Types[type] = type;
}

export default Types;
