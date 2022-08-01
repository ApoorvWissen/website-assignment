import React, { useState , useEffect } from "react";
import Pagination from "./Pagination";

const Favourites = () => {
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
  
    const[curGen , setCurGen] = useState("All Genres");
    const[gen , setGen] = useState([]);
    const[search , setSearch] = useState('');
    const[rows , setRows] = useState(3);
    const[currPage , setCurrPage] = useState(1);
    const[fav , setFav] = useState([{
        "adult": false,
        "backdrop_path": "/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg",
        "id": 725201,
        "title": "The Gray Man",
        "original_language": "en",
        "original_title": "The Gray Man",
        "overview": "When a shadowy CIA agent uncovers damning agency secrets, he's hunted across the globe by a sociopathic rogue operative who's put a bounty on his head.",
        "poster_path": "/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
        "media_type": "movie",
        "genre_ids": [
        28,
        53
        ],
        "popularity": 1000.125,
        "release_date": "2022-07-13",
        "video": false,
        "vote_average": 7.002,
        "vote_count": 730
        },
        {
        "adult": false,
        "backdrop_path": "/698FjyzLdpgXmUSr63LaRwblTmx.jpg",
        "id": 507086,
        "title": "Jurassic World Dominion",
        "original_language": "en",
        "original_title": "Jurassic World Dominion",
        "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
        "poster_path": "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
        "media_type": "movie",
        "genre_ids": [
        12,
        28,
        878
        ],
        "popularity": 7974.814,
        "release_date": "2022-06-01",
        "video": false,
        "vote_average": 7.073,
        "vote_count": 2165
        },
        {
        "adult": false,
        "backdrop_path": "/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
        "id": 616037,
        "title": "Thor: Love and Thunder",
        "original_language": "en",
        "original_title": "Thor: Love and Thunder",
        "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
        "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
        "media_type": "movie",
        "genre_ids": [
        28,
        12,
        14
        ],
        "popularity": 17193.415,
        "release_date": "2022-07-06",
        "video": false,
        "vote_average": 6.696,
        "vote_count": 1390
        },
        {
        "adult": false,
        "backdrop_path": "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
        "id": 453395,
        "title": "Doctor Strange in the Multiverse of Madness",
        "original_language": "en",
        "original_title": "Doctor Strange in the Multiverse of Madness",
        "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
        "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
        "media_type": "movie",
        "genre_ids": [
        14,
        28,
        12
        ],
        "popularity": 3721.282,
        "release_date": "2022-05-04",
        "video": false,
        "vote_average": 7.513,
        "vote_count": 4861
        },
        {
        "adult": false,
        "backdrop_path": "/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
        "id": 756999,
        "title": "The Black Phone",
        "original_language": "en",
        "original_title": "The Black Phone",
        "overview": "Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
        "poster_path": "/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg",
        "media_type": "movie",
        "genre_ids": [
        27,
        53
        ],
        "popularity": 3929.773,
        "release_date": "2022-06-22",
        "video": false,
        "vote_average": 7.992,
        "vote_count": 1230
        },
        {
        "adult": false,
        "backdrop_path": "/nW5fUbldp1DYf2uQ3zJTUdachOu.jpg",
        "id": 718789,
        "title": "Lightyear",
        "original_language": "en",
        "original_title": "Lightyear",
        "overview": "Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.",
        "poster_path": "/ox4goZd956BxqJH6iLwhWPL9ct4.jpg",
        "media_type": "movie",
        "genre_ids": [
        16,
        878,
        12,
        28,
        10751
        ],
        "popularity": 4033.431,
        "release_date": "2022-06-15",
        "video": false,
        "vote_average": 7.336,
        "vote_count": 1056
        }]);


    useEffect(()=>{
        let newGenreArr =  fav.map((obj)=>genreids[obj.genre_ids[0]]);
        newGenreArr = new Set(newGenreArr);
        setGen(["All Genres",...newGenreArr]);
    } , [fav])

    const delMov = (movie)=>{
        let nArr = [];
        nArr = filteredMovies.filter((obj)=> obj.id!=movie.id);
        setFav([...nArr])
        alert(movie.title+" deleted")
       
    }

    let filteredMovies = [];

    filteredMovies = curGen == "All Genres" ? fav : 
    fav.filter((obj)=>{
        return genreids[obj.genre_ids[0]] == curGen
    })

    //search
    filteredMovies = filteredMovies.filter((movie)=>{
        let nTitle = movie.title.toLowerCase();
        return nTitle.includes(search.toLowerCase());
      })

    //rows
    let maxPage = Math.ceil(filteredMovies.length/rows);
    let si = (currPage-1)*rows;
    let ei = Number(si) + Number(rows);

    filteredMovies=filteredMovies.slice(si , ei);

    let goBack = ()=>{
        if(currPage > 1){
            setCurrPage(currPage-1);
        }   
    }

    let goAhead = ()=>{

        if(currPage < maxPage){
            setCurrPage(currPage+1)
        }else{
            alert("no more movies are present")
        }
    }

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <div className="flex justify-center flex-wrap space-x-3">
                {
                    gen.map((gen)=>(<button className={
                        curGen == gen ? "text-xl p-1 px-2 bg-blue-400 text-white rounded-xl font-bold m-2"
                        :"text-xl p-1 px-2 bg-gray-400 text-white rounded-xl font-bold m-2 hover:bg-blue-400"
                    } onClick={()=>setCurGen(gen)} >{gen}</button>))
                }
                
            </div>
            <div className="flex justify-center flex-wrap space-x-3">
                <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search movies" className="border border-3 p-3 outline-none focus:bg-gray-50 mt-4 placeholder::text-white-300" style={{padding:"1rem"}}/>
                <input placeholder="Enter rows"   style={{padding:"1rem" }} value={rows} onChange={(e)=>{if(e.target.value < 1) setRows(1); else setRows(e.target.value)}} type='number' className="border border-3 outline-none focus:bg-gray-50 mt-4 placeholder::text-white-300"/>
            </div>

            <div className='m-4'>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                <div className='flex'>
                                                    <img src="https://img.icons8.com/ios/24/000000/circled-up.png" className='mr-2 '/>
                                                    Rating
                                                    <img src="https://img.icons8.com/ios/24/000000/circled-down.png" className='mr-2 ' />
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                <div className='flex'>
                                                    <img src="https://img.icons8.com/ios/24/000000/circled-up.png" className='mr-2 '/>
                                                    Popularity
                                                    <img src="https://img.icons8.com/ios/24/000000/circled-down.png" className='mr-2 c' />
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Genre
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Remove
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredMovies.map((person) => (
                                            <tr key={person.title}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className=" flex justify-center flex-column items-center flex-shrink-0 h-50 w-100">
                                                            <img className="h-30 w-40 content-center" src={`https://image.tmdb.org/t/p/original${person.backdrop_path}`} alt="" />
                                                            <div className="text-md text-center mt-3 text-gray-900">{person.title}</div>
                                                        </div>

                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {/* <div className="text-sm text-gray-900">{person.title}</div> */}
                                                            {/* <div className="text-sm text-gray-500">{person.popularity}</div> */}
                                                        </td>

                                                    </div>
                                                </td>
                                                <td className="px-3 py-1 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{person.vote_average}</div>
                                                    {/* <div className="text-sm text-gray-500">{person.popularity}</div> */}
                                                </td>
                                                <td className="px-3 py-1 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{person.popularity}</div>
                                                </td>
                                                <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-500">{genreids[person.genre_ids[0]]}</td>
                                                <td className="px-3 py-1 whitespace-nowrap text-sm font-medium">
                                                    <a href="#" className="text-red-600 hover:text-red-900" onClick={() => delMov(person)}>
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-4 mb-2">

                <Pagination page={currPage} goAhead={goAhead} goBack={goBack} />

            </div>
        </div>
    )
}

export default Favourites;