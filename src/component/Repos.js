import React from 'react'
// import { useState } from 'react';

export default function Repos({ repos }) {
  

    return (
        <div>
            <h1 className="text-4xl p-10">Trending Repos</h1>

  {
   repos.map(repo => { 
   return <div className="flex flex-col sm:flex-row w-11/12 md:w-4/5 border bg-white h-96 sm:h-60 items-center justify-between p-4 sm:p-10 m-auto mb-10">

           {
               
           Object.keys(repo.owner).filter( (ele, ind) => ind === Object.keys(repo.owner).findIndex( elem => elem.jobid === ele.jobid && elem.id === ele.id))
           .map(i => { 
           return <img src={repo.owner.avatar_url} alt="" className="w-2/6 sm:w-1/5 h-11/12 mr-auto mb-4 sm:mb-0"/>})
           
            } 

                            <div className="w-full sm:w-4/6 text-left">
                                <h2 className="text-3xl mb-2">{repo.name}</h2>
                                <p>{repo.description} </p>
                                <div className="mt-3 flex flex-row flex-wrap items-center">
                                    <span className="border p-3 rounded-lg mr-3">Stars: {repo.stargazers_count}</span>
                                    <span className="border p-3 rounded-lg mr-5">Issues: {repo.open_issues}</span>
                                    <p>Submitted 30 days ago by <strong>{repo.name}</strong></p>
                                </div>
                            </div>
                                            
                        </div>
   
      } )
}
</div>
    )
}
