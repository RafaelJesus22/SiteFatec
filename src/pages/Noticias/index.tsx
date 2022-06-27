import React, { Fragment, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { FormSelect, Option } from '../../components/atoms/FormSelect';
import { LabelText } from '../../components/atoms/Typography/LabelText';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { Feed } from '../../components/containers/Feed';
import { EventCard } from '../../components/molecules/EventCard';
import { useLoading } from '../../contexts/loadingContent';
import { eventService } from '../../services';
import { cursosService } from '../../services';
import { DbEvent } from '../../types/IEvents';

export interface NewsDetailParams {
  noticiaId: string;
}

export const Noticias: React.FC = () => {
  const [events, setEvents] = useState<DbEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<DbEvent[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option>({} as Option);
  const { hideLoading, showLoading } = useLoading();

  const defaultOption: Option = {
    value: '',
    label: 'Todos',
  };

  const getEvents = useCallback(async () => {
    const events = await eventService.getEvents(true);

    return events as DbEvent[];
  }, []);

  const getOptions = async (): Promise<Option[]> => {
    const classes = await cursosService.getCourses();

    const options = [defaultOption];

    classes.forEach(classe => {
      options.push({
        label: classe.name,
        value: classe.id,
      })
    });

    return options;
  };

  const mount = async () => {
    const [fecthedEvents, fetchedOptions] = await Promise.all([
      getEvents(),
      getOptions(),
    ]);

    setEvents(fecthedEvents);
    setOptions(fetchedOptions);
  };

  useLayoutEffect(() => {
    showLoading();
    setSelectedOption(defaultOption);
    mount()
      .finally(() => {
        hideLoading();
      });
  }, []);

  useEffect(() => {
    console.log(selectedOption, defaultOption, (selectedOption.label === defaultOption.label));
    if (selectedOption.label === defaultOption.label) {
      return setFilteredEvents(events);
    }

    const filteredEvents = events.filter(event => {
      return event.courseParentId === selectedOption.value;
    });

    setFilteredEvents(filteredEvents);
  }, [selectedOption]);

  const handelEmpty = (events: DbEvent[]) => {
    if (events.length === 0) {
      return (
        <LabelText size="large" bold>
          Nenhum evento encontrado
        </LabelText>
      );
    }

    return null;
  };

  return (
    <Container>
      <Content title={'Notícias'} isOnTop>
        <Feed>
          <FormSelect
            name="Filtrar notícias por curso"
            onChange={setSelectedOption}
            options={options}
            value={selectedOption}
            style={{ marginTop: '2rem', marginBottom: '1rem' }}
          />
          {selectedOption.label === defaultOption.label ?
            (
              <Fragment>
                {events?.map(event => (
                  <EventCard
                    key={event.id}
                    {...event}
                  />
                ))}
                {handelEmpty(events)}
              </Fragment>
            ) :
            (
              <Fragment>
                {filteredEvents?.map(event => (
                  <EventCard
                    key={event.id}
                    {...event}
                  />
                ))}
                {handelEmpty(filteredEvents)}
              </Fragment>
            )
          }
        </Feed>
      </Content>
    </Container>
  );
};
