import * as styled from './style'
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <styled.Table>
            <thead>
                <tr>
                <styled.TableHeadColumn width={100}>Data</styled.TableHeadColumn>
                <styled.TableHeadColumn width={130}>Categoria</styled.TableHeadColumn>
                <styled.TableHeadColumn>Titulo</styled.TableHeadColumn>
                <styled.TableHeadColumn width={150}>Valor</styled.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) =>(
                    <TableItem key={index} item={item}/> 
                ))}
            </tbody>
        </styled.Table>
    )
}