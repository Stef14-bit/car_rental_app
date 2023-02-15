import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useQuery = (table, columns) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const supabase = useSupabaseClient();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await supabase.from(table).select(columns);
        setData(response.data);
      } catch (error) {
        console.error(error, `Error loading data from ${table}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [table, columns, supabase]);

  return { data, loading };
};

export default useQuery;
