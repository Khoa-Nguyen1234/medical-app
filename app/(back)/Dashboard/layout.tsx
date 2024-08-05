import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <h2>I am Dashboard only page layout</h2>
        {children}
    </div>
  );
}
