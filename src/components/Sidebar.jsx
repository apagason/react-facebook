import React from 'react'
import SidebarRow from './SidebarRow'
import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { CalendarIcon, ClockIcon, ComputerDesktopIcon, UsersIcon } from '@heroicons/react/24/solid'

export default function Sidebar() {
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src="https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg"
                title="profile" />


            <SidebarRow Icon={ComputerDesktopIcon} title="Watch" />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}
