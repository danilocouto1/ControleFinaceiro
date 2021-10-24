import * as styled from './style'
import { Item } from '../../types/Item'
import { categories } from '../../data/categories'
import { formatDate } from '../../helpers/dataFilter'
type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <styled.TableLine>
            <styled.TableColumn>{formatDate(item.date)}</styled.TableColumn>
            <styled.TableColumn>
                <styled.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </styled.Category>
            </styled.TableColumn>
            <styled.TableColumn>{item.title}</styled.TableColumn>
            <styled.TableColumn>
                <styled.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </styled.Value>
            </styled.TableColumn>
        </styled.TableLine>
    );
}