import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .aboutusContainer{
        display: flex;
        justify-content: space-between;
        width: 75vw;
        height: 75vh;
    }

    .left{
        width: 35vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 70px;

        span{
            color: grey;
        }
    }

    .right{
        width: 30vw;
        margin-top: 90px;

        p{
            margin-top: 30px;
            font-weight: 600;
        }
    }

    .apresentation{
        width: 75vw;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        span{
            color: grey;
            font-weight: 600;
        }
    }

    .cardContainer{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
    }

    .card{
        width: 35vw;
        height: 320px;
        display: flex;
        
        div{
            img{
                width: 150px;
                height: 150px;
                border-radius: 100%;
            }
        }
    }
`