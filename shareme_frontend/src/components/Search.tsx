import { useState, useEffect } from 'react'
import MasonryLayout from './MasonryLayout'
import { client } from '../client'
import { feedQuery, searchQuery } from '../utils/data'
import Spinner from './Spinner'

const Search = (props: { searchTerm: string, setSearchTerm: Function }) => {
    const [pins, setPins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.searchTerm) {
            const searchTerm = props.searchTerm as string;
            setLoading(true);
            const query = searchQuery(searchTerm.toLocaleLowerCase())
            client.fetch(query)
            .then((data) => {
                setPins(data);
                setLoading(false);
            })
        }
        else {
            client.fetch(feedQuery)
                .then((data) => {
                    setPins(data);
                    setLoading(false);
                })
        }
    }, [props.searchTerm])

    return (
        <div>
            {loading && <Spinner message='Searching for pins' />}
            {pins?.length > 0 && <MasonryLayout pins={pins} />}
            {pins?.length === 0 && props.searchTerm !== "" && !loading && (
                <div className='mt-10 text-center text-xl'>
                    No Pins Found !
                </div>
            )}
        </div>
    )
}

export default Search