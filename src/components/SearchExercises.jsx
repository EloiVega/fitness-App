import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { HorizontalScrollbar } from './'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [allExercises, setAllExercises] = useState({});
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(()=>{
        const fetchExercisesData = async() => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=100', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData])
        }

        fetchExercisesData();
    },[])

    const getData = async (url, exerciseOptions) => {
        const exerciseData = await fetchData(url, exerciseOptions)
        return exerciseData;
    };

    const handleSearch = async() => {
        if(search){
            const url = `https://exercisedb.p.rapidapi.com/exercises?limit=1300`;
            let exercisesData = allExercises? allExercises: {};
            if (allExercises.length === 0) {
                exercisesData = await getData(url, exerciseOptions);
                setAllExercises(exercisesData);
            }
            
            const searchExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
                );
                setSearch('');
                setExercises(searchExercises);
                // console.log("exercisesData: ", exercisesData, "\nsearchExercises: ", searchExercises, "\nexercises: ", exercises);
        }

    }

  return (
    <Stack
        alignItems = "center"
        mt = "37px"
        justifyContent = "center"
        p = "20px"
    >
        <Typography
            fontWeight={700}
            sx = {{
                fontSize: { lg: '44px', xs: '30px'}
            }}
            mb = "50px"
            textAlign = "center"
        >
            Awesome Exercises You <br/>
            Should Know
        </Typography>
        
        <Box 
            position = "relative"
            mb = "72px"
        >
            <TextField
                value = {search}
                onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
                placeholder='Search Exercises'
                type = "text"
                height = "76px"
                sx = {{
                    input : {
                        fontWeight : '700',
                        border: 'none',
                        borderRadius: '4px'
                    },
                    width: { lg: '800px', xs: '300px'},
                    backgroundColor: '#FFF',
                    borderRadius: '40px'
                }}
            />

            <Button
                className = "search-btn"
                onClick = {handleSearch}
                sx = {{
                    backgroundColor: '#FF2625',
                    color: '#FFF',
                    textTransform: 'none',
                    width: { lg: '175px', xs: '80px' },
                    height: '56px',
                    fontSize: { lg: '20px', xs: '14px'},
                    position: 'absolute',
                    right: '0'
                }}
            >
                Search
            </Button>
        </Box>

        <Box
            sx = {{
                position:'relative',
                width: '100%',
                p: '20px'
            }}
        >
            <HorizontalScrollbar data = {bodyParts} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
        </Box>

    </Stack>
  )
}

export default SearchExercises