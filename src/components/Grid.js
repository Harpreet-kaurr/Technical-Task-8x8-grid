import React, { useEffect } from 'react'
import './Grid.css';
import $ from 'jquery'

const Grid = () => {


  let box = [];
  for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
      if((i+j)%2 === 0)
        box.push(<div className='chess-box chess-board-black-box'></div>)
      else
        box.push(<div className='chess-box chess-board-white-box'></div>)
    }
  }

  useEffect(()=>{
    $('.chess-box').on('click',function(){
      $('.chess-box').removeClass("chess-board-onclick");
      $(this).addClass("chess-board-onclick");
    })

  },[])

  return (
    <>
      <div className='chess-board-conatiner'>
        <h3>8 X 8 GRID</h3>
        <div className='chess-board'>{box}</div>
      </div>
    </>
  )
}

export default Grid

