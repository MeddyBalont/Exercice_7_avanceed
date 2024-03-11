import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useEffect, useEffect } from 'react'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(2, 1fr);
    width: fit-content;
    margin: auto;
    text-align: center;
    justify-items: center;
    align-items: center;
`
const PageTitle = styled.h1`
    font-size: 30px;
    color: black;
    text-align: center;
    padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
`

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },
]

function Freelances() {
    useEffect(() => {
        async function fetchFreelances() {
            try {
                const response = await fetch(`http://localhost:8000/survey`)
            } catch {
            } finally {
            }
        }
        fetchFreelances()
    }, [])
    if (error) {
        return <span>Oups il y a un problème</span>
    }

    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances
