'use client';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import ControlFields from '../components/ControlFields';
import Form from '../components/Form';
import InnerBlueContainer from '../components/containers/innerLayoutContainer';
import DatePickerInput from '../components/DatePickerFields';

import { useGetPersonalQuery } from '@/store/personalApi';
const timeWorker = [
  { value: '08:00 - 20:00', label: '08:00 - 20:00' },
  { value: '09:00 - 21:00', label: '09:00 - 21:00' },
  { value: '14:00 - 02:00', label: '14:00 - 02:00' },
  { value: '18:00 - 06:00', label: '18:00 - 06:00' },
  { value: '20:00 - 08:00', label: '20:00 - 08:00' }
];

export default function Home() {
  const { data } = useGetPersonalQuery(null);

  const dataNamePersonal = data?.map((item) => item.name);

  const form = useForm({
    defaultValues: {}
  });

  return (
    <Form id='waiters' form={form}>
      <InnerBlueContainer>
        <Box sx={{ width: 0.1 }}>
          <DatePickerInput fieldName='date' fieldLabel='date' />
        </Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '600'
          }}
        >
          СМЕНА
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, width: 0.8 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 0.3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ width: 0.3 }}>
                <ControlFields fieldLabel='time' fieldName='time1' options={timeWorker} />
              </Box>
              <Box sx={{ width: 0.7 }}>
                <ControlFields
                  fieldLabel='BARMEN'
                  fieldName='waiters1'
                  options={dataNamePersonal?.map((name) => ({ value: name, label: name }))}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ width: 0.3 }}>
                <ControlFields fieldLabel='time' fieldName='time2' options={timeWorker} />
              </Box>
              <Box sx={{ width: 0.7 }}>
                <ControlFields
                  fieldLabel='WAITERS'
                  fieldName='waiters2'
                  options={dataNamePersonal?.map((name) => ({ value: name, label: name }))}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ width: 0.3 }}>
                <ControlFields fieldLabel='time' fieldName='time3' options={timeWorker} />
              </Box>
              <Box sx={{ width: 0.7 }}>
                <ControlFields
                  fieldLabel='WAITERS'
                  fieldName='waiters3'
                  options={dataNamePersonal?.map((name) => ({ value: name, label: name }))}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ width: 0.3 }}>
                <ControlFields fieldLabel='time' fieldName='time4' options={timeWorker} />
              </Box>
              <Box sx={{ width: 0.7 }}>
                <ControlFields
                  fieldLabel='WAITERS'
                  fieldName='waiters4'
                  options={dataNamePersonal?.map((name) => ({ value: name, label: name }))}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ width: 0.3 }}>
                <ControlFields fieldLabel='time' fieldName='time5' options={timeWorker} />
              </Box>
              <Box sx={{ width: 0.7 }}>
                <ControlFields
                  fieldLabel='BARMEN'
                  fieldName='waiters5'
                  options={dataNamePersonal?.map((name) => ({ value: name, label: name }))}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 0.3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ width: 0.3 }}>
                <ControlFields fieldLabel='time' fieldName='time6' options={timeWorker} />
              </Box>
              <Box sx={{ width: 0.7 }}>
                <ControlFields
                  fieldLabel='BARMEN'
                  fieldName='waiters6'
                  options={dataNamePersonal?.map((name) => ({ value: name, label: name }))}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ width: 0.3 }}>
                <ControlFields fieldLabel='time' fieldName='time7' options={timeWorker} />
              </Box>
              <Box sx={{ width: 0.7 }}>
                <ControlFields
                  fieldLabel='WAITERS'
                  fieldName='waiters7'
                  options={dataNamePersonal?.map((name) => ({ value: name, label: name }))}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ width: 0.3 }}>
                <ControlFields fieldLabel='time' fieldName='time8' options={timeWorker} />
              </Box>
              <Box sx={{ width: 0.7 }}>
                <ControlFields
                  fieldLabel='WAITERS'
                  fieldName='waiters8'
                  options={dataNamePersonal?.map((name) => ({ value: name, label: name }))}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ width: 0.3 }}>
                <ControlFields fieldLabel='time' fieldName='time10' options={timeWorker} />
              </Box>
              <Box sx={{ width: 0.7 }}>
                <ControlFields
                  fieldLabel='WAITERS'
                  fieldName='waiters10'
                  options={dataNamePersonal?.map((name) => ({ value: name, label: name }))}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ width: 0.3 }}>
                <ControlFields fieldLabel='time' fieldName='time11' options={timeWorker} />
              </Box>
              <Box sx={{ width: 0.7 }}>
                <ControlFields
                  fieldLabel='WAITERS'
                  fieldName='waiters11'
                  options={dataNamePersonal?.map((name) => ({ value: name, label: name }))}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </InnerBlueContainer>
    </Form>
  );
}
