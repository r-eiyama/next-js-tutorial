import Layout from '../../components/layout'
import React from "react";
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

/**
 * 記事を生成するメソッド.
 *
 * @param postData
 * @constructor
 */
export default function Post({ postData }: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return(
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

/**
 * パスを生成するメソッド.
 */
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

/**
 * postに渡すデータの静的生成.
 *
 * @param params
 */
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData
        }
    }
}