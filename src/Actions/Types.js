const typesArray =
  [
    'GET_ALL_THINGS',
    'REQUEST_ALL_THINGS',
  ];

const Types = {};

//  make types object
for (const type of typesArray) {
  Types[type] = type;
}

export default Types;
