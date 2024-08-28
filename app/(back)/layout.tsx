import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <h2> I am Dash Only Page</h2>
        {children}
    </div>
  );
}
