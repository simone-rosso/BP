import { useEffect, useState } from 'react';
import axios from 'axios';
import EnvConfig from '../env_config';

export const useFetchData = (endpoint: string, token: string, query: string = "", tableHeader: string = "") => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {

    setLoading(true)
    setError(null)

    axios
      .get('http://dev-services.bluephage.com/api/v1/' + endpoint + query, { headers: { Authorization: token, TableHeader: tableHeader } })
      .then(res => {
        setLoading(false)
        if (res.data) {
          setItems(res.data)
        } else {
          setItems([])
        }
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])
  return { items, loading, error }
}