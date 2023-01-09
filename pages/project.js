import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navbar from "../Components/Navbar";

const Page = ({ project }) => {
  console.log(project);
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
         <Navbar  />
         <Heading>Projects</Heading>
   
     {project.map((e) => 
        <div key={e.id} style={{border:"1px solid" ,display:"flex",gap:"27px" ,padding:"10px"}}>
          <div>
            <a href={e.html_url}><b>{e.name} --Click here</b></a>
            <div>{e.description?e.description:""}</div>
            <div>
              
          <div>Stars Count:- {e.stargazers_count}</div>
          <div>ForkCount:- {e.forks}</div>
   
            </div>

          </div>
          

          <div>language:- {e.language}</div>
        </div>
      )}

      
    </div>
  );
};



//GET https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories

export async function getServerSideProps() {
  let res = await fetch(
    `https://api.github.com/search/repositories?q=user:ankitraju123+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await res.json();

  return {
    props: {
      project: data.items,
    },
  };
}

export default Page;
