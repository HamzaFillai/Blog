import React from 'react'
import { useParams } from 'react-router'
import "../../style/BlogPage.css"

export default function BlogPage() {
    let  blogname  = useParams();

    return (
        <div className="blogpage">
            <h1>{blogname.blog}</h1>
            
            <div className="quote"/>
            <div className="reading">
                <h2>Creative Reading</h2>
                <p>
                    Since the reader cannot comprise a whole essay or document in his/her mind, it is necessary for the writing to be divided into certain fragments. So the paragraphs should not be too long, and should give a clear idea of what the writer is trying to say. In order to allow creative reading of one’s work, the writer should produce his work in such a way that the reader can make assumptions and inferences regarding the nature of the things the author wants to describe/explain/comment, etc. The fact that creative readers make creative writers is logical and commonly-shared by everyone. So those who want to produce good-quality writings must be able to read well. That doesn’t mean one has to read really fast, or to be able to understand writings, but one needs to have a creative perspective on his/her reading.
                </p>
            </div>
            hhh
        </div>
    )
}
