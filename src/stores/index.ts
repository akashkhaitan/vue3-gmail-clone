import { defineStore } from 'pinia'
import { useGetEmails } from '@/hooks/useGetEmails'

export const useMailStore = defineStore('mail', () => {
  const { emails } = useGetEmails()

  // const doubleCount = computed(() => count.value * 2)

  function markArchied() {
    emails.value = emails.value.map(email => {
      email.archived = true
      return email
    })
  }

  //actions
  const removeEmail = (id: number) => {
    emails.value = emails.value.filter(email => email.id !== id)
  }

  return { emails, markArchied, removeEmail }
})
