import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  VStack,
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  FormControl,
  FormLabel,
  FormHelperText
} from '@chakra-ui/react';
import TextEditorToolbar from '@fixtures/textEditorToolbars';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../styles/textEditor.css';
import imageFormats from '@fixtures/imageFormats';

const News = () => {
  const [textArea, setTextArea] = useState('');
  const [newsState, setNewsState] = useState({
    title: '',
    imageName: '',
    imageUrl: '',
    imageType: ''
  });
  const [errors, setErrors] = useState({
    title: false,
    textArea: false,
    image: false
  });

  const handleAddPicture = (event) => {
    let img, imageName, imageUrl, imageType;
    if (event.target.files && event.target.files[0]) {
      img = event.target.files[0];
      imageName = event.target.files[0].name;
      imageUrl = URL.createObjectURL(img);
      imageType = event.target.files[0].type;
      setNewsState({ ...newsState, imageName, imageUrl, imageType });
    }
  };

  const handleSubmit = () => {
    if (newsState.title === '') {
      return setErrors({ ...errors, title: true });
    }
    if (!textArea || textArea === '') return setErrors({ ...errors, textArea: true });
    if (newsState.imageName !== '' && !imageFormats.includes(newsState.imageType)) {
      return console.log('Image format is not correct');
    }
    console.log('Everything OK');
  };

  return (
    <>
      <VStack spacing={4} align='stretch'>
        <Heading fontSize='2xl' mb={4}>
          Legg til nyhet
        </Heading>
        <Box>
          <FormControl id='title'>
            <FormLabel mb='8px' align='left'>
              Tittel:
            </FormLabel>
            <Input
              isInvalid={errors.title}
              placeholder='Nyhetstittel'
              size='md'
              borderRadius='md'
              onChange={(e) => setNewsState({ ...newsState, title: e.target.value })}
            />
            {errors.title && <FormHelperText align='left'>Tittel kan ikke være tom</FormHelperText>}
          </FormControl>
        </Box>
        <Box>
          <FormControl id='image'>
            <FormLabel mb='8px' align='left'>
              Bilde:
            </FormLabel>
            <Input
              isInvalid={errors.image}
              type='file'
              onChange={handleAddPicture}
              size='md'
              borderRadius='md'
            />
            {errors.image && (
              <FormHelperText align='left'>
                Må være et bilde i format: .jpg, .jpeg, .png
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl id='textArea'>
            <FormLabel mb='8px' align='left'>
              Tekst:
            </FormLabel>
            <Box border={errors.textArea ? '2px' : ''} borderRadius='0.5em' borderColor='red.300'>
              <ReactQuill modules={TextEditorToolbar} value={textArea} onChange={setTextArea} />
            </Box>
            {errors.textArea && (
              <FormHelperText align='left' color='red.300'>
                Feltet kan ikke være tomt
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Flex mt={4}>
          <Spacer />
          <ButtonGroup spacing='6'>
            <Button onClick={() => setNewsState()}>Avbryt</Button>
            <Button colorScheme='teal' onClick={handleSubmit}>
              Lagre
            </Button>
          </ButtonGroup>
        </Flex>
      </VStack>
      <Box mt={4} align='left' dangerouslySetInnerHTML={{ __html: newsState.text }} />
    </>
  );
};

export default News;
