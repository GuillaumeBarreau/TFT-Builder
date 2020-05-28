/* eslint-disable no-undef */
import { addChampion, moveChampion, deleteChampion, countChampion } from './champion.logic.js';

describe('Champions Logic functions', () => {

  let board;
  let target;
  let champions;
  let championSelect;

  beforeEach(() => {
    board =  [
      [{}, {}, {}],
      [{}, {}, {}],
      [{}, {}, {}]
    ], 
    target = { id: "case__0__1"}, 
    champions = [
      {
        championId: "blue"
      }, 
      {
        championId: "red"
      }, 
      {
        championId: "yellow"
      }, 
    ], 
    championSelect = "blue"
  });

  it('addChampion : Should render one Board with data to Equal have {expectedBoard}', () => {
    let expectedBoard = [
      [{}, { championId: "blue"}, {}],
      [{}, {}, {}],
      [{}, {}, {}]
    ];
    const newBoard = addChampion(board, target, champions, championSelect);
    expect(newBoard).toEqual(expectedBoard)
  });

  it('moveChampion : Should render one Board with data to Equal have {endBoard}', () => {

    let initBoard = [
      [{}, { championId: "blue"}, {}],
      [{}, {}, {}],
      [{}, {}, {}]
    ];

    let endBoard = [
      [{}, {}, { championId: "blue" }],
      [{}, {}, {}],
      [{}, {}, {}]
    ];
    
    const initPosition = "case__0__1"
    const endPosition = "case__0__2" 

    const newBoard = moveChampion(initBoard, initPosition, endPosition );
    expect(newBoard).toEqual(endBoard)
  });

  it('deleteChampion : Should render one Board with data to Equal have {board}', () => {
    let initBoard = [
      [{}, { championId: "blue" }, {}],
      [{}, {}, {}],
      [{}, {}, {}]
    ];
    const newBoard = deleteChampion(initBoard, target.id);
    expect(newBoard).toEqual(board)
  });

  it('countChampion : Should count a number data into {initBoard}', () => {
    let initBoard = [
      [{}, { championId: "blue" }, { championId: "red" }],
      [{}, {}, {}],
      [{}, {}, {}]
    ];
    const newBoard = countChampion(initBoard);
    expect(newBoard).toEqual(2)
  });

});
