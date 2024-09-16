import React from 'react'
import { Badge } from '..'

const Announcement = () => {
    return (
        <div className='flex w-full bg-blue-700 text-white p-2'>
            <a className="flex w-full justify-center items-center gap-4" href="https://docs-percept-ui.vercel.app/docs/getting-started">
                🎉 Percept UI is released. Read more →
                <span>
                    <Badge variant="soft" color="orange" size="xs">Beta</Badge>
                </span>
            </a>
        </div>
    )
}

export default Announcement
