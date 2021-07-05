import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';
import dbConnect from '@utils/mongodb';
import sample from '@models/grade';

import { GetServerSideProps } from 'next'

export default function Home({ result }) {
  return (
    <>
      <div>
        None
        Thing?
        { console.log(result) /*test sample output */} 
      </div>
    </>
  )
}


export const getServerSideProps: GetServerSideProps =  async (context) => {

  const conn = await dbConnect()

  //sample data

  const result = await sample.findOne({}).lean()
  result._id = result._id.toString()

  //console.log(result)

  return { 
    props: { 
      result : result
    } 
  }
}