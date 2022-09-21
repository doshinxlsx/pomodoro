import React, { useContext } from 'react'
import { CycleContext } from '../../context/CycleContext'
import { formatDistanceToNow } from 'date-fns'
import {
  HistoryContainer,
  HistoryList,
  HistoryTitle,
  Status,
  Table,
  TableBody,
  TableColumn,
  TableHead,
  TableHeader,
  TableRow,
} from './styles'
import enUs from 'date-fns/locale/en-US'

const History = () => {
  const { cycles } = useContext(CycleContext)

  return (
    <HistoryContainer>
      <HistoryTitle>My history</HistoryTitle>

      <HistoryList>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Task</TableHeader>
              <TableHeader>Duration</TableHeader>
              <TableHeader>Start</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {cycles.map((cycle) => {
              return (
                <TableRow key={cycle.id}>
                  <TableColumn>{cycle.task}</TableColumn>
                  <TableColumn>
                    {cycle.minutesAmount} {cycle.minutesAmount > 1 ? ' minutes' : ' minute'}
                  </TableColumn>
                  <TableColumn>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: enUs,
                    })}
                  </TableColumn>
                  <TableColumn>
                    {cycle.finishedDate && <Status statusColor='green'>Finished</Status>}

                    {cycle.interruptedDate && <Status statusColor='red'>Interrupted</Status>}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor='yellow'>In progress</Status>
                    )}
                  </TableColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </HistoryList>
    </HistoryContainer>
  )
}

export default History
