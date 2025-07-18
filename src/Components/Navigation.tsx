import React, { type FC } from 'react'

const Navigation: FC = () => {
  return (
    <div className="navbar bg-primary text-primary-content p-4">
  <div className="flex-1 align-left">
    <a className=" text-xl text-base-100 logo" href="/">
        <h1>nom²</h1>
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li><a>Link</a></li>
    </ul>
  </div>
</div>
  )
}

export default Navigation