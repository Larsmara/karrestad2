import React, { useState, useEffect } from 'react';
import { Text, Textarea, ButtonGroup, IconButton, Tooltip, Flex } from '@chakra-ui/react';
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';

const EditableTextArea = ({ isExpanded, onChange, onSave, onDelete, text }) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!isExpanded) setEditing(false);
    return () => setEditing(false);
  }, [isExpanded]);

  function handleSave() {
    if (!onSave) return;
  }

  function handleChange(e) {
    if (!onChange) return;
  }

  function handleDelete() {
    if (!onDelete) return;
    onDelete();
  }

  if (editing) {
    return (
      <>
        <Textarea value={text} onChange={handleChange} h='300px' />
        <ButtonGroup justifyContent='center' size='sm'>
          <Tooltip hasArrow label='Lagre' bg='teal.500'>
            <IconButton icon={<CheckIcon />} onClick={handleSave} colorScheme='teal' />
          </Tooltip>
          <Tooltip hasArrow label='Avbryt' bg='gray.500'>
            <IconButton icon={<CloseIcon />} onClick={() => setEditing(false)} />
          </Tooltip>
          <Tooltip hasArrow label='Slett regel' bg='red.500'>
            <IconButton icon={<DeleteIcon />} colorScheme='red' onClick={handleDelete} />
          </Tooltip>
        </ButtonGroup>
      </>
    );
  }
  return (
    <>
      <Tooltip hasArrow label='Trykk på teksten for å editere.' bg='gray.500' placement='auto'>
        <Text align='left' onClick={() => setEditing(true)}>
          {text}
        </Text>
      </Tooltip>
      <Flex justifyContent='center'>
        <IconButton
          size='sm'
          icon={<EditIcon />}
          colorScheme='teal'
          onClick={() => setEditing(true)}
        />
      </Flex>
    </>
  );
};

export default EditableTextArea;
