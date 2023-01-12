import { useEffect, useState } from 'react'
import {
  collection as getCollection,
  DocumentData,
  onSnapshot,
} from '@firebase/firestore'
import { db } from '../services/firebase'

interface UseGetDocsProps {
  collectionName: string
}

export function useGetDocs({ collectionName }: UseGetDocsProps) {
  const [documents, setDocuments] = useState<DocumentData[]>([])
  const collection = getCollection(db, collectionName)
  useEffect(() => {
    const getDocs = onSnapshot(collection, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setDocuments(data)
    })

    return () => {
      getDocs()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    documents,
  }
}
