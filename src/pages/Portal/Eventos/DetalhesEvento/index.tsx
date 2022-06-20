import { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { colors } from "../../../../config/styles";
import { useLoading } from "../../../../contexts/loadingContent";
import { eventService } from "../../../../services";
import { firebaseTimestampToDate } from "../../../../utils/strings";

import { FormButton } from "../../../../components/atoms/PortalButton";
import { DashboardContainer } from "../../../../components/containers/DashboardContainer";
import { PortalContent } from "../../../../components/containers/PortalContent";
import { Modal } from "../../../../components/molecules/Modal";

import { DbEvent } from "../../../../types/IEvents";
import { EventoParams } from "..";
import './styles.css';

export const EventDetails: React.FC = () => {
  const [event, setEvent] = useState<DbEvent>();
  const [modalDelete, setModalDelete] = useState(false);
  const { eventoId } = useParams<EventoParams>();
  const { showLoading, hideLoading } = useLoading();
  const history = useHistory();

  const performDelete = async () => {
    showLoading();
    await eventService.deleteEvent(eventoId);
    await eventService.getEvents(true);
    hideLoading();
    history.goBack();
  };

  const handleEdit = () => {
    history.push('/portal/dashboard/eventos/editar/' + eventoId);
  };

  useEffect(() => {
    async function load() {
      showLoading();
      const event = await eventService.getEventById(eventoId);
      setEvent(event as DbEvent);
      hideLoading();
    }
    load();
  }, [eventoId]);

  return (
    <DashboardContainer hasPadding>
      <PortalContent showsBack>
        <div className="event-details-container">
          {event && (
            <Fragment>
              <div className="detalhes-noticia">
                {event?.imgURl && (
                  <img
                    src={event?.imgURl}
                    alt={event?.title}
                  />
                )}
                <div className="detalhes-noticia-text">
                  <h1>{event?.title}</h1>
                  <span>
                    criado em {firebaseTimestampToDate(event?.createdAt)}
                  </span>
                  {event?.edited && (
                    <span>
                      atualizado em {firebaseTimestampToDate(event?.updatedAt)}
                    </span>
                  )}
                  <p>{event?.post}</p>
                </div>
              </div>

              <div className="buttons">
                <FormButton
                  title="Editar"
                  onClick={handleEdit}
                  color={colors.secondaryTextColor}
                />
                <FormButton
                  title="Excluir"
                  onClick={() => setModalDelete(true)}
                />
              </div>
            </Fragment>
          )}

          {!event && (
            <h3>Evento não encontrado</h3>
          )}

          <Modal
            visible={modalDelete}
            title="Excluir evento"
            text="Tem certeza que deseja excluir este evento?"
            onClick={performDelete}
            onCancel={() => setModalDelete(false)}
            confirmButtonText="Excluir"
          />
        </div>
      </PortalContent>
    </DashboardContainer >
  );
};
