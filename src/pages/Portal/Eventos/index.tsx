import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiTrash2, FiEdit2 } from 'react-icons/fi';

import { useAuth } from "../../../contexts/authContext";
import { useLoading } from "../../../contexts/loadingContent";
import { eventService } from "../../../services";
import { DbEvent } from "../../../types/IEvents";

import { DashboardContainer } from "../../../components/containers/DashboardContainer";
import { PortalListContainer } from "../../../components/containers/PortalListContainer";
import { Modal } from "../../../components/molecules/Modal";
import { PortalListFilter } from "../../../components/molecules/PortalListFilter";

import './styles.css';

export type EventoParams = {
  eventoId: string;
};

export const PortalEvents: React.FC = () => {
  const [events, setEvents] = useState<DbEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<DbEvent>({} as DbEvent);
  const [listItems, setListItems] = useState<DbEvent[]>([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [search, setSearch] = useState('');

  const { hideLoading, showLoading } = useLoading();
  const history = useHistory();
  const { user } = useAuth();

  const handlePressAdd = () => {
    history.push("eventos/adicionar")
  }

  const handlePressEdit = (id: string) => {
    history.push(`eventos/editar/${id}`)
  }

  const performDelete = async () => {
    setModalDelete(false);
    showLoading();

    await eventService.deleteEvent(selectedEvent.id);

    hideLoading();
  };

  const getEvents = useCallback(async (storaged?: boolean) => {
    showLoading();
    const events = await eventService.getEvents(storaged);

    setEvents(events as DbEvent[]);
    hideLoading();
  }, [hideLoading, showLoading]);

  const handleCourseDetails = (courseId: string) => {
    history.push(`evento/${courseId}`)
  }

  useEffect(() => {
    if (!user) {
      history.push("/portal");
    }
    getEvents().catch(err => console.log(err));
  }, [history, user]);

  useEffect(() => {
    if (search === '') {
      setListItems(events);
    }

    // const filtered = events.filter(event => {
    //   return event?.post.toLowerCase().includes(search.toLowerCase())
    // });

    // setListItems(filtered);
  }, [events, search]);

  return (
    <DashboardContainer hasPadding>
      <header className="portal-page_header">
        <h1 className="title">Eventos</h1>
      </header>

      <PortalListFilter
        onPressButton={handlePressAdd}
        inputValue={search}
        onChangeInput={setSearch}
        inputStyle={{ minWidth: '50%' }}
      />



    </DashboardContainer>
  );
};
