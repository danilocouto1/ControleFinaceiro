import * as styled from './style'
import { formatCurrentMonth } from '../../helpers/dataFilter';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}


export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }
    
    return (
        <styled.Container>

            <styled.MonthArea>

                <styled.MonthArrow onClick={handlePrevMonth}>⬅️</styled.MonthArrow>
                
                <styled.MonthTitle>{formatCurrentMonth(currentMonth)}</styled.MonthTitle>
                
                <styled.MonthArrow onClick={handleNextMonth}>➡️</styled.MonthArrow>
            
            </styled.MonthArea>

            <styled.ResumeArea>

            </styled.ResumeArea>

        </styled.Container>
    )
}