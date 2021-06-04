import React, { useState } from 'react';
import {
  Box,
  InputLeftAddon,
  InputGroup,
  Select,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
  Input,
  Tag,
  TagLabel,
  TagCloseButton,
  Stack,
  Checkbox
} from '@chakra-ui/react';
import { Days } from '../../constants/days';
import './timeInput.css';

const EditOfficeHours = () => {
  const [days, setDays] = useState([]);
  const [daysExtra, setDaysExtra] = useState('');
  const [time, setTime] = useState({ from: '17:00', to: '18:00' });
  const [showHours, setShowHours] = useState(true);
  const [place, setPlace] = useState('');

  const editData = () => {
    const newData = [];
    Object.entries(Days).forEach(([key, value]) => {
      const newObj = {
        key,
        value
      };
      newData.push(newObj);
    });
    return newData;
  };

  const handleAddDays = (e) => {
    const { value } = e.target;
    if (days.includes(value)) {
      return;
    }
    setDays([...days, value]);
  };

  const handleRemoveDay = (dayToRemove) => {
    const filtered = days.filter((day) => day !== dayToRemove);
    setDays(filtered);
  };

  const handleResetOfficeHours = () => {
    setDays([]);
    setTime({ from: '17:00', to: '18:00' });
    setShowHours(true);
    setPlace('');
  };

  return (
    <Box mt={4} border='1px' borderRadius='5px' borderColor='teal.500'>
      <Box mx={4}>
        <Stack mt={4}>
          <Checkbox
            colorScheme='teal'
            isChecked={showHours}
            onChange={(e) => setShowHours(e.target.checked)}
          >
            Vil du vise kontortider?
          </Checkbox>
          <Box pb={4} align='left'>
            {days.map((day) => (
              <Tag size='lg' variant='outline' colorScheme='teal' mr={2} key={day}>
                <TagLabel>{day}</TagLabel>
                <TagCloseButton onClick={() => handleRemoveDay(day)} />
              </Tag>
            ))}
          </Box>

          <InputGroup>
            <InputLeftAddon borderRightRadius='0'>Velg dag(er)</InputLeftAddon>
            <Select borderLeftRadius='0' onChange={(e) => handleAddDays(e)}>
              <option value='' disabled selected>
                Velg dager du har kontortid
              </option>
              {editData().map((obj) => (
                <option value={obj.value} key={obj.key}>
                  {obj.value}
                </option>
              ))}
            </Select>
          </InputGroup>

          <InputGroup mr={3}>
            <InputLeftAddon>Ekstra informasjon til dager:</InputLeftAddon>
            <Input value={daysExtra} onChange={(e) => setDaysExtra(e.target.value)} />
          </InputGroup>

          <Flex>
            <InputGroup mr={3}>
              <InputLeftAddon borderRightRadius='0'>Fra kl.</InputLeftAddon>
              <input
                type='time'
                id='appt'
                name='appt'
                value={time.from}
                required
                className='input-time'
                onChange={(e) => setTime({ ...time, from: e.target.value })}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>Til kl.</InputLeftAddon>
              <input
                type='time'
                id='appt'
                name='appt'
                value={time.to}
                required
                className='input-time'
                onChange={(e) => setTime({ ...time, to: e.target.value })}
              />
            </InputGroup>
          </Flex>

          <InputGroup mr={3}>
            <InputLeftAddon>Sted:</InputLeftAddon>
            <Input value={place} onChange={(e) => setPlace(e.target.value)} />
          </InputGroup>
        </Stack>

        <Flex my={4}>
          <Spacer />
          <ButtonGroup spacing='6'>
            <Button onClick={handleResetOfficeHours}>Nullstill</Button>
            <Button colorScheme='teal'>Lagre</Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </Box>
  );
};

export default EditOfficeHours;
