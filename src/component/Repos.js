import React from 'react'



export default function Repos({ repos }) {

    //      {/* {Object.keys(repos[i].owner).filter( (ele, ind) => ind === Object.keys(repos[i].owner).findIndex( elem => elem.jobid === ele.jobid && elem.id === ele.id))
    //    .map(w => {   return  */}

    return (
        <div>
            <h1 className="text-4xl p-10">Trending Repos</h1>

            {
                Object.keys(repos).map(i => {

                    return <div className="flex flex-col sm:flex-row w-11/12 md:w-4/5 border bg-white h-96 sm:h-60 items-center justify-between p-4 sm:p-10 m-auto mb-10">

                        <img src={repos[i].owner.avatar_url} alt="avatar" className="w-2/6 sm:w-1/5 h-11/12 mr-auto mb-4 sm:mb-0" />

                        <div className="w-full sm:w-4/6 text-left">
                            <h2 className="text-3xl mb-2">{repos[i].name}</h2>
                            <p>{repos[i].description} </p>
                            <div className="mt-3 flex flex-row flex-wrap items-center">
                                <span className="border p-3 rounded-lg mr-3">Stars: {repos[i].stargazers_count}</span>
                                <span className="border p-3 rounded-lg mr-5">Issues: {repos[i].open_issues}</span>
                                <p>Submitted 30 days ago by <strong>{repos[i].owner.login}</strong></p>
                            </div>
                        </div>

                    </div>

                })
            }
        </div>
    )
}
