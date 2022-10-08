
import ContactIndex from '@/views/contacts/Index'
import RecentIndex from '@/views/recents/Index'
import TrashedIndex from '@/views/trashed/Index'

export default [
  {
    name: 'Contacts',
    path: '/contacts',
    component: ContactIndex,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'Recent',
    path: '/recent',
    component: RecentIndex,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'Trashed',
    path: '/trashed',
    component: TrashedIndex,
    meta: {
      requiresAuth: true
    }
  }
]
