import React from 'react'
import Head from 'next/head'

const Desktop1 = (props) => {
  return (
    <>
      <div className="desktop1-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="desktop1-desktop1">
          <img
            alt="Rectangle142"
            src="/playground_assets/rectangle142-grmr-300h.png"
            className="desktop1-rectangle1"
          />
        </div>
        <span>Text</span>
      </div>
      <style jsx>
        {`
          .desktop1-container {
            min-height: 100vh;
          }
          .desktop1-desktop1 {
            width: 100%;
            height: 1024px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            background-color: rgba(255, 255, 255, 1);
          }
          .desktop1-rectangle1 {
            top: 177px;
            left: 353px;
            width: 735px;
            height: 247px;
            position: absolute;
            border-color: transparent;
            border-radius: 8px;
          }
        `}
      </style>
    </>
  )
}

export default Desktop1
