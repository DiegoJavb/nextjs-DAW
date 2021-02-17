import React from 'react';

const ArticleDetails = ({article}) => {
    if(!article){
        return 'cargando'
    }
    return (
        <div>
            {article.title
            }
        </div>
    );
};

export default ArticleDetails;

export async function getStaticProps(context) {
    console.log('context',context);
    const {articleId} = context.params 
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/${articleId}`)
    const data = await res.json();

    console.log('data',data);
    if(!data){
        return{
            notFount:true,
        }
    }

    return{
        props:{
            article:data
        }, // will be passed to the component as props
    }

}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { articleId:'1' } }, // See the "paths" section below
            { params: { articleId:'2' } },
            { params: { articleId:'3' } }
        ],
        fallback: true // See the "fallback" section below
    };
}