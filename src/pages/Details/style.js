import styled from "styled-components";


export const ContainerDitails = styled.div`
    padding: 4rem 0;

    h1{
        margin: 1rem 0;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 300px;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.3);  
        transition: transform 0.3s ease 
    }

    img:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }

    button {
        background: #6654da;
        border: none;
        cursor: pointer;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.8)
    }

    button:hover {
        background: #5848c2;
    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
    }

    .release-date {
       opacity: 0.5; 
    }
`